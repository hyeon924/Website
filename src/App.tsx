import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useMemo, useRef, useState } from 'react';
import { collaboration, navItems, projects, skills, type PageId, type Project } from './data/portfolio';

const asset = (path: string) => import.meta.env.BASE_URL + path;
function Sidebar({ page, setPage }: { page: PageId; setPage: (page: PageId) => void }) {
  const [open, setOpen] = useState(false);
  const select = (id: PageId) => { setPage(id); setOpen(false); };
  return (
    <>
      <button className="menu-toggle" aria-label={open ? '메뉴 닫기' : '메뉴 열기'} aria-expanded={open} onClick={() => setOpen(!open)}>☰</button>
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
      <p className="lead"><span>사용자 화면과 서버 로직, 데이터 흐름을 함께 설계해 작동하는 서비스를 만드는,</span><span>3년차 풀스택 개발자입니다.</span></p>
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
  return <section className="page-content standard-page">
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
  return <section className="page-content standard-page">
    <Heading number="02" title="Collaboration" description="작업 내용을 공유 가능한 단위로 정리하고, 요구사항부터 변경 이력까지 팀이 확인할 수 있는 흐름으로 관리합니다." />
    <div className="collaboration-grid">
      {collaboration.map((item, index) => <article className="collaboration-card" key={item.title}>
        <span className="collaboration-card__number">0{index + 1}</span><div className="collaboration-card__title"><span className="collaboration-tool-icon" aria-hidden="true">{item.icon}</span><h2>{item.title}</h2></div><p>{item.text}</p>
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
  const publicProjects = list.filter((project) => !project.isPrivate);
  const privateProjectCount = list.filter((project) => project.isPrivate).length + (category === 'frontend' ? 2 : 0);
  return <section className={'page-content project-page ' + category}>
    <Heading number={number} title={title} description={description} />
    <div className={'project-grid ' + category}>
      {publicProjects.map((project) => <ProjectCard key={project.id} project={project} onOpen={onOpen} />)}
      {Array.from({ length: privateProjectCount }, (_, index) => <article className="private-card" key={'private-' + index}><span>🔒</span><p>PRIVATE PROJECT</p><h2>비공개 프로젝트</h2><small>세부 정보는 추후 업데이트됩니다.</small></article>)}
    </div>
  </section>;
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const [tab, setTab] = useState<'info' | 'screens' | 'troubleshooting'>('info');
  const [imageIndex, setImageIndex] = useState(0);
  const [troubleshootingIndex, setTroubleshootingIndex] = useState(0);
  const [showTroubleshootingMedia, setShowTroubleshootingMedia] = useState(false);
  const [showUnavailableNotice, setShowUnavailableNotice] = useState(false);
  const unavailableNoticeTimer = useRef<number | undefined>(undefined);
  useEffect(() => {
    const close = (event: KeyboardEvent) => event.key === 'Escape' && onClose();
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, [onClose]);
  useEffect(() => () => window.clearTimeout(unavailableNoticeTimer.current), []);
  const detailImage = project.detailImages[imageIndex];
  const troubleshooting = project.troubleshooting ?? [];
  const currentTroubleshooting = troubleshooting[troubleshootingIndex];
  const next = () => setImageIndex((index) => (index + 1) % project.detailImages.length);
  const previous = () => setImageIndex((index) => (index - 1 + project.detailImages.length) % project.detailImages.length);
  const nextTroubleshooting = () => setTroubleshootingIndex((index) => (index + 1) % troubleshooting.length);
  const previousTroubleshooting = () => setTroubleshootingIndex((index) => (index - 1 + troubleshooting.length) % troubleshooting.length);
  const showUnavailable = () => {
    window.clearTimeout(unavailableNoticeTimer.current);
    setShowUnavailableNotice(true);
    unavailableNoticeTimer.current = window.setTimeout(() => setShowUnavailableNotice(false), 3000);
  };
  return <motion.div className="modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
    <motion.section className={'project-modal ' + (project.category === 'publishing' ? 'publishing-modal' : '')} role="dialog" aria-modal="true" aria-label={project.title + ' 상세 정보'} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 16 }}>
      {project.category === 'publishing' ? <>
        <header className="publishing-modal__header">
          <div><p>{project.role}</p><h2>{project.title}</h2></div>
          <button className="icon-button" onClick={onClose} aria-label="상세 정보 닫기">×</button>
        </header>
        <div className="publishing-modal__layout">
          <section className="publishing-modal__focus">
            <figure className="publishing-modal__mark"><img src={asset(project.image)} alt={project.title + ' 대표 이미지'} /></figure>
            <div className="publishing-modal__focus-content">
              <h3>구현 포인트</h3>
              <ul>{project.points.map((point) => <li key={point}>{point}</li>)}</ul>
              <dl><div><dt>제작 기간</dt><dd>{project.period}</dd></div><div><dt>작업 범위</dt><dd>{project.scope}</dd></div></dl>
            </div>
            <footer className="publishing-modal__links">
              {project.liveUrl && <button type="button" onClick={showUnavailable}>사이트 보기 ↗</button>}
              {project.subUrl && <button type="button" onClick={showUnavailable} className="secondary">서브 페이지 ↗</button>}
              {project.githubUrl && <button type="button" onClick={showUnavailable} className="secondary">GitHub ↗</button>}
            </footer>
          </section>
          <section className="publishing-modal__screens">
            <h3>주요 화면</h3>
            <div className="publishing-modal__carousel">
              <img src={asset(detailImage)} alt={project.title + ' 주요 화면 ' + (imageIndex + 1)} />
              <div className="publishing-modal__controls">
                <button onClick={previous} aria-label="이전 화면">‹</button><span>{imageIndex + 1} / {project.detailImages.length}</span><button onClick={next} aria-label="다음 화면">›</button>
              </div>
            </div>
          </section>
        </div>
      </> : <>
      <header className="modal-header">
        <div><p>{project.role}</p><h2>{project.title}</h2></div>
        <button className="icon-button" onClick={onClose} aria-label="상세 정보 닫기">×</button>
      </header>
      <div className="modal-tabs" role="tablist" aria-label={project.title + ' 상세 정보'}>
        <button className={tab === 'info' ? 'active' : ''} role="tab" aria-selected={tab === 'info'} onClick={() => setTab('info')}>프로젝트 소개</button>
        <button className={tab === 'screens' ? 'active' : ''} role="tab" aria-selected={tab === 'screens'} onClick={() => setTab('screens')}>주요 화면</button>
        <button className={tab === 'troubleshooting' ? 'active' : ''} role="tab" aria-selected={tab === 'troubleshooting'} onClick={() => setTab('troubleshooting')}>트러블슈팅</button>
      </div>
      {tab === 'info' && <div className="modal-info project-overview">
        <figure className="project-overview__media"><img src={asset(project.image)} alt={project.title + ' 대표 이미지'} /></figure>
        <div className="project-overview__content"><p className="modal-label">PROJECT OVERVIEW</p><h3>{project.title}</h3><p className="project-overview__summary">{project.summary}</p>
          <p className="modal-label">핵심 구현</p><ul>{project.points.map((point) => <li key={point}>{point}</li>)}</ul>
          <dl><div><dt>제작 기간</dt><dd>{project.period}</dd></div><div><dt>작업 범위</dt><dd>{project.scope}</dd></div></dl>
          <div className="modal-links">{project.liveUrl && <button type="button" onClick={showUnavailable}>배포 사이트 ↗</button>}{project.githubUrl && <button type="button" onClick={showUnavailable}>GitHub ↗</button>}</div>
        </div>
      </div>}
      {tab === 'screens' && <div className="screen-viewer">
        <img src={asset(detailImage)} alt={project.title + ' 주요 화면 ' + (imageIndex + 1)} />
        <div className="viewer-controls"><button onClick={previous} aria-label="이전 화면">‹</button><span>{imageIndex + 1} / {project.detailImages.length}</span><button onClick={next} aria-label="다음 화면">›</button></div>
      </div>}
      {tab === 'troubleshooting' && (currentTroubleshooting ? <section className={'troubleshooting-viewer ' + (showTroubleshootingMedia ? 'has-media' : '')}>
        {currentTroubleshooting.image && <button className="troubleshooting-media-toggle" onClick={() => setShowTroubleshootingMedia((show) => !show)} aria-pressed={showTroubleshootingMedia}>{showTroubleshootingMedia ? '이미지 자료 접기' : '이미지 자료 보기'}</button>}
        <div className="troubleshooting-copy"><p className="modal-label">0{troubleshootingIndex + 1}</p><h3>{currentTroubleshooting.title}</h3><p>{currentTroubleshooting.description}</p></div>
        {showTroubleshootingMedia && currentTroubleshooting.image && <figure><img src={asset(currentTroubleshooting.image)} alt={currentTroubleshooting.title + ' 자료 이미지'} /></figure>}
        <div className="troubleshooting-controls"><button onClick={previousTroubleshooting} aria-label="이전 트러블슈팅">‹</button><span>{troubleshootingIndex + 1} / {troubleshooting.length}</span><button onClick={nextTroubleshooting} aria-label="다음 트러블슈팅">›</button></div>
      </section> : <div className="troubleshooting-empty">트러블슈팅 내용을 정리 중입니다.</div>)}
      </>}
      <AnimatePresence>{showUnavailableNotice && <motion.p className="modal-toast" role="status" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }}>준비 중입니다.</motion.p>}</AnimatePresence>
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
