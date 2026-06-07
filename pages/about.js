import { states } from '../data/states.js';

export function renderAbout() {
  return `
    <!-- Hero Section -->
    <section class="hero" style="min-height: 40vh; padding-bottom: var(--space-xl);">
      <div class="hero-badge">
        <span class="badge badge-gold">∴ Our Mission</span>
      </div>
      <h1 class="hero-title" style="font-size: var(--text-5xl);">
        About <em>Euclid</em>
      </h1>
      <p class="hero-subtitle">
        Euclid was founded by legal experts and AI researchers to solve India's unique federal legal fragmentation.
      </p>
    </section>

    <!-- Mission & Story -->
    <section class="section" style="background: var(--bg-secondary); padding-top: var(--space-xl);">
      <div class="container container-narrow">
        <div style="display:flex; flex-direction:column; gap: var(--space-xl); font-size:var(--text-base); color:var(--text-secondary); line-height:1.8;">
          <p>
            India possesses one of the most complex legal frameworks in the world. With 28 states, 8 Union Territories, and a federal setup where legislation is split between central, state, and concurrent lists, a corporate transaction often triggers thousands of local compliance checks.
          </p>
          <p>
            Traditional search databases return flat text documents but cannot evaluate stamp duty deficits across boundaries, match state-level minimum wage updates, or audit local land registration rules.
          </p>
          <p>
            **Euclid** bridges this gap. By building structured due diligence chapter maps and aligning them with detailed state registries, we enable attorneys to run precision audits in minutes rather than weeks.
          </p>
        </div>
      </div>
    </section>

    <!-- Contact & Access Form -->
    <section class="section" id="contact-form-section">
      <div class="container container-narrow">
        <div class="glass-panel" style="padding: var(--space-3xl); border-color: var(--border-accent);">
          <h3 class="chapter-title" style="font-size:var(--text-2xl); text-align:center; margin-bottom:var(--space-sm);">Request Early Access</h3>
          <p style="font-size:var(--text-sm); color:var(--text-secondary); text-align:center; margin-bottom:var(--space-2xl);">Join our pilot program for leading Indian law firms and corporate legal offices.</p>

          <form id="request-access-form" style="display:flex; flex-direction:column; gap: var(--space-lg);">
            
            <div style="display:grid; grid-template-columns: 1fr 1fr; gap: var(--space-md);" class="form-grid-2">
              <div>
                <label style="font-size:10px; text-transform:uppercase; color:var(--text-tertiary); display:block; margin-bottom:6px;">Full Name *</label>
                <input type="text" id="form-name" required style="width:100%; padding:10px 14px; background:var(--bg-primary); border:1px solid var(--border-subtle); border-radius:var(--radius-sm); color:var(--text-primary); font-size:var(--text-sm);" />
              </div>
              <div>
                <label style="font-size:10px; text-transform:uppercase; color:var(--text-tertiary); display:block; margin-bottom:6px;">Email Address *</label>
                <input type="email" id="form-email" required style="width:100%; padding:10px 14px; background:var(--bg-primary); border:1px solid var(--border-subtle); border-radius:var(--radius-sm); color:var(--text-primary); font-size:var(--text-sm);" />
              </div>
            </div>

            <div style="display:grid; grid-template-columns: 1fr 1fr; gap: var(--space-md);" class="form-grid-2">
              <div>
                <label style="font-size:10px; text-transform:uppercase; color:var(--text-tertiary); display:block; margin-bottom:6px;">Law Firm / Organization *</label>
                <input type="text" id="form-firm" required style="width:100%; padding:10px 14px; background:var(--bg-primary); border:1px solid var(--border-subtle); border-radius:var(--radius-sm); color:var(--text-primary); font-size:var(--text-sm);" />
              </div>
              <div>
                <label style="font-size:10px; text-transform:uppercase; color:var(--text-tertiary); display:block; margin-bottom:6px;">Primary State Jurisdiction</label>
                <select id="form-state" style="width:100%; padding:10px 14px; background:var(--bg-primary); border:1px solid var(--border-subtle); border-radius:var(--radius-sm); color:var(--text-primary); font-size:var(--text-sm);">
                  <option value="central">Central / Multi-State</option>
                  ${states.map(x => `<option value="${x.id}">${x.name}</option>`).join('')}
                </select>
              </div>
            </div>

            <div>
              <label style="font-size:10px; text-transform:uppercase; color:var(--text-tertiary); display:block; margin-bottom:6px;">Message / Legal Use Case</label>
              <textarea id="form-message" rows="4" style="width:100%; padding:10px 14px; background:var(--bg-primary); border:1px solid var(--border-subtle); border-radius:var(--radius-sm); color:var(--text-primary); font-size:var(--text-sm); font-family:var(--font-sans); resize:vertical;" placeholder="Describe your primary practice areas (e.g. Real Estate acquisitions, M&A diligence...)"></textarea>
            </div>

            <button type="submit" class="btn btn-primary btn-full btn-lg" style="margin-top: var(--space-md);">Submit Request</button>

          </form>

          <div id="form-success-container" style="display:none; text-align:center; padding:var(--space-2xl) 0;">
            <div style="font-size:3rem; margin-bottom:var(--space-md); color:var(--accent-emerald);">✓</div>
            <h4 class="chapter-title" style="color:var(--text-primary);">Request Received</h4>
            <p style="font-size:var(--text-sm); color:var(--text-secondary); margin-bottom:var(--space-xl);">Our enterprise relations team will reach out within 24 hours to schedule a detailed platform demonstration.</p>
            <button class="btn btn-secondary" id="form-reset-btn">Submit Another Request</button>
          </div>

        </div>
      </div>
    </section>
  `;
}

export function initAbout() {
  const form = document.getElementById('request-access-form');
  const successContainer = document.getElementById('form-success-container');
  const resetBtn = document.getElementById('form-reset-btn');

  if (form && successContainer) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      form.style.display = 'none';
      successContainer.style.display = 'block';
    });
  }

  if (resetBtn && form && successContainer) {
    resetBtn.addEventListener('click', () => {
      form.reset();
      successContainer.style.display = 'none';
      form.style.display = 'flex';
    });
  }
}
