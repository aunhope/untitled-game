/* ================================================
   chapter1.js — 챕터 1 시나리오 (공통 오프닝)
================================================ */

const SCRIPT_CHAPTER1 = [

  { type: 'scene', text: '서기관실' },

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

  { type: 'scene', text: '서기관실 복도' },

  { type: 'line', speaker: 'narration', text: '방을 나섰다. 가브리엘이 뒤따라 문을 닫았다.' },
  { type: 'line', speaker: 'gabriel',   text: '별로 무섭진 않았지?' },
  { type: 'line', speaker: 'narration', text: '대꾸할 틈도 없이 복도 저편에서 천사 하나가 종종걸음으로 다가왔다.' },
  { type: 'line', speaker: 'narration', text: '하급천사였다. 서류를 한 가득 안고 있었다.' },
  { type: 'line', speaker: 'angel',     text: '가브리엘 님, 이번 주 배정 건으로 여쭤볼 게 있는데요——' },
  { type: 'line', speaker: 'gabriel',   text: '아, 잠깐만.' },
  { type: 'line', speaker: 'narration', text: '가브리엘이 나를 흘낏 보더니 손가락을 세워 보였다. 잠깐만 기다리라는 뜻이었다.' },
  { type: 'line', speaker: 'narration', text: '둘의 대화가 시작됐다. 길어질 것 같았다.' },

  {
    type: 'choice',
    choices: [
      {
        text: '가만히 기다린다.',
        next: 'ch1_accept',
      },
      {
        text: '(슬그머니 자리를 뜬다)',
        next: 'ch1_escape',
        flag: 'ch1_escape_attempt',
        affinity: { metatron: -2 },
      },
    ],
  },

];
