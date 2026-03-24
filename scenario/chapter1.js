/* ================================================
   chapter1.js — 챕터 1 시나리오 (공통 오프닝)
================================================ */
const SCRIPT_CHAPTER1 = [

  // ── 도입부 나레이션 ──
  { type: 'scene', text: '에덴' },
   // ── 생일 파티 ──
  { type: 'scene', text: '에덴 — 연회실' },

  { type: 'line', speaker: 'narration', text: '문을 여는 순간, 소리가 쏟아진다.' },
  { type: 'line', speaker: 'narration', text: '웃음소리, 언쟁 소리, 뭔가 쨍그랑 깨지는 소리.' },
  { type: 'line', speaker: 'narration', text: '에덴의 대천사가 전부 한 자리에 모이면 이렇게 된다는 걸, 나는 경험으로 알고 있다.' },

  { type: 'line', speaker: 'uriel',    text: '야야야 그래서 내가 맞다고!!' },
  { type: 'line', speaker: 'michael',  text: '근거가 없어. 직관은 논리가 아니야.' },
  { type: 'line', speaker: 'uriel',    text: '직관이 근거라고!!' },
  { type: 'line', speaker: 'narration', text: '테이블 한쪽에서 우리엘 언니와 미카엘님이 또 붙어 있다. 주제가 뭔지는 모르겠다. 알 필요도 없다. 어차피 결론 없이 끝날 테니까.' },
  { type: 'line', speaker: 'narration', text: '그 옆에서 라파엘님이 잔을 기울이며 둘을 번갈아 본다. 저분은 저게 목적이다.' },

  { type: 'line', speaker: 'jophiel',  text: '우리엘. 테이블.' },
  { type: 'line', speaker: 'uriel',    text: '안 쳤거든?!' },
  { type: 'line', speaker: 'jophiel',  text: '시끄럽다.' },
  { type: 'line', speaker: 'narration', text: '요피엘님이 팔짱을 낀 채 한 마디 던지고 시선을 거둔다. 파티가 끝나는 순간 바로 일어설 것 같은 얼굴이다.' },

  { type: 'line', speaker: 'raguel',   text: '저, 저기… 음식 식기 전에 시작하는 게 좋을 것 같아요……' },
  { type: 'line', speaker: 'narration', text: '라구엘님이 조심스럽게 끼어들었다가 아무도 듣지 않자 어깨를 축 내린다. 불쌍하다.' },
  { type: 'line', speaker: 'narration', text: '그 옆에서 엄마가 케이크에 초를 꽂고 있다. 하나, 둘, 셋……' },
  { type: 'line', speaker: 'narration', text: '열다섯 개.' },
  { type: 'line', speaker: 'narration', text: '그걸 세고 나서야 문 앞에 서 있는 내가 보였는지, 엄마가 손을 흔든다.' },
  { type: 'line', speaker: 'gabriel',  text: '왔어? 어서 와.' },

  { type: 'line', speaker: 'narration', text: '그 말에 시선이 일제히 쏠린다.' },
  { type: 'line', speaker: 'uriel',    text: '오! 왔다! 생일 축하해——!!' },
  { type: 'line', speaker: 'narration', text: '언니가 팔을 번쩍 들고 소리친다. 미카엘님이 그 소리에 이쪽을 흘낏 본다. 그리고 바로 시선이 엄마한테로 넘어간다. 자연스럽게, 아무렇지도 않게.' },
  { type: 'line', speaker: 'narration', text: '라파엘님이 그 광경을 잔 너머로 바라본다. 말이 없다. 다 보고 있다는 느낌만 난다.' },
  { type: 'line', speaker: 'raphael',  text: '생일 축하함.' },
  { type: 'line', speaker: 'jophiel',  text: '축하한다.' },
  { type: 'line', speaker: 'raguel',   text: '생일 축하해요!! 얼른 앉아요, 음식 식잖아요!!' },
  { type: 'line', speaker: 'narration', text: '라구엘님만 유일하게 진심이 느껴지는 얼굴이다.' },

  { type: 'line', speaker: 'narration', text: '구석에서 서기관님이 잔을 들어 보인다. 온화한 미소. 늘 그 미소다.' },
  { type: 'line', speaker: 'metatron', text: '생일 축하합니다, {{name}}이/가. 잘 자라줬군요.' },
  { type: 'line', speaker: 'narration', text: '왠지 그 말이 단순한 축하로 들리지 않는 건 기분 탓일까.' },
  { type: 'line', speaker: 'narration', text: '서기관님은 항상 저렇다. 친절한데 어딘가 계산이 깔린 것 같은 느낌. 아직 정확히 뭔지는 모르겠다.' },

  { type: 'line', speaker: 'narration', text: '엄마가 초에 불을 붙인다.' },
  { type: 'line', speaker: 'gabriel',  text: '자, 불어봐.' },
  { type: 'line', speaker: 'uriel',    text: '소원 빌어!! 크게 빌어야 이루어져!!' },
  { type: 'line', speaker: 'jophiel',  text: '소원이나 빌어라.' },
  { type: 'line', speaker: 'uriel',    text: '그게 그 말이잖아?!' },
  { type: 'line', speaker: 'raguel',   text: '얼른요, 얼른!! 초 녹아요!!' },
  { type: 'line', speaker: 'narration', text: '또 시끄러워졌다. 나는 그 틈에 눈을 감는다.' },
  { type: 'line', speaker: 'narration', text: '소원이라.' },
  { type: 'line', speaker: 'narration', text: '딱히 떠오르는 게 없다. 지금 이 자리가, 이 혼돈이, 나쁘지 않아서.' },
  { type: 'line', speaker: 'narration', text: '후.' },
  { type: 'line', speaker: 'narration', text: '초가 꺼진다.' },
  { type: 'line', speaker: 'uriel',    text: '오오——!!' },
  { type: 'line', speaker: 'raguel',   text: '잘했어요!!' },
  { type: 'line', speaker: 'narration', text: '박수 소리가 터진다. 요피엘님은 두 번, 짧게 손뼉을 친다.' },
  { type: 'line', speaker: 'narration', text: '미카엘님은 박수는 치지 않는다. 대신 잔을 들어 엄마 쪽을 향한다. 축하가 누구한테 향하는 건지 뻔하다.' },
  { type: 'line', speaker: 'narration', text: '라파엘님은 그 모습을 보더니 조용히 잔을 기울인다. 표정이 없는데 어딘가 즐거워 보인다.' },
  { type: 'line', speaker: 'gabriel',  text: '자, 먹자.' },
  { type: 'line', speaker: 'uriel',    text: '드디어!!' },
  { type: 'line', speaker: 'narration', text: '그 한 마디에 다들 일제히 테이블로 달려든다. 요피엘님만 천천히 자리에 앉는다.' },
  { type: 'line', speaker: 'narration', text: '혼돈이 다시 시작됐다.' },
  { type: 'line', speaker: 'narration', text: '근데 이상하게, 나쁘지 않다.' },
  { type: 'line', speaker: 'narration', text: '열다섯 살. 에덴에서의 열다섯 번째 생일이다.' },
  { type: 'line', speaker: 'narration', text: '나는 에덴에서 자랐다.' },
  { type: 'line', speaker: 'narration', text: '그리고 엄마는 가브리엘이었다.' },
  { type: 'line', speaker: 'narration', text: '에덴은 조용한 곳이다.' },
  { type: 'line', speaker: 'narration', text: '엄밀히는, 조용해야 하는 곳이다.' },
  { type: 'line', speaker: 'narration', text: '위계가 공기처럼 깔려 있고, 말 한마디에도 계급이 묻어나는 곳.' },
  { type: 'line', speaker: 'narration', text: '대천사들은 그걸 숨결처럼 자연스럽게 여겼다. 처음부터 그랬으니까.' },
  { type: 'line', speaker: 'narration', text: '나는 그 \'처음\'이 없었다.' },
  { type: 'line', speaker: 'narration', text: '에덴에 온 지 백 년도 채 되지 않았다.' },
  { type: 'line', speaker: 'narration', text: '천사들의 기준으로는 갓 눈을 뜬 것이나 다름없는 나이.' },
  { type: 'line', speaker: 'narration', text: '계급도 말단. 이름 앞에 붙는 직함 같은 건 아직 없다.' },
  { type: 'line', speaker: 'narration', text: '그나마 가브리엘의 딸이라는 게 있으니까.' },
  { type: 'line', speaker: 'narration', text: '덕분에 대천사들이 나를 그냥 아이 취급해준다.' },
  { type: 'line', speaker: 'narration', text: '그게 아니었으면 눈도 마주치기 어려운 사이들인데.' },
  { type: 'line', speaker: 'narration', text: '엄마는 그런 나를 보고 늘 웃었다. 느슨하게.' },
  { type: 'line', speaker: 'narration', text: '규칙을 가르쳐주면서도 어기면 눈을 감아줬고,' },
  { type: 'line', speaker: 'narration', text: '혼을 내다가도 결국 안아줬다.' },
  { type: 'line', speaker: 'narration', text: '덕분에 나는 에덴이 생각보다 말랑한 곳인 줄 알았다.' },
  { type: 'line', speaker: 'narration', text: '…틀렸다.' },
  { type: 'line', speaker: 'narration', text: '에덴이 말랑한 게 아니라, 대천사들이 제멋대로인 거였다.' },
  { type: 'line', speaker: 'narration', text: '원칙은 엄격한데 성좌들이 엉망이랄까.' },
  { type: 'line', speaker: 'narration', text: '하루에 사고 하나 없으면 오히려 무슨 일이 생긴 날이다.' },
  { type: 'line', speaker: 'narration', text: '우리엘 언니는 나보다 수만 살이 많은 대천사다.' },
  { type: 'line', speaker: 'narration', text: '근데 금지구역 표지판을 보면 왜인지 나보다 먼저 발을 들여놓았다.' },
  { type: 'line', speaker: 'narration', text: '그게 한두 번이 아니라서, 어느 순간부터 나도 같이 들어가고 있었다.' },
  { type: 'line', speaker: 'narration', text: '라파엘님 창고에 몰래 든 것도, 라구엘님한테 딱 걸린 것도 전부 우리엘 언니랑 같이였다.' },
  { type: 'line', speaker: 'narration', text: '엄마는 그때마다 머리를 감쌌다.' },
  { type: 'line', speaker: 'narration', text: '그래도 나쁘지 않은 나날이었다.' },
  { type: 'line', speaker: 'narration', text: '적어도, 오늘 아침까지는.' },

  // ── 서기관실 ──
  { type: 'scene', text: '서기관실' },
  { type: 'unlock', char: 'metatron' },
  { type: 'line', speaker: 'narration', text: '엄마가 문을 두드렸다. 익숙한 듯 대답을 기다리지도 않고 문을 열었다.' },
  { type: 'line', speaker: 'narration', text: '넓은 방이었다. 천장까지 닿는 서가, 빼곡한 문서들. 그 한가운데 무언가를 적고 있는 존재가 있었다.' },
  { type: 'line', speaker: 'gabriel',   text: '서기관님, 데려왔어요.' },
  { type: 'line', speaker: 'narration', text: '그제야 그가 고개를 들었다. 시선이 나에게 닿았다.' },
  { type: 'line', speaker: 'narration', text: '잿빛의 축 처진 긴 머릿결을 휘날리는 이 에덴의 2인자, 서기관 메타트론이었다.' },
  { type: 'line', speaker: 'metatron',  text: '잘 왔습니다. 앉으세요.' },
  { type: 'line', speaker: 'narration', text: '엄마가 등을 살짝 밀었다. 나는 자리에 앉았다.' },
  { type: 'line', speaker: 'metatron',  text: '이곳에 온 지 꽤 됐군요. 가브리엘이 잘 키웠습니다.' },
  { type: 'line', speaker: 'narration', text: '엄마는 아무 말도 하지 않았다. 그 침묵이 어딘가 불안해 보였다.' },
  { type: 'line', speaker: 'narration', text: '그에 반해 서기관님은 시종일관 온화한 미소를 잃지 않았다.' },
  { type: 'line', speaker: 'metatron',  text: '이제 슬슬 제 몫을 해야 할 나이가 됐습니다. 에덴에서 마냥 쉬고만 있을 수는 없으니.' },
  { type: 'line', speaker: 'narration', text: '농담인지 아닌지 알 수 없는 말투였다. 그는 서랍에서 문서 하나를 꺼내 탁자 위에 올려놓았다.' },
  { type: 'line', speaker: 'metatron',  text: '가벼운 훈련입니다. 우리엘과 함께하게 될 거예요. 부담 가질 건 없어요.' },
  { type: 'line', speaker: 'gabriel',   text: '서기관님, 아직 이 아이는——' },
  { type: 'line', speaker: 'metatron',  text: '가브리엘.' },
  { type: 'line', speaker: 'narration', text: '그 한 마디로 충분했다. 엄마는 입을 다물었다.' },
  { type: 'line', speaker: 'metatron',  text: '가브리엘이 걱정하는 거 압니다. 그래서 우리엘을 붙인 것 아니겠습니까.' },
  { type: 'line', speaker: 'narration', text: '다시 시선이 나에게 돌아왔다.' },
  { type: 'line', speaker: 'metatron',  text: '명령이 아니에요. 다만 {{name}}이/가 여기 있는 이상, 언젠간 해야 할 일입니다.' },
  { type: 'line', speaker: 'narration', text: '서기관실에 잠시 침묵이 흘렀다.' },

  // ── 서기관실 복도 ──
  { type: 'scene', text: '서기관실 복도' },
  { type: 'line', speaker: 'narration', text: '방을 나섰다. 엄마가 뒤따라 문을 닫았다.' },
  { type: 'line', speaker: 'gabriel',   text: '별로 무섭진 않았지?' },
  { type: 'line', speaker: 'gabriel',   text: '뭐, 우리엘이 잘 가르치긴 하는데.' },
  { type: 'line', speaker: 'gabriel',   text: '밥은 먹었어? 빈속에 굴리면 나한테 와서 따지지 말고.' },
  { type: 'line', speaker: 'gabriel',   text: '아 참, 옷도 좀 챙겨 입어. 우리엘이 어디서 뛰게 할지 모르잖아.' },
  { type: 'line', speaker: 'narration', text: '불안을 숨길 수 없는가, 엄마는 좌우로 왔다갔다 하며 손톱을 깨물었다.' },
 {
    type: 'choice',
    choices: [
      { text: '괜찮아, 나 잘할 수 있어.',             next: 'ch1_gabriel_a', clearLog: false, affinity: { gabriel: 1}},
      { text: '우리엘 언니가 독하게 굴 것 같아?',      next: 'ch1_gabriel_b', clearLog: false },
      { text: '…엄마는 같이 있어주면 안 돼?',          next: 'ch1_gabriel_c', clearLog: false },
      { text: '(아무 말 없이 엄마 소매를 잡는다)',      next: 'ch1_gabriel_d', clearLog: false, affinity: { gabriel: 1}},
    ],
  },
];

