/* ================================================
   chapter1.js — 챕터 1 시나리오 (공통 오프닝)
================================================ */
const SCRIPT_CHAPTER1 = [

  // ── 도입부 나레이션 ──
  { type: 'scene', text: '에덴' },
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
  { type: 'line', speaker: 'narration', text: '우리엘은 나보다 수만 살이 많은 대천사다.' },
  { type: 'line', speaker: 'narration', text: '근데 금지구역 표지판을 보면 왜인지 나보다 먼저 발을 들여놓았다.' },
  { type: 'line', speaker: 'narration', text: '그게 한두 번이 아니라서, 어느 순간부터 나도 같이 들어가고 있었다.' },
  { type: 'line', speaker: 'narration', text: '라파엘님 창고에 몰래 든 것도, 라구엘님한테 딱 걸린 것도 전부 우리엘이랑 같이였다.' },
  { type: 'line', speaker: 'narration', text: '엄마는 그때마다 머리를 감쌌다.' },
  { type: 'line', speaker: 'narration', text: '그래도 나쁘지 않은 나날이었다.' },
  { type: 'line', speaker: 'narration', text: '적어도, 오늘 아침까지는.' },

  // ── 서기관실 ──
  { type: 'scene', text: '서기관실' },
  { type: 'unlock', char: 'metatron' },

  { type: 'line', speaker: 'narration', text: '가브리엘이 문을 두드렸다. 익숙한 듯 대답을 기다리지도 않고 문을 열었다.' },
  { type: 'line', speaker: 'narration', text: '넓은 방이었다. 천장까지 닿는 서가, 빼곡한 문서들. 그 한가운데 무언가를 적고 있는 존재가 있었다.' },
  { type: 'line', speaker: 'gabriel',   text: '서기관님, 데려왔어요.' },
  { type: 'line', speaker: 'narration', text: '그제야 그가 고개를 들었다. 시선이 나에게 닿았다.' },
  { type: 'line', speaker: 'metatron',  text: '잘 왔습니다. 앉으세요.' },
  { type: 'line', speaker: 'narration', text: '가브리엘이 등을 살짝 밀었다. 나는 자리에 앉았다.' },
  { type: 'line', speaker: 'metatron',  text: '이곳에 온 지 꽤 됐군요. 가브리엘이 잘 키웠습니다.' },
  { type: 'line', speaker: 'narration', text: '가브리엘은 아무 말도 하지 않았다. 그 침묵이 어딘가 불안해 보였다.' },
  { type: 'line', speaker: 'metatron',  text: '이제 슬슬 제 몫을 해야 할 나이가 됐습니다. 에덴에서 마냥 쉬고만 있을 수는 없으니.' },
  { type: 'line', speaker: 'narration', text: '농담인지 아닌지 알 수 없는 말투였다. 그는 서랍에서 문서 하나를 꺼내 탁자 위에 올려놓았다.' },
  { type: 'line', speaker: 'metatron',  text: '가벼운 훈련입니다. 우리엘과 함께하게 될 거예요. 부담 가질 건 없어요.' },
  { type: 'line', speaker: 'gabriel',   text: '서기관님, 아직 이 아이는——' },
  { type: 'line', speaker: 'metatron',  text: '가브리엘.' },
  { type: 'line', speaker: 'narration', text: '그 한 마디로 충분했다. 가브리엘이 입을 다물었다.' },
  { type: 'line', speaker: 'metatron',  text: '가브리엘이 걱정하는 거 압니다. 그래서 우리엘을 붙인 것 아니겠습니까.' },
  { type: 'line', speaker: 'narration', text: '다시 시선이 나에게 돌아왔다.' },
  { type: 'line', speaker: 'metatron',  text: '명령이 아니에요. 다만 {{name}}이/가 여기 있는 이상, 언젠간 해야 할 일입니다.' },
  { type: 'line', speaker: 'narration', text: '서기관실에 잠시 침묵이 흘렀다.' },

 // ── 서기관실 복도 ──
  { type: 'scene', text: '서기관실 복도' },
  { type: 'line', speaker: 'narration', text: '방을 나섰다. 가브리엘이 뒤따라 문을 닫았다.' },
  { type: 'line', speaker: 'gabriel',   text: '별로 무섭진 않았지?' },

  // ── 가브리엘 대화 선택지 ──
  { type: 'line', speaker: 'gabriel',   text: '…우리엘이 좋은 스승이긴 한데.' },
  { type: 'line', speaker: 'gabriel',   text: '너무 독하게 굴면 안 된다고, 내가 미리 말해뒀어.' },
  { type: 'line', speaker: 'gabriel',   text: '근데 그게 또 우리엘이 들어줄지는 모르겠고.' },
  {
    type: 'choice',
    choices: [
      { text: '괜찮아, 나 잘할 수 있어.',        next: 'ch1_gabriel_a' },
      { text: '우리엘이 독하게 굴 것 같아?',      next: 'ch1_gabriel_b' },
      { text: '…엄마는 같이 있어주면 안 돼?',     next: 'ch1_gabriel_c' },
      { text: '(아무 말 없이 가브리엘 소매를 잡는다)', next: 'ch1_gabriel_d' },
    ],
  },
];

