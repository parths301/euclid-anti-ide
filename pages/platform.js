export function renderPlatform() {
  return `
    <!-- Hero Section -->
    <section class="hero" style="min-height: 50vh; padding-bottom: var(--space-xl);">
      <div class="hero-badge">
        <span class="badge badge-gold">∴ Platform Overview</span>
      </div>
      <h1 class="hero-title" style="font-size: var(--text-5xl);">
        The Legal <em>AI Stack</em>
      </h1>
      <p class="hero-subtitle">
        Euclid combines generative AI, legal database indices, and multi-step execution agents to supercharge corporate counsel and law firms in India.
      </p>
    </section>

    <!-- Platform Modules Section -->
    <section class="section" style="background: var(--bg-secondary); padding-top: var(--space-xl);">
      <div class="container">
        
        <!-- Module 1: Assistant -->
        <div style="display:grid; grid-template-columns: 1.2fr 1fr; gap: var(--space-3xl); align-items:center; margin-bottom: var(--space-5xl);" class="platform-module-flex">
          <div class="animate-on-scroll">
            <span class="section-label" style="color:var(--accent-gold);">01. Conversational AI</span>
            <h2 class="section-title" style="text-align:left; font-size:var(--text-3xl);">The Legal <em>Assistant</em></h2>
            <p class="section-subtitle" style="text-align:left; margin:0 0 var(--space-xl); font-size: var(--text-base);">
              Ask questions, draft contracts, compare provisions, and analyze risks. Euclid's Assistant is trained specifically on Indian Supreme Court judgments, High Court briefs, and central/state laws.
            </p>
            <ul style="display:flex; flex-direction:column; gap: var(--space-sm); margin-bottom: var(--space-xl);">
              <li style="display:flex; align-items:center; gap:var(--space-xs); font-size:var(--text-sm); color:var(--text-secondary);">
                <span style="color:var(--accent-gold);">✔</span> Fine-tuned for Indian legal vernacular (e.g., *vakalatnama*, *stamp duty*, *promissory note*)
              </li>
              <li style="display:flex; align-items:center; gap:var(--space-xs); font-size:var(--text-sm); color:var(--text-secondary);">
                <span style="color:var(--accent-gold);">✔</span> Verbatim statutory citations linked to active state registries
              </li>
            </ul>
            <a href="#/demo" class="btn btn-primary">Try Assistant in Demo</a>
          </div>
          <div class="glass-panel animate-on-scroll stagger-2" style="padding: var(--space-2xl); position:relative;">
            <div style="background:var(--bg-primary); padding:var(--space-md); border-radius:var(--radius-md); border:1px solid var(--border-medium); font-size:var(--text-xs); color:var(--text-secondary); line-height:1.6;">
              <div style="border-bottom:1px solid var(--border-subtle); padding-bottom:6px; margin-bottom:8px; display:flex; justify-content:space-between; align-items:center;">
                <span>Drafting Assistant</span>
                <span class="badge badge-emerald">Ready</span>
              </div>
              <p style="color:var(--text-tertiary); margin-bottom:6px;">[User]: Draft an indemnity clause for a services agreement in Karnataka.</p>
              <p style="color:var(--text-primary);">[Euclid]: "The Service Provider shall indemnify and hold harmless the Client against any stamp duty deficits, penalties, or interests levied by the Karnataka Revenue Department under the Karnataka Stamp Act, 1957..."</p>
            </div>
          </div>
        </div>

        <!-- Module 2: Vault -->
        <div style="display:grid; grid-template-columns: 1fr 1.2fr; gap: var(--space-3xl); align-items:center; margin-bottom: var(--space-5xl);" class="platform-module-flex reverse-row">
          <div class="glass-panel animate-on-scroll" style="padding: var(--space-2xl);">
            <div style="background:var(--bg-primary); padding:var(--space-md); border-radius:var(--radius-md); border:1px solid var(--border-medium); font-size:var(--text-xs);">
              <div style="border-bottom:1px solid var(--border-subtle); padding-bottom:6px; margin-bottom:8px; color:var(--text-tertiary);">Vault Index (4 Files Selected)</div>
              <ul style="display:flex; flex-direction:column; gap:4px; margin-bottom:10px; color:var(--text-secondary);">
                <li>📄 SLA_Bengaluru_Office.pdf (48 KB)</li>
                <li>📄 LeaseDeed_Mumbai_Retail.pdf (124 KB)</li>
                <li>📄 EmploymentContract_Gujarat.pdf (90 KB)</li>
                <li>📄 BoardMinutes_ROC_Del.pdf (42 KB)</li>
              </ul>
              <div style="background:var(--bg-glass-strong); padding:8px; border-radius:var(--radius-sm); border:1px solid var(--border-subtle); color:var(--accent-gold); font-weight:600; text-align:center;">
                🔍 Run cross-file stamp duty check
              </div>
            </div>
          </div>
          <div class="animate-on-scroll stagger-2">
            <span class="section-label" style="color:var(--accent-blue);">02. Document Management</span>
            <h2 class="section-title" style="text-align:left; font-size:var(--text-3xl);">The Legal <em>Vault</em></h2>
            <p class="section-subtitle" style="text-align:left; margin:0 0 var(--space-xl); font-size: var(--text-base);">
              A secure workspace to upload hundreds of agreements, board resolutions, and due diligence assets. Euclid indexes text, tabular data, and scan artifacts, making them instantly searchable.
            </p>
            <ul style="display:flex; flex-direction:column; gap: var(--space-sm); margin-bottom: var(--space-xl);">
              <li style="display:flex; align-items:center; gap:var(--space-xs); font-size:var(--text-sm); color:var(--text-secondary);">
                <span style="color:var(--accent-blue);">✔</span> OCR for scanned Hindi and English legal documents
              </li>
              <li style="display:flex; align-items:center; gap:var(--space-xs); font-size:var(--text-sm); color:var(--text-secondary);">
                <span style="color:var(--accent-blue);">✔</span> Vault-wide bulk querying (e.g. "List all termination notice periods across these 50 contracts")
              </li>
            </ul>
          </div>
        </div>

        <!-- Module 3: Knowledge -->
        <div style="display:grid; grid-template-columns: 1.2fr 1fr; gap: var(--space-3xl); align-items:center; margin-bottom: var(--space-5xl);" class="platform-module-flex">
          <div class="animate-on-scroll">
            <span class="section-label" style="color:var(--accent-emerald);">03. Legal Database</span>
            <h2 class="section-title" style="text-align:left; font-size:var(--text-3xl);">Regulatory <em>Knowledge</em></h2>
            <p class="section-subtitle" style="text-align:left; margin:0 0 var(--space-xl); font-size: var(--text-base);">
              Connect directly to our curated database of Indian law. We map central regulations (Companies Act, FEMA, IT Act, DPDP) and state-specific regulations (Stamp Acts, RERA rules, Shop Act bylaws, environmental approvals) under a single visual search.
            </p>
            <ul style="display:flex; flex-direction:column; gap: var(--space-sm); margin-bottom: var(--space-xl);">
              <li style="display:flex; align-items:center; gap:var(--space-xs); font-size:var(--text-sm); color:var(--text-secondary);">
                <span style="color:var(--accent-emerald);">✔</span> Real-time monitoring of state gazettes and high court cases
              </li>
              <li style="display:flex; align-items:center; gap:var(--space-xs); font-size:var(--text-sm); color:var(--text-secondary);">
                <span style="color:var(--accent-emerald);">✔</span> Visual breakdown of federal overlaps (Concurrent List variations)
              </li>
            </ul>
            <a href="#/india-map" class="btn btn-secondary">Explore Interactive Map</a>
          </div>
          <div class="glass-panel animate-on-scroll stagger-2" style="padding: var(--space-2xl); text-align:center;">
            <div style="font-size:3rem; margin-bottom: var(--space-sm);">📚</div>
            <h4 class="card-title">900+ Legal Codes Indexed</h4>
            <p class="card-desc">Fully mapped across all 36 Indian states and Union Territories for real-time risk assessment.</p>
          </div>
        </div>

        <!-- Module 4: Agents -->
        <div style="display:grid; grid-template-columns: 1fr 1.2fr; gap: var(--space-3xl); align-items:center;" class="platform-module-flex reverse-row">
          <div class="glass-panel animate-on-scroll" style="padding: var(--space-2xl);">
            <div style="display:flex; flex-direction:column; gap:8px;">
              <div style="background:var(--bg-glass-strong); padding:8px 12px; border-radius:var(--radius-sm); font-size:var(--text-xs); border:1px solid var(--border-subtle); display:flex; justify-content:space-between; align-items:center;">
                <span>1. Ingest Corporate MoA/AoA</span>
                <span style="color:var(--accent-emerald);">Done ✓</span>
              </div>
              <div style="background:var(--bg-glass-strong); padding:8px 12px; border-radius:var(--radius-sm); font-size:var(--text-xs); border:1px solid var(--border-subtle); display:flex; justify-content:space-between; align-items:center;">
                <span>2. Cross-reference ROC filing dates</span>
                <span style="color:var(--accent-emerald);">Done ✓</span>
              </div>
              <div style="background:var(--bg-glass-strong); padding:8px 12px; border-radius:var(--radius-sm); font-size:var(--text-xs); border:1px solid var(--border-accent); display:flex; justify-content:space-between; align-items:center; background:rgba(212,168,67,0.05);">
                <span>3. Audit stamp duty at state rates</span>
                <span style="color:var(--accent-gold); animation:pulse-dot 1.5s infinite;">Running...</span>
              </div>
            </div>
          </div>
          <div class="animate-on-scroll stagger-2">
            <span class="section-label" style="color:var(--accent-saffron);">04. Autonomous Workflows</span>
            <h2 class="section-title" style="text-align:left; font-size:var(--text-3xl);">Diligence <em>Agents</em></h2>
            <p class="section-subtitle" style="text-align:left; margin:0 0 var(--space-xl); font-size: var(--text-base);">
              Deploy multi-step AI agents to execute complex, tedious due diligence workflows. Instead of just answering questions, Euclid Agents compile disclosures, run compliance audits, and identify structural deficits autonomously.
            </p>
            <a href="#/due-diligence" class="btn btn-primary">See 12 DD Chapters</a>
          </div>
        </div>

      </div>
    </section>

    <!-- Integrations & Infrastructure -->
    <section class="section">
      <div class="container">
        <div class="section-header animate-on-scroll">
          <span class="section-label">Infrastructure</span>
          <h2 class="section-title">Built for Enterprise <em>Security</em></h2>
          <p class="section-subtitle">Euclid operates on sovereign, isolated architectures conforming to Indian regulatory mandates.</p>
        </div>

        <div class="grid grid-3">
          <div class="card animate-on-scroll stagger-1">
            <div class="card-icon gold">🔒</div>
            <h3 class="card-title">DPDP Act Compliance</h3>
            <p class="card-desc">Designed in accordance with India's Digital Personal Data Protection Act, 2023. Explicit consent logging and data erasure.</p>
          </div>
          <div class="card animate-on-scroll stagger-2">
            <div class="card-icon saffron">🇮🇳</div>
            <h3 class="card-title">Sovereign Data Hosting</h3>
            <p class="card-desc">All document storage and model servers are located in tier-4 Indian data centers (Mumbai, Bengaluru). No data leaves borders.</p>
          </div>
          <div class="card animate-on-scroll stagger-3">
            <div class="card-icon emerald">🏢</div>
            <h3 class="card-title">On-Premises Deployment</h3>
            <p class="card-desc">For leading law firms and financial institutions, Euclid can be containerized and deployed within private virtual clouds.</p>
          </div>
        </div>
      </div>
    </section>
  `;
}
