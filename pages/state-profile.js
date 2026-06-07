import { states, getStateById } from '../data/states.js';

export function renderStateProfile(params) {
  const stateId = params?.id;
  const s = getStateById(stateId);

  if (!s) {
    return `
      <section class="hero" style="min-height:60vh;">
        <h2 class="section-title">Jurisdiction <em>Not Found</em></h2>
        <p class="section-subtitle">We couldn't find a state or Union Territory with the identifier "${stateId}".</p>
        <div style="margin-top:var(--space-xl);">
          <a href="#/india-map" class="btn btn-primary">Back to Legal Map</a>
        </div>
      </section>
    `;
  }

  return `
    <!-- State Editorial Header -->
    <section class="section" style="padding-bottom: var(--space-xl); background: linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg-primary) 100%);">
      <div class="container">
        <div style="margin-bottom: var(--space-xl);">
          <a href="#/india-map" style="font-size: var(--text-sm); color: var(--text-secondary); display:flex; align-items:center; gap:4px;">
            <span>←</span> Back to Legal Map
          </a>
        </div>

        <div style="display:flex; justify-content:space-between; align-items:flex-start; gap: var(--space-xl); border-bottom:1px solid var(--border-subtle); padding-bottom:var(--space-2xl);" class="state-header-flex">
          <div>
            <div style="display:flex; align-items:center; gap: var(--space-md); margin-bottom:var(--space-sm);">
              <span class="badge ${s.type === 'state' ? 'badge-gold' : 'badge-blue'}">${s.type.toUpperCase()}</span>
              <span style="font-size: var(--text-sm); color: var(--accent-gold); font-weight:600; text-transform:uppercase;">Code: ${s.abbr}</span>
            </div>
            <h1 class="section-title" style="text-align:left; font-size:var(--text-5xl); margin-bottom:var(--space-xs);">${s.name}</h1>
            <p style="font-size: var(--text-lg); color: var(--text-secondary); margin:0;">
              Capital: <strong>${s.capital}</strong> • High Court: <strong>${s.highCourt}</strong>
            </p>
          </div>

          <div style="display:flex; gap: var(--space-sm);" class="state-header-actions">
            <a href="#/demo" class="btn btn-primary" id="state-ask-ai-cta">Ask AI about ${s.name}</a>
            <button class="btn btn-secondary" id="state-compare-trigger-btn">Compare with another state</button>
          </div>
        </div>
      </div>
    </section>

    <!-- Detailed Legal Profiler Tabs -->
    <section class="section" style="padding-top:0;">
      <div class="container">
        
        <div class="tabs" style="margin-bottom: var(--space-2xl);">
          <button class="tab active" data-tab="stamp">Stamp Duty & Financials</button>
          <button class="tab" data-tab="labor">Labor & Employment</button>
          <button class="tab" data-tab="property">Property & RERA</button>
          <button class="tab" data-tab="special">Excise & Special Statutes</button>
        </div>

        <div id="state-tab-content-root">
          <!-- Populated by JS -->
        </div>

      </div>
    </section>

    <!-- State Comparison Modal -->
    <div id="state-comparison-modal" style="display:none; position:fixed; top:0; left:0; right:0; bottom:0; background:rgba(0,0,0,0.8); z-index:10000; align-items:center; justify-content:center; padding:var(--space-xl);">
      <div class="glass-panel" style="background:var(--bg-secondary); border:1px solid var(--border-medium); border-radius:var(--radius-xl); padding:var(--space-3xl); max-width:600px; width:100%; position:relative;">
        <button id="close-compare-modal-btn" style="position:absolute; right:var(--space-lg); top:var(--space-lg); font-size:20px; opacity:0.7;">✕</button>
        
        <h3 class="chapter-title" style="margin-bottom:var(--space-sm);">Compare ${s.name}</h3>
        <p style="font-size:var(--text-xs); color:var(--text-tertiary); margin-bottom:var(--space-xl);">Select a state or Union Territory to compare directly with ${s.name}:</p>
        
        <div style="margin-bottom:var(--space-xl);">
          <label style="font-size: 10px; text-transform: uppercase; color: var(--text-tertiary); display:block; margin-bottom:6px;">Compare ${s.name} with:</label>
          <select id="modal-compare-select" style="width:100%; padding:10px 16px; background:var(--bg-primary); border:1px solid var(--border-strong); border-radius:var(--radius-sm); color:var(--text-primary); font-size:var(--text-base);">
            ${states.filter(x => x.id !== s.id).map(x => `<option value="${x.id}">${x.name}</option>`).join('')}
          </select>
        </div>

        <button class="btn btn-primary btn-full btn-lg" id="modal-compare-submit-btn">Run Side-by-Side Comparison</button>
      </div>
    </div>
  `;
}

