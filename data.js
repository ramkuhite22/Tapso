// data.js - Static JSON data for direct file:// protocol loading

window.TAPSO_DATA = {
  "navbar": {
    "logo": "Tapso",
    "badge": "OS v1.0",
    "links": [
      { "id": "features", "label": "Features", "href": "#features" },
      { "id": "storefront", "label": "Storefront", "href": "#storefront" },
      { "id": "workflow", "label": "Workflow", "href": "#workflow" },
      { "id": "analytics", "label": "Analytics", "href": "#analytics" },
      { "id": "testimonials", "label": "Testimonials", "href": "#testimonials" },
      { "id": "pricing", "label": "Pricing", "href": "#pricing" }
    ],
    "cta": {
      "login": "Login",
      "signup": "Get Started"
    }
  },
  "hero": {
    "tag": "India's Social Commerce OS",
    "title": "Never lose a <span class=\"text-tertiary relative cyan-text-glow\">WhatsApp order</span> again.",
    "description": "Tapso helps Instagram sellers, creators, and D2C brands in India turn their social DMs into an automated commerce engine. Confirm orders, sync shipping, and collect automated UPI payments instantly.",
    "ctaPrimary": "Create Your Tapso",
    "ctaSecondary": "Explore Sandbox",
    "avatars": [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDuwiZtoZJ34yVHOm7hCfeaseho3xqVRJd9ozTGnjG3_taRPsiq6FdrKOrBw7hzohSTXCDFjAqi98kkpfFlo1E8xEA8OLWOxrs1tym9Tr9Ij-2_zQ3qrvL79jS0VSAFNrMNUfQkZwm2qDt2lmU_TmUFyh_T7nsbztaXPOHYEo2xvvaGr-mDX3v4qnZkcaamH1vdmAuuDeMBRsLXcT85iX1sXErtAPkdeDRbP321kRJrwuS2YG5M2JTJ7W9A2uWh-csO0ohkI31FbHC9",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuABIMjHWNXs9SHN59iltrCTit-sEWQtZsAspY6pzchvntzrsz7qApG7dN35I7F8PbOxgFdZhMJOBhC3H547Tti4w8vSDJnXR5V9oDTdbmZdShmxat4KXNS2E7usihqrQtLYkmdX0RkZ3FM1FVl-pp5oLqLLWLo5YBNY4OnxxM5oOVcw0xAmWHjJam1dfyV9zfvyOvPWXCn1Hwpzq0QZV8fact5qupnApGhx5ljNdqve5I0C6Nr8OLkon5R-I4TaiI2x7M77HZzIBPqu",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDrtFLBxnJCYoye8_uzOKNtBGueI7PfcY_FwPe1uavcXXfGJ7o7sK8zBBdVw9SD4XZM65WPviSLbAxEEar0FZI4C76SsQKzH8iRAaSTEfh3hCUHb9Q_W3GHcQEwIWRj62rEA0K1EJLNiUF09NdWwrn6v8v-9oQ8wVkIIL3NsFd10gFSY2Ujf947wH3bYAPHd42Siu6RSPMvJdy2aFPaxdpBP3j6xA7CyFlhBVVEunYI7eND98Njpj5gdG47CCDI1k5EvwJDIEDFmwny"
    ],
    "statsText": "+4,200 Indian boutique sellers joined this week"
  },
  "trustbar": {
    "title": "Native Integrations with the Indian Commerce Stack",
    "integrations": [
      { "name": "WhatsApp Business", "icon": "message-square", "color": "#25D366" },
      { "name": "Instagram DM", "icon": "instagram", "color": "#ff3b9a" },
      { "name": "PhonePe", "icon": "wallet", "color": "#5f259f" },
      { "name": "Razorpay", "icon": "credit-card", "color": "#00dbe7" },
      { "name": "Delhivery Courier", "icon": "truck", "color": "#ffb03a" },
      { "name": "Paytm UPI", "icon": "banknote", "color": "#00baf2" },
      { "name": "Shopify Sync", "icon": "shopping-bag", "color": "#95bf47" },
      { "name": "Shiprocket", "icon": "rocket", "color": "#ff5c3b" }
    ]
  },
  "problem": {
    "title": "Social Selling is Easy. <br class=\"sm:hidden\" /> <span class=\"text-error\">Operations are a Nightmare.</span>",
    "description": "Stop wasting hours copy-pasting addresses and matching UPI transactions. Tapso replaces manual chaos with a unified commerce pipeline.",
    "leftTitle": "Where Indian SMBs lose 30% of sales",
    "rightTitle": "Automated checks, 10x faster shipping",
    "leftBanner": "The Manual Hustle",
    "rightBanner": "The Tapso Workflow",
    "leftBadge": "Leaky & Slow",
    "rightBadge": "Zero Order Loss",
    "comparison": [
      {
        "id": "order",
        "step": "Step 1: Order Intake",
        "oldTitle": "Manual DM Scrolling",
        "oldDesc": "Scrolling through endless Instagram DMs and WhatsApp chats to copy-paste customer addresses and sizes. Important details get buried and forgotten.",
        "oldIcon": "message-square",
        "newTitle": "Insta DM Auto-Checkout",
        "newDesc": "Tapso automatically detects intent in comments and DMs, instantly replying with a personalized checkout link. Conversions double instantly.",
        "newIcon": "message-square",
        "leakAmount": "20% drop-off"
      },
      {
        "id": "payment",
        "step": "Step 2: Pay Verification",
        "oldTitle": "Chasing Fake UPI Screenshots",
        "oldDesc": "Staring at screenshots of PhonePe/GooglePay receipts trying to match transaction IDs with business bank statements. Massive risk of spoof screens.",
        "oldIcon": "alert-octagon",
        "newTitle": "Instant UPI OCR Validation",
        "newDesc": "Customers upload screenshots directly in the checkout. Tapso's AI reads the transaction ID and cross-checks the bank ledger in 1.2 seconds.",
        "newIcon": "check-circle",
        "leakAmount": "₹5,000+ lost/mo"
      },
      {
        "id": "book",
        "step": "Step 3: Bookkeeping",
        "oldTitle": "The \"Khatabook\" Nightmare",
        "oldDesc": "Writing orders in physical diaries or spreadsheets. Calculating product stock manually, leading to double-selling items that are out of stock.",
        "oldIcon": "book-open",
        "newTitle": "Real-time Ledger & Stock",
        "newDesc": "Inventory is synced dynamically. Single dashboard showing outstanding balances, payment splits, and automated GST invoice generation.",
        "newIcon": "file-text",
        "leakAmount": "Stock mismatches"
      },
      {
        "id": "shipping",
        "step": "Step 4: Fulfillment",
        "oldTitle": "Manual Courier Portals",
        "oldDesc": "Log into Shiprocket/Delhivery/IndiaPost manually. Type addresses one-by-one. Copy tracking codes and manually text them to each customer.",
        "oldIcon": "help-circle",
        "newTitle": "1-Click Bulk Shipping Sync",
        "newDesc": "Generate labels for Delhivery, BlueDart, and Shiprocket in bulk. Automated WhatsApp alerts push live tracking links to buyers directly.",
        "newIcon": "truck",
        "leakAmount": "4 hours/day lost"
      }
    ]
  },
  "features": {
    "badge": "Complete Toolkit",
    "title": "Built for the modern Indian reseller ecosystem",
    "description": "From automated checkouts to high-speed deliveries, Tapso integrates the absolute essentials of social commerce.",
    "list": [
      {
        "id": 1,
        "title": "UPI Verification OCR",
        "desc": "Verify Bank transactions instantly from screenshots. Our AI extracts UPI reference IDs and auto-approves orders.",
        "icon": "credit-card",
        "size": "large",
        "badge": "Interactive AI",
        "interactiveType": "ocr"
      },
      {
        "id": 2,
        "title": "COD RTO Fraud Shield",
        "desc": "Prevent Cash on Delivery returns. Score customer's address, phone history, and pin-code risks using ML data.",
        "icon": "shield-check",
        "size": "large",
        "badge": "RTO Score",
        "interactiveType": "rto"
      },
      {
        "id": 3,
        "title": "Instagram Auto-Checkout",
        "desc": "Turn Instagram video comments directly into checkout carts. Sends order links instantly to buyer DMs.",
        "icon": "message-square",
        "size": "medium",
        "badge": "Viral Boost",
        "interactiveType": "chat"
      },
      {
        "id": 4,
        "title": "Brand Domains (.in)",
        "desc": "Set up your professional customized subdomain or link your custom root domain with free SSL in 1 click.",
        "icon": "globe",
        "size": "medium",
        "badge": "Domain Sync",
        "interactiveType": "domain"
      },
      {
        "id": 5,
        "title": "Deep Analytics Engine",
        "desc": "See which Reel, post, or WhatsApp broadcast generated the most revenue with pixel-perfect UTM tracking.",
        "icon": "bar-chart-3",
        "size": "small"
      },
      {
        "id": 6,
        "title": "Multi-Lingual Checkout",
        "desc": "Double conversions with checkouts rendered instantly in Hindi, Tamil, Telugu, Marathi, English, or Bengali.",
        "icon": "languages",
        "size": "small",
        "interactiveType": "languages"
      },
      {
        "id": 7,
        "title": "Dynamic QR Engine",
        "desc": "Stylized custom brand QR codes linking straight to payment screens or digital catalog items.",
        "icon": "qr-code",
        "size": "small"
      },
      {
        "id": 8,
        "title": "Automated Split Payments",
        "desc": "Auto-split commissions and payments with weavers, designers, and manufacturers instantly upon sale.",
        "icon": "split",
        "size": "small"
      },
      {
        "id": 9,
        "title": "Omnichannel DM Inbox",
        "desc": "Unify Instagram comments, WhatsApp chats, and Facebook messages into one shared team workspace.",
        "icon": "inbox",
        "size": "small"
      },
      {
        "id": 10,
        "title": "Khata Book Ledger",
        "desc": "Digitally track cash advances, balances, and partial deposit payments for loyal repeat customers.",
        "icon": "database",
        "size": "small"
      },
      {
        "id": 11,
        "title": "WhatsApp Broadcasts",
        "desc": "Send promotional alerts, seasonal offers, and catalog updates to verified customers with 98% open rates.",
        "icon": "megaphone",
        "size": "small"
      },
      {
        "id": 12,
        "title": "Speed-Optimized Shell",
        "desc": "Super light page size load of less than 0.4 seconds, built to work perfectly on slow 3G connections across rural India.",
        "icon": "zap",
        "size": "small"
      },
      {
        "id": 13,
        "title": "One-Click Shipping labels",
        "desc": "Direct API integrations with Delhivery, Shiprocket, BlueDart, and Porter. Instant label print.",
        "icon": "shield",
        "size": "small"
      },
      {
        "id": 14,
        "title": "Mini-Store Builder",
        "desc": "Upload pictures directly from your mobile gallery and have an e-commerce catalog ready in 40 seconds.",
        "icon": "smartphone",
        "size": "small"
      },
      {
        "id": 15,
        "title": "Referral Engine",
        "desc": "Affiliate rewards for customers who refer your products to their friends and WhatsApp groups.",
        "icon": "share-2",
        "size": "small"
      }
    ]
  },
  "storebuilder": {
    "badge": "Live Sandbox",
    "title": "Your storefront, customized in seconds",
    "description": "Choose colors, layouts, and fonts. See changes update in real time. Your buyers get a checkout that feels like native iOS.",
    "themes": [
      {
        "id": "midnight",
        "name": "Midnight Cyber",
        "bgClass": "bg-midnight",
        "accentClass": "bg-tertiary",
        "borderColor": "border-tertiary/20",
        "textAccent": "text-tertiary",
        "accentHex": "#4cd6ff"
      },
      {
        "id": "rose",
        "name": "Rose Luxury",
        "bgClass": "bg-rose-luxury",
        "accentClass": "bg-pink-500",
        "borderColor": "border-pink-500/20",
        "textAccent": "text-pink-400",
        "accentHex": "#ec4899"
      },
      {
        "id": "emerald",
        "name": "Emerald Craft",
        "bgClass": "bg-emerald-luxury",
        "accentClass": "bg-emerald-400",
        "borderColor": "border-emerald-500/20",
        "textAccent": "text-emerald-400",
        "accentHex": "#34d399"
      },
      {
        "id": "minimal",
        "name": "Minimal Slate",
        "bgClass": "bg-minimal-slate",
        "accentClass": "bg-white",
        "borderColor": "border-white/10",
        "textAccent": "text-white",
        "accentHex": "#ffffff"
      }
    ],
    "fonts": [
      { "id": "display", "name": "Outfit / Display", "headingClass": "font-display", "bodyClass": "font-sans" },
      { "id": "mono", "name": "Space Mono / Tech", "headingClass": "font-mono uppercase tracking-wider", "bodyClass": "font-mono text-xs" },
      { "id": "serif", "name": "Outfit / Classic", "headingClass": "font-display italic", "bodyClass": "font-sans" }
    ],
    "products": [
      {
        "id": 1,
        "name": "Aero-Max Athletic Sneakers",
        "price": "₹2,499",
        "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuChFusUSJu_-aXYK4TPTFJDs-d3H-UrAmNBR1aPB99IwqN3VrsIaO5DF_D4ILBwdL9cxKvMoz0ry168XfFdh6yPdjtLnaYoH3mMbrFpkv5qqMw2uA8vqkSuOpBnHGa1OlYJTxpgbHMT3CrzCwNNfF8Zbw2rzqbYhUBlOiazAlHPmkc766MP72PUWNSAaWVmTVgWknGR-LgQANEoLvm8DtZzULkIFN1cGbYPPu1psRsueIa9Epn_dsW7fKo_9QxpU1g1mlH3QihAyEty"
      },
      {
        "id": 2,
        "name": "Vintage High-Top Canvas",
        "price": "₹1,999",
        "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuArU0f6J4MLFGfesy32DgeZGDk1AeNZn32U3P4QfBJG0RRCQa7fhk3A015qm4qbC-C_IEk8UjuS21JARfs_1zpExc_GcYR1I-ZkyzJve-tMsPy0FLKSoZ1B-YF2sXP2k01QKv3MhELAHtJuf-D7TybyFTkaPlLW_SEcyXhhDf3AQRXMt4pppaYD9pRrRI05gUwdd5EZrTjxhAkaLx2biIB57jpKzH5qF2BiViXfPACCBsrvu1H2bVdWle0rSU1kRNBhNZLoCfMR0e7l"
      },
      {
        "id": 3,
        "name": "Creator Smartwatch Series 4",
        "price": "₹4,999",
        "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuBshR9My9iAebUs-n_Unyw-gVzeJrCkwtW0BWTH88VgKvhrw5PdXjFbjqJBVPE5U-MSQvQEuOVsagJnmbT213d0TaRKscWmUpj0_YO5wa_vvOboiQHrE5c9KjHM7emLtFbNlNKhV-JW0HZKE4RDIb9-8rLIaRJWfMO08dd1DYDztNjUZvzo4_SWpGZLh8aNLiWWm8wfOgAdDnCs_KUDLu4VXcFMvucg7IppETxEOMBs19ZAT9vIxuENVrdMCdWgyjhX7uopb_1yuXMT"
      },
      {
        "id": 4,
        "name": "Premium Studio Headset X",
        "price": "₹3,499",
        "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuAeZcPy-6iem904fEm5Q15aPTTSKq72aFeBGwze_ai8p2EHq3-zvF7YwbuaEFl6PIpQbQwb2Ws3FXUopTfEyGdc01CBz5E3G9ixlS1ZaciftzIADxgjjduELGD3XIj32h6IC1URW5kRQFgq4YVPCt1bVOdCLQYPjVRtGzRwUNyiLEN_-4RxgqdJhLShGFTr9yBq8vC_vU7SclmMV1tazQhfBJgkFQaC-CcYUAjZvubfgby76T1xmSgczEyGeO2CQ8ptFc7GvhqzpMQG"
      }
    ],
    "reelPlaceholder": {
      "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuDmWUduzmTGdJuiJ6ft_8GuD_krk46ZWYJj-goihnZE7IhF4x2fKuGXeRswayXJEjdl7KgTH1UhTRN0HMD0RY5A-Ro1hZ58eUYT6nF8Div6_1cM4qCdGaI-T2_7R6a_dVU30JnjO-Ab2Mt2MBGUmAtcjTFIyXaD0tAxJlZLQ6WZmlR0s3eisvcdpbu3BphIn7ZZcJpniL79DldgDQiBPmhpk-tn0kD63WcGZYJUWwt6GYnQgzhInn6mMbgxstgooa5rsQdh52aKGm1I"
    }
  },
  "workflow": {
    "badge": "Operation Flow",
    "title": "From Insta comment to client door",
    "description": "Click on each step below to visualize how Tapso orchestrates order capture, payment verification, notifications, and logistics in real-time.",
    "steps": [
      {
        "id": 1,
        "label": "Engagement",
        "icon": "message-square",
        "title": "Customer Comments \"Price?\"",
        "detail": "An Instagram buyer comments or sends a DM expressing interest in your Saree, sneaker, or digital product Reel.",
        "badge": "Instagram DM API",
        "timeframe": "0.0s (Instant)",
        "colorClass": "bg-pink-500/10 border-pink-500/30 text-pink-400",
        "textColor": "text-pink-400",
        "illustrationType": "comment"
      },
      {
        "id": 2,
        "label": "DM Capture",
        "icon": "zap",
        "title": "Auto-Checkout Response",
        "detail": "Tapso's conversational agent intercepts the comment and automatically triggers a DM response with a direct payment and catalog link.",
        "badge": "Conversational AI",
        "timeframe": "0.4s later",
        "colorClass": "bg-tertiary/10 border-tertiary/30 text-tertiary",
        "textColor": "text-tertiary",
        "illustrationType": "dm"
      },
      {
        "id": 3,
        "label": "UPI Pay",
        "icon": "credit-card",
        "title": "Seamless One-Tap UPI Checkout",
        "detail": "The customer clicks the checkout link, inputs details in a sleek mobile interface, and opens GPay, PhonePe, or Paytm with 1 tap.",
        "badge": "UPI Intent API",
        "timeframe": "User speed",
        "colorClass": "bg-purple-500/10 border-purple-500/30 text-purple-400",
        "textColor": "text-purple-400",
        "illustrationType": "upi"
      },
      {
        "id": 4,
        "label": "OCR Matching",
        "icon": "shield-check",
        "title": "AI Screenshot Auto-Verification",
        "detail": "The customer uploads the payment confirmation screenshot. Tapso AI validates the transaction reference ID against your bank statements.",
        "badge": "OCR & Ledger Match",
        "timeframe": "1.2s verified",
        "colorClass": "bg-emerald-500/10 border-emerald-500/30 text-emerald-400",
        "textColor": "text-emerald-400",
        "illustrationType": "ocr"
      },
      {
        "id": 5,
        "label": "Notification",
        "icon": "message-circle",
        "title": "Auto-WhatsApp Confirmation",
        "detail": "Order status, digital tax invoice, and shipping alerts are dispatched straight to the buyer's WhatsApp. No typing required.",
        "badge": "WhatsApp Business API",
        "timeframe": "2.0s confirmed",
        "colorClass": "bg-[#25D366]/10 border-[#25D366]/30 text-[#25D366]",
        "textColor": "text-[#25D366]",
        "illustrationType": "whatsapp"
      },
      {
        "id": 6,
        "label": "Dispatch",
        "icon": "truck",
        "title": "1-Click Bulk Shipping & Courier Sync",
        "detail": "Bulk generate airway bills (AWB) for Delhivery, BlueDart, or Shiprocket. Schedule pickup times directly from your Tapso dashboard.",
        "badge": "Logistics API Sync",
        "timeframe": "Same-day ship",
        "colorClass": "bg-amber-500/10 border-amber-500/30 text-amber-400",
        "textColor": "text-amber-400",
        "illustrationType": "dispatch"
      }
    ]
  },
  "analytics": {
    "badge": "Merchant Analytics",
    "title": "Deep, real-time insights <span class=\"text-tertiary\">right inside your pocket.</span>",
    "description": "Track customer locations, conversion triggers, and exact revenue payouts. Build customer cohorts and boost conversion speeds on slow networks.",
    "monthlyGmv": 184290,
    "verifiedLeads": 12492,
    "conversionRate": "5.84%",
    "cityDistributions": [
      { "name": "Surat (Saree & textiles)", "share": 34, "orders": "1,420 orders", "gmv": "₹5.2L" },
      { "name": "Mumbai (Streetwear & resell)", "share": 26, "orders": "1,102 orders", "gmv": "₹4.1L" },
      { "name": "Delhi NCR (Home Decor/Bakeries)", "share": 20, "orders": "840 orders", "gmv": "₹2.9L" },
      { "name": "Bengaluru (Cosmetics & D2C)", "share": 12, "orders": "512 orders", "gmv": "₹1.8L" },
      { "name": "Jaipur (Handicrafts)", "share": 8, "orders": "310 orders", "gmv": "₹1.1L" }
    ]
  },
  "testimonials": {
    "badge": "Success Stories",
    "title": "Trusted by India's next generation of sellers",
    "description": "From the silk looms of Surat to the sneakerheads of Mumbai, Tapso powers operations for modern founders.",
    "list": [
      {
        "id": 1,
        "name": "Pooja Singhal",
        "location": "Surat, Gujarat",
        "role": "Tussar Saree Boutique Owner",
        "followers": "85k IG Followers",
        "orders": "1,200+ orders/mo",
        "metric": "Save 4 hours daily in shipping",
        "comment": "I used to spend 4 hours every night matching PhonePe screenshots with my bank statement and copy-pasting addresses into Delhivery. With Tapso, the AI OCR matches transactions instantly, and I ship in bulk with 1 click.",
        "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuABIMjHWNXs9SHN59iltrCTit-sEWQtZsAspY6pzchvntzrsz7qApG7dN35I7F8PbOxgFdZhMJOBhC3H547Tti4w8vSDJnXR5V9oDTdbmZdShmxat4KXNS2E7usihqrQtLYkmdX0RkZ3FM1FVl-pp5oLqLLWLo5YBNY4OnxxM5oOVcw0xAmWHjJam1dfyV9zfvyOvPWXCn1Hwpzq0QZV8fact5qupnApGhx5ljNdqve5I0C6Nr8OLkon5R-I4TaiI2x7M77HZzIBPqu"
      },
      {
        "id": 2,
        "name": "Kabir Fernandes",
        "location": "Mumbai, MH",
        "role": "Premium Sneaker Reseller",
        "followers": "120k IG Followers",
        "orders": "350+ drops/mo",
        "metric": "+45% order conversion",
        "comment": "Chasing buyers in the DMs for payments was costing me half my shoe drops. Tapso's Insta comment-to-checkout bot automates the checkout link right when the buyer's hype is maximum. Conversion rate shot up by 45%.",
        "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuCcdEPUCzpxB0yk9SZwWx7-8apSYzZgTAzaTLe1Ks4wjpyAwgs7YjsGqmZfXKMQGqrT-HNeppRV9cgrQBDyP4rVHiiitafLlGy3asS8BQcasdRwwu_9ITK-coGlIIyWSrkw9qW3Os0pBOEguvrBOMWjxWKJxQQ33dqF5hnBe5NyUIjUa5DW4QEnOUDPpdRVwL2PWGZh7wI70ILeyH-Xg_J2zRO3AIUlw6smGA5FwiPZSsFgibRNPzQ7djglEXf89LRvrJ-Qu6UUS-nh"
      },
      {
        "id": 3,
        "name": "Nitin Sharma",
        "location": "Gurugram, Delhi NCR",
        "role": "Artisanal Home Baker",
        "followers": "42k IG Followers",
        "orders": "480+ custom orders/mo",
        "metric": "0 double-booking stockouts",
        "comment": "Managing custom cake deposits on spreadsheets was a nightmare. Double bookings and stock-outs were common. Tapso's ledger tracks deposits, delivery dates, and dynamic stock levels flawlessly.",
        "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuDuwiZtoZJ34yVHOm7hCfeaseho3xqVRJd9ozTGnjG3_taRPsiq6FdrKOrBw7hzohSTXCDFjAqi98kkpfFlo1E8xEA8OLWOxrs1tym9Tr9Ij-2_zQ3qrvL79jS0VSAFNrMNUfQkZwm2qDt2lmU_TmUFyh_T7nsbztaXPOHYEo2xvvaGr-mDX3v4qnZkcaamH1vdmAuuDeMBRsLXcT85iX1sXErtAPkdeDRbP321kRJrwuS2YG5M2JTJ7W9A2uWh-csO0ohkI31FbHC9"
      },
      {
        "id": 4,
        "name": "Ananya Hegde",
        "location": "Bengaluru, KA",
        "role": "Handcrafted Cosmetics Maker",
        "followers": "68k IG Followers",
        "orders": "950+ checkouts/mo",
        "metric": "Hindi & Tamil support converts 2x",
        "comment": "I run a WhatsApp reselling network. Sending catalogs and verifying manual transfers was slowing us down. Tapso checkouts in local languages made buying easy for my tier-2 and tier-3 clients.",
        "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuDrtFLBxnJCYoye8_uzOKNtBGueI7PfcY_FwPe1uavcXXfGJ7o7sK8zBBdVw9SD4XZM65WPviSLbAxEEar0FZI4C76SsQKzH8iRAaSTEfh3hCUHb9Q_W3GHcQEwIWRj62rEA0K1EJLNiUF09NdWwrn6v8v-9oQ8wVkIIL3NsFd10gFSY2Ujf947wH3bYAPHd42Siu6RSPMvJdy2aFPaxdpBP3j6xA7CyFlhBVVEunYI7eND98Njpj5gdG47CCDI1k5EvwJDIEDFmwny"
      }
    ]
  },
  "pricing": {
    "badge": "Simple Pricing",
    "title": "Keep 100% of your earnings.",
    "description": "No transaction fees. No hidden cuts. Choose a flat rate monthly setup that matches your scale.",
    "tiers": [
      {
        "name": "Starter",
        "priceMonthly": 0,
        "priceAnnual": 0,
        "desc": "Perfect for small IG resellers testing the social selling waters.",
        "features": [
          "Standard mobile bio-link storefront",
          "Collect manual payment screenshots",
          "Up to 50 verified orders/month",
          "Standard shipping label generator",
          "Email & community support"
        ],
        "buttonText": "Get Started Free",
        "isPopular": false
      },
      {
        "name": "Pro OS",
        "priceMonthly": 1499,
        "priceAnnual": 1199,
        "desc": "Complete automated operational engine for growing social businesses.",
        "features": [
          "Unlimited monthly storefront orders",
          "AI OCR UPI receipt validation (Unlimited)",
          "Instagram comment/DM auto-checkout bot",
          "WhatsApp transaction updates & invoices",
          "COD RTO Risk Assessment Shield",
          "Custom .in domain linking + Free SSL",
          "Bulk courier sync (Delhivery, Shiprocket)",
          "Dedicated WhatsApp success support"
        ],
        "buttonText": "Automate My Store",
        "isPopular": true
      },
      {
        "name": "Enterprise",
        "priceMonthly": 4999,
        "priceAnnual": 3999,
        "desc": "For high-volume D2C brands, multi-weaver centers, and large agencies.",
        "features": [
          "All Pro features included",
          "Automated split payouts (Weavers/Partners)",
          "Custom multi-lingual checkouts (8+ languages)",
          "Direct warehouse management integrations",
          "Custom legal contracts & GST setups",
          "1-on-1 operational audit consultation",
          "99.9% uptime SLA guarantee"
        ],
        "buttonText": "Contact Partnerships",
        "isPopular": false
      }
    ]
  },
  "finalcta": {
    "badge": "Launch Your Store",
    "title": "Stop chasing screenshots. <br /> <span class=\"text-tertiary cyan-text-glow\">Start scaling sales.</span>",
    "description": "Join 4,200+ Indian saree weavers, sneaker resellers, D2C brands, and bakery curators who automated their operations with Tapso.",
    "buttonText": "CLAIM YOUR STORE NAME",
    "demoLink": "storefront.html",
    "demoText": "👀 See a live example: tapso.in/chotasahukaar",
    "trustTags": [
      "✓ Setup in under 2 minutes",
      "✓ Flat subscription, zero commission",
      "✓ Direct UPI bank settlement"
    ]
  },

  "footer": {
    "description": "The modern commerce operating system for Indian Instagram sellers, WhatsApp merchants, D2C brands, and boutique creators. Never lose a WhatsApp order again.",
    "copyright": "© 2026 Tapso Technologies Private Limited. All rights reserved.",
    "subCopyright": "Indiranagar, Bengaluru, Karnataka, India - 560038. GSTIN: 29AAFCT8291M1Z5.",
    "linksGroups": [
      {
        "title": "Product Features",
        "links": [
          { "label": "Storefront Builder", "href": "#storefront" },
          { "label": "AI OCR Verification", "href": "#features" },
          { "label": "Instagram DM Automation", "href": "#workflow" },
          { "label": "COD RTO Shield", "href": "#features" },
          { "label": "Bulk Logistics Sync", "href": "#workflow" }
        ]
      },
      {
        "title": "Developer & Resources",
        "links": [
          { "label": "API Reference Docs", "href": "#" },
          { "label": "Indian Seller Manual", "href": "#" },
          { "label": "Merchant Help Desk", "href": "#" },
          { "label": "System Uptime Status", "href": "#" },
          { "label": "Partner Directory", "href": "#" }
        ]
      },
      {
        "title": "Company",
        "links": [
          { "label": "About Team", "href": "#" },
          { "label": "Careers (We're Hiring!)", "href": "#" },
          { "label": "Brand Assets kit", "href": "#" },
          { "label": "Contact Press", "href": "#" },
          { "label": "Privacy & Terms", "href": "#" }
        ]
      }
    ]
  }
};
