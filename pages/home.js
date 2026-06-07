import { states } from '../data/states.js';

export function renderHome() {
  const stateCount = states.filter(s => s.type === 'state').length;
  const utCount = states.filter(s => s.type === 'ut').length;

  return `
    <!-- Hero Section -->
    <section class="hero" id="hero-section">
      <div class="hero-badge">
        <span class="badge badge-gold">∴ Introducing Euclid Legal AI</span>
      </div>
      <h1 class="hero-title">
        Legal due diligence,<br/><em>mastered for India</em>
      </h1>
      <p class="hero-subtitle">
        AI that understands India's legal complexity — ${stateCount} states, ${utCount} Union Territories,
        and the thousands of laws that differ across every jurisdiction.
      </p>
      <div class="hero-actions">
        <a href="#/demo" class="btn btn-primary btn-lg">Try AI Demo</a>
        <a href="#/due-diligence" class="btn btn-secondary btn-lg">Explore Due Diligence →</a>
      </div>
    </section>

    <!-- Logo Carousel -->
    <section class="section-sm" style="border-bottom: 1px solid var(--border-subtle);">
      <div class="container">
        <p class="text-center text-secondary" style="font-size: var(--text-xs); text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: var(--space-xl);">Trusted by India's leading legal teams</p>
        <div class="logo-carousel">
          <div class="logo-carousel-track">
            ${['AZB & Partners', 'Cyril Amarchand', 'Shardul Amarchand', 'Khaitan & Co', 'Trilegal', 'JSA Law', 'Luthra & Luthra', 'S&R Associates', 'Nishith Desai', 'DSK Legal', 'IndusLaw', 'Samvad Partners',
              'AZB & Partners', 'Cyril Amarchand', 'Shardul Amarchand', 'Khaitan & Co', 'Trilegal', 'JSA Law', 'Luthra & Luthra', 'S&R Associates', 'Nishith Desai', 'DSK Legal', 'IndusLaw', 'Samvad Partners'
            ].map(name => `<span>${name}</span>`).join('')}
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="section" id="stats-section">
      <div class="container">
        <div class="stats-grid animate-on-scroll">
          <div class="stat">
            <div class="stat-value counter" data-target="${stateCount}">0</div>
            <div class="stat-label">Indian States</div>
          </div>
          <div class="stat">
            <div class="stat-value counter" data-target="${utCount}">0</div>
            <div class="stat-label">Union Territories</div>
          </div>
          <div class="stat">
            <div class="stat-value counter" data-target="900">0</div>
            <div class="stat-label">Laws Tracked</div>
          </div>
          <div class="stat">
            <div class="stat-value counter" data-target="12">0</div>
            <div class="stat-label">DD Chapters</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Due Diligence Hero -->
    <section class="section" style="background: var(--bg-secondary);" id="dd-preview">
      <div class="container">
        <div class="section-header animate-on-scroll">
          <span class="section-label">Core Capability</span>
          <h2 class="section-title">AI-Powered <em>Due Diligence</em></h2>
          <p class="section-subtitle">
            12 structured chapters covering every aspect of legal due diligence in India —
            from corporate secretarial to anti-corruption compliance.
          </p>
        </div>
        <div class="grid grid-3">
          ${[
            { icon: '🏛️', title: 'Corporate & Secretarial', desc: 'MCA filings, ROC compliance, board governance across jurisdictions.', color: 'gold' },
            { icon: '📜', title: 'Contractual & Commercial', desc: 'Material contracts, stamp duty verification, enforceability analysis.', color: 'blue' },
            { icon: '🏗️', title: 'Real Estate & Property', desc: 'Title chain, RERA compliance, stamp duty — all state-specific.', color: 'saffron' },
            { icon: '👥', title: 'Labor & Employment', desc: 'State-wise minimum wages, PF/ESI, shop & establishment compliance.', color: 'emerald' },
            { icon: '⚖️', title: 'Litigation & Disputes', desc: 'Case tracking across High Courts, tribunals, consumer forums.', color: 'purple' },
            { icon: '💰', title: 'Tax & Financial', desc: 'GST multi-state, transfer pricing, professional tax variations.', color: 'gold' },
          ].map((item, i) => `
            <div class="card animate-on-scroll stagger-${(i % 3) + 1}">
              <div class="card-icon ${item.color}">${item.icon}</div>
              <h3 class="card-title">${item.title}</h3>
              <p class="card-desc">${item.desc}</p>
              <a href="#/due-diligence" class="card-link">View chapter →</a>
            </div>
          `).join('')}
        </div>
        <div class="text-center mt-2xl animate-on-scroll">
          <a href="#/due-diligence" class="btn btn-primary btn-lg">Explore All 12 Chapters →</a>
        </div>
      </div>
    </section>

    <!-- Platform Features -->
    <section class="section" id="platform-preview">
      <div class="container">
        <div class="section-header animate-on-scroll">
          <span class="section-label">Platform</span>
          <h2 class="section-title">The complete <em>legal AI</em> stack</h2>
          <p class="section-subtitle">
            Beyond due diligence — Euclid provides a full suite of AI-powered tools
            for every legal workflow in India.
          </p>
        </div>
        <div class="grid grid-4">
          ${[
            { icon: '💬', title: 'Assistant', desc: 'Ask questions, analyze documents, and draft faster with AI tuned for Indian law.', color: 'gold' },
            { icon: '📁', title: 'Vault', desc: 'Securely store, organize, and bulk-analyze legal documents with state-aware intelligence.', color: 'blue' },
            { icon: '📚', title: 'Knowledge', desc: 'Research complex regulatory, tax, and compliance questions across Indian jurisdictions.', color: 'emerald' },
            { icon: '🤖', title: 'Agents', desc: 'Purpose-built AI agents that execute multi-step legal workflows end-to-end.', color: 'purple' },
          ].map((item, i) => `
            <div class="card animate-on-scroll stagger-${i + 1}">
              <div class="card-icon ${item.color}">${item.icon}</div>
              <h3 class="card-title">${item.title}</h3>
              <p class="card-desc">${item.desc}</p>
              <a href="#/platform" class="card-link">Learn more →</a>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <!-- India Map CTA -->
    <section class="section" style="background: var(--bg-secondary);" id="map-cta">
      <div class="container">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-4xl); align-items: center;">
          <div class="animate-on-scroll">
            <span class="section-label">Interactive</span>
            <h2 class="section-title" style="text-align:left;">Explore India's<br/><em>legal landscape</em></h2>
            <p class="section-subtitle" style="text-align:left; margin:0 0 var(--space-2xl);">
              Click any state on our interactive map to see stamp duty rates, labor laws,
              RERA rules, excise policies, and more. Compare any two states side-by-side.
            </p>
            <div style="display:flex; gap: var(--space-md);">
              <a href="#/india-map" class="btn btn-primary btn-lg">Open India Map →</a>
              <a href="#/demo" class="btn btn-secondary btn-lg">Ask AI Instead</a>
            </div>
          </div>
          <div class="animate-on-scroll stagger-2" style="text-align: center;">
            <div style="background: var(--bg-glass); border: 1px solid var(--border-subtle); border-radius: var(--radius-xl); padding: var(--space-2xl); position: relative;">
              <div style="font-size: 120px; opacity: 0.8; line-height: 1;">🇮🇳</div>
              <div style="margin-top: var(--space-lg); display: flex; justify-content: center; gap: var(--space-lg);">
                <div class="stat">
                  <div class="stat-value" style="font-size: var(--text-2xl);">36</div>
                  <div class="stat-label">Jurisdictions</div>
                </div>
                <div class="stat">
                  <div class="stat-value" style="font-size: var(--text-2xl);">24</div>
                  <div class="stat-label">High Courts</div>
                </div>
                <div class="stat">
                  <div class="stat-value" style="font-size: var(--text-2xl);">12</div>
                  <div class="stat-label">DD Chapters</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section" id="cta-section">
      <div class="container">
        <div class="animate-on-scroll" style="text-align:center; max-width: 700px; margin: 0 auto;">
          <h2 class="section-title">Ready to transform your<br/><em>legal practice?</em></h2>
          <p class="section-subtitle">
            Join India's leading law firms and corporate legal teams already using Euclid
            to navigate multi-state complexity with confidence.
          </p>
          <div class="hero-actions" style="justify-content: center; margin-top: var(--space-2xl);">
            <a href="#/demo" class="btn btn-primary btn-lg">Request Early Access</a>
            <a href="#/about" class="btn btn-secondary btn-lg">Contact Us</a>
          </div>
        </div>
      </div>
    </section>
  `;
}
