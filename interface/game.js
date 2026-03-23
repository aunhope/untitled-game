/* ================================================
   game.js — 게임 로직 & 시나리오 진행
================================================ */

const Game = (() => {

  const ITEMS = { ...ITEMS_PROLOGUE };
  const SCRIPTS = {};

  const state = {
    playerName:   '',
    playerGender: 'f',
    affinity: { ...AFFINITY_INIT },
    unlockedChars: [...AFFINITY_UNLOCKED_INIT],
    scriptIndex: 0,
    flags: {},
    dead: [],
    items: [],
    coin: 0,
    stats: { ...STATS_INIT },
  };

  let currentScript = [];
  let waiting = false;
  let typing  = false;

  function registerScript(key, script) {
    SCRIPTS[key] = script;
  }

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

  function runScript(script, clearLog = true) {
    currentScript = script;
    state.scriptIndex = 0;
    if (clearLog) UI.clearLog();
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
      case 'coin':
        state.coin += node.amount;
        StatUI.renderStatPanel();
        step();
        break;
      case 'stat':
        state.stats[node.key] = Math.min(STAT_MAX, (state.stats[node.key] ?? 0) + node.delta);
        StatUI.renderStatPanel();
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
      case 'next_chapter':
        if (SCRIPTS[node.key]) runScript(SCRIPTS[node.key]);
        break;
      default:
        step();
    }
  }

  function advance() {
    if (waiting) return;
    if (typing) {
      skipTyping = true;
      return;
    }
    step();
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
    UI.addLine('player', choice.text, () => {
      typing = false;
      if (choice.next && SCRIPTS[choice.next]) {
        runScript(SCRIPTS[choice.next], choice.clearLog !== false);
      } else {
        step();
      }
    });
  }

  function getStatCost(cur) {
    return cur >= STAT_COST_THRESHOLD ? STAT_BASE_COST * 10 : STAT_BASE_COST;
  }

  function upgradeStat(key) {
    const cur  = state.stats[key] ?? 0;
    const cost = getStatCost(cur);
    if (cur >= STAT_MAX || state.coin < cost) return;
    state.coin -= cost;
    state.stats[key] = cur + 1;
    StatUI.renderStatPanel();
  }

  function checkStatRequire(require) {
    if (!require) return true;
    return Object.entries(require).every(([k, v]) => (state.stats[k] ?? 0) >= v);
  }

  function init() {
    registerScript('chapter1',      SCRIPT_CHAPTER1);
    registerScript('ch1_gabriel_a', SCRIPT_CH1_GABRIEL_A);
    registerScript('ch1_gabriel_b', SCRIPT_CH1_GABRIEL_B);
    registerScript('ch1_gabriel_c', SCRIPT_CH1_GABRIEL_C);
    registerScript('ch1_gabriel_d', SCRIPT_CH1_GABRIEL_D);
    registerScript('ch1_accept', SCRIPT_CH1_ACCEPT);

    UI.showScreen('title-screen');

    document.getElementById('btn-start').onclick = () => {
      state.playerName = '아이';
      UI.showScreen('game-screen');
      UI.renderAffinityBar(state.affinity, state.unlockedChars);
      runScript(SCRIPT_PROLOGUE);
    };

    document.getElementById('btn-next').onclick = () => advance();

    const sidePanel    = document.getElementById('side-panel');
    const panelOverlay = document.getElementById('panel-overlay');

    const openPanel = () => {
      sidePanel.classList.remove('hidden');
      panelOverlay.classList.remove('hidden');
      requestAnimationFrame(() => sidePanel.classList.add('open'));
      StatUI.renderStatPanel();
      UI.renderItemPanel(state.items, ITEMS);
    };
    const closePanel = () => {
      sidePanel.classList.remove('open');
      setTimeout(() => {
        sidePanel.classList.add('hidden');
        panelOverlay.classList.add('hidden');
      }, 300);
    };

    document.getElementById('btn-panel').onclick = openPanel;
    document.getElementById('btn-panel-close').onclick = closePanel;
    panelOverlay.onclick = closePanel;

    document.getElementById('item-popup-overlay').onclick = UI.hideItemPopup;

    document.getElementById('game-screen').addEventListener('click', (e) => {
      if (e.target.closest('#choices') || e.target.closest('#bottom-bar') ||
          e.target.closest('#scene-bar') || e.target.closest('#name-input-box')) return;
      advance();
    });

    document.addEventListener('keydown', (e) => {
      if (e.code === 'Space') {
        e.preventDefault();
        advance();
      }
    });
  }

  return { init, state, onChoice, runScript, registerScript, unlockAffinity, upgradeStat, checkStatRequire };
})();

window.addEventListener('DOMContentLoaded', () => Game.init());
