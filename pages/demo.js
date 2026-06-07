export function renderDemo() {
  return `
    <section class="hero" style="min-height: 40vh; padding-bottom: var(--space-xl);">
      <div class="hero-badge">
        <span class="badge badge-gold">∴ Interactive Demo</span>
      </div>
      <h1 class="hero-title" style="font-size: var(--text-5xl);">
        Experience <em>Euclid AI</em>
      </h1>
      <p class="hero-subtitle">
        Interact with India's specialized legal intelligence. Ask regulatory, compliance, and transactional questions across state boundaries.
      </p>
    </section>

    <section class="section" style="background: var(--bg-secondary); padding-top: var(--space-xl);">
      <div class="container">
        
        <div style="display: grid; grid-template-columns: 280px 1fr; gap: var(--space-xl); align-items: start;" class="demo-grid-layout">
          
          <!-- Left Panel: Examples & Upload -->
          <div style="display:flex; flex-direction:column; gap:var(--space-lg);">
            
            <!-- Upload Box -->
            <div class="glass-panel" style="padding: var(--space-lg); border-style: dashed; border-color: var(--border-strong); text-align: center;">
              <div style="font-size: 2rem; margin-bottom: var(--space-sm); color: var(--accent-gold);">📁</div>
              <h5 style="font-size: var(--text-sm); margin-bottom: var(--space-xs);">Analyze Documents</h5>
              <p style="font-size: var(--text-xs); color: var(--text-tertiary); margin-bottom: var(--space-md);">Upload lease deeds, MoAs, or wage sheets (PDF, DOCX)</p>
              <button class="btn btn-secondary btn-full btn-sm" id="upload-doc-btn" style="padding: 8px 16px; font-size: var(--text-xs);">Choose File</button>
              <input type="file" id="actual-file-input" style="display:none;" />
            </div>

            <!-- Example Queries -->
            <div class="glass-panel" style="padding: var(--space-lg);">
              <h5 style="font-size: var(--text-xs); color: var(--text-tertiary); text-transform: uppercase; margin-bottom: var(--space-md); letter-spacing:0.05em;">Suggested Queries</h5>
              <div style="display:flex; flex-direction:column; gap: var(--space-sm);">
                <button class="example-query-chip" data-query="What is the stamp duty in Maharashtra vs Karnataka for a lease deed?">
                  Stamp duty: MH vs KA
                </button>
                <button class="example-query-chip" data-query="Compare labor law compliance and minimum wages for a factory in Gujarat and Tamil Nadu.">
                  Labor wages: GJ vs TN
                </button>
                <button class="example-query-chip" data-query="Does a standard commercial contract require e-stamping in Delhi?">
                  E-stamping in Delhi
                </button>
                <button class="example-query-chip" data-query="Summarize the RERA filing guidelines and deadlines for residential builders in Uttar Pradesh.">
                  UP RERA rules
                </button>
              </div>
            </div>

            <div style="font-size: var(--text-xs); color: var(--text-tertiary); padding: 0 var(--space-sm);">
              <strong>Note:</strong> Euclid AI operates on locally integrated Indian state legislation databases. No real client documents are uploaded.
            </div>

          </div>

          <!-- Right Panel: Chat Interface -->
          <div>
            <div class="chat-container">
              <div class="chat-header">
                <div class="chat-header-dot"></div>
                <div style="flex:1;">
                  <h4 style="font-size: var(--text-sm); font-weight: 600; margin:0; line-height:1;">Euclid Legal Assistant</h4>
                  <span style="font-size: var(--text-xs); color: var(--text-secondary);">Active • Indian Jurisdictions v3.2</span>
                </div>
                <button class="btn btn-ghost" id="clear-chat-btn" style="padding: 4px var(--space-sm); font-size: var(--text-xs);">Clear Chat</button>
              </div>

              <div class="chat-messages" id="chat-messages-container">
                <!-- Welcome Message -->
                <div class="chat-message">
                  <div class="chat-avatar ai">E</div>
                  <div class="chat-bubble">
                    <strong>Welcome to Euclid.</strong> I am specialized in Indian corporate secretarial, real estate, taxation, and labor laws across all 28 states and 8 UTs.
                    <br/><br/>
                    You can ask cross-state legal queries, compare compliance frameworks, or draft disclosures. Try one of the suggested queries on the left or type your own.
                  </div>
                </div>
              </div>

              <!-- Typing Indicator Placeholder -->
              <div class="chat-message" id="typing-indicator" style="display:none; margin-left: var(--space-xl);">
                <div class="chat-avatar ai">E</div>
                <div class="chat-bubble" style="padding: 10px 16px;">
                  <div class="typing-dots">
                    <span></span><span></span><span></span>
                  </div>
                </div>
              </div>

              <div class="chat-input-area">
                <input type="text" class="chat-input" id="chat-user-input" placeholder="Ask Euclid about state stamp laws, minimum wages, RERA filings..." />
                <button class="chat-send" id="chat-send-btn" aria-label="Send message">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  `;
}

