import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';
import { collaboration, navItems, projects, skills, type PageId, type Project } from './data/portfolio';

const asset = (path: string) => import.meta.env.BASE_URL + path;

function Sidebar({ page, setPage }: { page: PageId; setPage: (page: PageId) => void }) {
  const [open, setOpen] = useState(false);
  const select = (id: PageId) => { setPage(id); setOpen(false); };
  return (
    <>
      <button className="menu-toggle" aria-label="메뉴 열기" onClick={() => setOpen(!open)}>☰</button>
      <aside className={'sidebar ' + (open ? 'is-open' : '')}>
        <div className="brand"><span>H</span><strong>Hyehyeon</strong></div>
        <nav aria-label="주요 메뉴">
          {navItems.map((item) => (
            <button key={item.id} className={page === item.id ? 'active' : ''} onClick={() => select(item.id)}>
              {item.label}
            </button>
          ))}
        </nav>
        <div className="sidebar-links">
          <a href="mailto:hyeonn4713@gmail.com">Email</a>
          <a href="https://github.com/hyeon924" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </aside>
    </>
  );
}

function Intro({ setPage }: { setPage: (page: PageId) => void }) {
  return <section className="intro page-content">
    <div className="hero-copy">
      <p className="eyebrow">FULL-STACK DEVELOPER PORTFOLIO</p>
      <p className="name">HYEHYEON</p>
      <h1>Full-stack Developer</h1>
      <p className="lead">사용자 화면과 서버 로직, 데이터 흐름을 함께 설계하여 작동하는 서비스를 만드는 3년차 풀스택 개발자입니다.</p>
      <div className="hero-actions">
        <button className="primary-button" onClick={() => setPage('fullstack')}>프로젝트 보기</button>
        <a className="secondary-button" href="mailto:hyeonn4713@gmail.com">이메일 보내기</a>
        <a className="secondary-button" href="https://github.com/hyeon924" target="_blank" rel="noreferrer">GitHub</a>
      </div>
    </div>
  </section>;
}

function Heading({ number, title, description }: { number: string; title: string; description: React.ReactNode }) {
  return <header className="page-heading">
    <p className="eyebrow">{number}</p>
    <h1>{title}</h1>
    <div className="page-description">{description}</div>
  </header>;
}

function SkillsPage() {
  return <section className="page-content">
    <Heading number="01" title="Skills" description={<><span>프로젝트에서 맡은 역할을 Frontend, UI & Experience, Backend, Collaboration 네 가지 역량으로 정리했습니다.</span><br /><span>구현 과정에서 사용한 기술과 업무 범위를 구체적으로 확인할 수 있습니다.</span></>} />
    <div className="capability-grid">
      {skills.map((skill) => <article className="capability-card" key={skill.title}>
        <div className="capability-title"><span className="capability-icon">{skill.icon}</span><h2>{skill.title}</h2></div>
        <ul>{skill.items.map((item) => <li key={item}>{item}</li>)}</ul>
      </article>)}
    </div>
  </section>;
}

function CollaborationPage() {
  return <section className="page-content">
    <Heading number="02" title="Collaboration" description="작업 내용을 공유 가능한 단위로 정리하고, 요구사항부터 변경 이력까지 팀이 확인할 수 있는 흐름으로 관리합니다." />
    <div className="collaboration-grid">
      {collaboration.map((item, index) => <article className="collaboration-card" key={item.title}>
        <span>0{index + 1}</span><h2>{item.title}</h2><p>{item.text}</p>
      </article>)}
    </div>
  </section>;
}

function ProjectCard({ project, onOpen }: { project: Project; onOpen: (project: Project) => void }) {
  return <button className="project-card" onClick={() => onOpen(project)}>
    <div className="project-card-copy">
      <p className="project-category">{project.category}</p>
      <h2>{project.title}</h2>
      <p>{project.summary}</p>
      <div className="scope"><strong>작업 범위</strong><span>{project.scope}</span></div>
      <ul>{project.points.map((point) => <li key={point}>{point}</li>)}</ul>
      <div className="stack-list">{project.stack.map((stack) => <span key={stack}>{stack}</span>)}</div>
    </div>
    <img src={asset(project.image)} alt={project.title + ' 대표 화면'} />
  </button>;
}

