export function renderSolutions() {
  return `
    <!-- Hero Section -->
    <section class="hero" style="min-height: 50vh; padding-bottom: var(--space-xl);">
      <div class="hero-badge">
        <span class="badge badge-gold">∴ Target Audiences</span>
      </div>
      <h1 class="hero-title" style="font-size: var(--text-5xl);">
        Tailored <em>Legal Solutions</em>
      </h1>
      <p class="hero-subtitle">
        Purpose-built configurations mapping to specific transaction, advisory, and litigation workflows in India.
      </p>
    </section>

    <!-- Solutions Layout Grid -->
    <section class="section" style="background: var(--bg-secondary); padding-top: var(--space-xl);">
      <div class="container">
        
        <div class="grid grid-2">
          
          <!-- Solution 1: M&A Diligence -->
          <div class="card animate-on-scroll stagger-1" style="display:flex; flex-direction:column; justify-content:space-between; min-height:350px;">
            <div>
              <div style="display:flex; align-items:center; gap:var(--space-sm); margin-bottom:var(--space-md);">
                <div class="card-icon gold" style="margin:0; width:36px; height:36px; font-size:1.1rem;">🤝</div>
                <h3 class="card-title" style="margin:0; font-size: var(--text-xl);">M&A Due Diligence</h3>
              </div>
              <p class="card-desc" style="font-size: var(--text-sm); line-height:1.6; color:var(--text-secondary); margin-bottom:var(--space-lg);">
                Accelerate transaction closures by structuring the legal review across our 12 diligence chapters. Euclid parses documents in data rooms to check title deeds, evaluate material contracts, and calculate state stamp liabilities.
              </p>
              <ul style="display:flex; flex-direction:column; gap:6px; font-size:var(--text-xs); color:var(--text-secondary); padding-left:4px;">
                <li>• Automated disclosure schedule drafting</li>
                <li>• Cross-state compliance audits (e.g. state industrial codes, GIDC/MIDC rules)</li>
                <li>• Stamp duty deficit calculators</li>
              </ul>
            </div>
            <div style="margin-top:var(--space-xl);">
              <a href="#/due-diligence" class="btn btn-secondary btn-full btn-sm">Explore Due Diligence →</a>
            </div>
          </div>

          <!-- Solution 2: Litigation & Dispute Resolution -->
          <div class="card animate-on-scroll stagger-2" style="display:flex; flex-direction:column; justify-content:space-between; min-height:350px;">
            <div>
              <div style="display:flex; align-items:center; gap:var(--space-sm); margin-bottom:var(--space-md);">
                <div class="card-icon purple" style="margin:0; width:36px; height:36px; font-size:1.1rem;">⚖️</div>
                <h3 class="card-title" style="margin:0; font-size: var(--text-xl);">Litigation & Disputes</h3>
              </div>
              <p class="card-desc" style="font-size: var(--text-sm); line-height:1.6; color:var(--text-secondary); margin-bottom:var(--space-lg);">
                Track cases and assess legal risks across all 24 High Courts, district courts, and central/state tribunals (NCLT, NCLAT, NCDRC, APTEL). Euclid analyzes pleadings and orders to compile court histories.
              </p>
              <ul style="display:flex; flex-direction:column; gap:6px; font-size:var(--text-xs); color:var(--text-secondary); padding-left:4px;">
                <li>• Litigation history searches across multiple courts</li>
                <li>• Analysis of case precedents and judge-wise analytics</li>
                <li>• Drafting of summaries, briefs, and responses</li>
              </ul>
            </div>
            <div style="margin-top:var(--space-xl);">
              <a href="#/demo" class="btn btn-secondary btn-full btn-sm" id="litigation-ai-demo-link">Test Litigation Query →</a>
            </div>
          </div>

          <!-- Solution 3: Regulatory Compliance -->
          <div class="card animate-on-scroll stagger-1" style="display:flex; flex-direction:column; justify-content:space-between; min-height:350px;">
            <div>
              <div style="display:flex; align-items:center; gap:var(--space-sm); margin-bottom:var(--space-md);">
                <div class="card-icon emerald" style="margin:0; width:36px; height:36px; font-size:1.1rem;">📋</div>
                <h3 class="card-title" style="margin:0; font-size: var(--text-xl);">Regulatory & compliance</h3>
              </div>
              <p class="card-desc" style="font-size: var(--text-sm); line-height:1.6; color:var(--text-secondary); margin-bottom:var(--space-lg);">
                Stay compliant with state-specific labor codes, shop registrations, environmental clearances (CTO/CTE), and excise policies. Euclid acts as a real-time compliance guardian for multi-state developers and manufacturers.
              </p>
              <ul style="display:flex; flex-direction:column; gap:6px; font-size:var(--text-xs); color:var(--text-secondary); padding-left:4px;">
                <li>• Real-time updates on state notifications and gazette changes</li>
                <li>• Checklist auditing for state pollution board criteria</li>
                <li>• Compliance mapping for the new 4 Central Labor Codes</li>
              </ul>
            </div>
            <div style="margin-top:var(--space-xl);">
              <a href="#/india-map" class="btn btn-secondary btn-full btn-sm">Browse State Rules →</a>
            </div>
          </div>

          <!-- Solution 4: In-House Legal Departments -->
          <div class="card animate-on-scroll stagger-2" style="display:flex; flex-direction:column; justify-content:space-between; min-height:350px;">
            <div>
              <div style="display:flex; align-items:center; gap:var(--space-sm); margin-bottom:var(--space-md);">
                <div class="card-icon saffron" style="margin:0; width:36px; height:36px; font-size:1.1rem;">🏢</div>
                <h3 class="card-title" style="margin:0; font-size: var(--text-xl);">In-House Counsel</h3>
              </div>
              <p class="card-desc" style="font-size: var(--text-sm); line-height:1.6; color:var(--text-secondary); margin-bottom:var(--space-lg);">
                Empower in-house teams to review bulk commercial contracts, enforce corporate standard playbooks, manage litigation caseload, and check vendor SLAs against internal policies.
              </p>
              <ul style="display:flex; flex-direction:column; gap:6px; font-size:var(--text-xs); color:var(--text-secondary); padding-left:4px;">
                <li>• SLA notice and liability audits</li>
                <li>• Standardizing compliance playbooks for procurement</li>
                <li>• Automated NDA drafting and risk-profiling</li>
              </ul>
            </div>
            <div style="margin-top:var(--space-xl);">
              <a href="#/demo" class="btn btn-primary btn-full btn-sm">Request Enterprise Trial</a>
            </div>
          </div>

        </div>

      </div>
    </section>
  `;
}

export function initSolutions() {
  const litDemoBtn = document.getElementById('litigation-ai-demo-link');
  if (litDemoBtn) {
    litDemoBtn.addEventListener('click', () => {
      localStorage.setItem('euclid_prefilled_query', 'Draft a request summary representing our client in NCLT Mumbai regarding insolvency proceedings and pending debt claims');
    });
  }
}
