/* ================================================
   ui.js — 화면 렌더링
================================================ */

// 글자 하나씩 타이핑 출력
function typeText(el, text, onDone) {
  let i = 0;
  const cursor = document.createElement('span');
  cursor.className = 'cursor';
  el.appendChild(cursor);
  const PAUSE = { '.':260, '!':260, '?':260, ',':100, '…':380 };
  function next() {
    if (i >= text.length) { cursor.remove(); if (onDone) onDone(); return; }
    const ch = text[i++];
    cursor.before(document.createTextNode(ch));
    document.getElementById('dialogue-log').scrollTop = 9999;
    setTimeout(next, PAUSE[ch] ?? 25);
  }
  next();
}

const UI = (() => {

  function showScreen(id) {
    ['title-screen', 'gender-screen', 'game-screen'].forEach(s =>
      document.getElementById(s).classList.toggle('hidden', s !== id)
    );
  }

  function setScene(text) {
    document.getElementById('scene-desc').textContent = `— ${text} —`;
  }

  function addLine(speakerKey, text, onDone) {
    const log  = document.getElementById('dialogue-log');
    const char = CHARACTERS[speakerKey];
    const wrap = document.createElement('div');
    wrap.className = 'dl' + (speakerKey === 'narration' ? ' narration' : '');

    // {{name}} 플레이스홀더 치환
    text = text.replace('{{name}}', `그래, ${Game.state.playerName} 어때?`);

    // 화자 레이블
    if (speakerKey !== 'narration') {
      const spEl = document.createElement('div');
      spEl.className = `spk ${char.cls}`;
      if (char.bracket) {
        spEl.textContent = char.nameKo;
      } else if (speakerKey === 'player') {
        spEl.textContent = Game.state.playerName;
      }
      wrap.appendChild(spEl);
    }

    // 대사 본문 (괄호 포함)
    const txtEl = document.createElement('div');
    txtEl.className = 'txt';
    wrap.appendChild(txtEl);
    log.appendChild(wrap);
    log.scrollTop = 9999;

    let displayText = text;
    if (char && char.bracket) {
      displayText = `[${text}]`;
    } else if (speakerKey === 'player') {
      displayText = `"${text}"`;
    }
    typeText(txtEl, displayText, onDone);
  }

  function clearLog() {
    document.getElementById('dialogue-log').innerHTML = '';
  }

  function showChoices(choices) {
    const box = document.getElementById('choices');
    box.innerHTML = '';
    box.classList.remove('hidden');
    document.getElementById('btn-next').classList.add('invisible');
    choices.forEach((c, i) => {
      const btn = document.createElement('button');
      btn.className = 'choice-btn';
      btn.textContent = c.text;
      btn.onclick = () => {
        box.classList.add('hidden');
        document.getElementById('btn-next').classList.remove('invisible');
        Game.onChoice(i, c);
      };
      box.appendChild(btn);
    });
  }

  // 이름 입력 UI
  function showNameInput(onConfirm) {
    const log = document.getElementById('dialogue-log');

    const box = document.createElement('div');
    box.id = 'name-input-box';
    box.innerHTML = `
      <div class="name-input-label">이름을 지어주세요</div>
      <div class="name-input-row">
        <input id="name-input-field" type="text" maxlength="10" placeholder="이름" autocomplete="off" spellcheck="false" />
        <button id="name-input-confirm">확인</button>
      </div>
    `;
    log.appendChild(box);
    log.scrollTop = 9999;

    const field = box.querySelector('#name-input-field');
    const confirmBtn = box.querySelector('#name-input-confirm');

    field.focus();

    const confirm = () => {
      const name = field.value.trim();
      if (!name) return;
      box.remove();
      onConfirm(name);
    };

    confirmBtn.onclick = confirm;
    field.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') confirm();
    });
  }

  let notifTimer = null;
  function showAffinityNotif(charKey, delta) {
    const char  = CHARACTERS[charKey];
    const notif = document.getElementById('aff-notif');
    const isUp  = delta > 0;
    const mag   = Math.abs(delta) >= 2 ? '크게' : '조금';
    const dir   = isUp ? '올랐습니다' : '하락했습니다';
    const sign  = isUp ? `+${delta}` : `${delta}`;
    notif.innerHTML = `${char.nameKo} 호감도가 ${mag} ${dir}<span class="nv ${isUp?'up':'down'}">${sign}</span>`;
    notif.classList.remove('hidden');
    requestAnimationFrame(() => notif.classList.add('show'));
    if (notifTimer) clearTimeout(notifTimer);
    notifTimer = setTimeout(() => {
      notif.classList.remove('show');
      setTimeout(() => notif.classList.add('hidden'), 300);
    }, 2500);
  }

  function renderAffinityBar(affinity, unlocked) {
    const bar = document.getElementById('affinity-bar');
    bar.innerHTML = '';
    (unlocked || Object.keys(affinity)).forEach(k => {
      const c = CHARACTERS[k];
      if (!c || !c.nameKo) return;
      const v = affinity[k] ?? 0;
      const el = document.createElement('div');
      el.className = `aff-item ${k}`;
      el.innerHTML = `<span class="an">${c.nameKo}</span><span class="av">${v}</span>`;
      bar.appendChild(el);
    });
  }

  return { showScreen, setScene, addLine, clearLog, showChoices, showNameInput, showAffinityNotif, renderAffinityBar };
})();
