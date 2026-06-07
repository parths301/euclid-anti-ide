import { ddChapters, states } from '../data/states.js';

export function renderDueDiligence() {
  return `
    <section class="hero" style="min-height: 50vh; padding-bottom: var(--space-xl);">
      <div class="hero-badge">
        <span class="badge badge-gold">∴ Primary Focus</span>
      </div>
      <h1 class="hero-title" style="font-size: var(--text-5xl);">
        Primary Due Diligence <em>Framework</em>
      </h1>
      <p class="hero-subtitle">
        Euclid's core capability is structured chapter-wise diligence. We track, verify, and cross-reference state and central laws across all 36 Indian jurisdictions.
      </p>
    </section>

    <!-- Due Diligence Chapters Grid & Details Explorer -->
    <section class="section" style="background: var(--bg-secondary); padding-top: var(--space-xl);">
      <div class="container">
        <div style="display: grid; grid-template-columns: 1fr 1.2fr; gap: var(--space-2xl); align-items: start;" class="dd-explorer-layout">
          
          <!-- Left: List of Chapters -->
          <div style="display: flex; flex-direction: column; gap: var(--space-md); max-height: 80vh; overflow-y: auto; padding-right: var(--space-xs);" class="dd-chapters-list scrollbar-custom">
            <h3 class="section-label" style="position: sticky; top: 0; background: var(--bg-secondary); padding: var(--space-sm) 0; margin-bottom: var(--space-sm); z-index: 10;">12 Chapters of Due Diligence</h3>
            ${ddChapters.map(ch => `
              <div class="chapter-card active-trigger" data-chapter-id="${ch.id}" id="ch-card-${ch.id}">
                <div class="chapter-number">${ch.id < 10 ? '0' + ch.id : ch.id}</div>
                <div class="chapter-content">
                  <h4 class="chapter-title">${ch.title}</h4>
                  <p class="chapter-desc" style="-webkit-line-clamp: 2; display: -webkit-box; -webkit-box-orient: vertical; overflow: hidden; margin-bottom: 0;">${ch.description}</p>
                </div>
              </div>
            `).join('')}
          </div>

          <!-- Right: Detailed Chapter Workflow & State Nuances -->
          <div style="position: sticky; top: var(--header-height);" id="chapter-detail-panel">
            <!-- Dynamic Content Loaded by JS -->
            <div class="glass-panel" style="padding: var(--space-3xl); border-color: var(--border-accent); box-shadow: var(--shadow-glow-gold);">
              <div style="text-align: center; color: var(--text-tertiary); padding: var(--space-4xl) 0;">
                <div style="font-size: 3rem; margin-bottom: var(--space-md);">⚖️</div>
                <p>Select a chapter from the list to explore the detailed due diligence checklist, workflow, and state-specific legal nuances.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- Workflow Execution Section -->
    <section class="section">
      <div class="container">
        <div class="section-header animate-on-scroll">
          <span class="section-label">Execution</span>
          <h2 class="section-title">End-to-End <em>Diligence Workflow</em></h2>
          <p class="section-subtitle">How Euclid automates and structures the transaction due diligence lifecycle.</p>
        </div>
        
        <div class="grid grid-3">
          <div class="card animate-on-scroll stagger-1">
            <div class="card-icon gold">1</div>
            <h3 class="card-title">Document Ingestion</h3>
            <p class="card-desc">Upload corporate registers, land deeds, and employment records. Euclid automatically classifies and indexes documents by chapter, matching them with state jurisdictions.</p>
          </div>
          <div class="card animate-on-scroll stagger-2">
            <div class="card-icon saffron">2</div>
            <h3 class="card-title">Anomaly Detection</h3>
            <p class="card-desc">The AI identifies stamp duty deficits, invalid registrations, minimum wage violations, and pending litigation cases across state High Courts and tribunals.</p>
          </div>
          <div class="card animate-on-scroll stagger-3">
            <div class="card-icon emerald">3</div>
            <h3 class="card-title">Disclosure Drafting</h3>
            <p class="card-desc">Euclid compiles findings into a comprehensive Due Diligence Report, highlighting regulatory red flags and drafting the Disclosure Schedule for transactional agreements.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Bottom CTA -->
    <section class="section" style="background: var(--bg-secondary);">
      <div class="container">
        <div class="glass-panel" style="padding: var(--space-4xl); text-align: center; max-width: 800px; margin: 0 auto; border-color: var(--border-accent);">
          <h3 class="section-title" style="font-size: var(--text-3xl);">Execute diligence with <em>precision</em></h3>
          <p class="section-subtitle" style="margin-bottom: var(--space-xl);">
            Harness Euclid's state-aware legal intelligence to expedite corporate transactions and identify compliance risks instantly.
          </p>
          <a href="#/demo" class="btn btn-primary btn-lg">Request Access to Euclid DD</a>
        </div>
      </div>
    </section>
  `;
}

