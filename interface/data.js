/* ================================================
   data.js — 캐릭터 정보 & 호감도 설정
================================================ */

const CHARACTERS = {
  gabriel:  { nameKo: '가브리엘', cls: 'gabriel',   bracket: true  },
  uriel:    { nameKo: '우리엘',   cls: 'uriel',     bracket: true  },
  raphael:  { nameKo: '라파엘',   cls: 'raphael',   bracket: true  },
  raguel:   { nameKo: '라구엘',   cls: 'raguel',    bracket: true  },
  jophiel:  { nameKo: '요피엘',   cls: 'jophiel',   bracket: true  },
  michael:  { nameKo: '미카엘',   cls: 'michael',   bracket: true  },
  metatron: { nameKo: '메타트론', cls: 'metatron',  bracket: true  },
  player:   { nameKo: '',         cls: 'player',    bracket: false },
  narration:{ nameKo: '',         cls: 'narration', bracket: false },
};

const AFFINITY_INIT = {
  gabriel: 5, uriel: 3, raphael: 3,
  raguel: 2,  jophiel: 1, michael: 0, metatron: 0,
};

const AFFINITY_MAX = 50;
const AFFINITY_MIN = 0;

// 개인 시나리오 트리거 임계값
const AFFINITY_TRIGGERS = [15, 30, 45];
//

// 처음부터 호감도 바에 보이는 캐릭터 (만나는 순서대로 추가)
// game.js에서 unlockAffinity('키') 호출 시 추가됨
const AFFINITY_UNLOCKED_INIT = ['gabriel'];
