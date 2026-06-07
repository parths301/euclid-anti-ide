// Euclid SPA Router & Global Interactions
import { renderHome } from './pages/home.js';
import { renderDueDiligence, initDueDiligence } from './pages/due-diligence.js';
import { renderPlatform } from './pages/platform.js';
import { renderIndiaMap, initIndiaMap } from './pages/india-map.js';
import { renderStateProfile, initStateProfile } from './pages/state-profile.js';
import { renderSolutions, initSolutions } from './pages/solutions.js';
import { renderDemo, initDemo } from './pages/demo.js';
import { renderSecurity } from './pages/security.js';
import { renderAbout, initAbout } from './pages/about.js';

// Route definition mapping patterns to render & init functions
const routes = [
  { pattern: /^\/?$/, render: renderHome },
  { pattern: /^\/due-diligence$/, render: renderDueDiligence, init: initDueDiligence, pageName: 'due-diligence' },
  { pattern: /^\/platform$/, render: renderPlatform, pageName: 'platform' },
  { pattern: /^\/india-map$/, render: renderIndiaMap, init: initIndiaMap, pageName: 'india-map' },
  { pattern: /^\/state\/([^/]+)$/, render: (params) => renderStateProfile(params), init: (params) => initStateProfile(params), paramNames: ['id'], pageName: 'india-map' },
  { pattern: /^\/solutions$/, render: renderSolutions, init: initSolutions, pageName: 'solutions' },
  { pattern: /^\/demo$/, render: renderDemo, init: initDemo, pageName: 'demo' },
  { pattern: /^\/security$/, render: renderSecurity, pageName: 'security' },
  { pattern: /^\/about$/, render: renderAbout, init: initAbout, pageName: 'about' }
];

// Router Handler
function router() {
  const hash = window.location.hash || '#/';
  const path = hash.slice(1); // strip leading #

  // Find matching route
  let match = null;
  let params = {};

  for (const route of routes) {
    const execResult = route.pattern.exec(path);
    if (execResult) {
      match = route;
      if (route.paramNames) {
        route.paramNames.forEach((name, i) => {
          params[name] = execResult[i + 1];
        });
      }
      break;
    }
  }

  const mainContent = document.getElementById('main-content');
  if (!mainContent) return;

  if (match) {
    // Render HTML content
    mainContent.innerHTML = match.render(params);
    window.scrollTo(0, 0);

    // Update Nav Active Link State
    updateNavActive(match.pageName);

    // Run Page Initialization
    if (match.init) {
      match.init(params);
    }

    // Trigger animations
    initCounters();
    initScrollAnimations();
  } else {
    // 404 Page Not Found
    mainContent.innerHTML = `
      <section class="hero" style="min-height:70vh;">
        <h1 class="hero-title">404 — <em>Not Found</em></h1>
        <p class="hero-subtitle">The legal intelligence pathway you requested does not exist or has been relocated.</p>
        <div style="margin-top:var(--space-xl);">
          <a href="#/" class="btn btn-primary">Return to Home</a>
        </div>
      </section>
    `;
    updateNavActive(null);
  }

  // Close Mobile Menu on route change
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileToggle = document.getElementById('mobile-toggle');
  if (mobileMenu && mobileMenu.classList.contains('active')) {
    mobileMenu.classList.remove('active');
  }
  if (mobileToggle && mobileToggle.classList.contains('active')) {
    mobileToggle.classList.remove('active');
  }
}

// Update active states on nav items
function updateNavActive(pageName) {
  const links = document.querySelectorAll('.nav-link');
  links.forEach(link => {
    const dataPage = link.getAttribute('data-page');
    if (dataPage && dataPage === pageName) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// Global Intersection Observer for Scroll Reveal Animations
function initScrollAnimations() {
  const elements = document.querySelectorAll('.animate-on-scroll');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  elements.forEach(el => observer.observe(el));
}

// Stats Counter Increment Animation
function initCounters() {
  const counters = document.querySelectorAll('.counter');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = +counter.getAttribute('data-target');
        const duration = 1200; // Total animation duration in ms
        const frameRate = 16;  // Approx 60fps
        const totalFrames = duration / frameRate;
        const increment = target / totalFrames;
        
        let frame = 0;
        const timer = setInterval(() => {
          frame++;
          const current = increment * frame;
          if (frame >= totalFrames) {
            counter.textContent = target.toLocaleString('en-IN');
            clearInterval(timer);
          } else {
            counter.textContent = Math.floor(current).toLocaleString('en-IN');
          }
        }, frameRate);
        
        observer.unobserve(counter);
      }
    });
  }, { threshold: 0.1 });

  counters.forEach(counter => observer.observe(counter));
}

// Setup Global Interactions (Banner, Scroll Hide Header, Mobile Drawer)
function setupGlobalInteractions() {
  // Banner Close Trigger
  const banner = document.getElementById('header-banner');
  const bannerClose = document.getElementById('banner-close');
  if (banner && bannerClose) {
    bannerClose.addEventListener('click', () => {
      banner.classList.add('hidden');
      document.documentElement.style.setProperty('--banner-height', '0px');
    });
  }

  // Header Hide on Scroll Down / Show on Scroll Up
  let lastScrollY = window.scrollY;
  const header = document.getElementById('main-header');
  if (header) {
    window.addEventListener('scroll', () => {
      const currentScrollY = window.scrollY;
      // Scroll down past 120px to hide header, scroll up to reveal
      if (currentScrollY > lastScrollY && currentScrollY > 120) {
        header.classList.add('hidden');
      } else {
        header.classList.remove('hidden');
      }
      lastScrollY = currentScrollY;
    }, { passive: true });
  }

  // Mobile Menu Drawer Toggle
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => {
      mobileToggle.classList.toggle('active');
      mobileMenu.classList.toggle('active');
    });
  }
}

// Document Event Listeners
window.addEventListener('hashchange', router);
window.addEventListener('DOMContentLoaded', () => {
  setupGlobalInteractions();
  router();
});