const SCRIPT_CH1_GABRIEL_A = [
  { type: 'line', speaker: 'gabriel',   text: '…그래, 알아.' },
  { type: 'line', speaker: 'gabriel',   text: '그냥 내가 걱정이 되는 거야. 네가 못할 것 같아서가 아니라.' },
  { type: 'line', speaker: 'narration', text: '가브리엘이 피식 웃었다. 조금 쓸쓸하게.' },
  { type: 'line', speaker: 'narration', text: '대꾸할 틈도 없이 복도 저편에서 천사 하나가 종종걸음으로 다가왔다.' },
  { type: 'line', speaker: 'narration', text: '하급천사였다. 서류를 한 가득 안고 있었다.' },
  { type: 'line', speaker: 'angel',     text: '가브리엘 님, 이번 주 배정 건으로 여쭤볼 게 있는데요——' },
  { type: 'line', speaker: 'gabriel',   text: '아, 잠깐만.' },
  { type: 'line', speaker: 'narration', text: '가브리엘이 나를 흘낏 보더니 손가락을 세워 보였다. 잠깐만 기다리라는 뜻이었다.' },
  { type: 'line', speaker: 'narration', text: '둘의 대화가 시작됐다. 길어질 것 같았다.' },
  {
    type: 'choice',
    choices: [
      { text: '(가만히 기다린다)',        next: 'ch1_accept' },
      { text: '(슬그머니 자리를 뜬다)',   next: 'ch1_escape', flag: 'ch1_escape_attempt' },
    ],
  },
];

const SCRIPT_CH1_GABRIEL_B = [
  { type: 'line', speaker: 'gabriel',   text: '독하다기보다… 기준이 높아.' },
  { type: 'line', speaker: 'gabriel',   text: '우리엘 눈에는 \'충분하다\'는 게 없거든. 항상 더 잘할 수 있다고 생각하니까.' },
  { type: 'line', speaker: 'gabriel',   text: '나쁜 뜻은 아닌데, 그게 때로는 더 힘들어.' },
  { type: 'line', speaker: 'narration', text: '대꾸할 틈도 없이 복도 저편에서 천사 하나가 종종걸음으로 다가왔다.' },
  { type: 'line', speaker: 'narration', text: '하급천사였다. 서류를 한 가득 안고 있었다.' },
  { type: 'line', speaker: 'angel',     text: '가브리엘 님, 이번 주 배정 건으로 여쭤볼 게 있는데요——' },
  { type: 'line', speaker: 'gabriel',   text: '아, 잠깐만.' },
  { type: 'line', speaker: 'narration', text: '가브리엘이 나를 흘낏 보더니 손가락을 세워 보였다. 잠깐만 기다리라는 뜻이었다.' },
  { type: 'line', speaker: 'narration', text: '둘의 대화가 시작됐다. 길어질 것 같았다.' },
  {
    type: 'choice',
    choices: [
      { text: '(가만히 기다린다)',        next: 'ch1_accept' },
      { text: '(슬그머니 자리를 뜬다)',   next: 'ch1_escape', flag: 'ch1_escape_attempt' },
    ],
  },
];

const SCRIPT_CH1_GABRIEL_C = [
  { type: 'line', speaker: 'narration', text: '가브리엘이 눈을 크게 떴다가, 이내 조용히 웃었다.' },
  { type: 'line', speaker: 'gabriel',   text: '…나도 그러고 싶어.' },
  { type: 'line', speaker: 'gabriel',   text: '근데 메타트론이 옳아. 네가 내 품에만 있으면 안 된다는 거.' },
  { type: 'line', speaker: 'gabriel',   text: '그게 알면서도 제일 어렵다.' },
  { type: 'line', speaker: 'narration', text: '대꾸할 틈도 없이 복도 저편에서 천사 하나가 종종걸음으로 다가왔다.' },
  { type: 'line', speaker: 'narration', text: '하급천사였다. 서류를 한 가득 안고 있었다.' },
  { type: 'line', speaker: 'angel',     text: '가브리엘 님, 이번 주 배정 건으로 여쭤볼 게 있는데요——' },
  { type: 'line', speaker: 'gabriel',   text: '아, 잠깐만.' },
  { type: 'line', speaker: 'narration', text: '가브리엘이 나를 흘낏 보더니 손가락을 세워 보였다. 잠깐만 기다리라는 뜻이었다.' },
  { type: 'line', speaker: 'narration', text: '둘의 대화가 시작됐다. 길어질 것 같았다.' },
  {
    type: 'choice',
    choices: [
      { text: '(가만히 기다린다)',        next: 'ch1_accept' },
      { text: '(슬그머니 자리를 뜬다)',   next: 'ch1_escape', flag: 'ch1_escape_attempt' },
    ],
  },
];

const SCRIPT_CH1_GABRIEL_D = [
  { type: 'narration', speaker: 'narration', text: '가브리엘이 잠깐 굳었다가, 천천히 그 손을 감쌌다.' },
  { type: 'line', speaker: 'gabriel',   text: '…많이 싫어?' },
  { type: 'line', speaker: 'narration', text: '대답하지 않았다. 가브리엘도 더 묻지 않았다.' },
  { type: 'line', speaker: 'narration', text: '그냥 잠깐, 그렇게 서 있었다.' },
  { type: 'line', speaker: 'narration', text: '그러다 복도 저편에서 천사 하나가 종종걸음으로 다가왔다.' },
  { type: 'line', speaker: 'narration', text: '하급천사였다. 서류를 한 가득 안고 있었다.' },
  { type: 'line', speaker: 'angel',     text: '가브리엘 님, 이번 주 배정 건으로 여쭤볼 게 있는데요——' },
  { type: 'line', speaker: 'gabriel',   text: '아, 잠깐만.' },
  { type: 'line', speaker: 'narration', text: '가브리엘이 나를 흘낏 보더니 손가락을 세워 보였다. 잠깐만 기다리라는 뜻이었다.' },
  { type: 'line', speaker: 'narration', text: '둘의 대화가 시작됐다. 길어질 것 같았다.' },
  {
    type: 'choice',
    choices: [
      { text: '(가만히 기다린다)',        next: 'ch1_accept' },
      { text: '(슬그머니 자리를 뜬다)',   next: 'ch1_escape', flag: 'ch1_escape_attempt' },
    ],
  },
];
