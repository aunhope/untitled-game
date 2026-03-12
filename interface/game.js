/* ================================================
   game.js — 게임 로직 & 시나리오 진행
================================================ */

const Game = (() => {

  const state = {
    playerName:   '',
    playerGender: '',
    affinity: { ...AFFINITY_INIT },
    unlockedChars: [...AFFINITY_UNLOCKED_INIT],
    scriptIndex: 0,
    flags: {},
    dead: [],
  };

  let currentScript = [];
  let waiting = false;
  let typing  = false;

  function unlockAffinity(charKey) {
    if (!state.unlockedChars.includes(charKey)) {
      state.unlockedChars.push(charKey);
      UI.renderAffinityBar(state.affinity, state.unlockedChars);
    }
  }

  function changeAffinity(charKey, delta) {
    if (!(charKey in state.affinity)) return;
    state.affinity[charKey] = Math.min(
      AFFINITY_MAX, Math.max(AFFINITY_MIN, state.affinity[charKey] + delta)
    );
    UI.showAffinityNotif(charKey, delta);
    UI.renderAffinityBar(state.affinity, state.unlockedChars);
  }

  function runScript(script) {
    currentScript = script;
    state.scriptIndex = 0;
    UI.clearLog();
    step();
  }

  function step() {
    if (waiting || typing) return;
    if (state.scriptIndex >= currentScript.length) return;
    const node = currentScript[state.scriptIndex++];

    switch (node.type) {
      case 'scene':
        UI.setScene(node.text);
        step();
        break;
      case 'line':
        typing = true;
        UI.addLine(node.speaker, node.text, () => { typing = false; });
        break;
      case 'choice':
        waiting = true;
        UI.showChoices(node.choices);
        break;
      case 'unlock':
        unlockAffinity(node.char);
        step();
        break;
      case 'input':
        waiting = true;
        UI.showNameInput((name) => {
          state.playerName = name || '아이';
          waiting = false;
          step();
        });
        break;
      case 'end':
        typing = true;
        UI.addLine('narration', '— 계속 —', () => { typing = false; });
        break;
      default:
        step();
    }
  }

  function onChoice(idx, choice) {
    waiting = false;
    if (choice.affinity) {
      Object.entries(choice.affinity).forEach(([k, d]) => changeAffinity(k, d));
    }
    if (choice.flag) state.flags[choice.flag] = true;
    typing = true;
    UI.addLine('player', choice.text, () => { typing = false; });
  }

  function saveGame() {
    const save = {
      playerName:    state.playerName,
      playerGender:  state.playerGender,
      affinity:      { ...state.affinity },
      flags:         { ...state.flags },
      unlockedChars: [...state.unlockedChars],
      scriptIndex:   state.scriptIndex,
    };
    localStorage.setItem('save', JSON.stringify(save));
    UI.showSaveNotif();
  }

  function loadGame() {
    const raw = localStorage.getItem('save');
    if (!raw) return;
    const save = JSON.parse(raw);
    state.playerName   = save.playerName;
    state.playerGender = save.playerGender;
    Object.assign(state.affinity, save.affinity);
    Object.assign(state.flags, save.flags);
    state.unlockedChars = save.unlockedChars;
    currentScript = SCRIPT_PROLOGUE;
    state.scriptIndex = save.scriptIndex;
    waiting = false;
    typing  = false;
    UI.showScreen('game-screen');
    UI.clearLog();
    UI.renderAffinityBar(state.affinity, state.unlockedChars);
    step();
  }

  function resetGame() {
    localStorage.removeItem('save');
    state.playerName    = '';
    state.playerGender  = '';
    state.affinity      = { ...AFFINITY_INIT };
    state.unlockedChars = [...AFFINITY_UNLOCKED_INIT];
    state.scriptIndex   = 0;
    state.flags         = {};
    state.dead          = [];
    waiting = false;
    typing  = false;
    document.getElementById('btn-continue').classList.add('hidden');
    UI.showScreen('gender-screen');
  }

  function init() {
    UI.showScreen('title-screen');

    // 저장 데이터 있으면 계속하기 버튼 표시
    if (localStorage.getItem('save')) {
      document.getElementById('btn-continue').classList.remove('hidden');
    }

    document.getElementById('btn-continue').onclick = () => loadGame();
    document.getElementById('btn-start').onclick = () => resetGame();

    document.querySelectorAll('.gender-btn').forEach(btn => {
      btn.onclick = () => {
        state.playerGender = btn.dataset.gender;
        state.playerName   = '아이';
        UI.showScreen('game-screen');
        UI.renderAffinityBar(state.affinity, state.unlockedChars);
        runScript(SCRIPT_PROLOGUE);
      };
    });

    // 저장 버튼
    document.getElementById('btn-save').onclick = () => saveGame();

    // 아이템 패널
    const itemPanel   = document.getElementById('item-panel');
    const itemOverlay = document.getElementById('item-overlay');
    const closeItem = () => {
      itemPanel.classList.remove('open');
      setTimeout(() => {
        itemPanel.classList.add('hidden');
        itemOverlay.classList.add('hidden');
      }, 300);
    };
    document.getElementById('btn-item').onclick = () => {
      itemPanel.classList.remove('hidden');
      itemOverlay.classList.remove('hidden');
      requestAnimationFrame(() => itemPanel.classList.add('open'));
    };
    document.getElementById('btn-item-close').onclick = closeItem;
    itemOverlay.onclick = closeItem;

    document.getElementById('game-screen').addEventListener('click', (e) => {
      if (e.target.closest('#choices') || e.target.closest('#bottom-bar') || e.target.closest('#scene-bar') || e.target.closest('#name-input-box')) return;
      step();
    });

    document.addEventListener('keydown', (e) => {
      if (e.code === 'Space') {
        e.preventDefault();
        step();
      }
    });
  }

  return { init, state, onChoice, runScript, unlockAffinity };
})();

window.addEventListener('DOMContentLoaded', () => Game.init());