export function initStateProfile(params) {
  const stateId = params?.id;
  const s = getStateById(stateId);
  if (!s) return;

  const tabButtons = document.querySelectorAll('.tab');
  const tabContentRoot = document.getElementById('state-tab-content-root');

  // Modal controls
  const compareTriggerBtn = document.getElementById('state-compare-trigger-btn');
  const compareModal = document.getElementById('state-comparison-modal');
  const closeModalBtn = document.getElementById('close-compare-modal-btn');
  const modalSubmitBtn = document.getElementById('modal-compare-submit-btn');
  const modalSelect = document.getElementById('modal-compare-select');
  const askAiCta = document.getElementById('state-ask-ai-cta');

  // Prefill AI query
  if (askAiCta) {
    askAiCta.addEventListener('click', () => {
      localStorage.setItem('euclid_prefilled_query', `Provide a comprehensive legal due diligence summary for the state of ${s.name}, including stamp duty rates and labor compliance`);
    });
  }

  // Toggle modal
  if (compareTriggerBtn && compareModal && closeModalBtn) {
    compareTriggerBtn.addEventListener('click', () => {
      compareModal.style.display = 'flex';
    });
    closeModalBtn.addEventListener('click', () => {
      compareModal.style.display = 'none';
    });
    // Click outside close
    compareModal.addEventListener('click', (e) => {
      if (e.target === compareModal) {
        compareModal.style.display = 'none';
      }
    });
  }

  if (modalSubmitBtn && modalSelect) {
    modalSubmitBtn.addEventListener('click', () => {
      const compareId = modalSelect.value;
      compareModal.style.display = 'none';
      // Redirect to map page with comparison loaded
      window.location.hash = `#/india-map`;
      // Set parameters for comparison
      setTimeout(() => {
        const selectA = document.getElementById('compare-select-a');
        const selectB = document.getElementById('compare-select-b');
        const compareBtn = document.getElementById('run-comparison-btn');
        if (selectA && selectB && compareBtn) {
          selectA.value = s.id;
          selectB.value = compareId;
          compareBtn.click();
        }
      }, 100);
    });
  }

  // Render content of specific tab
  function renderTabContent(tabName) {
    let html = '';
    if (tabName === 'stamp') {
      html = `
        <div class="grid grid-2 animate-on-scroll visible">
          <div class="glass-panel" style="padding: var(--space-2xl);">
            <h4 class="chapter-title" style="color: var(--accent-gold); margin-bottom: var(--space-lg);">Stamp Duty Rates</h4>
            <div style="display:flex; flex-direction:column; gap: var(--space-md);">
              <div>
                <strong style="display:block; font-size:var(--text-xs); color:var(--text-tertiary); text-transform:uppercase;">Residential Transactions</strong>
                <span style="font-size: var(--text-2xl); font-weight:600; color:var(--text-primary);">${s.stampDuty.residential}</span>
              </div>
              <div>
                <strong style="display:block; font-size:var(--text-xs); color:var(--text-tertiary); text-transform:uppercase;">Commercial Transactions</strong>
                <span style="font-size: var(--text-2xl); font-weight:600; color:var(--text-primary);">${s.stampDuty.commercial}</span>
              </div>
              <div>
                <strong style="display:block; font-size:var(--text-xs); color:var(--text-tertiary); text-transform:uppercase;">Key Notes & Concessions</strong>
                <p style="font-size:var(--text-sm); color:var(--text-secondary); margin-top:4px; line-height:1.5;">${s.stampDuty.notes}</p>
              </div>
            </div>
          </div>

          <div class="glass-panel" style="padding: var(--space-2xl);">
            <h4 class="chapter-title" style="color: var(--accent-gold); margin-bottom: var(--space-lg);">Corporate & Corporate Registrars</h4>
            <div style="display:flex; flex-direction:column; gap: var(--space-md);">
              <div>
                <strong style="display:block; font-size:var(--text-xs); color:var(--text-tertiary); text-transform:uppercase;">Registrar of Companies (ROC) Jurisdiction</strong>
                <span style="font-size: var(--text-xl); font-weight:600; color:var(--text-primary);">${s.rocJurisdiction}</span>
              </div>
              <div>
                <strong style="display:block; font-size:var(--text-xs); color:var(--text-tertiary); text-transform:uppercase;">Professional Tax (GST Regime)</strong>
                <span style="font-size: var(--text-xl); font-weight:600; color:var(--text-primary);">${s.gstProfTax}</span>
              </div>
              <div>
                <strong style="display:block; font-size:var(--text-xs); color:var(--text-tertiary); text-transform:uppercase;">High Court Jurisdiction</strong>
                <span style="font-size: var(--text-xl); font-weight:600; color:var(--text-primary);">${s.highCourt}</span>
              </div>
            </div>
          </div>
        </div>
      `;
    } else if (tabName === 'labor') {
      html = `
        <div class="grid grid-2 animate-on-scroll visible">
          <div class="glass-panel" style="padding: var(--space-2xl);">
            <h4 class="chapter-title" style="color: var(--accent-saffron); margin-bottom: var(--space-lg);">Minimum Wage Benchmarks</h4>
            <div style="display:flex; flex-direction:column; gap: var(--space-md);">
              <div>
                <strong style="display:block; font-size:var(--text-xs); color:var(--text-tertiary); text-transform:uppercase;">Skilled & Semi-Skilled Wages</strong>
                <span style="font-size: var(--text-2xl); font-weight:600; color:var(--text-primary);">${s.laborLaw.minWage}</span>
                <span style="font-size:11px; color:var(--text-tertiary); display:block; margin-top:2px;">Wages are variable and subject to quarterly VDA notifications.</span>
              </div>
            </div>
          </div>

          <div class="glass-panel" style="padding: var(--space-2xl);">
            <h4 class="chapter-title" style="color: var(--accent-saffron); margin-bottom: var(--space-lg);">Shops & Factories Regimes</h4>
            <div style="display:flex; flex-direction:column; gap: var(--space-md);">
              <div>
                <strong style="display:block; font-size:var(--text-xs); color:var(--text-tertiary); text-transform:uppercase;">Shop Act</strong>
                <span style="font-size: var(--text-base); font-weight:600; color:var(--text-primary);">${s.laborLaw.shopAct}</span>
              </div>
              <div>
                <strong style="display:block; font-size:var(--text-xs); color:var(--text-tertiary); text-transform:uppercase;">Factory Act Threshold</strong>
                <span style="font-size: var(--text-base); font-weight:600; color:var(--text-primary);">${s.laborLaw.factoryThreshold}</span>
              </div>
            </div>
          </div>
        </div>
      `;
    } else if (tabName === 'property') {
      html = `
        <div class="grid grid-2 animate-on-scroll visible">
          <div class="glass-panel" style="padding: var(--space-2xl);">
            <h4 class="chapter-title" style="color: var(--accent-emerald); margin-bottom: var(--space-lg);">RERA Board & Registration</h4>
            <div style="display:flex; flex-direction:column; gap: var(--space-md);">
              <div>
                <strong style="display:block; font-size:var(--text-xs); color:var(--text-tertiary); text-transform:uppercase;">Authority Name</strong>
                <span style="font-size: var(--text-xl); font-weight:600; color:var(--text-primary);">${s.rera.authority}</span>
              </div>
              <div>
                <strong style="display:block; font-size:var(--text-xs); color:var(--text-tertiary); text-transform:uppercase;">RERA Portal Website</strong>
                <a href="https://${s.rera.website}" target="_blank" style="font-size: var(--text-base); color:var(--accent-gold); font-weight:500;">${s.rera.website}</a>
              </div>
              <div>
                <strong style="display:block; font-size:var(--text-xs); color:var(--text-tertiary); text-transform:uppercase;">Operational Since</strong>
                <span style="font-size: var(--text-base); font-weight:600; color:var(--text-primary);">${s.rera.established}</span>
              </div>
            </div>
          </div>

          <div class="glass-panel" style="padding: var(--space-2xl);">
            <h4 class="chapter-title" style="color: var(--accent-emerald); margin-bottom: var(--space-lg);">Environmental & Green Permits</h4>
            <div style="display:flex; flex-direction:column; gap: var(--space-md);">
              <div>
                <strong style="display:block; font-size:var(--text-xs); color:var(--text-tertiary); text-transform:uppercase;">State Pollution Control Board</strong>
                <span style="font-size: var(--text-base); font-weight:600; color:var(--text-primary);">${s.environmentalBody}</span>
                <span style="font-size:11px; color:var(--text-tertiary); display:block; margin-top:2px;">Issues Consent to Establish (CTE) & Consent to Operate (CTO).</span>
              </div>
            </div>
          </div>
        </div>
      `;
    } else if (tabName === 'special') {
      html = `
        <div class="grid grid-2 animate-on-scroll visible">
          <div class="glass-panel" style="padding: var(--space-2xl);">
            <h4 class="chapter-title" style="color: var(--accent-blue); margin-bottom: var(--space-lg);">Special Local Acts & Regulations</h4>
            <ul style="display:flex; flex-direction:column; gap: var(--space-sm);">
              ${s.specialLaws.map(law => `
                <li style="display:flex; align-items:flex-start; gap: var(--space-xs); font-size:var(--text-sm); color: var(--text-secondary);">
                  <span style="color: var(--accent-blue);">•</span>
                  <span>${law}</span>
                </li>
              `).join('')}
            </ul>
          </div>

          <div class="glass-panel" style="padding: var(--space-2xl);">
            <h4 class="chapter-title" style="color: var(--accent-blue); margin-bottom: var(--space-lg);">Excise & Key Sectors</h4>
            <div style="display:flex; flex-direction:column; gap: var(--space-md);">
              <div>
                <strong style="display:block; font-size:var(--text-xs); color:var(--text-tertiary); text-transform:uppercase;">Alcohol / Excise Status</strong>
                <span class="badge ${s.excise.status === 'Prohibition' ? 'badge-saffron' : 'badge-emerald'}" style="margin-top:4px;">
                  ${s.excise.status.toUpperCase()}
                </span>
                <p style="font-size:var(--text-sm); color:var(--text-secondary); margin-top:6px; line-height:1.5;">${s.excise.policy}</p>
              </div>
              <div>
                <strong style="display:block; font-size:var(--text-xs); color:var(--text-tertiary); text-transform:uppercase;">Key Regional Industries</strong>
                <div style="display:flex; flex-wrap:wrap; gap:4px; margin-top:4px;">
                  ${s.keyIndustries.map(ind => `<span class="chapter-tag" style="font-size:10px;">${ind}</span>`).join('')}
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
    }

    tabContentRoot.innerHTML = html;
  }

  // Switch tabs
  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const tabName = btn.getAttribute('data-tab');
      renderTabContent(tabName);
    });
  });

  // Load default tab
  renderTabContent('stamp');
}
