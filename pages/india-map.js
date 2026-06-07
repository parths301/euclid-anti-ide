import { states, compareStates, getStateById } from '../data/states.js';

// Coordinates for topological state nodes
const nodeCoords = {
  "jammu-kashmir": { x: 140, y: 70, abbr: "JK" },
  "ladakh": { x: 200, y: 50, abbr: "LA" },
  "himachal-pradesh": { x: 200, y: 100, abbr: "HP" },
  "punjab": { x: 140, y: 130, abbr: "PB" },
  "chandigarh": { x: 175, y: 125, abbr: "CH" },
  "uttarakhand": { x: 250, y: 120, abbr: "UK" },
  "haryana": { x: 190, y: 160, abbr: "HR" },
  "delhi": { x: 210, y: 180, abbr: "DL" },
  "rajasthan": { x: 110, y: 210, abbr: "RJ" },
  "gujarat": { x: 60, y: 280, abbr: "GJ" },
  "dadra-nagar-haveli-daman-diu": { x: 70, y: 340, abbr: "DD" },
  "madhya-pradesh": { x: 200, y: 280, abbr: "MP" },
  "uttar-pradesh": { x: 290, y: 210, abbr: "UP" },
  "bihar": { x: 380, y: 220, abbr: "BR" },
  "sikkim": { x: 430, y: 190, abbr: "SK" },
  "west-bengal": { x: 420, y: 300, abbr: "WB" },
  "jharkhand": { x: 370, y: 290, abbr: "JH" },
  "odisha": { x: 340, y: 360, abbr: "OD" },
  "chhattisgarh": { x: 280, y: 340, abbr: "CG" },
  "maharashtra": { x: 160, y: 380, abbr: "MH" },
  "goa": { x: 130, y: 470, abbr: "GA" },
  "karnataka": { x: 180, y: 480, abbr: "KA" },
  "andhra-pradesh": { x: 250, y: 450, abbr: "AP" },
  "telangana": { x: 240, y: 395, abbr: "TS" },
  "tamil-nadu": { x: 220, y: 550, abbr: "TN" },
  "puducherry": { x: 255, y: 530, abbr: "PY" },
  "kerala": { x: 170, y: 560, abbr: "KL" },
  "lakshadweep": { x: 90, y: 560, abbr: "LD" },
  "andaman-nicobar": { x: 470, y: 550, abbr: "AN" },
  // North East Nodes
  "meghalaya": { x: 490, y: 240, abbr: "ML" },
  "assam": { x: 510, y: 210, abbr: "AS" },
  "arunachal-pradesh": { x: 550, y: 180, abbr: "AR" },
  "nagaland": { x: 570, y: 210, abbr: "NL" },
  "manipur": { x: 560, y: 245, abbr: "MN" },
  "mizoram": { x: 540, y: 280, abbr: "MZ" },
  "tripura": { x: 500, y: 270, abbr: "TR" }
};

