import React from 'react';
import { BrowserRouter, Routes, Route, NavLink, Navigate, useNavigate, useLocation } from 'react-router-dom';
import AdmissionsPredictor from './AdmissionsPredictor';
import EssayAnalyzer from './EssayAnalyzer';
import ScholarshipFinder from './ScholarshipFinder';
import ResumeBuilder from './ResumeBuilder';
import AdmissionsDataViewer from './AdmissionsDataViewer';
import CollegeChatbot from './CollegeChatbot';
import './App.css';

const navigationLinks = [
  { to: '/', label: 'Home', end: true },
  { to: '/admissions', label: 'Admissions Predictor' },
  { to: '/essay', label: 'Essay Analyzer' },
  { to: '/scholarship', label: 'Scholarship Finder' },
  { to: '/resume', label: 'Resume Builder' },
  { to: '/dataset', label: 'Dataset Viewer' },
];

const toolCards = [
  {
    title: 'Admissions Predictor',
    body: 'See how your GPA, scores, and extracurriculars influence acceptance ranges across reach, match, and safety schools.',
    action: 'Explore predictor',
    path: '/admissions'
  },
  {
    title: 'Essay Analyzer',
    body: 'Upload drafts to get tone, structure, and impact feedback grounded in real admissions rubrics.',
    action: 'Review essays',
    path: '/essay'
  },
  {
    title: 'Scholarship Finder',
    body: 'Surface scholarships tailored to your background, interests, and deadlines so you never miss an opportunity.',
    action: 'Browse scholarships',
    path: '/scholarship'
  },
  {
    title: 'Resume Builder',
    body: 'Transform activities into compelling resume bullets with language that highlights leadership and outcomes.',
    action: 'Build resume',
    path: '/resume'
  },
  {
    title: 'Dataset Viewer',
    body: 'Analyze historic admissions data to benchmark your profile and refine school lists with confidence.',
    action: 'View data',
    path: '/dataset'
  }
];

const journeySteps = [
  {
    title: 'Understand your position',
    description: 'Import or enter your academic profile to benchmark against admissions trends within minutes.'
  },
  {
    title: 'Plan your story',
    description: 'Use guided prompts and feedback loops to align essays, activities, and recommendations.'
  },
  {
    title: 'Stay on top of deadlines',
    description: 'Track requirements, scholarship dates, and counselor feedback from one organized workspace.'
  }
];

const resourceLinks = [
  {
    label: 'Admissions playbook',
    description: 'Step-by-step guidance on how to get the most out of Collegely this application cycle.'
  },
  {
    label: 'Counselor toolkit',
    description: 'Align tasks with students and families using shared timelines and checklists.'
  },
  {
    label: 'Product updates',
    description: 'See what features are shipping next and vote on what would help you most.'
  }
];

function HomePage() {
  const navigate = useNavigate();

  const handleScrollToJourney = () => {
    const target = document.getElementById('journey-info');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="home-main">
      <section className="home-hero" id="about">
        <div className="home-container">
          <div className="home-hero-text">
            <p className="home-kicker">College planning, simplified</p>
            <h1>All of your admissions prep in one place.</h1>
            <p className="home-hero-copy">
              Collegely gives students, families, and counselors a shared workspace to manage applications,
              essays, scholarships, and timelines with clarity from day one.
            </p>
            <div className="home-cta">
              <button
                type="button"
                className="home-btn primary"
                onClick={() => {
                  navigate('/admissions');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                Explore tools
              </button>
              <button
                type="button"
                className="home-btn ghost"
                onClick={handleScrollToJourney}
              >
                See how it helps
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="home-section" id="tools">
        <div className="home-container">
          <h2>Explore Collegely tools</h2>
          <p className="home-section-copy">
            Jump into the feature that matters most right now. Each tool is connected so your work stays in sync
            across the entire admissions journey.
          </p>
          <div className="home-card-grid">
            {toolCards.map((card) => (
              <article key={card.title} className="home-card">
                <h3>{card.title}</h3>
                <p>{card.body}</p>
                <button
                  type="button"
                  className="home-card-action"
                  onClick={() => {
                    navigate(card.path);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                >
                  {card.action} →
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section alt" id="journey-info">
        <div className="home-container">
          <h2>Why students and counselors choose Collegely</h2>
          <div className="home-journey-grid">
            {journeySteps.map((step) => (
              <article key={step.title} className="home-journey-card">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section" id="resources">
        <div className="home-container">
          <h2>Keep learning as you explore</h2>
          <div className="home-resource-grid">
            {resourceLinks.map((item) => (
              <article key={item.label} className="home-resource-card">
                <h3>{item.label}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function FeaturePage({ children }) {
  return (
    <div className="feature-page">
      <div className="feature-page-inner">
        {children}
      </div>
    </div>
  );
}

function Layout() {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToHomeSection = (sectionId) => {
    const performScroll = () => {
      const target = document.getElementById(sectionId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };

    if (location.pathname !== '/') {
      navigate('/', { replace: false });
      setTimeout(performScroll, 120);
    } else {
      performScroll();
    }
  };

  return (
    <div className="home">
      <header className="home-header">
        <div className="home-header-inner">
          <button
            type="button"
            className="home-brand"
            onClick={() => {
              navigate('/');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            aria-label="Collegely home"
          >
            <img src="CollegelyLogo.png" alt="Collegely" className="home-logo" />
          </button>

          <nav className="home-nav" aria-label="Primary">
            {navigationLinks.map(({ to, label, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                className={({ isActive }) => `home-nav-button ${isActive ? 'active' : ''}`}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                {label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main className="app-main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/admissions"
            element={(
              <FeaturePage>
                <AdmissionsPredictor />
              </FeaturePage>
            )}
          />
          <Route
            path="/essay"
            element={(
              <FeaturePage>
                <EssayAnalyzer />
              </FeaturePage>
            )}
          />
          <Route
            path="/scholarship"
            element={(
              <FeaturePage>
                <ScholarshipFinder />
              </FeaturePage>
            )}
          />
          <Route
            path="/resume"
            element={(
              <FeaturePage>
                <ResumeBuilder />
              </FeaturePage>
            )}
          />
          <Route
            path="/dataset"
            element={(
              <FeaturePage>
                <AdmissionsDataViewer />
              </FeaturePage>
            )}
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <footer className="home-footer">
        <div className="home-container home-footer-inner">
          <span>© {new Date().getFullYear()} Collegely</span>
          <div className="home-footer-links">
            <a href="mailto:hello@collegely.ai">Contact</a>
            <button
              type="button"
              onClick={() => {
                navigate('/admissions');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="home-footer-link-btn"
            >
              Product
            </button>
            <button
              type="button"
              onClick={() => scrollToHomeSection('resources')}
              className="home-footer-link-btn"
            >
              Resources
            </button>
          </div>
        </div>
      </footer>

      <CollegeChatbot />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}