// Simulated AI responses database
const simulatedResponses = {
  "What is the stamp duty in Maharashtra vs Karnataka for a lease deed?": `
    In **Maharashtra**, stamp duty on lease deeds is governed by the *Maharashtra Stamp Act, 1958* <span class="citation">Art 36A</span>. 
    For residential leases up to 60 months, the stamp duty is calculated at **0.25%** of the total rent + deposit value, and registration is mandatory through the e-registration portal <span class="citation">Sec 55</span>. For commercial leases, stamp duty is **5%** (in urban areas) if the lease duration exceeds 60 months.
    
    In **Karnataka**, stamp duty is governed by the *Karnataka Stamp Act, 1957* <span class="citation">Art 30</span>. 
    For residential leases up to 10 years, stamp duty is **0.5%** to **1%** depending on the lease term, plus a **1%** registration fee. For commercial leases, it scales up to **5%** if the lease exceeds 10 years.
    
    **Key Difference:** Maharashtra mandates online e-registration for all residential agreements, whereas Karnataka still allows physical stamping and offline registration at the Sub-Registrar office for leases exceeding 11 months.
  `,
  "Compare labor law compliance and minimum wages for a factory in Gujarat and Tamil Nadu.": `
    Here is a comparative breakdown of labor laws and wages between **Gujarat** and **Tamil Nadu**:

    1. **Minimum Wages:**
       - **Gujarat:** Regulated by the *Gujarat Minimum Wages Rules*. The current minimum wage for skilled factory workers averages **₹10,500–₹13,500/month** depending on the zone <span class="citation">Zone I/II</span>.
       - **Tamil Nadu:** Regulated by the *Tamil Nadu Minimum Wages Rules*. The skilled worker wages range from **₹10,000–₹15,000/month** but are heavily linked to a high Dearness Allowance (DA) tied to inflation indices <span class="citation">Sec 3(1)</span>.

    2. **Factory Hours & Overtime:**
       - **Gujarat:** Relaxed its factory threshold. The *Factories Act* applies to units with 20+ workers (with power) or 40+ workers (without power).
       - **Tamil Nadu:** Retains the traditional threshold of 10+ workers (with power) and 20+ workers (without power) <span class="citation">Sec 2(m)</span>.

    3. **Operational Flexibility:**
       - **Gujarat** allows continuous 24/7 shifts and easy online self-certification.
       - **Tamil Nadu** requires approvals for night shifts for women and maintains stricter inspectorate-based registers.
  `,
  "Does a standard commercial contract require e-stamping in Delhi?": `
    Yes, under the *Indian Stamp (Delhi Amendment) Act*, e-stamping is mandatory for all transactions that require stamp duty <span class="citation">Delhi Stamp Rules, 2011</span>.
    
    A standard commercial contract (like a Service Level Agreement or Non-Disclosure Agreement) falls under **Article 5 (Agreement)** of Schedule I-A of the Stamp Act:
    - **SLA/NDA:** Typically requires stamp duty of **₹50** or **₹100**.
    - **Indemnity Bonds:** Requires **₹100**.
    
    The physical stamp paper system has been completely decommissioned in the NCT of Delhi. E-stamps must be purchased online via the Stock Holding Corporation of India Limited (SHCIL) portal <span class="citation">SHCIL Delhi</span>. Running contracts on unstamped paper makes them inadmissible as evidence under Section 35 of the Stamp Act.
  `,
  "Summarize the RERA filing guidelines and deadlines for residential builders in Uttar Pradesh.": `
    Under **UP RERA** (*Uttar Pradesh Real Estate Regulatory Authority*), residential builders face strict compliance rules <span class="citation">UP RERA Rules, 2017</span>:

    1. **Project Registration:** Any project with land area exceeding **500 sq meters** or **8 apartments** must be registered before advertising or selling <span class="citation">Sec 3</span>.
    2. **Quarterly Updates:** Developers must update the UP RERA portal every quarter with details on sales, construction milestones, and pending approvals <span class="citation">Sec 11</span>.
    3. **Escrow Requirement:** **70%** of all customer receivables must be deposited into a separate scheduled bank account (RERA Escrow Account) to cover land and construction costs <span class="citation">Sec 4(2)(l)(D)</span>.
    4. **Defect Liability:** The builder is liable for structural defects for **5 years** from the date of handover <span class="citation">Sec 14</span>.
    
    **Enforcement:** UP RERA has active benches in Lucknow and Greater Noida (NCR) that levy penalties up to 10% of the project cost for registration violations.
  `
};