// ── A: 씩씩하게 받아치기 → 수락 루트만 ──
const SCRIPT_CH1_GABRIEL_A = [

  { type: 'line', speaker: 'gabriel',   text: '…뭐, 그렇겠지.' },
  { type: 'line', speaker: 'gabriel',   text: '내가 키웠는데 못할 리가 없잖아.' },
  { type: 'line', speaker: 'narration', text: '엄마가 픽 웃었다. 시선은 여전히 딴 데였다.' },
  { type: 'line', speaker: 'narration', text: '그러다 복도 저편에서 천사 하나가 종종걸음으로 다가왔다.' },
  { type: 'line', speaker: 'narration', text: '하급천사였다. 서류를 한 가득 안고 있었다.' },
  { type: 'line', speaker: 'angel',     text: '가브리엘 님, 이번 주 배정 건으로 여쭤볼 게 있는데요——' },
  { type: 'line', speaker: 'gabriel',   text: '아, 잠깐만.' },
  { type: 'line', speaker: 'narration', text: '엄마가 나를 흘낏 보더니 손가락을 세워 보였다. 잠깐만 기다리라는 뜻이었다.' },
  { type: 'line', speaker: 'narration', text: '둘의 대화가 시작됐다. 길어질 것 같았다.' },
  {
    type: 'choice',
    choices: [
      { text: '(가만히 기다린다)', next: 'ch1_accept' },
    ],
  },
];