// Topological connections between nodes
const connections = [
  ["jammu-kashmir", "ladakh"], ["jammu-kashmir", "himachal-pradesh"], ["jammu-kashmir", "punjab"],
  ["ladakh", "himachal-pradesh"],
  ["himachal-pradesh", "uttarakhand"], ["himachal-pradesh", "punjab"], ["himachal-pradesh", "haryana"],
  ["punjab", "haryana"], ["punjab", "rajasthan"], ["punjab", "chandigarh"],
  ["uttarakhand", "uttar-pradesh"],
  ["haryana", "delhi"], ["haryana", "rajasthan"], ["haryana", "uttar-pradesh"],
  ["delhi", "uttar-pradesh"],
  ["rajasthan", "gujarat"], ["rajasthan", "madhya-pradesh"], ["rajasthan", "uttar-pradesh"],
  ["gujarat", "madhya-pradesh"], ["gujarat", "maharashtra"], ["gujarat", "dadra-nagar-haveli-daman-diu"],
  ["madhya-pradesh", "uttar-pradesh"], ["madhya-pradesh", "chhattisgarh"], ["madhya-pradesh", "maharashtra"],
  ["uttar-pradesh", "bihar"], ["uttar-pradesh", "chhattisgarh"],
  ["bihar", "sikkim"], ["bihar", "jharkhand"], ["bihar", "west-bengal"],
  ["sikkim", "west-bengal"], ["sikkim", "assam"],
  ["west-bengal", "jharkhand"], ["west-bengal", "odisha"], ["west-bengal", "meghalaya"], ["west-bengal", "assam"],
  ["jharkhand", "odisha"], ["jharkhand", "chhattisgarh"],
  ["chhattisgarh", "odisha"], ["chhattisgarh", "telangana"], ["chhattisgarh", "maharashtra"],
  ["maharashtra", "goa"], ["maharashtra", "karnataka"], ["maharashtra", "telangana"],
  ["goa", "karnataka"],
  ["karnataka", "telangana"], ["karnataka", "andhra-pradesh"], ["karnataka", "kerala"], ["karnataka", "tamil-nadu"],
  ["telangana", "andhra-pradesh"],
  ["andhra-pradesh", "tamil-nadu"], ["andhra-pradesh", "odisha"], ["andhra-pradesh", "puducherry"],
  ["kerala", "tamil-nadu"], ["kerala", "lakshadweep"],
  ["tamil-nadu", "puducherry"],
  // NE Connections
  ["assam", "arunachal-pradesh"], ["assam", "nagaland"], ["assam", "manipur"], ["assam", "tripura"], ["assam", "meghalaya"],
  ["arunachal-pradesh", "nagaland"],
  ["nagaland", "manipur"],
  ["manipur", "mizoram"],
  ["mizoram", "tripura"]
];

