// app.js - Client application logic for Tapso dynamic landing page

document.addEventListener('DOMContentLoaded', init);

async function init() {
  try {
    let data = window.TAPSO_DATA;
    if (!data) {
      const response = await fetch('data.json');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      data = await response.json();
    }
    
    // 1. Render all parts of the page from JSON data
    renderNavbar(data.navbar);
    renderHero(data.hero);
    renderTrustbar(data.trustbar);
    renderProblem(data.problem);
    renderFeatures(data.features);
    renderStorefront(data.storebuilder);
    renderWorkflow(data.workflow);
    renderAnalytics(data.analytics);
    renderTestimonials(data.testimonials);
    renderPricing(data.pricing);
    renderFinalCTA(data.finalcta);
    renderFooter(data.footer);
    
    // 2. Setup interactive triggers, states and loops
    setupNavbarScroll();
    setupMobileMenu(data.navbar);
    setupProblemTabs(data.problem);
    setupStorefrontCustomizer(data.storebuilder);
    setupInteractiveBentoWidgets();
    setupWorkflowSlider(data.workflow);
    setupAnalyticsCharts(data.analytics);
    
    // 3. Initialize Three.js 3D Network nodes
    initThreeJsNetwork();

    // 4. Transform Lucide icons
    if (window.lucide) {
      window.lucide.createIcons();
    }

    // 5. Setup scroll-driven UX enhancements (inject DOM first, then wire events)
    injectScrollProgressDOM();
    setupScrollProgressBar();
    setupScrollReveal();
    setupStatsCounter();
    setupScrollSpy(data.navbar);

  } catch (err) {
    console.error("Initialization failed:", err);
  }
}

// ==========================================
// RENDER TEMPLATES
// ==========================================

function renderNavbar(navbarData) {
  const container = document.getElementById('navbar-content');
  if (!container) return;

  const linksHTML = navbarData.links.map(link => 
    `<a href="${link.href}" class="navbar-link" id="nav-link-${link.id}">${link.label}</a>`
  ).join('');

  container.innerHTML = `
    <a href="#" class="navbar-brand">
      <i data-lucide="layers" class="text-tertiary"></i>
      <span>${navbarData.logo}</span>
      <span class="navbar-badge">${navbarData.badge}</span>
    </a>
    <div class="navbar-menu">
      ${linksHTML}
    </div>
    <div class="navbar-actions">
      <button class="navbar-btn-login">${navbarData.cta.login}</button>
      <a href="#finalcta" class="btn btn-primary navbar-btn-signup">${navbarData.cta.signup}</a>
    </div>
    <button class="navbar-hamburger" id="navbar-hamburger" aria-label="Toggle mobile menu" aria-expanded="false">
      <span class="hamburger-bar"></span>
      <span class="hamburger-bar"></span>
      <span class="hamburger-bar"></span>
    </button>
  `;
}

function renderHero(heroData) {
  const container = document.getElementById('hero-content');
  if (!container) return;

  const avatarsHTML = heroData.avatars.map(url => 
    `<img src="${url}" alt="Sellers avatar" class="hero-avatar" />`
  ).join('');

  // Dynamically wrap the number 4,200 in a counter span for high-end feel
  const statsTextHTML = heroData.statsText.replace(
    '4,200',
    `<span class="count-up" data-target="4200" data-format="comma-plus">0</span>`
  );

  container.innerHTML = `
    <div class="hero-tag">
      <i data-lucide="sparkles" class="text-tertiary" style="width: 14px; height: 14px;"></i>
      <span>${heroData.tag}</span>
    </div>
    <h1 class="hero-title">${heroData.title}</h1>
    <p class="hero-description">${heroData.description}</p>
    <div class="hero-ctas">
      <a href="#finalcta" class="btn btn-primary">${heroData.ctaPrimary}</a>
      <a href="#storefront" class="btn btn-secondary">${heroData.ctaSecondary}</a>
    </div>
    <div class="hero-stats">
      <div class="hero-avatars">${avatarsHTML}</div>
      <span class="hero-stats-text">${statsTextHTML}</span>
    </div>
  `;
}

function renderTrustbar(trustData) {
  const container = document.getElementById('trustbar-content');
  if (!container) return;

  const itemsHTML = trustData.integrations.map(item => `
    <div class="marquee-item" style="color: ${item.color}">
      <i data-lucide="${item.icon}" class="marquee-icon"></i>
      <span>${item.name}</span>
    </div>
  `).join('');

  container.innerHTML = `
    <h3 class="trustbar-title">${trustData.title}</h3>
    <div class="marquee-container">
      <div class="marquee-content">${itemsHTML}</div>
      <div class="marquee-content">${itemsHTML}</div> <!-- Duplicate for infinite effect -->
    </div>
  `;
}

function renderProblem(problemData) {
  const container = document.getElementById('problem-content');
  if (!container) return;

  // Render tab buttons
  const tabButtonsHTML = problemData.comparison.map((comp, idx) => `
    <button class="problem-tab-btn ${idx === 0 ? 'active' : ''}" data-step="${comp.id}">
      ${comp.step.split(':')[0]}
    </button>
  `).join('');

  // Render Old Flow comparisons
  const oldFlowHTML = problemData.comparison.map((comp, idx) => `
    <div class="problem-tab-content old-flow ${idx === 0 ? 'active' : ''}" id="old-${comp.id}">
      <div class="comparison-step-card">
        <div class="comparison-icon-container">
          <i data-lucide="alert-octagon"></i>
        </div>
        <div class="comparison-details">
          <div class="comparison-step">${comp.step}</div>
          <div class="comparison-title-row">
            <h4 class="comparison-title">${comp.oldTitle}</h4>
            <span class="comparison-badge">${comp.leakAmount}</span>
          </div>
          <p class="comparison-desc">${comp.oldDesc}</p>
        </div>
      </div>
    </div>
  `).join('');

  // Render New Flow comparisons
  const newFlowHTML = problemData.comparison.map((comp, idx) => `
    <div class="problem-tab-content new-flow ${idx === 0 ? 'active' : ''}" id="new-${comp.id}">
      <div class="comparison-step-card">
        <div class="comparison-icon-container">
          <i data-lucide="check-circle"></i>
        </div>
        <div class="comparison-details">
          <div class="comparison-step">${comp.step}</div>
          <div class="comparison-title-row">
            <h4 class="comparison-title">${comp.newTitle}</h4>
            <span class="comparison-badge">Active</span>
          </div>
          <p class="comparison-desc">${comp.newDesc}</p>
        </div>
      </div>
    </div>
  `).join('');

  container.innerHTML = `
    <div class="problem-container">
      <div class="problem-intro">
        <div class="section-badge">Friction audit</div>
        <h2>${problemData.title}</h2>
        <p class="section-description">${problemData.description}</p>
        <div class="problem-leak-stats">
          <div class="leak-stat-card">
            <div class="leak-stat-value">30%</div>
            <div class="leak-stat-label">Average checkout drop-off</div>
          </div>
          <div class="leak-stat-card">
            <div class="leak-stat-value">4 hrs</div>
            <div class="leak-stat-label">Daily manual task operations</div>
          </div>
        </div>
      </div>
      
      <div class="glass-card problem-card">
        <div class="problem-tabs-header">
          ${tabButtonsHTML}
        </div>
        
        <div style="margin-bottom: 12px; font-family: var(--font-mono); font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-error);">
          ${problemData.leftBanner}
        </div>
        <div class="old-flow-container">
          ${oldFlowHTML}
        </div>
        
        <div style="margin-top: 24px; margin-bottom: 12px; font-family: var(--font-mono); font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-success);">
          ${problemData.rightBanner}
        </div>
        <div class="new-flow-container">
          ${newFlowHTML}
        </div>
      </div>
    </div>
  `;
}