function ProjectPage({ category, number, title, description, onOpen }: { category: Project['category']; number: string; title: string; description: string; onOpen: (project: Project) => void }) {
  const list = useMemo(() => projects.filter((project) => project.category === category), [category]);
  return <section className="page-content">
    <Heading number={number} title={title} description={description} />
    <div className={'project-grid ' + category}>
      {list.map((project) => <ProjectCard key={project.id} project={project} onOpen={onOpen} />)}
      {category === 'frontend' && [1, 2].map((item) => <article className="private-card" key={item}><span>🔒</span><p>PRIVATE PROJECT</p><h2>비공개 프로젝트</h2><small>세부 정보는 추후 업데이트됩니다.</small></article>)}
    </div>
  </section>;
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const [tab, setTab] = useState<'info' | 'screens'>('info');
  const [imageIndex, setImageIndex] = useState(0);
  useEffect(() => {
    const close = (event: KeyboardEvent) => event.key === 'Escape' && onClose();
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, [onClose]);
  const detailImage = project.detailImages[imageIndex];
  const next = () => setImageIndex((index) => (index + 1) % project.detailImages.length);
  const previous = () => setImageIndex((index) => (index - 1 + project.detailImages.length) % project.detailImages.length);
  return <motion.div className="modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
    <motion.section className="project-modal" role="dialog" aria-modal="true" aria-label={project.title + ' 상세 정보'} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 16 }}>
      <header className="modal-header">
        <div><p>{project.role}</p><h2>{project.title}</h2></div>
        <button className="icon-button" onClick={onClose} aria-label="상세 정보 닫기">×</button>
      </header>
      <div className="modal-tabs">
        <button className={tab === 'info' ? 'active' : ''} onClick={() => setTab('info')}>구현 정보</button>
        <button className={tab === 'screens' ? 'active' : ''} onClick={() => setTab('screens')}>주요 화면</button>
      </div>
      {tab === 'info' ? <div className="modal-info">
        <img src={asset(project.image)} alt="" />
        <div><p className="modal-label">구현 포인트</p><ul>{project.points.map((point) => <li key={point}>{point}</li>)}</ul>
          <dl><div><dt>제작 기간</dt><dd>{project.period}</dd></div><div><dt>작업 범위</dt><dd>{project.scope}</dd></div></dl>
          <div className="modal-links">{project.liveUrl && <a href={project.liveUrl}>배포 사이트 ↗</a>}{project.githubUrl && <a href={project.githubUrl}>GitHub ↗</a>}</div>
        </div>
      </div> : <div className="screen-viewer">
        <img src={asset(detailImage)} alt={project.title + ' 주요 화면 ' + (imageIndex + 1)} />
        <div className="viewer-controls"><button onClick={previous} aria-label="이전 화면">‹</button><span>{imageIndex + 1} / {project.detailImages.length}</span><button onClick={next} aria-label="다음 화면">›</button></div>
      </div>}
    </motion.section>
  </motion.div>;
}

export default function App() {
  const [page, setPage] = useState<PageId>('intro');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const current = page === 'intro' ? <Intro setPage={setPage} /> :
    page === 'skills' ? <SkillsPage /> :
    page === 'collaboration' ? <CollaborationPage /> :
    page === 'publishing' ? <ProjectPage category="publishing" number="03" title="Publishing" description="정적인 화면을 정확하게 구현하고, 반응형 구조와 브랜드 톤을 맞춘 작업입니다." onOpen={setSelectedProject} /> :
    page === 'frontend' ? <ProjectPage category="frontend" number="04" title="Frontend" description="사용자 흐름, 컴포넌트 구성, 배포까지 고려한 프론트엔드 프로젝트입니다." onOpen={setSelectedProject} /> :
    <ProjectPage category="fullstack" number="05" title="Full Stack" description="화면 구현부터 API, 데이터 모델링까지 서비스 흐름을 연결한 프로젝트입니다." onOpen={setSelectedProject} />;
  return <main className="app-shell">
    <Sidebar page={page} setPage={setPage} />
    <div className="page-area"><AnimatePresence mode="wait"><motion.div key={page} className="page-motion" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.22 }}>{current}</motion.div></AnimatePresence></div>
    <AnimatePresence>{selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}</AnimatePresence>
  </main>;
}
