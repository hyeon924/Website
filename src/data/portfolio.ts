export type PageId = 'intro' | 'skills' | 'collaboration' | 'publishing' | 'frontend' | 'fullstack';

export type Project = {
  id: string;
  category: 'publishing' | 'frontend' | 'fullstack';
  title: string;
  summary: string;
  scope: string;
  points: string[];
  stack: string[];
  image: string;
  detailImages: string[];
  period: string;
  role: string;
  liveUrl?: string;
  subUrl?: string;
  githubUrl?: string;
  isPrivate?: boolean;
  troubleshooting?: {
    title: string;
    description: string;
    details?: { label: string; items: string[] }[];
    image?: string;
  }[];
};

export const navItems: { id: PageId; label: string }[] = [
  { id: 'intro', label: 'Intro' },
  { id: 'skills', label: 'Skills' },
  { id: 'collaboration', label: 'Collaboration' },
  { id: 'publishing', label: 'Publishing' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'fullstack', label: 'Full Stack' },
];

export const skills = [
  { icon: '♡', title: 'Frontend', items: ['React 기반 컴포넌트 UI 구현', 'JavaScript 상태 및 이벤트 처리', '반응형 레이아웃과 접근성 고려'] },
  { icon: '♥', title: 'UI & Experience', items: ['Figma 기반 화면 구조 정리', '사용 흐름을 고려한 UI 설계', '반복 요소 리팩터링'] },
  { icon: '↕', title: 'Backend', items: ['Java · Spring Boot', 'REST API 설계와 응답 검증', 'PostgreSQL · MySQL 데이터 모델링'] },
  { icon: '♦', title: 'Collaboration', items: ['Git · GitHub Flow', '작업 단위 리팩터링과 기록', 'Slack · Jira · Notion 활용'] },
];

export const collaboration = [
  { icon: 'N', title: 'Notion', text: '요구사항, 화면 정책, 회의 내용을 한 문서 흐름으로 정리합니다.\n작업 기준과 변경 이력을 남겨 팀이 같은 정보를 확인할 수 있게 관리합니다.' },
  { icon: 'S', title: 'Slack', text: '업무 알림과 반복 작업을 줄이기 위한 봇을 제작해 활용했습니다.\n관련 링크와 후속 작업을 함께 남겨 업무 맥락이 이어지도록 관리합니다.' },
  { icon: 'G', title: 'Git · GitHub', text: '기능 단위 브랜치와 명확한 커밋 메시지로 변경 이력을 관리합니다.\nPull Request 기준으로 리뷰와 병합 흐름을 정리합니다.' },
  { icon: 'J', title: 'Jira', text: '작업 우선순위와 상태를 티켓으로 관리해 다음 할 일을 맞춥니다.\n요구사항 변경과 진행 상황을 팀이 함께 확인할 수 있게 합니다.' },
];

