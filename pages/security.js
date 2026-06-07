export function renderSecurity() {
  return `
    <!-- Hero Section -->
    <section class="hero" style="min-height: 50vh; padding-bottom: var(--space-xl);">
      <div class="hero-badge">
        <span class="badge badge-emerald">∴ Enterprise Grade</span>
      </div>
      <h1 class="hero-title" style="font-size: var(--text-5xl);">
        Sovereign <em>Data Security</em>
      </h1>
      <p class="hero-subtitle">
        Euclid is built from the ground up for strict confidentiality. Your documents, queries, and case secrets remain completely private and reside strictly within Indian borders.
      </p>
    </section>

    <!-- DPDP and Data Sovereignty Details -->
    <section class="section" style="background: var(--bg-secondary); padding-top: var(--space-xl);">
      <div class="container container-narrow">
        
        <div style="display:flex; flex-direction:column; gap: var(--space-3xl);">
          
          <!-- DPDP Block -->
          <div class="glass-panel" style="padding: var(--space-3xl); border-color: var(--border-medium);">
            <div style="display:flex; gap: var(--space-md); align-items:flex-start;" class="security-card-flex">
              <div style="font-size:2.5rem; line-height:1;">🛡️</div>
              <div>
                <h3 class="card-title" style="font-size: var(--text-xl);">DPDP Act, 2023 Compliance</h3>
                <p class="card-desc" style="font-size: var(--text-sm); line-height:1.7; color:var(--text-secondary); margin-bottom:var(--space-md);">
                  Euclid complies fully with India's *Digital Personal Data Protection Act, 2023*. We process all files solely as a Data Processor under explicit client instructions (Data Fiduciary).
                </p>
                <ul style="display:flex; flex-direction:column; gap:4px; font-size:var(--text-xs); color:var(--text-secondary);">
                  <li>• **Explicit Consent Logging:** No document analysis without explicit request parameters</li>
                  <li>• **Data Erasure (Right to be Forgotten):** Direct and total deletion of uploaded briefs and contracts upon request</li>
                  <li>• **Strict Access Control:** Multi-factor authentication and role-based permissions</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Data Localization Block -->
          <div class="glass-panel" style="padding: var(--space-3xl); border-color: var(--border-medium);">
            <div style="display:flex; gap: var(--space-md); align-items:flex-start;" class="security-card-flex">
              <div style="font-size:2.5rem; line-height:1;">🇮🇳</div>
              <div>
                <h3 class="card-title" style="font-size: var(--text-xl);">Indian Data Sovereignty</h3>
                <p class="card-desc" style="font-size: var(--text-sm); line-height:1.7; color:var(--text-secondary); margin-bottom:var(--space-md);">
                  In accordance with national security recommendations and legal sector compliance, Euclid hosts all data on local Indian servers.
                </p>
                <ul style="display:flex; flex-direction:column; gap:4px; font-size:var(--text-xs); color:var(--text-secondary);">
                  <li>• **Local Servers:** Hosted in Tier-4 data centers in Mumbai and Bengaluru</li>
                  <li>• **No Cross-Border Data Flows:** Your files never leave Indian borders for model execution or storage</li>
                  <li>• **Sovereign Encryption:** Files encrypted using AES-256 at rest and TLS 1.3 in transit</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Model Training Policy Block -->
          <div class="glass-panel" style="padding: var(--space-3xl); border-color: var(--border-medium);">
            <div style="display:flex; gap: var(--space-md); align-items:flex-start;" class="security-card-flex">
              <div style="font-size:2.5rem; line-height:1;">🚫</div>
              <div>
                <h3 class="card-title" style="font-size: var(--text-xl);">No Model Training on Client Files</h3>
                <p class="card-desc" style="font-size: var(--text-sm); line-height:1.7; color:var(--text-secondary); margin-bottom:var(--space-md);">
                  Your proprietary drafts and legal analyses are your exclusive intellectual property.
                </p>
                <ul style="display:flex; flex-direction:column; gap:4px; font-size:var(--text-xs); color:var(--text-secondary);">
                  <li>• **Zero Model Training:** We never store client queries, uploads, or summaries to train base models or public models</li>
                  <li>• **Isolated Weights:** Custom enterprise weight adjustments are isolated to specific client directories</li>
                </ul>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  `;
}