export function renderIndiaMap() {
  return `
    <section class="hero" style="min-height: 40vh; padding-bottom: var(--space-xl);">
      <div class="hero-badge">
        <span class="badge badge-gold">∴ Visual Selector</span>
      </div>
      <h1 class="hero-title" style="font-size: var(--text-5xl);">
        Interactive <em>Legal Map</em>
      </h1>
      <p class="hero-subtitle">
        Click any jurisdiction node in our Euclidean topological constellation to view stamp rates, labor rules, and local statutes, or compare states side-by-side.
      </p>
    </section>

    <!-- Map & Compare Panels -->
    <section class="section" style="background: var(--bg-secondary); padding-top: var(--space-xl);">
      <div class="container">
        
        <div style="display: grid; grid-template-columns: 1.2fr 1fr; gap: var(--space-3xl); align-items: start;" class="map-grid-layout">
          
          <!-- Left: Constellation Map -->
          <div>
            <h3 class="section-label">Euclidean Topological Constellation</h3>
            <div class="india-map-container" style="border: 1px solid var(--border-subtle); border-radius: var(--radius-xl); background: var(--bg-primary); padding: var(--space-lg); overflow: hidden; position: relative;">
              <svg viewBox="0 0 600 600" class="india-map-svg" style="display:block; width:100%; height:auto;">
                <!-- Connection Lines -->
                <g stroke="var(--border-subtle)" stroke-width="1.5" stroke-dasharray="2 3">
                  ${connections.map(con => {
                    const n1 = nodeCoords[con[0]];
                    const n2 = nodeCoords[con[1]];
                    if (!n1 || !n2) return '';
                    return `<line x1="${n1.x}" y1="${n1.y}" x2="${n2.x}" y2="${n2.y}" />`;
                  }).join('')}
                </g>

                <!-- State Nodes -->
                ${Object.entries(nodeCoords).map(([id, node]) => {
                  const s = states.find(x => x.id === id);
                  const isUT = s?.type === 'ut';
                  return `
                    <g class="state-node-group" data-state-id="${id}" style="cursor:pointer;">
                      <circle cx="${node.x}" cy="${node.y}" r="${isUT ? 12 : 16}" 
                        fill="${isUT ? 'var(--bg-elevated)' : 'var(--bg-tertiary)'}" 
                        stroke="var(--border-strong)" stroke-width="1.5" class="state-node-circle" id="node-circle-${id}" />
                      <text x="${node.x}" y="${node.y + 4}" font-size="${isUT ? '8' : '10'}" font-family="var(--font-sans)" font-weight="600" 
                        fill="var(--text-secondary)" text-anchor="middle" pointer-events="none" id="node-text-${id}">
                        ${node.abbr}
                      </text>
                    </g>
                  `;
                }).join('')}
              </svg>

              <!-- Map Tooltip -->
              <div class="map-tooltip" id="map-custom-tooltip">
                <div class="map-tooltip-name" id="tooltip-state-name">State Name</div>
                <div class="map-tooltip-detail" id="tooltip-stamp">Stamp Duty: -</div>
                <div class="map-tooltip-detail" id="tooltip-wage">Min Wage: -</div>
                <div class="map-tooltip-detail" id="tooltip-rera">RERA: -</div>
                <div style="font-size: 10px; color: var(--accent-gold); margin-top: 6px; font-weight:600;">Click to view deep dive →</div>
              </div>
            </div>
          </div>

          <!-- Right: Info Panel & State Comparer -->
          <div style="display:flex; flex-direction:column; gap: var(--space-2xl);">
            
            <!-- Quick State Profile Panel -->
            <div class="state-info-panel" id="map-quick-panel">
              <div style="text-align: center; color: var(--text-tertiary); padding: var(--space-3xl) 0;">
                <span style="font-size: 2.5rem;">🖱️</span>
                <p style="margin-top: var(--space-md); font-size: var(--text-sm);">Hover over any state node on the constellation map to preview local legal metrics.</p>
              </div>
            </div>

            <!-- Side-by-Side Comparer -->
            <div class="glass-panel" style="padding: var(--space-2xl); border-color: var(--border-accent);">
              <h4 class="chapter-title" style="margin-bottom: var(--space-xs); display:flex; align-items:center; gap:var(--space-xs);">
                ⚖️ <span>Jurisdiction Comparer</span>
              </h4>
              <p style="font-size: var(--text-xs); color: var(--text-tertiary); margin-bottom: var(--space-lg);">Compare legal frameworks and stamp duties side-by-side</p>
              
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-md); margin-bottom: var(--space-lg);">
                <div>
                  <label style="font-size: 10px; text-transform: uppercase; color: var(--text-tertiary); display:block; margin-bottom:4px;">State A</label>
                  <select id="compare-select-a" style="width:100%; padding: 8px 12px; background: var(--bg-primary); border: 1px solid var(--border-medium); border-radius: var(--radius-sm); color: var(--text-primary); font-size: var(--text-sm);">
                    ${states.map(s => `<option value="${s.id}" ${s.id === 'maharashtra' ? 'selected' : ''}>${s.name}</option>`).join('')}
                  </select>
                </div>
                <div>
                  <label style="font-size: 10px; text-transform: uppercase; color: var(--text-tertiary); display:block; margin-bottom:4px;">State B</label>
                  <select id="compare-select-b" style="width:100%; padding: 8px 12px; background: var(--bg-primary); border: 1px solid var(--border-medium); border-radius: var(--radius-sm); color: var(--text-primary); font-size: var(--text-sm);">
                    ${states.map(s => `<option value="${s.id}" ${s.id === 'karnataka' ? 'selected' : ''}>${s.name}</option>`).join('')}
                  </select>
                </div>
              </div>
              <button class="btn btn-primary btn-full" id="run-comparison-btn">Compare Jurisdictions</button>

              <div id="comparison-results-output" style="margin-top: var(--space-xl);"></div>
            </div>

          </div>

        </div>

        <!-- Section: Search Directory -->
        <div class="divider"></div>
        <div style="margin-top: var(--space-xl);">
          <div style="display:flex; justify-content:space-between; align-items:flex-end; gap: var(--space-lg); margin-bottom: var(--space-2xl);" class="search-header-flex">
            <div>
              <span class="section-label" style="margin-bottom: var(--space-xs);">Directory</span>
              <h2 class="section-title" style="font-size: var(--text-3xl); margin:0;">All 36 <em>Jurisdictions</em></h2>
            </div>
            <div style="position:relative; width: 320px;" class="search-box-wrapper">
              <input type="text" id="state-search-input" placeholder="Search state, capital, ROC, stamp..." style="width:100%; padding:10px 16px; padding-left:36px; background: var(--bg-glass); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); color: var(--text-primary); font-size: var(--text-sm);" />
              <span style="position:absolute; left:12px; top:50%; transform:translateY(-50%); opacity:0.5; font-size:14px;">🔍</span>
            </div>
          </div>

          <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: var(--space-md);" id="states-directory-grid">
            <!-- Populated dynamically -->
          </div>
        </div>

      </div>
    </section>
  `;
}

