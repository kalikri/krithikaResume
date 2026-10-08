import React, { useState } from 'react';
import {
  ArrowDownToLine,
  ArrowUpRight,
  BriefcaseBusiness,
  ChevronDown,
  Code2,
  GraduationCap,
  LayoutDashboard,
  MapPin,
  PanelsTopLeft,
  Sparkles,
} from 'lucide-react';

const summary = [
  'Extensive experience creating style guides, best practices, and UI standards for enterprise and consumer applications.',
  'Experienced with CSS frameworks including Bootstrap and preprocessors such as LESS and SASS.',
  'Implemented page optimization techniques and responsive layouts using media queries, Bootstrap, and Flexbox.',
  'Hands-on experience with JIRA for bug and issue tracking.',
  'Worked with MongoDB, SQL Server, MySQL, and Oracle databases.',
  'Used Grunt, npm, Bower, and GitHub across front-end development workflows.',
];

const skillGroups = [
  { label: 'Web technologies', count: '13', items: ['HTML4 / HTML5', 'CSS2 / CSS3', 'JavaScript', 'TypeScript', 'AJAX', 'JSON', 'XML', 'RESTful Web API', 'Bootstrap', 'SASS', 'LESS'] },
  { label: 'Frameworks', count: '04', items: ['React', 'AngularJS', 'jQuery', 'MVC'] },
  { label: 'Tools & workflow', count: '08', items: ['npm', 'Bower', 'Grunt', 'Gulp', 'JIRA', 'Webpack', 'Git', 'SVN'] },
  { label: 'Debugging & testing', count: '05', items: ['Chrome DevTools', 'Firebug', 'Web Inspector', 'Karma', 'Jasmine'] },
  { label: 'Databases', count: '04', items: ['MongoDB', 'SQL Server', 'MySQL', 'Oracle'] },
];

const experience = [
  {
    role: 'Software Engineer',
    company: 'HomeDepot',
    location: 'Pflugerville, Texas',
    period: 'Feb 2024 — Aug 2026',
    current: true,
    color: 'lime',
    highlights: [
      'Owned the end-to-end design, development, testing, and deployment of customer-facing front-end features by creating reusable UI components, GraphQL API requests, and state-management patterns, contributing to a 6% increase in conversion and $10M in revenue while improving engagement across critical customer journeys.',
      'Improved application reliability and user experience by resolving UI/UX defects and production issues within established SLAs, resulting in a 30% reduction in customer-reported issues across critical user flows.',
      'Introduced AI-assisted code review practices to proactively identify design risks, performance bottlenecks, and code optimization opportunities, reducing code review time by 50% and increasing overall engineering throughput.',
      'Strengthened code quality and release reliability by increasing automated unit test coverage from 80% to 95% across 30+ repositories, contributing to a 20% reduction in regression defects.',
      'Led the adoption of AI-driven test automation using Playwright MCP for test generation and maintenance, reducing testing effort from approximately two engineer-equivalents to 0.5 while accelerating feature delivery and improving test coverage.',
      'Designed and implemented AI-driven production debugging and troubleshooting agents, reducing issue investigation time from hours to minutes and accelerating incident diagnosis and resolution.',
      'Provided technical leadership during project discovery, proposal, and UX planning, identifying performance bottlenecks, architectural risks, and scalability considerations early in the lifecycle; technical recommendations accelerated project delivery by approximately one month.',
      'Partnered with engineers, designers, product managers, and business stakeholders to define front-end architecture, assess technical feasibility, and establish scalable implementation strategies, driving major initiatives from concept through production delivery.',
      'Drove front-end performance and reliability optimization by monitoring Core Web Vitals (CLS, LCP, and INP) and proactively identifying and resolving JavaScript and API errors using New Relic and Quantum Metrics.',
    ],
  },
  {
    role: 'Front-End Developer - Volunteer',
    company: 'VR Superstore',
    location: 'Pflugerville, Texas',
    period: 'Oct 2022 — Mar 2023',
    current: false,
    color: 'blue',
    highlights: [
      'Architected client-side navigation with React Router, structuring the app as a single-page application with seamless view transitions across key user tasks.',
      'Modernized the codebase by migrating class components to functional components with hooks, simplifying state and lifecycle logic and making components easier to reuse and test.',
      'Designed a component-based architecture with loosely coupled, reusable UI units, speeding up feature development and reducing the effort of making changes.',
      'Improved Core Web Vitals by optimizing AJAX requests to reduce LCP and reducing main-thread blocking to bring INP under 200 ms, delivering a faster, more responsive experience.',
      'Delivered mobile-first, responsive layouts with Bootstrap, media queries, and SASS, keeping the UI consistent across devices and maintainable as it grew.',
      'Diagnosed UI friction in high-traffic flows using GA4 data on form abandonment, scroll depth, and device-specific conversion, turning analytics into a prioritized backlog of front-end fixes.',
      'Refactored legacy front-end code, responsive layouts, and touch-target sizing based on those findings, improving mobile conversion rate by 4%.',
      'Engineered a standardized Adobe Analytics data layer using the DDO schema, with event-driven tracking for clicks, form interactions, and conversion events across critical user flows, enabling product and marketing teams to attribute conversion lift to specific UI interactions and prioritize optimization work.',
    ],
  },
  {
    role: 'Web / UI Developer',
    company: 'IBM India Pvt Ltd',
    location: 'India',
    period: 'Jun 2013 — Nov 2016',
    current: false,
    color: 'coral',
    highlights: [
      'Developed responsive web applications with AngularJS and Bootstrap.',
      'Used AngularJS modules, factories, services, and providers to support application integration.',
      'Built form validation, grids, search, sorting, and pagination; worked with DOM manipulation and dynamic content.',
      'Maintained consistent design patterns and built single-page applications with UI-Router and controller-linked views.',
      'Used MongoDB for persistence and Node.js to interact with the database; worked with SVN and Git.',
      'Practiced test-driven development with Karma, Jasmine, and JUnit, and wrote JavaScript unit tests.',
      'Built controllers, directives, filters, and factories; used $http interceptors and nested routing.',
      'Collaborated with clients, analysts, and teammates to review requirements and plan development.',
      'Used npm to install Angular CLI, TypeScript, and other development libraries.',
    ],
  },
];

