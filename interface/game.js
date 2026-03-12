/* ================================================
   game.js — 게임 로직 & 시나리오 진행
================================================ */

const Game = (() => {

  // 모든 챕터 아이템 통합 (챕터 추가 시 여기에 스프레드)
  const ITEMS = {
    ...ITEMS_PROLOGUE,
  };

  const state = {
    playerName:   '',
    playerGender: '',
    affinity: { ...AFFINITY_INIT },
    unlockedChars: [...AFFINITY_UNLOCKED_INIT],
    scriptIndex: 0,
    flags: {},
    dead: [],
    items: [],
  };

  let currentScript = [];
  let waiting = false;
  let typing  = false;

  function giveItem(key) {
    if (!ITEMS[key]) return;
    if (!state.items.includes(key)) {
      state.items.push(key);
      UI.renderItemPanel(state.items, ITEMS);
    }
  }

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
      case 'lore': {
        const it = ITEMS[node.key];
        if (it) {
          typing = true;
          UI.addItemLore(it.name, it.desc, () => { typing = false; });
        } else {
          step();
        }
        break;
      }
      case 'item':
        giveItem(node.key);
        step();
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
    if (choice.items) {
      choice.items.forEach(k => giveItem(k));
    }
    if (choice.flag) state.flags[choice.flag] = true;
    typing = true;
    UI.addLine('player', choice.text, () => { typing = false; });
  }

  function init() {
    UI.showScreen('title-screen');

    document.getElementById('btn-start').onclick = () => UI.showScreen('gender-screen');

    document.querySelectorAll('.gender-btn').forEach(btn => {
      btn.onclick = () => {
        state.playerGender = btn.dataset.gender;
        state.playerName   = '아이';
        UI.showScreen('game-screen');
        UI.renderAffinityBar(state.affinity, state.unlockedChars);
        runScript(SCRIPT_PROLOGUE);
      };
    });

    document.getElementById('btn-next').onclick = () => step();

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
  }

  return { init, state, onChoice, runScript, unlockAffinity };
})();

window.addEventListener('DOMContentLoaded', () => Game.init());