export function initIndiaMap() {
  const nodeGroups = document.querySelectorAll('.state-node-group');
  const tooltip = document.getElementById('map-custom-tooltip');
  const quickPanel = document.getElementById('map-quick-panel');
  const searchInput = document.getElementById('state-search-input');
  const directoryGrid = document.getElementById('states-directory-grid');
  
  // Comparison selectors
  const selectA = document.getElementById('compare-select-a');
  const selectB = document.getElementById('compare-select-b');
  const compareBtn = document.getElementById('run-comparison-btn');
  const comparisonOutput = document.getElementById('comparison-results-output');

  // Render directory grid
  function renderDirectory(filteredStates = states) {
    if (!directoryGrid) return;
    if (filteredStates.length === 0) {
      directoryGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align:center; padding: var(--space-2xl); color: var(--text-tertiary);">
          No states or Union Territories found matching your search.
        </div>
      `;
      return;
    }

    directoryGrid.innerHTML = filteredStates.map(s => `
      <div class="card search-state-card" data-state-id="${s.id}" style="padding: var(--space-lg); cursor:pointer; display:flex; flex-direction:column; justify-content:space-between;">
        <div>
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: var(--space-xs);">
            <h4 class="card-title" style="font-size: var(--text-lg); margin:0;">${s.name}</h4>
            <span class="badge ${s.type === 'state' ? 'badge-gold' : 'badge-blue'}" style="font-size:8px; padding:2px 8px;">
              ${s.type.toUpperCase()}
            </span>
          </div>
          <p style="font-size: var(--text-xs); color: var(--text-tertiary); margin-bottom: var(--space-md);">Capital: ${s.capital} • ${s.rocJurisdiction}</p>
          
          <div style="display:flex; flex-direction:column; gap:4px; font-size:var(--text-xs); color:var(--text-secondary); margin-bottom: var(--space-md);">
            <div><strong>Stamp (Res):</strong> ${s.stampDuty.residential}</div>
            <div><strong>Min Wage:</strong> ${s.laborLaw.minWage}</div>
            <div><strong>Excise:</strong> ${s.excise.status}</div>
          </div>
        </div>
        <a href="#/state/${s.id}" class="card-link" style="margin-top:0; font-size: var(--text-xs);">Open Profile →</a>
      </div>
    `).join('');

    // Bind click listeners to directory cards
    const dirCards = document.querySelectorAll('.search-state-card');
    dirCards.forEach(card => {
      card.addEventListener('click', () => {
        const stateId = card.getAttribute('data-state-id');
        window.location.hash = `#/state/${stateId}`;
      });
    });
  }

  // Handle Search filtering
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase().trim();
      const filtered = states.filter(s => 
        s.name.toLowerCase().includes(q) ||
        s.capital.toLowerCase().includes(q) ||
        s.rocJurisdiction.toLowerCase().includes(q) ||
        s.keyIndustries.some(i => i.toLowerCase().includes(q))
      );
      renderDirectory(filtered);
    });
  }

  // Handle Map Hover & Tooltip Positioning
  nodeGroups.forEach(grp => {
    const stateId = grp.getAttribute('data-state-id');
    const s = getStateById(stateId);
    if (!s) return;

    grp.addEventListener('mouseenter', (e) => {
      // Highlight node
      const circle = document.getElementById(`node-circle-${stateId}`);
      const text = document.getElementById(`node-text-${stateId}`);
      if (circle) {
        circle.setAttribute('fill', 'var(--accent-gold-dim)');
        circle.setAttribute('stroke', 'var(--accent-gold)');
        circle.setAttribute('stroke-width', '2.5');
      }
      if (text) text.setAttribute('fill', 'var(--accent-gold)');

      // Show tooltip
      const rect = e.currentTarget.getBoundingClientRect();
      const containerRect = grp.closest('.india-map-container').getBoundingClientRect();
      const x = rect.left - containerRect.left + rect.width / 2;
      const y = rect.top - containerRect.top - 10;

      document.getElementById('tooltip-state-name').textContent = s.name;
      document.getElementById('tooltip-stamp').textContent = `Stamp (Res): ${s.stampDuty.residential}`;
      document.getElementById('tooltip-wage').textContent = `Min Wage: ${s.laborLaw.minWage}`;
      document.getElementById('tooltip-rera').textContent = `RERA: ${s.rera.authority}`;

      tooltip.style.left = `${x - 100}px`;
      tooltip.style.top = `${y - 120}px`;
      tooltip.classList.add('visible');

      // Populate Quick Info Panel
      quickPanel.innerHTML = `
        <div class="state-info-header" style="margin-bottom:var(--space-md); padding-bottom:var(--space-sm);">
          <div>
            <h3 class="state-info-title">${s.name}</h3>
            <div class="state-info-meta">${s.capital} • ${s.highCourt}</div>
          </div>
          <span class="badge badge-gold">${s.type.toUpperCase()}</span>
        </div>
        
        <div style="display:flex; flex-direction:column; gap:var(--space-sm); font-size:var(--text-sm);">
          <div><strong>Stamp Duty:</strong> ${s.stampDuty.residential} residential, ${s.stampDuty.commercial} commercial. <span style="font-size:11px; color:var(--text-tertiary); display:block;">${s.stampDuty.notes}</span></div>
          <div><strong>Minimum Wage:</strong> ${s.laborLaw.minWage} <span style="font-size:11px; color:var(--text-tertiary); display:block;">Act: ${s.laborLaw.shopAct}</span></div>
          <div><strong>RERA Board:</strong> ${s.rera.authority} (${s.rera.established})</div>
          <div><strong>Excise Policy:</strong> Alcohol is ${s.excise.status}. <span style="font-size:11px; color:var(--text-tertiary); display:block;">${s.excise.policy}</span></div>
          <div><strong>Professional Tax:</strong> ${s.gstProfTax}</div>
          <div><strong>Special Local Laws:</strong> ${s.specialLaws.slice(0, 2).join(', ')}...</div>
        </div>

        <div style="margin-top:var(--space-lg); text-align:right;">
          <a href="#/state/${s.id}" class="btn btn-secondary btn-sm" style="font-size:var(--text-xs); padding:6px 12px;">Open Full Legal Profile →</a>
        </div>
      `;
    });

    grp.addEventListener('mouseleave', () => {
      // Revert node styling
      const circle = document.getElementById(`node-circle-${stateId}`);
      const text = document.getElementById(`node-text-${stateId}`);
      const isUT = s.type === 'ut';
      if (circle) {
        circle.setAttribute('fill', isUT ? 'var(--bg-elevated)' : 'var(--bg-tertiary)');
        circle.setAttribute('stroke', 'var(--border-strong)');
        circle.setAttribute('stroke-width', '1.5');
      }
      if (text) text.setAttribute('fill', 'var(--text-secondary)');

      tooltip.classList.remove('visible');
    });

    grp.addEventListener('click', () => {
      window.location.hash = `#/state/${stateId}`;
    });
  });

  // Handle Comparison Execution
  if (compareBtn && selectA && selectB && comparisonOutput) {
    compareBtn.addEventListener('click', () => {
      const idA = selectA.value;
      const idB = selectB.value;

      if (idA === idB) {
        comparisonOutput.innerHTML = `
          <div style="color:var(--accent-red); font-size:var(--text-xs); text-align:center; padding:var(--space-md); background:var(--accent-red-dim); border:1px solid rgba(239,68,68,0.2); border-radius:var(--radius-sm);">
            Please select two different states/UTs to run a comparative diligence analysis.
          </div>
        `;
        return;
      }

      const res = compareStates(idA, idB);
      if (!res) return;

      const s1 = res.state1;
      const s2 = res.state2;

      comparisonOutput.innerHTML = `
        <div class="glass-panel" style="border: 1px solid var(--border-medium); margin-top:var(--space-md); overflow:hidden;">
          <table class="data-table">
            <thead>
              <tr>
                <th>Statute/Metric</th>
                <th>${s1.name}</th>
                <th>${s2.name}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Stamp Duty (Res)</strong></td>
                <td style="color:var(--text-primary);">${s1.stampDuty.residential}</td>
                <td style="color:var(--text-primary);">${s2.stampDuty.residential}</td>
              </tr>
              <tr>
                <td><strong>Stamp Notes</strong></td>
                <td style="font-size:11px; line-height:1.4;">${s1.stampDuty.notes}</td>
                <td style="font-size:11px; line-height:1.4;">${s2.stampDuty.notes}</td>
              </tr>
              <tr>
                <td><strong>Min Wage</strong></td>
                <td style="color:var(--text-primary);">${s1.laborLaw.minWage}</td>
                <td style="color:var(--text-primary);">${s2.laborLaw.minWage}</td>
              </tr>
              <tr>
                <td><strong>Shop & Estb Act</strong></td>
                <td style="font-size:11px;">${s1.laborLaw.shopAct}</td>
                <td style="font-size:11px;">${s2.laborLaw.shopAct}</td>
              </tr>
              <tr>
                <td><strong>RERA Authority</strong></td>
                <td>${s1.rera.authority}</td>
                <td>${s2.rera.authority}</td>
              </tr>
              <tr>
                <td><strong>Excise / Prohibition</strong></td>
                <td><span class="badge ${s1.excise.status === 'Prohibition' ? 'badge-saffron' : 'badge-emerald'}" style="font-size:8px;">${s1.excise.status}</span></td>
                <td><span class="badge ${s2.excise.status === 'Prohibition' ? 'badge-saffron' : 'badge-emerald'}" style="font-size:8px;">${s2.excise.status}</span></td>
              </tr>
              <tr>
                <td><strong>ROC Jurisdiction</strong></td>
                <td>${s1.rocJurisdiction}</td>
                <td>${s2.rocJurisdiction}</td>
              </tr>
              <tr>
                <td><strong>Prof. Tax (Max)</strong></td>
                <td>${s1.gstProfTax}</td>
                <td>${s2.gstProfTax}</td>
              </tr>
            </tbody>
          </table>
          
          <div style="padding:var(--space-md); text-align:center; background:rgba(255,255,255,0.01); border-top:1px solid var(--border-subtle);">
            <a href="#/demo" class="btn btn-secondary btn-sm" id="compare-ai-cta" style="font-size:11px; padding:6px 16px;">Ask AI to draft comparison memo →</a>
          </div>
        </div>
      `;

      // Bind CTA to demo prefill
      const compareAiCta = document.getElementById('compare-ai-cta');
      if (compareAiCta) {
        compareAiCta.addEventListener('click', () => {
          localStorage.setItem('euclid_prefilled_query', `Compare the stamp duty and labor law compliance requirements in ${s1.name} and ${s2.name} side-by-side`);
        });
      }
    });
  }

  // Populate directory grid initially
  renderDirectory();
}
