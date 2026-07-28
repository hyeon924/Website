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
  { icon: 'N', title: 'Notion', text: '요구사항, 화면 정책, 회의 내용을 한 문서 흐름으로 정리합니다. 작업 기준과 변경 이력을 남겨 팀이 같은 정보를 확인할 수 있게 관리합니다.' },
  { icon: 'S', title: 'Slack', text: '진행 상황과 확인이 필요한 이슈를 채널 단위로 공유합니다. 관련 링크와 후속 작업을 함께 남겨 업무 맥락이 이어지도록 관리합니다.' },
  { icon: 'G', title: 'Git · GitHub', text: '기능 단위 브랜치와 명확한 커밋 메시지로 변경 이력을 관리합니다. Pull Request 기준으로 리뷰와 병합 흐름을 정리합니다.' },
  { icon: 'J', title: 'Jira', text: '작업 우선순위와 상태를 티켓으로 관리해 다음 할 일을 맞춥니다. 요구사항 변경과 진행 상황을 팀이 함께 확인할 수 있게 합니다.' },
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
      { title: '랜드마크 데이터 집계', description: 'API 응답의 인근 랜드마크를 집계해 실제 식당 데이터가 존재하는 항목만 빠른 탐색 조건으로 제공했습니다.', image: 'img/eat-layout-main.png' },
      { title: '복수 필터와 페이지 상태 관리', description: '25개 구와 편의시설 조건을 함께 적용하고, 결과 수에 맞춰 10개 단위의 페이지 묶음을 일관되게 이동하도록 구성했습니다.', image: 'img/eat-layout-sub-preview.png' },
      { title: '운영 정보의 상태 표기', description: '미제공 값은 -로 통일하고 실제 이용 불가 정보는 별도 상태로 구분해 여행 중 빠르게 판단할 수 있도록 했습니다.', image: 'img/eat-layout-main.png' },
    ],
  },
  {
    id: 'emotion', category: 'fullstack', title: '감정 블로그 플랫폼',
    summary: '감정 기록과 콘텐츠 공유 흐름을 설계한 블로그 플랫폼',
    scope: 'API · 인증 흐름 · DB 모델링 · UI 연동',
    points: ['회원 인증과 게시글 CRUD', '감정 기반 콘텐츠 분류', '데이터 모델 설계 및 API 연동'],
    stack: ['Spring Boot', 'PostgreSQL', 'React'], image: 'img/emotion-favicon-thumb.png',
    detailImages: ['img/emotion-login-preview.png', 'img/emotion-post-preview.png', 'img/emotion-my-preview.png'],
    period: '2025.03 - 2025.05', role: 'Full Stack', liveUrl: '#', githubUrl: '#',
    troubleshooting: [
      { title: '인증과 보호 페이지 분리', description: '로그인 상태 확인과 보호 페이지 접근 제어를 분리해 비인증 사용자가 필요한 흐름으로 자연스럽게 이동하도록 구성했습니다.', image: 'img/emotion-login-preview.png' },
      { title: '게시글과 사용자 데이터 모델링', description: '게시글, 사용자, 감정 기록의 관계를 정리해 작성·조회·마이페이지 흐름에서 일관된 데이터를 제공하도록 설계했습니다.', image: 'img/emotion-post-preview.png' },
      { title: '배포 환경과 API 연결 분리', description: '환경 변수로 API 주소와 인증 설정을 관리해 개발 환경과 배포 환경에서 안정적으로 서비스를 연결할 수 있도록 구성했습니다.', image: 'img/emotion-my-preview.png' },
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