export function initDemo() {
  const chatMessages = document.getElementById('chat-messages-container');
  const chatInput = document.getElementById('chat-user-input');
  const chatSendBtn = document.getElementById('chat-send-btn');
  const clearChatBtn = document.getElementById('clear-chat-btn');
  const typingIndicator = document.getElementById('typing-indicator');
  const exampleChips = document.querySelectorAll('.example-query-chip');
  const uploadBtn = document.getElementById('upload-doc-btn');
  const fileInput = document.getElementById('actual-file-input');

  // Trigger file upload dialogue
  if (uploadBtn && fileInput) {
    uploadBtn.addEventListener('click', () => {
      fileInput.click();
    });
    fileInput.addEventListener('change', (e) => {
      if (e.target.files.length > 0) {
        const fileName = e.target.files[0].name;
        appendUserMessage(`[Uploaded Document: ${fileName}]`);
        simulateResponse(`I have analyzed **${fileName}**. 
        
        **Key Findings:**
        1. **Jurisdiction:** Document relates to transactions in **Maharashtra**.
        2. **Stamp Duty:** A potential deficit of **0.25%** under Maharashtra Stamp Act Art 36A has been detected.
        3. **Signatures:** The agreement has not been registered under the Indian Registration Act Sec 17.`);
      }
    });
  }

  function appendUserMessage(text) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'chat-message user';
    messageDiv.innerHTML = `
      <div class="chat-avatar human">U</div>
      <div class="chat-bubble user">
        ${text}
      </div>
    `;
    chatMessages.appendChild(messageDiv);
    scrollToBottom();
  }

  function appendAiMessage(text) {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'chat-message';
    messageDiv.innerHTML = `
      <div class="chat-avatar ai">E</div>
      <div class="chat-bubble">
        ${text}
      </div>
    `;
    chatMessages.appendChild(messageDiv);
    scrollToBottom();
  }

  function scrollToBottom() {
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function simulateResponse(customText = '') {
    typingIndicator.style.display = 'flex';
    scrollToBottom();

    setTimeout(() => {
      typingIndicator.style.display = 'none';
      
      const responseText = customText || `
        I have analyzed your query based on current Central and State statutes. 
        
        **Regulatory Compliance Assessment:**
        - **Stamp Duty:** Stamp duties vary by state jurisdiction. In Delhi, e-stamping is mandatory.
        - **Labor Laws:** Ensure compliance with the respective state Shop & Establishment registration thresholds.
        - **Property:** Any transaction involving real estate must verify the title chain and RERA status.
        
        Let me know if you would like me to compile a draft disclosure sheet or compare a specific second state.
      `;
      
      appendAiMessage(responseText);
    }, 1500);
  }

  function handleSend() {
    const text = chatInput.value.trim();
    if (!text) return;

    appendUserMessage(text);
    chatInput.value = '';

    // Check if we have a simulated response pre-matched
    let matchedResponse = '';
    for (const key in simulatedResponses) {
      if (text.toLowerCase().includes(key.toLowerCase()) || key.toLowerCase().includes(text.toLowerCase())) {
        matchedResponse = simulatedResponses[key];
        break;
      }
    }

    simulateResponse(matchedResponse);
  }

  // Bind enter and click send
  if (chatSendBtn && chatInput) {
    chatSendBtn.addEventListener('click', handleSend);
    chatInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        handleSend();
      }
    });
  }

  // Example chips trigger
  exampleChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const query = chip.getAttribute('data-query');
      chatInput.value = query;
      handleSend();
    });
  });

  // Clear chat
  if (clearChatBtn) {
    clearChatBtn.addEventListener('click', () => {
      chatMessages.innerHTML = `
        <div class="chat-message">
          <div class="chat-avatar ai">E</div>
          <div class="chat-bubble">
            <strong>Chat Cleared.</strong> How can I assist you with Indian legal due diligence or statutory rules today?
          </div>
        </div>
      `;
    });
  }

  // Check for prefilled queries from due diligence page
  const prefilledQuery = localStorage.getItem('euclid_prefilled_query');
  if (prefilledQuery) {
    localStorage.removeItem('euclid_prefilled_query'); // Clear it
    setTimeout(() => {
      chatInput.value = prefilledQuery;
      handleSend();
    }, 300);
  }
}