const panes = [
  { id: 'overview', label: 'Overview', icon: LayoutDashboard },
  { id: 'experience', label: 'Experience', icon: BriefcaseBusiness, count: '03' },
  { id: 'skills', label: 'Skills', icon: Code2 },
  { id: 'education', label: 'Education', icon: GraduationCap },
];

function Sidebar({ activePane, onNavigate }) {
  return (
    <aside className="sidebar">
      <a className="wordmark" href="#overview" onClick={() => onNavigate('overview')} aria-label="Go to overview">
        <span className="wordmark-mark">K<span>.</span></span>
        <span className="wordmark-label">PERSONAL<br />PORTFOLIO</span>
      </a>
      <div className="sidebar-rule" />
      <p className="eyebrow sidebar-heading">WORKSPACE</p>
      <nav className="side-nav" aria-label="Resume sections">
        {panes.map(({ id, label, icon: Icon, count }) => (
          <button key={id} className={`nav-item ${activePane === id ? 'active' : ''}`} onClick={() => onNavigate(id)}>
            <Icon size={17} strokeWidth={1.8} />
            <span>{label}</span>
            {count && <span className="nav-count">{count}</span>}
            {activePane === id && <span className="nav-indicator" />}
          </button>
        ))}
      </nav>
      <div className="sidebar-bottom">
        <div className="availability"><span className="availability-dot" /> OPEN TO OPPORTUNITIES</div>
        <p className="sidebar-footnote">A little about my work,<br />all in one place.</p>
        <span className="sidebar-version">RESUME 2024—NOW</span>
      </div>
    </aside>
  );
}

function Topbar({ onPrint }) {
  return (
    <header className="topbar">
      <div className="breadcrumb"><span>PORTFOLIO</span><span className="breadcrumb-slash">/</span><span className="breadcrumb-current">RESUME</span></div>
      <button className="print-button" onClick={onPrint}><ArrowDownToLine size={15} /><span>Print resume</span></button>
    </header>
  );
}

function SectionHeading({ index, title, detail }) {
  return (
    <div className="section-heading">
      <div><span className="section-index">{index}</span><h2>{title}</h2></div>
      {detail && <span className="section-detail">{detail}</span>}
    </div>
  );
}

function IntroCard({ onNavigate }) {
  return (
    <section className="intro-card">
      <div className="intro-topline"><span className="eyebrow"><Sparkles size={13} /> FRONT-END ENGINEER</span><span className="intro-id">PROFILE / 001</span></div>
      <div className="intro-main">
        <div className="avatar" aria-hidden="true">K<span>.</span></div>
        <div className="intro-copy">
          <p className="intro-kicker">HELLO, I'M</p>
          <h1>Krithika</h1>
          <p className="intro-description">I build thoughtful, responsive web experiences that make the complex feel simple.</p>
          <div className="intro-meta"><span><MapPin size={14} /> Texas, USA</span><span className="meta-divider" /><span className="meta-status"><i /> Available for opportunities</span></div>
        </div>
        <div className="intro-stamp"><span>FRONT-END</span><Code2 size={20} /><span>DEVELOPER</span></div>
      </div>
      <div className="intro-bottom"><span>DESIGN MINDED. DETAIL DRIVEN. BUILT FOR THE WEB.</span><button onClick={() => onNavigate('experience')}>EXPLORE EXPERIENCE <ArrowUpRight size={14} /></button></div>
    </section>
  );
}

function SummarySection() {
  return (
    <section className="content-section summary-section">
      <SectionHeading index="01" title="Professional summary" detail="A QUICK INTRODUCTION" />
      <div className="summary-grid">
        {summary.map((item, index) => (
          <article className="summary-item" key={item}>
            <span className="summary-number">0{index + 1}</span>
            <p>{item}</p>
            <ArrowUpRight className="summary-arrow" size={14} />
          </article>
        ))}
      </div>
    </section>
  );
}