// ── B: 우리엘 언니가 독하게 굴 것 같아? → 둘 다 가능 ──
const SCRIPT_CH1_GABRIEL_B = [

  { type: 'line', speaker: 'gabriel',   text: '독하긴. 그냥 기준이 좀 높은 거야.' },
  { type: 'line', speaker: 'gabriel',   text: '힘들면 힘들다고 해. 혼자 끙끙대지 말고.' },
  { type: 'line', speaker: 'gabriel',   text: '…뭐, 내가 미리 말은 해뒀어.' },
  { type: 'line', speaker: 'narration', text: '말끝을 흐리더니 엄마는 헛기침으로 덮었다.' },
  { type: 'line', speaker: 'narration', text: '그러다 복도 저편에서 천사 하나가 종종걸음으로 다가왔다.' },
  { type: 'line', speaker: 'narration', text: '하급천사였다. 서류를 한 가득 안고 있었다.' },
  { type: 'line', speaker: 'angel',     text: '가브리엘 님, 이번 주 배정 건으로 여쭤볼 게 있는데요——' },
  { type: 'line', speaker: 'gabriel',   text: '아, 잠깐만.' },
  { type: 'line', speaker: 'narration', text: '엄마가 나를 흘낏 보더니 손가락을 세워 보였다. 잠깐만 기다리라는 뜻이었다.' },
  { type: 'line', speaker: 'narration', text: '둘의 대화가 시작됐다. 길어질 것 같았다.' },
  {
    type: 'choice',
    choices: [
      { text: '(가만히 기다린다)',      next: 'ch1_accept' },
      { text: '(슬그머니 자리를 뜬다)', next: 'ch1_escape', flag: 'ch1_escape_attempt' },
    ],
  },
];