export function initDueDiligence() {
  const cards = document.querySelectorAll('.chapter-card');
  const detailPanel = document.getElementById('chapter-detail-panel');

  function showChapterDetail(id) {
    const chapter = ddChapters.find(ch => ch.id === parseInt(id));
    if (!chapter) return;

    // Highlight active card
    cards.forEach(c => c.classList.remove('active'));
    const activeCard = document.getElementById(`ch-card-${id}`);
    if (activeCard) activeCard.classList.add('active');

    // Generate state examples related to this chapter
    let stateExamplesHtml = '';
    if (chapter.id === 1) { // Corporate
      stateExamplesHtml = `
        <div style="background: rgba(255,255,255,0.02); padding: var(--space-md); border-radius: var(--radius-md); border-left: 3px solid var(--accent-gold); margin-top: var(--space-md);">
          <strong>ROC Jurisdictions:</strong> Varies by state. For example, Maharashtra has ROC Mumbai & ROC Pune; Tamil Nadu has ROC Chennai & ROC Coimbatore; Uttar Pradesh has ROC Kanpur & ROC Noida.
        </div>
      `;
    } else if (chapter.id === 2) { // Contractual (Stamp Duty)
      stateExamplesHtml = `
        <div style="display:flex; flex-direction:column; gap:var(--space-sm); margin-top:var(--space-md);">
          <div style="background: rgba(255,255,255,0.02); padding: var(--space-md); border-radius: var(--radius-md); border-left: 3px solid var(--accent-gold);">
            <strong>Stamp Act Compliance:</strong> Commercial agreements and deeds have varying stamp rates. In <strong>Karnataka</strong>, stamp duty is governed by the Karnataka Stamp Act, 1957. Failure to pay adequate stamp duty renders agreements inadmissible as evidence in court.
          </div>
          <div style="background: rgba(255,255,255,0.02); padding: var(--space-md); border-radius: var(--radius-md); border-left: 3px solid var(--accent-saffron);">
            <strong>E-Stamping:</strong> Mandated in Maharashtra, Karnataka, and Delhi, but physical stamp papers are still used in several other states.
          </div>
        </div>
      `;
    } else if (chapter.id === 3) { // Real Estate
      stateExamplesHtml = `
        <div style="display:flex; flex-direction:column; gap:var(--space-sm); margin-top:var(--space-md);">
          <div style="background: rgba(255,255,255,0.02); padding: var(--space-md); border-radius: var(--radius-md); border-left: 3px solid var(--accent-gold);">
            <strong>RERA Status:</strong> MahaRERA (Maharashtra) is highly active with fast adjudication. In contrast, RERA authorities in states like Sikkim, Arunachal Pradesh, and Meghalaya are still not operational.
          </div>
          <div style="background: rgba(255,255,255,0.02); padding: var(--space-md); border-radius: var(--radius-md); border-left: 3px solid var(--accent-saffron);">
            <strong>Land Acquisition & ceiling:</strong> Varies significantly. In Himachal Pradesh and Sikkim, non-residents face strict land purchase prohibitions.
          </div>
        </div>
      `;
    } else if (chapter.id === 4) { // Labor
      stateExamplesHtml = `
        <div style="display:flex; flex-direction:column; gap:var(--space-sm); margin-top:var(--space-md);">
          <div style="background: rgba(255,255,255,0.02); padding: var(--space-md); border-radius: var(--radius-md); border-left: 3px solid var(--accent-gold);">
            <strong>Minimum Wages:</strong> Varies greatly. <strong>Delhi</strong> enforces one of the highest minimum wages (~₹16,000–₹18,000/mo), while states like <strong>Nagaland</strong> or <strong>Manipur</strong> average around ₹7,500/mo.
          </div>
          <div style="background: rgba(255,255,255,0.02); padding: var(--space-md); border-radius: var(--radius-md); border-left: 3px solid var(--accent-saffron);">
            <strong>Shop & Establishment Acts:</strong> Varies. For instance, Gujarat's 2019 Act allows 24/7 operations, whereas older Acts in other states restrict working hours.
          </div>
        </div>
      `;
    } else {
      stateExamplesHtml = `
        <div style="background: rgba(255,255,255,0.02); padding: var(--space-md); border-radius: var(--radius-md); border-left: 3px solid var(--accent-blue); margin-top: var(--space-md);">
          <strong>Federal Variance:</strong> Euclid automatically flags overlapping central and state rules to verify compliance before transaction closure.
        </div>
      `;
    }

    // Populate Right Panel
    detailPanel.innerHTML = `
      <div class="glass-panel animate-on-scroll visible" style="padding: var(--space-3xl); border-color: var(--border-medium); box-shadow: var(--shadow-lg); transition: all 0.3s ease;">
        <div style="display:flex; align-items:center; gap:var(--space-md); margin-bottom:var(--space-lg);">
          <div style="font-size: 2.5rem; line-height: 1;">${chapter.icon}</div>
          <div>
            <span class="section-label" style="margin-bottom:0;">Chapter ${chapter.id < 10 ? '0' + chapter.id : chapter.id}</span>
            <h3 class="state-info-title" style="font-size: var(--text-2xl);">${chapter.title}</h3>
          </div>
        </div>

        <p style="color: var(--text-secondary); font-size: var(--text-base); margin-bottom: var(--space-xl); line-height:1.7;">
          ${chapter.description}
        </p>

        <!-- Tags -->
        <div style="margin-bottom: var(--space-xl);">
          <h5 style="font-size: var(--text-xs); color: var(--text-tertiary); text-transform: uppercase; margin-bottom: var(--space-sm);">Governing Regimes</h5>
          <div class="chapter-tags">
            ${chapter.tags.map(t => `<span class="chapter-tag" style="color: var(--accent-gold); border-color: var(--border-accent);">${t}</span>`).join('')}
          </div>
        </div>

        <!-- State Relevance -->
        <div style="margin-bottom: var(--space-xl); background: rgba(212, 168, 67, 0.05); border: 1px solid var(--border-accent); padding: var(--space-lg); border-radius: var(--radius-md);">
          <h5 style="font-size: var(--text-xs); color: var(--accent-gold); text-transform: uppercase; margin-bottom: var(--space-xs); display:flex; align-items:center; gap:var(--space-xs);">
            <span>🇮🇳</span> State-Level Nuance
          </h5>
          <p style="font-size: var(--text-sm); line-height: 1.6; color: var(--text-primary); margin:0;">
            ${chapter.stateRelevance}
          </p>
          ${stateExamplesHtml}
        </div>

        <!-- Checklist -->
        <div style="margin-bottom: var(--space-xl);">
          <h5 style="font-size: var(--text-xs); color: var(--text-tertiary); text-transform: uppercase; margin-bottom: var(--space-md);">Diligence Checklist & Requirements</h5>
          <ul style="display:flex; flex-direction:column; gap:var(--space-sm);">
            ${chapter.checklist.map(item => `
              <li style="display:flex; align-items:flex-start; gap:var(--space-sm); font-size:var(--text-sm); color: var(--text-secondary);">
                <span style="color: var(--accent-gold); font-weight:bold; line-height:1.2;">✓</span>
                <span>${item}</span>
              </li>
            `).join('')}
          </ul>
        </div>

        <div style="display:flex; gap: var(--space-md); margin-top: var(--space-2xl);">
          <a href="#/demo" class="btn btn-primary" style="flex:1;" id="demo-query-btn">
            Test AI query for this chapter
          </a>
        </div>
      </div>
    `;

    // Handle prefilled query in demo link
    const demoQueryBtn = document.getElementById('demo-query-btn');
    if (demoQueryBtn) {
      demoQueryBtn.addEventListener('click', () => {
        let query = '';
        if (chapter.id === 1) {
          query = 'Find ROC filing status and director KYC anomalies for the target company';
        } else if (chapter.id === 2) {
          query = 'What is the stamp duty required for an IT services SLA in Maharashtra vs Karnataka?';
        } else if (chapter.id === 3) {
          query = 'Check land use conversion certificate and RERA registration status for our Gurgaon project';
        } else if (chapter.id === 4) {
          query = 'Compare minimum wages and shop registration rules in Gujarat and Tamil Nadu for warehouse staff';
        } else {
          query = `Run a legal compliance check on ${chapter.title} laws in India`;
        }
        localStorage.setItem('euclid_prefilled_query', query);
      });
    }
  }

  // Setup click listeners on cards
  cards.forEach(card => {
    card.addEventListener('click', () => {
      const id = card.getAttribute('data-chapter-id');
      showChapterDetail(id);
    });
  });

  // Default to Chapter 1
  showChapterDetail(1);
}
