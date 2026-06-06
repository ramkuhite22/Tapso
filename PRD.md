# PRD — Tapso: Modern Commerce OS for Indian Social Sellers

## Product Vision
Tapso is a one-stop commerce operating system for Instagram sellers, WhatsApp merchants, D2C brands, and boutique creators in India. The product eliminates manual DM chaos and replaces it with automated UPI checkout, shipping sync, and intelligent analytics.

## Tech Stack
- **Frontend**: Vanilla HTML, CSS (style.css), JavaScript (app.js + data.js)
- **3D Engine**: Three.js (CDN) for animated hero background
- **Icons**: Lucide Icons (CDN)
- **Fonts**: Google Fonts — Outfit, Inter, Space Mono
- **Build**: None (pure static files, served as-is)

## Sections (Implemented)
1. ✅ Navbar — sticky, transparent → frosted glass on scroll
2. ✅ Hero — headline, CTA buttons, social proof stats, Three.js 3D network background
3. ✅ Trust Bar — infinite marquee of integration logos
4. ✅ Problem Section — tabbed comparison of manual vs automated workflow
5. ✅ Features Bento Grid — 15 feature cards with interactive bento demos (OCR, RTO gauge, chat simulator, domain rotator, language carousel)
6. ✅ Storefront Sandbox — live phone mockup customizer with theme/font selectors
7. ✅ Workflow Timeline — 6-step interactive timeline with detail panel
8. ✅ Analytics Dashboard — chart tabs + city revenue breakdown list
9. ✅ Testimonials — 4 seller testimonial cards
10. ✅ Pricing — 3-tier plans with border-beam animation on Pro tier
11. ✅ Final CTA — store URL claim form
12. ✅ Footer — brand description, links, copyright

## Enhancement Backlog (Priority Order)
1. **P1**: Scroll-triggered reveal animations (Intersection Observer) for all sections
2. **P1**: Mobile hamburger menu (responsive navbar for < 768px)
3. **P2**: Navbar active section highlighting (scroll spy)
4. **P2**: Counter animation for hero/analytics stats on scroll into view
5. **P3**: Smooth scroll-jacking parallax for hero section depth
6. **P3**: Add mobile-responsive CSS for storefront section (phone mockup overflow fix)
7. **P3**: Add loading skeleton/spinner while Three.js canvas initializes
8. **P4**: Add toast notification when claim store button is clicked (replace alert())
9. **P4**: Add keyboard navigation and accessibility improvements (ARIA labels, focus states)

## Files
- `index.html` — page structure & section skeleton
- `app.js` — rendering logic, interactive widgets, Three.js setup
- `style.css` — all CSS styles, design tokens
- `data.js` — content data (JSON format via window.TAPSO_DATA)
- `data.json` — same data in JSON format (for fetch fallback)
- `public/favicon.svg` — SVG favicon
- `mockups/` — Tailwind-based prototype mockup pages (reference only)