// ── C: 엄마는 같이 있어주면 안 돼? → 둘 다 가능 ──
const SCRIPT_CH1_GABRIEL_C = [

  { type: 'line', speaker: 'narration', text: '엄마가 잠깐 멈칫했다.' },
  { type: 'line', speaker: 'gabriel',   text: '그런 소리 하지 마, 서기관님 말씀이 맞으니까.' },
  { type: 'line', speaker: 'narration', text: '말은 그렇게 했는데 손이 내 머리 위로 올라왔다. 가볍게, 딱 한 번.' },
  { type: 'line', speaker: 'narration', text: '그러다 복도 저편에서 천사 하나가 종종걸음으로 다가왔다.' },
  { type: 'line', speaker: 'narration', text: '하급천사였다. 서류를 한 가득 안고 있었다.' },
  { type: 'line', speaker: 'angel',     text: '가브리엘 님, 이번 주 배정 건으로 여쭤볼 게 있는데요——' },
  { type: 'line', speaker: 'gabriel',   text: '아, 잠깐만.' },
  { type: 'line', speaker: 'narration', text: '엄마가 나를 흘낏 보더니 손가락을 세워 보였다. 잠깐만 기다리라는 뜻이었다.' },
  { type: 'line', speaker: 'narration', text: '둘의 대화가 시작됐다. 길어질 것 같았다.' },
  {
    type: 'choice',
    choices: [
      { text: '(가만히 기다린다)',      next: 'ch1_accept' },
      { text: '(슬그머니 자리를 뜬다)', next: 'ch1_escape', flag: 'ch1_escape_attempt' },
    ],
  },
];