function SkillSection() {
  const [selectedGroup, setSelectedGroup] = useState('All');
  const groups = ['All', ...skillGroups.map(({ label }) => label)];
  const visibleGroups = selectedGroup === 'All' ? skillGroups : skillGroups.filter(({ label }) => label === selectedGroup);
  return (
    <section className="content-section skills-section">
      <SectionHeading index="02" title="Skills & tools" detail="THE EVERYDAY TOOLKIT" />
      <div className="filter-row" role="group" aria-label="Filter skill groups">
        {groups.map((group) => <button key={group} className={`filter-chip ${selectedGroup === group ? 'selected' : ''}`} onClick={() => setSelectedGroup(group)}>{group}</button>)}
      </div>
      <div className="skill-grid">
        {visibleGroups.map(({ label, count, items }, index) => (
          <article className={`skill-card skill-card-${index + 1}`} key={label}>
            <div className="skill-card-top"><span className="skill-card-index">0{skillGroups.findIndex((group) => group.label === label) + 1}</span><span className="skill-card-count">{count} TOOLS</span></div>
            <h3>{label}</h3>
            <div className="skill-tags">{items.map((item) => <span className="skill-tag" key={item}>{item}</span>)}</div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ExperienceSection({ featuredOnly = false }) {
  const [expanded, setExpanded] = useState(0);
  const visibleExperience = featuredOnly ? experience.slice(0, 1) : experience;
  return (
    <section className="content-section experience-section">
      <SectionHeading index="03" title={featuredOnly ? 'Latest experience' : 'Experience'} detail={featuredOnly ? 'MOST RECENT ROLE' : 'SELECT A ROLE TO EXPLORE'} />
      <div className="experience-list">
        {visibleExperience.map((job, index) => {
          const isExpanded = expanded === index;
          return (
            <article className={`experience-card ${isExpanded ? 'expanded' : ''}`} key={job.company}>
              <button className="experience-trigger" onClick={() => setExpanded(isExpanded ? -1 : index)} aria-expanded={isExpanded}>
                <span className={`company-mark ${job.color}`}>{job.company === 'IBM India Pvt Ltd' ? 'IBM' : job.company === 'Kforce' ? 'K' : 'VR'}</span>
                <span className="experience-title"><span className="experience-role">{job.role}</span><span className="experience-company">{job.company}<span className="company-dot">·</span>{job.location}</span></span>
                <span className="experience-period">{job.period}{job.current && <span className="current-badge">CURRENT</span>}</span>
                <span className={`expand-icon ${isExpanded ? 'open' : ''}`}><ChevronDown size={17} /></span>
              </button>
              {isExpanded && <div className="experience-details"><div className="detail-label">WHAT I WORKED ON</div><ul>{job.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul></div>}
            </article>
          );
        })}
      </div>
    </section>
  );
}

function EducationSection() {
  return (
    <section className="content-section education-section">
      <SectionHeading index="04" title="Education" detail="FOUNDATIONS" />
      <article className="education-card">
        <div className="education-icon"><GraduationCap size={23} strokeWidth={1.6} /></div>
        <div className="education-copy"><span className="education-label">BACHELOR'S DEGREE</span><h3>Bachelor of Technology</h3><p>Ceramic Technology</p></div>
        <span className="education-mark">B.TECH</span>
      </article>
    </section>
  );
}

function OverviewPane({ onNavigate }) {
  return <><IntroCard onNavigate={onNavigate} /><SummarySection /><ExperienceSection featuredOnly /><SkillSection /><EducationSection /></>;
}

function PaneContent({ activePane, onNavigate }) {
  if (activePane === 'experience') return <><div className="pane-heading"><span className="eyebrow">CAREER HISTORY</span><h1>Experience<span className="title-period">.</span></h1><p>Teams, products, and the work in between.</p></div><ExperienceSection /></>;
  if (activePane === 'skills') return <><div className="pane-heading"><span className="eyebrow">CAPABILITIES</span><h1>Skills & tools<span className="title-period">.</span></h1><p>Technologies I use to bring ideas to the browser.</p></div><SkillSection /></>;
  if (activePane === 'education') return <><div className="pane-heading"><span className="eyebrow">BACKGROUND</span><h1>Education<span className="title-period">.</span></h1><p>The foundation behind the work.</p></div><EducationSection /></>;
  return <OverviewPane onNavigate={onNavigate} />;
}

export default function ResumeApp() {
  const [activePane, setActivePane] = useState('overview');
  const navigate = (pane) => {
    setActivePane(pane);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div className="app-shell">
      <Sidebar activePane={activePane} onNavigate={navigate} />
      <main className="main-area">
        <Topbar onPrint={() => window.print()} />
        <div className="page-content" key={activePane}>
          <PaneContent activePane={activePane} onNavigate={navigate} />
          <footer className="page-footer"><span>KRITHIKA </span> FRONT-END ENGINEER<span>MADE WITH INTENTION <PanelsTopLeft size={13} /></span></footer>
        </div>
      </main>
    </div>
  );
}