export const projects: Project[] = [
  {
    id: 'police', category: 'publishing', title: '대전지방경찰청',
    summary: '정보가 많은 공공기관 사이트의 탐색 흐름을 재구성한 웹사이트',
    scope: 'UI 개선 · React 리팩토링 · 반응형 · GitHub Pages 배포',
    points: ['React + TypeScript로 마이그레이션', '공통 페이지 레이아웃 컴포넌트화', '메인 슬라이더, 공지 탭, 역사관 갤러리/모달 구현', 'GitHub Pages 자동 배포 구성'],
    stack: ['React', 'TypeScript', 'Vite', 'CSS', 'GitHub Actions'], image: 'img/pro01.png',
    detailImages: ['img/pol03.png', 'img/pol04.png'], period: '2 WEEKS\n기획 · 디자인 · 코딩', role: 'Publishing',
    liveUrl: 'https://hyeon924.github.io/police-website/', githubUrl: 'https://github.com/hyeon924/police-website',
  },
  {
    id: 'molly', category: 'publishing', title: "Molly's PET SHOP",
    summary: '반려동물 쇼핑의 탐색 흐름을 React 기반 인터랙션으로 재구성한 쇼핑몰',
    scope: 'React Migration · UI 개선 · GitHub Pages 배포',
    points: ['React · Vite 기반 환경 구축', '상품 슬라이드 · 필터 · 정렬 인터랙션 구현', '반응형 UI · 접근성 개선', 'GitHub Pages 배포 자동화'],
    stack: ['React', 'TypeScript', 'Vite', 'CSS', 'GitHub Actions'], image: 'img/pro05.png',
    detailImages: ['img/mo01.png', 'img/mo02.jpg'], period: '2 WEEKS\n기획 · 디자인 · 코딩', role: 'Publishing',
    liveUrl: 'https://hyeon924.github.io/mollys-pet-shop/', githubUrl: 'https://github.com/hyeon924/mollys-pet-shop',
  },
  {
    id: 'maxim', category: 'publishing', title: '맥심 브랜드',
    summary: '브랜드의 이야기를 풀페이지 스크롤 경험으로 재해석한 프로모션 웹페이지',
    scope: '풀페이지 인터랙션 · 반응형 UI · GitHub Pages 배포',
    points: ['React · TypeScript · Vite 기반 전환', 'CSS Scroll Snap 기반 풀페이지 인터랙션', '모바일 메뉴 및 반응형 UI 구현', 'GitHub Pages 자동 배포 구성'],
    stack: ['React', 'TypeScript', 'Vite', 'CSS', 'GitHub Actions'], image: 'img/pro02.png',
    detailImages: ['img/max01.png', 'img/max02.png'], period: '2 WEEKS\n기획 · 디자인 · 코딩', role: 'Publishing',
    liveUrl: 'https://hyeon924.github.io/maxim-brand/', githubUrl: 'https://github.com/hyeon924/maxim-brand',
  },
  {
    id: 'eat', category: 'frontend', title: 'EatMap',
    summary: '여행 중 필요한 운영·편의 정보를 빠르게 찾는 서울 식당 탐색 서비스',
    scope: '랜드마크 탐색 · 복수 필터 · 운영 정보 모달 · 페이지네이션',
    points: ['실제 데이터 기반 랜드마크·지역 탐색', '주차·배달 등 편의시설 복수 필터', '운영 정보 모달과 10개 단위 페이지네이션'],
    stack: ['React 19', 'Vite', 'Tailwind CSS 4', '서울관광재단 Open API', 'GitHub Pages'],
    image: 'img/eat-map-logo.png',
    detailImages: ['img/eat-layout-main.png', 'img/eat-layout-sub-preview.png'],
    period: '2025.01 - 2025.02', role: 'Frontend',
    liveUrl: 'https://hyeon924.github.io/Eat-Map/', githubUrl: 'https://github.com/hyeon924/Eat-Map',
    troubleshooting: [
      {
        title: 'GitHub Pages 배포 환경 변수 설정',
        description: '로컬 환경 파일과 배포 환경 변수는 별도로 관리해야 합니다.',
        details: [
          { label: '문제', items: ['배포 환경에서 API 키 미설정 오류 발생'] },
          { label: '원인', items: ['.env.local은 Git 제외', 'GitHub Actions 빌드 환경에 키 미주입'] },
          { label: '해결', items: ['Secret에 SEOUL_TOURISM_API_KEY 등록', '빌드 단계에서 VITE_SEOUL_TOURISM_API_KEY로 주입'] },
          { label: '배운 점', items: ['VITE_ 변수는 빌드 시점에 주입', '로컬·배포 환경 변수 분리 관리'] },
        ],
      },
      {
        title: '편의시설 필터 응답 경합',
        description: '화면 필터는 로컬 상태에서 처리해 응답 경합을 줄이고 UX를 개선했습니다.',
        details: [
          { label: '문제', items: ['주차 필터 결과가 비거나 갱신이 불안정'] },
          { label: '원인', items: ['필터 변경마다 API 재요청', '이전 응답이 최신 필터 결과를 덮어씀'] },
          { label: '해결', items: ['원본 데이터 1,000건을 최초 한 번만 저장', 'useMemo 기반 클라이언트 필터링 적용'] },
          { label: '배운 점', items: ['로컬 필터링으로 응답 경합 완화', '필터 반응 속도와 UX 개선'] },
        ],
        image: 'img/eat-map-ts-01.png',
      },
    ],
  },
  {
    id: 'emotion', category: 'fullstack', title: 'Emotion Blog',
    summary: '그날의 감정과 생각을 기록하고 다시 돌아볼 수 있는 개인 기록 서비스',
    scope: '이메일 인증 · JWT 인증 · 감정 기록 CRUD · 마이페이지',
    points: ['이메일 인증 회원가입과 JWT 로그인', '작성자 기반 감정 기록 CRUD 및 접근 제어', '감정별 검색·필터와 개인 기록 관리'],
    stack: ['Next.js 15', 'React 19', 'TypeScript', 'Spring Boot 3.4', 'PostgreSQL', 'JWT'], image: 'img/emotion-favicon-thumb.png',
    detailImages: ['img/emotion-login-preview.png', 'img/emotion-post-preview.png', 'img/emotion-my-preview.png'],
    period: '2025.03 - 2025.05', role: 'Full Stack', githubUrl: 'https://github.com/hyeon924/d-emotion-blog-main',
    troubleshooting: [
      {
        title: 'JWT 인증 API의 CORS 처리',
        description: '인증 헤더가 포함된 교차 출처 API 요청을 Spring Security 단계에서 처리했습니다.',
        details: [
          { label: '문제', items: ['프론트엔드·백엔드 도메인 분리', 'Authorization: Bearer 헤더로 preflight 요청 발생'] },
          { label: '원인', items: ['CORS 정책이 Spring Security 필터 체인보다 앞서 처리되지 않음'] },
          { label: '해결', items: ['Authorization·Content-Type 헤더와 OPTIONS 메서드 허용', '개발 환경·Vercel 도메인 패턴을 허용 목록에 추가'] },
          { label: '배운 점', items: ['CORS는 컨트롤러 설정이 아닌 Spring Security 필터 체인과 함께 설계'] },
        ],
      },
      {
        title: '이메일 인증코드 라이프사이클 관리',
        description: '인증코드의 만료·재발송·재사용을 제어하도록 인증 상태를 관리했습니다.',
        details: [
          { label: '문제', items: ['재발송 시 이전 코드가 남음', '인증 완료 코드가 다시 사용될 수 있음'] },
          { label: '원인', items: ['인증코드를 단순 저장하고 상태 변화와 만료를 관리하지 않음'] },
          { label: '해결', items: ['이메일 기준으로 인증 정보 관리', '재발송 시 코드·만료 시간 갱신, 성공 시 인증 정보 삭제', '코드 유효 시간을 5분으로 제한'] },
          { label: '배운 점', items: ['인증코드는 발급보다 만료·재발송·1회성 사용의 라이프사이클 관리가 중요'] },
        ],
      },
      {
        title: '게시글 리소스 소유권 검증',
        description: 'URL의 게시글 ID와 별개로 서버에서 작성자 권한을 검증했습니다.',
        details: [
          { label: '문제', items: ['URL의 게시글 ID 변경으로 다른 사용자 기록 접근·수정·삭제 시도 가능'] },
          { label: '원인', items: ['게시글 ID만으로는 요청 사용자의 리소스 소유권을 보장할 수 없음'] },
          { label: '해결', items: ['JWT 로그인 사용자와 게시글 작성자를 서비스 계층에서 비교', '작성자가 다르면 조회·수정·삭제 요청 거부'] },
          { label: '배운 점', items: ['버튼 숨김만으로는 보안 불가', '리소스 소유권은 서버 비즈니스 로직에서 검증'] },
        ],
      },
    ],
  },
  {
    id: 'dashboard', category: 'fullstack', title: '업무 관리 대시보드',
    summary: '업무 현황과 진행 상태를 한 화면에서 관리하는 서비스',
    scope: '서비스 설계 · REST API · 데이터 모델링 · 배포',
    points: ['업무 상태 관리', '권한별 화면 분기', '대시보드 데이터 시각화'],
    stack: ['Spring Boot', 'PostgreSQL', 'React'], image: 'img/pro05.png',
    detailImages: ['img/emotion-my-preview.png'], period: '2025.06', role: 'Full Stack', isPrivate: true,
  },
];
