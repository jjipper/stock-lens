import { http, HttpResponse } from 'msw';

const issues = [
  {
    id: '1',
    type: 'ai',
    title: 'AI 반도체 수요 급증, 국내 공급망 주목',
    description: 'NVIDIA 실적 호조에 따른 국내 HBM 및 패키징 업체 수혜 전망',
    stocks: [
      { name: 'SK하이닉스', ticker: '000660', percentage: 4.12 },
      { name: '리노공업', ticker: '051910', percentage: 2.34 },
      { name: '솔브레인', ticker: '028260', percentage: -3.21 },
    ],
    newsCount: 12,
    mention: true,
    effect: 'high',
  },
  {
    id: '2',
    type: 'memory',
    title: '2차전지 소재주, 北미 IRA 수혜 본격화',
    description: '미국 인플레이션 감축법에 따른 국내 2차전지 소재 기업들의 북미 공장 가동 시작',
    stocks: [
      { name: 'LG에너지솔루션', ticker: '003550', percentage: -1.12 },
      { name: 'SK이노베이션', ticker: '096770', percentage: 2.34 },
      { name: '에코프로', ticker: '086520', percentage: 4.15 },
    ],
    newsCount: 8,
    mention: false,
    effect: 'middle',
  },
  {
    id: '3',
    type: 'money',
    title: '금리 인하 기대감에 건설·부동산주 강세',
    description: '한국은행 기준금리 인하 가능성 부각되며 건설·부동산 관련주 동반 상승',
    stocks: [
      { name: '현대건설', ticker: '000100', percentage: 3.12 },
      { name: '삼성물산', ticker: '005380', percentage: 2.46 },
      { name: '디타임', ticker: '012510', percentage: 6.2 },
    ],
    newsCount: 4,
    mention: false,
    effect: 'low',
  },
  {
    id: '4',
    type: 'battery',
    title: '전기차 배터리 수요 확대, 관련주 강세',
    description: '글로벌 전기차 시장 성장에 따라 국내 배터리 업체 및 소재주 급등',
    stocks: [
      { name: '삼성SDI', ticker: '006400', percentage: 5.67 },
      { name: '포스코케미칼', ticker: '003670', percentage: 4.22 },
      { name: 'LG화학', ticker: '051910', percentage: -1.78 },
    ],
    newsCount: 9,
    mention: true,
    effect: 'middle',
  },
  {
    id: '5',
    type: 'money',
    title: '바이오주, 신약 개발 진전 소식에 급등',
    description: '주요 바이오 기업의 신약 임상 성공 소식으로 투자 심리 개선',
    stocks: [
      { name: '셀트리온', ticker: '068270', percentage: 7.45 },
      { name: '한미약품', ticker: '128940', percentage: 3.33 },
      { name: 'SK바이오팜', ticker: '326030', percentage: 2.87 },
    ],
    newsCount: 6,
    mention: false,
    effect: 'high',
  },
];

const stocks = [
  {
    id: '1',
    name: '삼성전자',
    ticker: '005930',
    mainIssue: '갤럭시 S25 출시 임박, 사전예약 시작',
    price: 73000,
    percentage: 1.39,
    myStock: false,
    popular: true,
  },
  {
    id: '2',
    name: 'SK하이닉스',
    ticker: '000660',
    mainIssue: 'NVIDIA AI칩 HBM 독점 공급 계약 체결',
    price: 215000,
    percentage: 4.12,
    myStock: false,
    popular: true,
  },
  {
    id: '3',
    name: 'LG에너지솔루션',
    ticker: '373220',
    mainIssue: '',
    price: 420000,
    percentage: -1.18,
    myStock: false,
    popular: true,
  },
  {
    id: '4',
    name: '삼성바이오로직스',
    ticker: '328790',
    mainIssue: '',
    price: 920000,
    percentage: 1.66,
    myStock: false,
    popular: true,
  },
  {
    id: '5',
    name: 'POSCO홀딩스',
    ticker: '005490',
    mainIssue: '',
    price: 385000,
    percentage: -0.77,
    myStock: false,
    popular: true,
  },
  {
    id: '6',
    name: 'NAVER',
    ticker: '035420',
    mainIssue: '네이버, AI 번역 서비스 글로벌 진출',
    price: 228000,
    percentage: 2.15,
    myStock: false,
    popular: true,
  },
  {
    id: '7',
    name: '카카오',
    ticker: '035720',
    mainIssue: '카카오페이 일본 간편결제 시장 진출',
    price: 58500,
    percentage: -0.62,
    myStock: false,
    popular: true,
  },
  {
    id: '8',
    name: '현대자동차',
    ticker: '005380',
    mainIssue: '전기차 수출량 사상 최대 기록',
    price: 238500,
    percentage: 1.91,
    myStock: false,
    popular: true,
  },
  {
    id: '9',
    name: 'LG화학',
    ticker: '051910',
    mainIssue: '유럽 배터리 공장 신설 발표',
    price: 395000,
    percentage: 0.83,
    myStock: false,
    popular: false,
  },
];

export const handlers = [
  http.get('/issues', ({ request }) => {
    const url = new URL(request.url);
    const limit = Number(url.searchParams.get('_limit'));
    const data = Number.isFinite(limit) && limit > 0 ? issues.slice(0, limit) : issues;

    return HttpResponse.json(data);
  }),
  http.get('/stocks', () => {
    return HttpResponse.json(stocks);
  }),
];