// ── D: 소매 잡기 → 둘 다 가능 ──
const SCRIPT_CH1_GABRIEL_D = [
  { type: 'line', speaker: 'narration', text: '엄마가 잠깐 굳었다가, 천천히 그 손을 감쌌다.' },
  { type: 'line', speaker: 'gabriel',   text: '…손 잡는다고 안 가도 되는 거 아니거든.' },
  { type: 'line', speaker: 'narration', text: '근데 놓지는 않았다.' },
  { type: 'line', speaker: 'narration', text: '그냥 잠깐, 그렇게 서 있었다.' },
  { type: 'line', speaker: 'narration', text: '그러다 복도 저편에서 천사 하나가 종종걸음으로 다가왔다.' },
  { type: 'line', speaker: 'narration', text: '하급천사였다. 서류를 한 가득 안고 있었다.' },
  { type: 'line', speaker: 'angel',     text: '가브리엘 님, 이번 주 배정 건으로 여쭤볼 게 있는데요——' },
  { type: 'line', speaker: 'gabriel',   text: '아, 잠깐만.' },
  { type: 'line', speaker: 'narration', text: '엄마가 나를 흘낏 보더니 손가락을 세워 보였다. 잠깐만 기다리라는 뜻이었다.' },
  { type: 'line', speaker: 'narration', text: '둘의 대화가 시작됐다. 길어질 것 같았다.' },
  {
    type: 'choice',
    choices: [
      { text: '(가만히 기다린다)',      next: 'ch1_accept' },

    ],
  },
];