function renderFeatures(featuresData) {
  const header = document.getElementById('features-header');
  const grid = document.getElementById('features-grid-content');
  if (!header || !grid) return;

  header.innerHTML = `
    <div class="section-badge">${featuresData.badge}</div>
    <h2 class="section-title">${featuresData.title}</h2>
    <p class="section-description">${featuresData.description}</p>
  `;

  const cardsHTML = featuresData.list.map(feat => {
    let interactiveHTML = '';
    
    // Check if bento card has interactive layout
    if (feat.interactiveType === 'ocr') {
      interactiveHTML = `
        <div class="ocr-simulator">
          <div class="ocr-screen">
            <div class="ocr-line" id="ocr-msg-1">> Uploading transaction screenshot...</div>
            <div class="ocr-line" id="ocr-msg-2" style="display:none">> Scanning transaction ID...</div>
            <div class="ocr-line" id="ocr-msg-3" style="display:none">> Matches UPI Ref: <span class="ocr-highlight">9012481024</span></div>
            <div class="ocr-line" id="ocr-msg-4" style="display:none">> Verifying bank ledger...</div>
          </div>
          <div style="text-align: center;">
            <span class="ocr-status verifying" id="ocr-status-badge">Verifying</span>
          </div>
        </div>
      `;
    } else if (feat.interactiveType === 'rto') {
      interactiveHTML = `
        <div class="rto-simulator">
          <div class="rto-gauge-container">
            <svg class="rto-gauge-svg" viewBox="0 0 160 100">
              <path class="rto-gauge-track" d="M 20 90 A 60 60 0 0 1 140 90" />
              <path class="rto-gauge-fill" id="rto-gauge-path" d="M 20 90 A 60 60 0 0 1 140 90" />
            </svg>
            <div class="rto-gauge-value">
              <div class="rto-score" id="rto-score-value">94</div>
              <div class="rto-label" id="rto-score-label">Safe</div>
            </div>
          </div>
          <div class="rto-risk-badges">
            <button class="rto-risk-btn active" data-risk="low">Low Risk</button>
            <button class="rto-risk-btn" data-risk="medium">Medium</button>
            <button class="rto-risk-btn" data-risk="high">High Risk</button>
          </div>
        </div>
      `;
    } else if (feat.interactiveType === 'chat') {
      interactiveHTML = `
        <div class="instagram-simulation" id="instagram-chat-container">
          <!-- Bubbles injected dynamically by interval loop -->
        </div>
      `;
    } else if (feat.interactiveType === 'domain') {
      interactiveHTML = `
        <div class="domain-mockup">
          <span class="domain-dot"></span>
          <span class="domain-text" id="domain-rotator">yourbrand.tapso.in</span>
        </div>
      `;
    } else if (feat.interactiveType === 'languages') {
      interactiveHTML = `
        <div class="languages-carousel" id="languages-badge-container">
          <span class="lang-badge active" data-lang="Hindi">हिन्दी</span>
          <span class="lang-badge" data-lang="Tamil">தமிழ்</span>
          <span class="lang-badge" data-lang="Telugu">తెలుగు</span>
          <span class="lang-badge" data-lang="Marathi">मराठी</span>
          <span class="lang-badge" data-lang="Bengali">বাংলা</span>
          <span class="lang-badge" data-lang="English">English</span>
        </div>
      `;
    }

    return `
      <div class="glass-card feature-card ${feat.size || 'small'}">
        <div class="feature-header">
          <div class="feature-icon-wrapper">
            <i data-lucide="${feat.icon}"></i>
          </div>
          ${feat.badge ? `<span class="feature-badge">${feat.badge}</span>` : ''}
        </div>
        <h3 class="feature-title">${feat.title}</h3>
        <p class="feature-desc">${feat.desc}</p>
        ${interactiveHTML}
      </div>
    `;
  }).join('');

  grid.innerHTML = cardsHTML;
}

