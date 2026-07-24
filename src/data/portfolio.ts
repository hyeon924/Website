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
  githubUrl?: string;
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
  { title: 'Notion', text: '요구사항, 화면 정책, 회의 내용을 한 문서 흐름으로 정리합니다.' },
  { title: 'Slack', text: '진행 상황과 확인이 필요한 내용을 짧고 명확하게 공유합니다.' },
  { title: 'Git · GitHub', text: '기능 단위 브랜치와 커밋으로 변경 이력을 추적합니다.' },
  { title: 'Jira', text: '작업 우선순위와 상태를 관리해 팀의 다음 할 일을 맞춥니다.' },
];

export const projects: Project[] = [
  {
    id: 'police', category: 'publishing', title: '대전지방경찰청',
    summary: '공공기관 정보 구조와 반응형 퍼블리싱을 개선한 웹 프로젝트',
    scope: 'UI 개선 · Publishing · 반응형 정리',
    points: ['정보 구조 재정리', '반응형 화면 구현', '컴포넌트 단위 스타일 관리'],
    stack: ['HTML', 'CSS', 'JavaScript'], image: 'img/pro01.png',
    detailImages: ['img/pol03.jpg', 'img/pol04.jpg'], period: '2024.03 - 2024.04', role: 'Publishing',
  },
  {
    id: 'molly', category: 'publishing', title: "Molly's PET SHOP",
    summary: '브랜드 컬러와 상품 탐색 흐름을 중심으로 구성한 반려동물 쇼핑몰',
    scope: 'UI Design · Publishing · 스타일 가이드',
    points: ['브랜드 컬러 적용', '상품 탐색 흐름 설계', '인터랙션 구현'],
    stack: ['HTML', 'CSS', 'jQuery'], image: 'img/pro02.png',
    detailImages: ['img/mo01.jpg', 'img/mo02.jpg'], period: '2024.05 - 2024.06', role: 'Publishing',
  },
  {
    id: 'maxim', category: 'publishing', title: '맥심 브랜드',
    summary: '브랜드 콘텐츠를 시각적으로 전달하는 프로모션 웹 페이지',
    scope: 'UI Design · Publishing · 인터랙션 구현',
    points: ['프로모션 페이지 제작', '스크롤 인터랙션', '반응형 화면 구성'],
    stack: ['HTML', 'CSS', 'JavaScript'], image: 'img/pro05.png',
    detailImages: ['img/max01.jpg', 'img/max02.jpg'], period: '2024.07', role: 'Publishing',
  },
  {
    id: 'eat', category: 'frontend', title: '맛콩맛집',
    summary: '공공데이터와 지도 기반으로 맛집을 탐색하는 서비스',
    scope: 'API 연동 · 필터 UI · 지도 화면 · 상태 관리 · 배포',
    points: ['지역·음식 카테고리 다중 필터', '실시간 API 연동과 지도 마커', '즐겨찾기와 최근 조회 저장'],
    stack: ['React', 'Vite', 'Tailwind CSS', '공공데이터 API', 'Kakao Maps', 'Netlify'],
    image: 'img/character-thumb.png',
    detailImages: ['img/eat-layout-main.png', 'img/eat-layout-sub-preview.png'],
    period: '2025.01 - 2025.02', role: 'Frontend',
    liveUrl: '#', githubUrl: '#',
  },
  {
    id: 'emotion', category: 'fullstack', title: '감정 블로그 플랫폼',
    summary: '감정 기록과 콘텐츠 공유 흐름을 설계한 블로그 플랫폼',
    scope: 'API · 인증 흐름 · DB 모델링 · UI 연동',
    points: ['회원 인증과 게시글 CRUD', '감정 기반 콘텐츠 분류', '데이터 모델 설계 및 API 연동'],
    stack: ['Spring Boot', 'PostgreSQL', 'React'], image: 'img/emotion-favicon-thumb.png',
    detailImages: ['img/emotion-login-preview.png', 'img/emotion-post-preview.png', 'img/emotion-my-preview.png'],
    period: '2025.03 - 2025.05', role: 'Full Stack', liveUrl: '#', githubUrl: '#',
  },
  {
    id: 'dashboard', category: 'fullstack', title: '업무 관리 대시보드',
    summary: '업무 현황과 진행 상태를 한 화면에서 관리하는 서비스',
    scope: '서비스 설계 · REST API · 데이터 모델링 · 배포',
    points: ['업무 상태 관리', '권한별 화면 분기', '대시보드 데이터 시각화'],
    stack: ['Spring Boot', 'PostgreSQL', 'React'], image: 'img/pro05.png',
    detailImages: ['img/emotion-my-preview.png'], period: '2025.06', role: 'Full Stack',
  },
];