function renderStorefront(storeData) {
  const header = document.getElementById('storefront-header');
  const container = document.getElementById('storefront-content');
  if (!header || !container) return;

  header.innerHTML = `
    <div class="section-badge">${storeData.badge}</div>
    <h2 class="section-title">${storeData.title}</h2>
    <p class="section-description">${storeData.description}</p>
  `;

  // Themes Options HTML
  const themesHTML = storeData.themes.map((theme, idx) => `
    <button class="customizer-btn color-option ${idx === 0 ? 'active' : ''}" data-theme="${theme.id}">
      <span class="color-circle" style="background-color: ${theme.accentHex}"></span>
      <span>${theme.name}</span>
    </button>
  `).join('');

  // Fonts Options HTML
  const fontsHTML = storeData.fonts.map((font, idx) => `
    <button class="customizer-btn ${idx === 0 ? 'active' : ''}" data-font="${font.id}">
      <span>${font.name}</span>
    </button>
  `).join('');

  // Product cards customizer HTML
  const customizerProductsHTML = storeData.products.map(prod => `
    <div class="phone-product-card" id="cust-prod-${prod.id}">
      <img src="${prod.image}" alt="${prod.name}" class="phone-product-img" />
      <div class="phone-product-name">${prod.name}</div>
      <div class="phone-product-price">${prod.price}</div>
      <button class="phone-product-btn">Buy Now</button>
    </div>
  `).join('');

  container.innerHTML = `
    <div class="customizer-panel">
      <div>
        <h4 class="customizer-group-title">Brand Aesthetics Theme</h4>
        <div class="customizer-options" id="theme-selectors">
          ${themesHTML}
        </div>
      </div>
      
      <div>
        <h4 class="customizer-group-title">Display Typography</h4>
        <div class="customizer-options" id="font-selectors">
          ${fontsHTML}
        </div>
      </div>
      
      <div>
        <h4 class="customizer-group-title">Direct Catalog Sandbox</h4>
        <p style="font-size: 13px; color: var(--text-muted); margin-bottom: 12px;">Click a theme above or watch styling change in the phone mock-up real-time.</p>
        <div class="customizer-options">
          <button class="btn btn-secondary" style="font-size: 13px; padding: 8px 16px;" id="btn-add-product">
            <i data-lucide="plus" style="width: 14px; height: 14px;"></i> Add Product item
          </button>
        </div>
      </div>
    </div>
    
    <div class="phone-mockup-wrapper">
      <div class="phone-frame">
        <div class="phone-screen phone-theme-midnight phone-font-display" id="phone-preview-screen">
          <div class="phone-header">
            <img src="${storeData.reelPlaceholder.image}" alt="Store Owner" class="phone-avatar" />
            <h5 class="phone-title" id="phone-store-title">Kicks & Threads</h5>
            <div class="phone-subtitle">Verified Tapso Store</div>
          </div>
          <div class="phone-products-grid" id="phone-products-container">
            ${customizerProductsHTML}
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderWorkflow(workflowData) {
  const header = document.getElementById('workflow-header');
  const container = document.getElementById('workflow-content');
  if (!header || !container) return;

  header.innerHTML = `
    <div class="section-badge">${workflowData.badge}</div>
    <h2 class="section-title">${workflowData.title}</h2>
    <p class="section-description">${workflowData.description}</p>
  `;

  // Step selector buttons
  const stepsHTML = workflowData.steps.map((step, idx) => `
    <button class="timeline-step-btn ${idx === 0 ? 'active' : ''}" data-step-id="${step.id}">
      <span class="timeline-step-number">${step.id}</span>
      <span class="timeline-step-label">${step.label}</span>
      <i data-lucide="chevron-right" style="margin-left: auto; width: 16px; height: 16px; opacity: 0.5;"></i>
    </button>
  `).join('');

  // Initial presentation detail (populated dynamically by workflow slider setup)
  container.innerHTML = `
    <div class="timeline-steps">
      ${stepsHTML}
    </div>
    <div class="timeline-presentation">
      <div class="glass-card presentation-card" id="presentation-detail-card">
        <!-- Injected Dynamically by JS -->
      </div>
    </div>
  `;
}

function renderAnalytics(analyticsData) {
  const header = document.getElementById('analytics-header');
  const container = document.getElementById('analytics-content');
  if (!header || !container) return;

  header.innerHTML = `
    <div class="section-badge">${analyticsData.badge}</div>
    <h2 class="section-title">${analyticsData.title}</h2>
    <p class="section-description">${analyticsData.description}</p>
  `;

  // Renders city ledger entries
  const cityRowsHTML = analyticsData.cityDistributions.map(city => `
    <div class="analytics-row-item">
      <div class="item-left">
        <span class="item-name">${city.name}</span>
        <span class="item-desc">${city.orders}</span>
      </div>
      <div class="item-right">
        <span class="item-val">${city.gmv}</span>
        <span class="item-share">${city.share}% share</span>
      </div>
    </div>
  `).join('');

  const gmvTarget = analyticsData.monthlyGmv;
  const leadsTarget = analyticsData.verifiedLeads;
  const convTarget = parseFloat(analyticsData.conversionRate);

  container.innerHTML = `
    <div class="glass-card analytics-display-card">
      <div class="analytics-stats-row">
        <div class="analytics-stat-box">
          <div class="analytics-stat-value">₹<span class="count-up" data-target="${gmvTarget}" data-format="rupee">0</span></div>
          <div class="analytics-stat-label">Weekly GMV</div>
        </div>
        <div class="analytics-stat-box">
          <div class="analytics-stat-value"><span class="count-up" data-target="${leadsTarget}" data-format="comma">0</span></div>
          <div class="analytics-stat-label">Checked Leads</div>
        </div>
        <div class="analytics-stat-box">
          <div class="analytics-stat-value"><span class="count-up" data-target="${convTarget}" data-format="decimal" data-decimals="2">0.00</span>%</div>
          <div class="analytics-stat-label">Conv. Rate</div>
        </div>
      </div>
      
      <div class="analytics-tabs-menu">
        <button class="analytics-tab-btn active" data-chart="gmv">GMV Growth</button>
        <button class="analytics-tab-btn" data-chart="leads">Lead Volume</button>
        <button class="analytics-tab-btn" data-chart="conv">Conversion Speed</button>
      </div>
      
      <!-- GMV SVG Chart -->
      <div class="chart-wrapper active" id="chart-gmv">
        <svg class="svg-chart" viewBox="0 0 400 200">
          <defs>
            <linearGradient id="chart-gradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#4cd6ff" />
              <stop offset="100%" stop-color="#4cd6ff" stop-opacity="0" />
            </linearGradient>
          </defs>
          <!-- Grid lines -->
          <line class="svg-grid-line" x1="0" y1="160" x2="400" y2="160" />
          <line class="svg-grid-line" x1="0" y1="120" x2="400" y2="120" />
          <line class="svg-grid-line" x1="0" y1="80" x2="400" y2="80" />
          <line class="svg-grid-line" x1="0" y1="40" x2="400" y2="40" />
          
          <path class="svg-chart-path" d="M 0 160 Q 60 140 100 110 T 200 90 T 300 45 T 400 25" />
          <path class="svg-chart-area" d="M 0 160 Q 60 140 100 110 T 200 90 T 300 45 T 400 25 L 400 200 L 0 200 Z" />
        </svg>
      </div>

      <!-- Leads SVG Chart -->
      <div class="chart-wrapper" id="chart-leads">
        <svg class="svg-chart" viewBox="0 0 400 200">
          <line class="svg-grid-line" x1="0" y1="160" x2="400" y2="160" />
          <line class="svg-grid-line" x1="0" y1="120" x2="400" y2="120" />
          <line class="svg-grid-line" x1="0" y1="80" x2="400" y2="80" />
          <line class="svg-grid-line" x1="0" y1="40" x2="400" y2="40" />
          
          <path class="svg-chart-path" style="stroke: #ec4899;" d="M 0 180 Q 50 160 100 130 T 200 120 T 300 60 T 400 40" />
          <path class="svg-chart-area" style="fill: rgba(236,72,153,0.15);" d="M 0 180 Q 50 160 100 130 T 200 120 T 300 60 T 400 40 L 400 200 L 0 200 Z" />
        </svg>
      </div>

      <!-- Conv Speed SVG Chart -->
      <div class="chart-wrapper" id="chart-conv">
        <svg class="svg-chart" viewBox="0 0 400 200">
          <line class="svg-grid-line" x1="0" y1="160" x2="400" y2="160" />
          <line class="svg-grid-line" x1="0" y1="120" x2="400" y2="120" />
          <line class="svg-grid-line" x1="0" y1="80" x2="400" y2="80" />
          <line class="svg-grid-line" x1="0" y1="40" x2="400" y2="40" />
          
          <path class="svg-chart-path" style="stroke: #10b981;" d="M 0 150 Q 80 130 150 90 T 300 50 T 400 10" />
          <path class="svg-chart-area" style="fill: rgba(16,185,129,0.15);" d="M 0 150 Q 80 130 150 90 T 300 50 T 400 10 L 400 200 L 0 200 Z" />
        </svg>
      </div>
    </div>
    
    <div class="analytics-list-panel">
      <h4 class="analytics-list-title">Sales Distribution by Regional Hubs</h4>
      <div class="analytics-items-container">
        ${cityRowsHTML}
      </div>
    </div>
  `;
}

function renderTestimonials(testimonialsData) {
  const header = document.getElementById('testimonials-header');
  const container = document.getElementById('testimonials-content');
  if (!header || !container) return;

  header.innerHTML = `
    <div class="section-badge">${testimonialsData.badge}</div>
    <h2 class="section-title">${testimonialsData.title}</h2>
    <p class="section-description">${testimonialsData.description}</p>
  `;

  const cardsHTML = testimonialsData.list.map(test => `
    <div class="glass-card testimonial-card">
      <div class="testimonial-profile">
        <img src="${test.image}" alt="${test.name}" class="testimonial-img" />
        <div class="testimonial-meta">
          <h4 class="testimonial-name">${test.name}</h4>
          <p class="testimonial-role">${test.role} • ${test.location}</p>
          <div class="testimonial-stats">
            <span class="testimonial-stat-badge">${test.followers}</span>
            <span class="testimonial-stat-badge">${test.orders}</span>
          </div>
        </div>
      </div>
      <div class="testimonial-quote-box">
        <p class="testimonial-quote">"${test.comment}"</p>
      </div>
      <div class="testimonial-metric-box">
        <i data-lucide="trending-up" class="testimonial-metric-icon"></i>
        <span class="testimonial-metric-text">${test.metric}</span>
      </div>
    </div>
  `).join('');

  container.innerHTML = cardsHTML;
}

function renderPricing(pricingData) {
  const header = document.getElementById('pricing-header');
  const container = document.getElementById('pricing-content');
  if (!header || !container) return;

  header.innerHTML = `
    <div class="section-badge">${pricingData.badge}</div>
    <h2 class="section-title">${pricingData.title}</h2>
    <p class="section-description">${pricingData.description}</p>
  `;

  const cardsHTML = pricingData.tiers.map(tier => {
    const priceText = tier.priceMonthly === 0 ? 'Free' : `₹${tier.priceMonthly.toLocaleString('en-IN')}`;
    const periodText = tier.priceMonthly === 0 ? '' : '/mo';

    const featuresListHTML = tier.features.map(feat => `
      <div class="pricing-feature-item">
        <i data-lucide="check" class="pricing-feature-icon" style="width: 16px; height: 16px;"></i>
        <span>${feat}</span>
      </div>
    `).join('');

    const cardContentHTML = `
      <div class="pricing-card ${tier.isPopular ? 'popular' : ''}">
        <h4 class="pricing-tier-name">${tier.name}</h4>
        <div class="pricing-price-row">
          <span class="pricing-price">${priceText}</span>
          <span class="pricing-period">${periodText}</span>
        </div>
        <p class="pricing-desc">${tier.desc}</p>
        <div class="pricing-features-list">
          ${featuresListHTML}
        </div>
        <a href="#finalcta" class="btn ${tier.isPopular ? 'btn-primary' : 'btn-secondary'} pricing-btn">${tier.buttonText}</a>
      </div>
    `;

    // Wrap Pro OS plan in the border beam animation block
    if (tier.isPopular) {
      return `
        <div class="border-beam-container">
          <div class="border-beam-content" style="height: 100%;">
            ${cardContentHTML}
          </div>
        </div>
      `;
    } else {
      return `
        <div class="glass-card">
          ${cardContentHTML}
        </div>
      `;
    }
  }).join('');

  container.innerHTML = cardsHTML;
}

function renderFinalCTA(ctaData) {
  const container = document.getElementById('finalcta-content');
  if (!container) return;

  const trustTagsHTML = ctaData.trustTags.map(tag => `
    <span class="trust-tag-item">${tag}</span>
  `).join('');

  const demoLinkHTML = ctaData.demoLink ? `
    <div class="finalcta-demo-row">
      <a href="${ctaData.demoLink}" class="finalcta-demo-link" target="_blank" rel="noopener">
        ${ctaData.demoText}
        <i data-lucide="external-link" style="width:12px;height:12px;display:inline-block;margin-left:4px;vertical-align:middle;"></i>
      </a>
    </div>
  ` : '';

  container.innerHTML = `
    <div class="glass-card finalcta-card">
      <div class="section-badge">${ctaData.badge}</div>
      <h2 class="finalcta-title">${ctaData.title}</h2>
      <p class="finalcta-desc">${ctaData.description}</p>
      
      <div class="finalcta-action-row">
        <div class="finalcta-input-group">
          <span class="finalcta-input-prefix">tapso.in/</span>
          <input type="text" class="finalcta-input" placeholder="yourbrandname" id="finalcta-storename-input" />
          <button class="btn btn-primary finalcta-btn" id="btn-claim-store">${ctaData.buttonText}</button>
        </div>
        <div class="finalcta-trust-tags">
          ${trustTagsHTML}
        </div>
        ${demoLinkHTML}
      </div>
    </div>
  `;
}


function renderFooter(footerData) {
  const container = document.getElementById('footer-content');
  if (!container) return;

  // Render footer columns groups
  const groupsHTML = footerData.linksGroups.map(group => {
    const listHTML = group.links.map(link => `
      <li class="footer-link-item"><a href="${link.href}">${link.label}</a></li>
    `).join('');

    return `
      <div class="footer-links-col">
        <h5 class="footer-col-title">${group.title}</h5>
        <ul class="footer-links-list">${listHTML}</ul>
      </div>
    `;
  }).join('');

  container.innerHTML = `
    <div class="footer-top">
      <div class="footer-brand-col">
        <a href="#" class="footer-brand-logo">
          <i data-lucide="layers" class="text-tertiary"></i>
          <span>Tapso</span>
        </a>
        <p class="footer-brand-desc">${footerData.description}</p>
        <div class="footer-socials">
          <a href="#" class="footer-social-link"><i data-lucide="twitter" style="width: 18px; height: 18px;"></i></a>
          <a href="#" class="footer-social-link"><i data-lucide="instagram" style="width: 18px; height: 18px;"></i></a>
          <a href="#" class="footer-social-link"><i data-lucide="youtube" style="width: 18px; height: 18px;"></i></a>
        </div>
      </div>
      ${groupsHTML}
    </div>
    
    <div class="footer-bottom">
      <span class="footer-copyright">${footerData.copyright}</span>
      <span class="footer-address">${footerData.subCopyright}</span>
    </div>
  `;
}

// ==========================================
// INTERACTIVE ENGINE BINDINGS
// ==========================================

// ==========================================
// MOBILE MENU SETUP
// ==========================================

function setupMobileMenu(navbarData) {
  // Build mobile menu DOM element
  const mobileMenu = document.createElement('div');
  mobileMenu.className = 'mobile-menu';
  mobileMenu.id = 'mobile-menu';
  mobileMenu.setAttribute('aria-hidden', 'true');

  const linksHTML = navbarData.links.map(link =>
    `<a href="${link.href}" class="mobile-menu-link" id="mobile-nav-${link.id}">${link.label}</a>`
  ).join('');

  mobileMenu.innerHTML = `
    ${linksHTML}
    <div class="mobile-menu-divider"></div>
    <div class="mobile-menu-cta">
      <button class="btn btn-secondary" style="width: 100%;">${navbarData.cta.login}</button>
      <a href="#finalcta" class="btn btn-primary" style="width: 100%; text-align: center;">${navbarData.cta.signup}</a>
    </div>
  `;

  document.body.appendChild(mobileMenu);

  const hamburgerBtn = document.getElementById('navbar-hamburger');
  if (!hamburgerBtn) return;

  function openMenu() {
    mobileMenu.classList.add('open');
    hamburgerBtn.classList.add('open');
    hamburgerBtn.setAttribute('aria-expanded', 'true');
    mobileMenu.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    mobileMenu.classList.remove('open');
    hamburgerBtn.classList.remove('open');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
    mobileMenu.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  hamburgerBtn.addEventListener('click', () => {
    if (mobileMenu.classList.contains('open')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Close menu on link click
  mobileMenu.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('click', closeMenu);
  });

  // Close menu on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });
}

function setupNavbarScroll() {
  const header = document.getElementById('navbar');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

function setupProblemTabs(problemData) {
  const container = document.getElementById('problem-content');
  if (!container) return;

  container.addEventListener('click', (e) => {
    const tabBtn = e.target.closest('.problem-tab-btn');
    if (!tabBtn) return;

    const stepId = tabBtn.dataset.step;
    
    // Toggle active classes on tab buttons
    container.querySelectorAll('.problem-tab-btn').forEach(btn => {
      btn.classList.remove('active');
    });
    tabBtn.classList.add('active');

    // Toggle old flow visibility
    container.querySelectorAll('.old-flow').forEach(content => {
      content.classList.remove('active');
    });
    const targetOld = document.getElementById(`old-${stepId}`);
    if (targetOld) targetOld.classList.add('active');

    // Toggle new flow visibility
    container.querySelectorAll('.new-flow').forEach(content => {
      content.classList.remove('active');
    });
    const targetNew = document.getElementById(`new-${stepId}`);
    if (targetNew) targetNew.classList.add('active');
  });
}

function setupStorefrontCustomizer(storeData) {
  const container = document.getElementById('storefront-content');
  if (!container) return;

  const phonePreview = document.getElementById('phone-preview-screen');
  const addBtn = document.getElementById('btn-add-product');
  const productsContainer = document.getElementById('phone-products-container');

  // Handle Theme customizer clicks
  const themeSelectors = document.getElementById('theme-selectors');
  if (themeSelectors && phonePreview) {
    themeSelectors.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-theme]');
      if (!btn) return;

      themeSelectors.querySelectorAll('[data-theme]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const themeId = btn.dataset.theme;
      // remove old themes classes
      phonePreview.className = phonePreview.className.replace(/phone-theme-\w+/g, '');
      phonePreview.classList.add(`phone-theme-${themeId}`);
    });
  }

  // Handle Font customizer clicks
  const fontSelectors = document.getElementById('font-selectors');
  if (fontSelectors && phonePreview) {
    fontSelectors.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-font]');
      if (!btn) return;

      fontSelectors.querySelectorAll('[data-font]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const fontId = btn.dataset.font;
      // remove old font classes
      phonePreview.className = phonePreview.className.replace(/phone-font-\w+/g, '');
      phonePreview.classList.add(`phone-font-${fontId}`);
    });
  }

  // Dynamic Add Product action
  if (addBtn && productsContainer) {
    let addedCount = 0;
    addBtn.addEventListener('click', () => {
      addedCount++;
      const newCard = document.createElement('div');
      newCard.className = 'phone-product-card';
      newCard.style.animation = 'fade-in 0.4s ease forwards';
      newCard.innerHTML = `
        <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBshR9My9iAebUs-n_Unyw-gVzeJrCkwtW0BWTH88VgKvhrw5PdXjFbjqJBVPE5U-MSQvQEuOVsagJnmbT213d0TaRKscWmUpj0_YO5wa_vvOboiQHrE5c9KjHM7emLtFbNlNKhV-JW0HZKE4RDIb9-8rLIaRJWfMO08dd1DYDztNjUZvzo4_SWpGZLh8aNLiWWm8wfOgAdDnCs_KUDLu4VXcFMvucg7IppETxEOMBs19ZAT9vIxuENVrdMCdWgyjhX7uopb_1yuXMT" class="phone-product-img" />
        <div class="phone-product-name">New Collection Item #${addedCount}</div>
        <div class="phone-product-price">₹1,299</div>
        <button class="phone-product-btn">Buy Now</button>
      `;
      productsContainer.prepend(newCard);
      
      // Auto scroll phone container up
      phonePreview.scrollTop = 0;
    });
  }

  // Claim Store name interaction
  const claimBtn = document.getElementById('btn-claim-store');
  const nameInput = document.getElementById('finalcta-storename-input');
  if (claimBtn && nameInput) {
    claimBtn.addEventListener('click', () => {
      const val = nameInput.value.trim() || 'yourbrand';
      alert(`Congratulations! The store URL: tapso.in/${val.toLowerCase()} has been reserved. Redirecting to onboarding...`);
    });
  }
}

function setupInteractiveBentoWidgets() {
  // 1. UPI OCR Verification Typing Loop
  const lines = [
    document.getElementById('ocr-msg-1'),
    document.getElementById('ocr-msg-2'),
    document.getElementById('ocr-msg-3'),
    document.getElementById('ocr-msg-4')
  ];
  const badge = document.getElementById('ocr-status-badge');
  let currentOcrStep = 0;

  if (lines[0] && badge) {
    setInterval(() => {
      currentOcrStep = (currentOcrStep + 1) % 6;
      if (currentOcrStep === 0) {
        lines.forEach(l => l.style.display = 'none');
        lines[0].style.display = 'block';
        badge.className = 'ocr-status verifying';
        badge.innerText = 'Uploading';
      } else if (currentOcrStep === 1) {
        lines[1].style.display = 'block';
        badge.innerText = 'Scanning';
      } else if (currentOcrStep === 2) {
        lines[2].style.display = 'block';
      } else if (currentOcrStep === 3) {
        lines[3].style.display = 'block';
        badge.innerText = 'Matching';
      } else if (currentOcrStep === 4) {
        badge.className = 'ocr-status verified';
        badge.innerText = '✓ Verified';
      }
    }, 1500);
  }

  // 2. COD RTO Risk Meter Controller
  const rtoPath = document.getElementById('rto-gauge-path');
  const rtoScore = document.getElementById('rto-score-value');
  const rtoLabel = document.getElementById('rto-score-label');
  const rtoBtnGroup = document.querySelector('.rto-risk-badges');

  // Gauge utility: map 0-100 to dashoffset 220 to 0
  function updateRtoGauge(score, labelText, colorHex) {
    if (!rtoPath || !rtoScore || !rtoLabel) return;
    rtoScore.innerText = score;
    rtoLabel.innerText = labelText;
    rtoScore.style.color = colorHex;
    rtoLabel.style.color = colorHex;
    rtoPath.style.stroke = colorHex;
    
    // arc length is approx 188.5 units. offset = 188.5 - (score/100 * 188.5)
    const arcLength = 188.5;
    const offset = arcLength - (score / 100) * arcLength;
    rtoPath.style.strokeDasharray = arcLength;
    rtoPath.style.strokeDashoffset = offset;
  }

  // Init gauge
  updateRtoGauge(94, 'Safe', '#10b981');

  if (rtoBtnGroup) {
    rtoBtnGroup.addEventListener('click', (e) => {
      const btn = e.target.closest('.rto-risk-btn');
      if (!btn) return;

      rtoBtnGroup.querySelectorAll('.rto-risk-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const risk = btn.dataset.risk;
      if (risk === 'low') {
        updateRtoGauge(94, 'Safe', '#10b981');
      } else if (risk === 'medium') {
        updateRtoGauge(62, 'Warn', '#f59e0b');
      } else if (risk === 'high') {
        updateRtoGauge(28, 'Flagged', '#ef4444');
      }
    });
  }

  // 3. Instagram Chat Simulator
  const chatContainer = document.getElementById('instagram-chat-container');
  const bubbles = [
    { type: 'buyer', text: 'Hi Pooja! Is this georgette Saree still in stock?' },
    { type: 'seller', text: 'Hey there! Yes, standard peach border size is available. Click to checkout instantly: <span style="text-decoration: underline;">tapso.in/pooja/saree</span>' },
    { type: 'buyer', text: 'Done paying, transaction ref screenshot attached!' },
    { type: 'seller', text: '✓ Verified instantly! Payment matched. Your Delhivery shipping label is printing.' }
  ];

  if (chatContainer) {
    let currentBubble = 0;
    
    function runChatLoop() {
      chatContainer.innerHTML = '';
      currentBubble = 0;
      
      function showNextBubble() {
        if (currentBubble >= bubbles.length) {
          setTimeout(runChatLoop, 4000); // Reset chat after 4 seconds
          return;
        }
        const b = bubbles[currentBubble];
        const div = document.createElement('div');
        div.className = `chat-bubble ${b.type}`;
        div.innerHTML = b.text;
        chatContainer.appendChild(div);
        
        chatContainer.scrollTop = chatContainer.scrollHeight;
        currentBubble++;
        setTimeout(showNextBubble, 2000);
      }
      showNextBubble();
    }
    runChatLoop();
  }

  // 4. Custom Domain Name Rotator Loop
  const domainsList = [
    'crafts.in', 'poojaboutique.tapso.in', 'mumbaishops.tapso.in', 'threads.in', 'yourbrand.tapso.in'
  ];
  const domLabel = document.getElementById('domain-rotator');
  if (domLabel) {
    let domIndex = 0;
    setInterval(() => {
      domIndex = (domIndex + 1) % domainsList.length;
      domLabel.innerText = domainsList[domIndex];
    }, 2500);
  }

  // 5. Multi-Lingual badge carousel Cycle
  const langContainer = document.getElementById('languages-badge-container');
  if (langContainer) {
    const badges = langContainer.querySelectorAll('.lang-badge');
    let langIndex = 0;
    setInterval(() => {
      badges.forEach(b => b.classList.remove('active'));
      langIndex = (langIndex + 1) % badges.length;
      badges[langIndex].classList.add('active');
    }, 2000);
  }
}

function setupWorkflowSlider(workflowData) {
  const container = document.getElementById('workflow-content');
  if (!container) return;

  const presentationCard = document.getElementById('presentation-detail-card');
  const steps = workflowData.steps;

  // Custom function to render illustrations matching index
  function getIllustrationHTML(type) {
    if (type === 'comment') {
      return `
        <div class="illustration-widget active">
          <div class="illustration-bubble-row">
            <div class="illustration-bubble">
              <i data-lucide="user" style="width: 14px; height: 14px;"></i>
              <span>Customer: "Price of the red saree?"</span>
            </div>
            <div class="illustration-bubble" style="opacity: 0.5;">
              <i data-lucide="message-square" style="width: 14px; height: 14px;"></i>
              <span>Detecting user intent...</span>
            </div>
          </div>
        </div>`;
    } else if (type === 'dm') {
      return `
        <div class="illustration-widget active">
          <div class="illustration-bubble-row">
            <div class="illustration-bubble right">
              <span>Auto-DM: "Hey! Peach georgette Saree is ₹2,499. Pay securely here: tapso.in/s/red-saree"</span>
              <i data-lucide="check" style="width: 14px; height: 14px;"></i>
            </div>
          </div>
        </div>`;
    } else if (type === 'upi') {
      return `
        <div class="illustration-widget active">
          <div class="illustration-pay-panel">
            <div style="font-size: 11px; color: var(--text-muted);">SELECT UPI APP</div>
            <div class="upi-brands-row">
              <span class="upi-brand-pill" style="border-color: #5f259f; color: #b080ff;">PhonePe</span>
              <span class="upi-brand-pill" style="border-color: #00baf2; color: #4cd6ff;">Paytm</span>
              <span class="upi-brand-pill" style="border-color: #10b981; color: #34d399;">GPay</span>
            </div>
            <div style="font-size: 10px; text-align: center; color: var(--text-muted);">✓ 1-Tap Secure Redirect</div>
          </div>
        </div>`;
    } else if (type === 'ocr') {
      return `
        <div class="illustration-widget active">
          <div class="illustration-pay-panel" style="border-color: var(--color-success);">
            <div style="font-family: var(--font-mono); font-size: 11px; color: var(--color-success); display:flex; align-items:center; gap: 8px;">
              <i data-lucide="check-circle" style="width: 16px; height: 16px;"></i>
              <span>LEDGER TRANSACTION VERIFIED</span>
            </div>
            <div style="font-size: 11px;">UPI ID Ref: 410928410294 matched to Pooja Bank Account.</div>
          </div>
        </div>`;
    } else if (type === 'whatsapp') {
      return `
        <div class="illustration-widget active">
          <div class="illustration-bubble-row">
            <div class="illustration-bubble" style="border-color: #25D366; background: rgba(37, 211, 102, 0.05); max-width: 100%;">
              <i data-lucide="message-circle" style="color: #25D366; width: 16px; height: 16px;"></i>
              <div style="font-size:11px;">
                <strong>WhatsApp Order Confirmation</strong><br />
                Hi Priya! Your payment of ₹2,499 was confirmed. Shipping details: Delhivery. Tracking link: tapso.ship/90214
              </div>
            </div>
          </div>
        </div>`;
    } else if (type === 'dispatch') {
      return `
        <div class="illustration-widget active">
          <div class="illustration-pay-panel" style="width: 90%;">
            <div style="display:flex; justify-content:space-between; align-items:center; border-bottom: 1px solid var(--border-muted); padding-bottom: 8px;">
              <span style="font-size: 11px; font-family:var(--font-mono);">Delhivery Airway Bill</span>
              <span style="font-size: 10px; color: var(--color-accent); font-weight:700;">AWB PREPARED</span>
            </div>
            <div style="font-size:10px; color: var(--text-muted); margin-top: 8px;">
              SHIP TO: Priya Sen, Sector 15, Gurugram, Haryana. Weight: 0.8 Kg.
            </div>
          </div>
        </div>`;
    }
    return '';
  }

  function displayStep(stepId) {
    if (!presentationCard) return;

    const step = steps.find(s => s.id === parseInt(stepId));
    if (!step) return;

    presentationCard.innerHTML = `
      <div class="presentation-header">
        <span class="presentation-badge" style="background: ${step.colorClass.split(' ')[0]}; border-color: ${step.colorClass.split(' ')[1]}; color: ${step.colorClass.split(' ')[2]}">${step.badge}</span>
        <span class="presentation-time">${step.timeframe}</span>
      </div>
      <h3 class="presentation-title" style="display: flex; align-items: center; gap: 10px;">
        <i data-lucide="${step.icon}" class="${step.textColor}"></i>
        <span>${step.title}</span>
      </h3>
      <p class="presentation-desc">${step.detail}</p>
      
      <div class="presentation-illustration">
        ${getIllustrationHTML(step.illustrationType)}
      </div>
    `;

    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  // Load first step by default
  displayStep(1);

  // Setup click triggers
  container.addEventListener('click', (e) => {
    const btn = e.target.closest('.timeline-step-btn');
    if (!btn) return;

    container.querySelectorAll('.timeline-step-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const stepId = btn.dataset.stepId;
    displayStep(stepId);
  });
}

function setupAnalyticsCharts(analyticsData) {
  const container = document.getElementById('analytics-content');
  if (!container) return;

  const tabBtnGroup = container.querySelector('.analytics-tabs-menu');
  if (!tabBtnGroup) return;

  tabBtnGroup.addEventListener('click', (e) => {
    const btn = e.target.closest('.analytics-tab-btn');
    if (!btn) return;

    tabBtnGroup.querySelectorAll('.analytics-tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const chartId = btn.dataset.chart;
    
    // Toggle active chart panel visibility
    container.querySelectorAll('.chart-wrapper').forEach(wrapper => {
      wrapper.classList.remove('active');
    });

    const activeChart = document.getElementById(`chart-${chartId}`);
    if (activeChart) {
      activeChart.classList.add('active');
      
      // Trigger SVG draw animations by resetting the path dash
      const path = activeChart.querySelector('.svg-chart-path');
      if (path) {
        path.style.animation = 'none';
        path.offsetHeight; // Trigger reflow
        path.style.animation = 'chart-draw 1.8s ease-out forwards';
      }
    }
  });
}

// ==========================================
// SCROLL PROGRESS BAR
// ==========================================

function injectScrollProgressDOM() {
  const bar = document.createElement('div');
  bar.className = 'scroll-progress-bar';
  bar.id = 'scroll-progress-bar';
  document.body.prepend(bar);
}

function setupScrollProgressBar() {
  window.addEventListener('scroll', () => {
    const bar = document.getElementById('scroll-progress-bar');
    if (!bar) return;
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    bar.style.width = `${Math.min(progress, 100)}%`;
  }, { passive: true });
}

// ==========================================
// SCROLL REVEAL ANIMATIONS
// ==========================================

function setupScrollReveal() {
  // Elements to animate — add .reveal class to target groups
  const revealSelectors = [
    '.section-header',
    '.hero-tag',
    '.hero-title',
    '.hero-description',
    '.hero-ctas',
    '.hero-stats',
    '.trustbar-title',
    '.problem-intro',
    '.problem-card',
    '.feature-card',
    '.storefront-container',
    '.timeline-step-btn',
    '.timeline-presentation',
    '.analytics-display-card',
    '.analytics-list-panel',
    '.testimonial-card',
    '.border-beam-container',
    '.glass-card.finalcta-card',
    '.footer-top',
    '.footer-bottom',
    '.leak-stat-card'
  ];

  const allRevealElements = [];

  revealSelectors.forEach(selector => {
    document.querySelectorAll(selector).forEach((el) => {
      if (!el.classList.contains('reveal')) {
        el.classList.add('reveal');
        allRevealElements.push(el);
      }
    });
  });

  // Stagger grid children (feature cards, testimonial cards, pricing)
  const staggerGridSelectors = [
    '.features-grid',
    '.testimonials-grid',
    '.pricing-grid',
    '.problem-leak-stats',
    '.timeline-steps'
  ];

  staggerGridSelectors.forEach(gridSel => {
    const grids = document.querySelectorAll(gridSel);
    grids.forEach(grid => {
      Array.from(grid.children).forEach((child, idx) => {
        const delay = Math.min(idx + 1, 6);
        child.classList.add(`reveal-delay-${delay}`);
      });
    });
  });

  // Setup IntersectionObserver
  if (!('IntersectionObserver' in window)) {
    // Fallback: show all immediately
    allRevealElements.forEach(el => el.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Animate once only
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  allRevealElements.forEach(el => observer.observe(el));
}

// ==========================================
// STATS COUNTER ANIMATION (Count Up)
// ==========================================

function setupStatsCounter() {
  const counters = document.querySelectorAll('.count-up');
  
  const animateCounter = (el) => {
    const target = parseFloat(el.getAttribute('data-target'));
    const format = el.getAttribute('data-format');
    const decimals = parseInt(el.getAttribute('data-decimals')) || 0;
    const duration = 1500; // 1.5 seconds animation
    const startTime = performance.now();
    
    const formatNumber = (value) => {
      if (format === 'rupee') {
        // Format with Indian style: ₹1,84,290
        return Math.round(value).toLocaleString('en-IN');
      } else if (format === 'comma') {
        return Math.round(value).toLocaleString('en-US');
      } else if (format === 'comma-plus') {
        return '+' + Math.round(value).toLocaleString('en-US');
      } else if (format === 'decimal') {
        return value.toFixed(decimals);
      }
      return value.toString();
    };
    
    const update = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Ease out quad formula: progress * (2 - progress)
      const easeProgress = progress * (2 - progress);
      const currentValue = easeProgress * target;
      
      el.textContent = formatNumber(currentValue);
      
      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        el.textContent = formatNumber(target);
      }
    };
    
    requestAnimationFrame(update);
  };

  if (!('IntersectionObserver' in window)) {
    // Fallback: update immediately
    counters.forEach(animateCounter);
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target); // Animate once
      }
    });
  }, { threshold: 0.1 });

  counters.forEach(c => observer.observe(c));
}


// ==========================================
// NAVBAR SCROLL SPY (active section highlight)
// ==========================================

function setupScrollSpy(navbarData) {
  const sectionIds = navbarData.links.map(l => l.href.replace('#', ''));
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const sectionId = entry.target.id;
        
        // Update desktop nav links
        document.querySelectorAll('.navbar-link').forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
        
        // Update mobile nav links
        document.querySelectorAll('.mobile-menu-link').forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }, { threshold: 0.35 });

  sectionIds.forEach(id => {
    const section = document.getElementById(id);
    if (section) observer.observe(section);
  });
}

// ==========================================
// THREE.JS 3D CORE SYSTEM (Octahedron Nodes)
// ==========================================

function initThreeJsNetwork() {
  const canvasContainer = document.getElementById('three-canvas-container');
  if (!canvasContainer) return;

  // Scene
  const scene = new THREE.Scene();
  
  // Camera
  const camera = new THREE.PerspectiveCamera(45, canvasContainer.clientWidth / canvasContainer.clientHeight, 0.1, 1000);
  camera.position.set(0, 0, 18);

  // Renderer
  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(canvasContainer.clientWidth, canvasContainer.clientHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  canvasContainer.appendChild(renderer.domElement);

  // Lightings
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
  scene.add(ambientLight);

  const dirLight = new THREE.DirectionalLight(0x4cd6ff, 1.2);
  dirLight.position.set(5, 10, 7);
  scene.add(dirLight);

  const pinkLight = new THREE.PointLight(0xec4899, 1.5, 30);
  pinkLight.position.set(-8, -4, 5);
  scene.add(pinkLight);

  // Network Nodes definitions (Position vectors relative to center)
  const nodeDefs = [
    { name: 'Core Hub', pos: new THREE.Vector3(0, 0, 0), size: 1.2, color: 0x4cd6ff },
    { name: 'WhatsApp DM', pos: new THREE.Vector3(-4.5, 2.5, 0), size: 0.6, color: 0x25D366 },
    { name: 'Insta Cart', pos: new THREE.Vector3(4.5, 3.0, 1), size: 0.6, color: 0xff3b9a },
    { name: 'UPI Gateway', pos: new THREE.Vector3(5.0, -2.0, -1), size: 0.6, color: 0x5f259f },
    { name: 'Delhivery Sync', pos: new THREE.Vector3(-5.2, -2.5, 1), size: 0.6, color: 0xffb03a },
    { name: 'Ledger Khata', pos: new THREE.Vector3(0, -3.8, 2), size: 0.6, color: 0x00dbe7 }
  ];

  const nodeMeshes = [];
  const nodeGroup = new THREE.Group();
  scene.add(nodeGroup);

  // Build 3D mesh representations (Octahedrons look high-tech / digital)
  nodeDefs.forEach(def => {
    const geometry = new THREE.OctahedronGeometry(def.size, 0);
    const material = new THREE.MeshPhongMaterial({
      color: def.color,
      emissive: def.color,
      emissiveIntensity: 0.2,
      flatShading: true,
      transparent: true,
      opacity: 0.95
    });
    
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.copy(def.pos);
    nodeGroup.add(mesh);
    
    // Store reference details for labels and logic updates
    nodeMeshes.push({
      name: def.name,
      mesh: mesh,
      pos: def.pos,
      baseScale: def.size,
      color: def.color
    });

    // Create wireframe overlay for nodes
    const wireGeo = new THREE.OctahedronGeometry(def.size * 1.05, 0);
    const wireMat = new THREE.MeshBasicMaterial({
      color: def.color,
      wireframe: true,
      transparent: true,
      opacity: 0.25
    });
    const wireMesh = new THREE.Mesh(wireGeo, wireMat);
    mesh.add(wireMesh);
  });

  // Create connecting Bezier Curves and animated pulse dots
  const curvesList = [];
  const pulseDotsList = [];
  const centralHubMesh = nodeMeshes[0].mesh;

  // Link surrounding nodes to Central core hub
  for (let i = 1; i < nodeMeshes.length; i++) {
    const targetNode = nodeMeshes[i];
    
    // Create custom Bezier Curve with slight upward bend for elegance
    const start = targetNode.pos;
    const end = nodeMeshes[0].pos; // Hub
    
    // Midpoint vector with slight offset perpendicular to line
    const mid = new THREE.Vector3().addVectors(start, end).multiplyScalar(0.5);
    mid.y += 1.2; // bend upward
    mid.z += 0.8; // push outward
    
    const curve = new THREE.QuadraticBezierCurve3(start, mid, end);
    curvesList.push(curve);

    // Draw the curve line in 3D
    const points = curve.getPoints(30);
    const lineGeo = new THREE.BufferGeometry().setFromPoints(points);
    const lineMat = new THREE.LineBasicMaterial({
      color: targetNode.color,
      transparent: true,
      opacity: 0.18
    });
    const curveLine = new THREE.Line(lineGeo, lineMat);
    nodeGroup.add(curveLine);

    // Instantiate tiny pulse spheres traveling along lines
    const pulseGeo = new THREE.SphereGeometry(0.08, 8, 8);
    const pulseMat = new THREE.MeshBasicMaterial({
      color: targetNode.color,
      transparent: true,
      opacity: 0.9
    });
    const pulseMesh = new THREE.Mesh(pulseGeo, pulseMat);
    nodeGroup.add(pulseMesh);

    // Pulse metadata
    pulseDotsList.push({
      mesh: pulseMesh,
      curve: curve,
      progress: Math.random(), // randomize start offsets
      speed: 0.003 + Math.random() * 0.005,
      targetNode: targetNode
    });
  }

  // Create HTML Projected labels
  const overlayContainer = document.createElement('div');
  overlayContainer.style.position = 'absolute';
  overlayContainer.style.top = '0';
  overlayContainer.style.left = '0';
  overlayContainer.style.width = '100%';
  overlayContainer.style.height = '100%';
  overlayContainer.style.pointerEvents = 'none';
  overlayContainer.style.overflow = 'hidden';
  canvasContainer.appendChild(overlayContainer);

  const labelElements = nodeMeshes.map(node => {
    const el = document.createElement('div');
    el.className = 'floating-overlay-label';
    el.innerHTML = `
      <span class="dot" style="background-color: #${node.color.toString(16).padStart(6, '0')}"></span>
      <span>${node.name}</span>
    `;
    overlayContainer.appendChild(el);
    return { element: el, pos: node.pos };
  });

  // Mouse Parallax coordinates tracking variables
  let targetMouseX = 0;
  let targetMouseY = 0;
  let currentMouseX = 0;
  let currentMouseY = 0;

  // Scroll Parallax tracking variables
  let targetScrollY = 0;
  let currentScrollY = 0;

  window.addEventListener('mousemove', (e) => {
    // Normalize coordinates from -1 to 1
    targetMouseX = (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2);
    targetMouseY = (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2);
  });

  window.addEventListener('scroll', () => {
    targetScrollY = window.scrollY;
  }, { passive: true });

  // Animation render loop
  const clock = new THREE.Clock();

  function animate() {
    requestAnimationFrame(animate);

    const delta = clock.getDelta();
    const time = clock.getElapsedTime();

    // Rotate meshes individually
    nodeMeshes.forEach((n, idx) => {
      n.mesh.rotation.y += 0.006 * (idx % 2 === 0 ? 1 : -1);
      n.mesh.rotation.x += 0.004;
      
      // Idle float scale breathing
      const scaleMultiplier = 1 + Math.sin(time * 2 + idx) * 0.04;
      n.mesh.scale.set(scaleMultiplier, scaleMultiplier, scaleMultiplier);
    });

    // Rotate the overall group slightly over time
    nodeGroup.rotation.y = Math.sin(time * 0.1) * 0.15;

    // Animate transaction pulses along bezier curves
    pulseDotsList.forEach(p => {
      p.progress += p.speed;
      if (p.progress >= 1.0) {
        p.progress = 0;
        
        // Flash scale node feedback pulse when transaction matches hub
        centralHubMesh.scale.set(1.3, 1.3, 1.3);
      }
      const position = p.curve.getPointAt(p.progress);
      p.mesh.position.copy(position);
    });

    // Hide loader overlay on first frame render
    const loader = document.getElementById('hero-canvas-loader');
    if (loader) {
      loader.classList.add('fade-out');
      setTimeout(() => loader.remove(), 600);
    }

    // Smooth Mouse Parallax calculations
    currentMouseX += (targetMouseX - currentMouseX) * 0.05;
    currentMouseY += (targetMouseY - currentMouseY) * 0.05;

    // Smooth Scroll Parallax calculations
    currentScrollY += (targetScrollY - currentScrollY) * 0.08;
    const scrollFactor = currentScrollY / (window.innerHeight || 800);
    const cameraOffsetY = -scrollFactor * 5.5;

    // Tilt the overall group slightly based on scroll depth
    nodeGroup.rotation.x = scrollFactor * 0.45;

    // Position camera based on parallax and scroll
    camera.position.x = currentMouseX * 3.5;
    camera.position.y = -currentMouseY * 3.5 + cameraOffsetY;
    camera.position.z = 18 - (Math.abs(currentMouseX) + Math.abs(currentMouseY)) * 0.5;
    camera.lookAt(scene.position);

    // Project 3D nodes coordinates into 2D DOM screen space for floating labels
    const halfWidth = canvasContainer.clientWidth / 2;
    const halfHeight = canvasContainer.clientHeight / 2;

    labelElements.forEach(label => {
      const vector = label.pos.clone();
      
      // Apply overall nodeGroup rotations to projected coords
      vector.applyEuler(nodeGroup.rotation);
      vector.project(camera);

      // Convert projects outputs (-1 to +1) to absolute pixels
      const x = (vector.x * halfWidth) + halfWidth;
      const y = -(vector.y * halfHeight) + halfHeight;

      // Position absolute element, offset to center on node
      label.element.style.transform = `translate(-50%, -100%) translate(${x}px, ${y - 15}px)`;
      
      // Hide labels if behind camera
      if (vector.z > 1) {
        label.element.style.opacity = '0';
      } else {
        label.element.style.opacity = '1';
      }
    });

    renderer.render(scene, camera);
  }

  animate();

  // Resize listener
  window.addEventListener('resize', () => {
    if (!canvasContainer) return;
    camera.aspect = canvasContainer.clientWidth / canvasContainer.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(canvasContainer.clientWidth, canvasContainer.clientHeight);
  });
}
