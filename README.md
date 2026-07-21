# Keshav Jora — Portfolio V2

> Personal portfolio website for Keshav Jora, B.Tech CSE student at ICFAI University, Jaipur.  
> Built with vanilla HTML, CSS, and JavaScript — no frameworks, no build step.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-4f46e5?style=flat-square)](https://keshav-jora.github.io/portfolio/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0a66c2?style=flat-square&logo=linkedin)](https://www.linkedin.com/in/keshav-j-ab6bb1375)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-1a1f36?style=flat-square&logo=github)](https://github.com/keshav-jora)

---

## Overview

A clean, responsive personal portfolio showcasing my projects, skills, certifications, and experience. Designed to feel like a polished product while staying lightweight and easy to maintain.

The entire site is a single-page application with no dependencies — just three files and an assets folder. All content lives in a `DATA` object inside `script.js`, so adding a new project, certification, or skill requires editing one place only.

---

## Features

- **Two-column hero** with professional photo and live CareerOS Lite preview
- **Scroll-triggered section reveals** via `IntersectionObserver` — no libraries
- **Animated hero background** with slow-drifting radial gradient blobs
- **Mouse parallax** on the hero — blobs follow the cursor gently
- **Active navigation indicator** that updates as the user scrolls
- **CareerOS flagship showcase** — browser-frame mockup, screenshot gallery with tab switching, feature cards, development challenges, key learnings, and future roadmap
- **About cards** — education, CGPA, current focus, hackathons, and availability at a glance
- **Stagger-animated skills grid** and certificate vault
- **Animated timeline** for experience entries (slides in from alternating sides)
- **Contact form** that pre-fills a `mailto:` with the user's message
- **Premium micro-interactions** — button press feedback, card lift on hover, icon spin on contact cards
- Fully responsive down to mobile with `prefers-reduced-motion` support

---

## Tech Stack

| Layer      | Technology                              |
|------------|-----------------------------------------|
| Markup     | HTML5 (semantic)                        |
| Styling    | CSS3 — custom properties, `@keyframes`, `IntersectionObserver`, `backdrop-filter` |
| Scripting  | Vanilla JavaScript (ES5-compatible)     |
| Fonts      | Google Fonts — Poppins (300–800)        |
| Hosting    | GitHub Pages                            |
| Assets     | PNG images (photo + CareerOS screenshot)|

No npm. No bundler. No framework. Opens directly in any browser.

---

## Folder Structure

```
portfolio/
├── index.html                  # All markup — no inline styles or scripts
├── style.css                   # Design tokens, layout, animations, responsive rules
├── script.js                   # DATA layer + render engine + all interactions
└── assets/
    ├── keshav-photo.png        # Professional profile photo
    └── careeros-dashboard.png  # CareerOS Lite screenshot
```

### How content is organised

All site content — skills, projects, certifications, experience, and contact links — is declared in a single `DATA` object at the top of `script.js`. The render engine below it reads the object and builds the DOM automatically. To update the site:

- **Add a skill** → append a string to `DATA.skills`
- **Add a certification** → append an object to `DATA.certifications`
- **Add an experience entry** → append an object to `DATA.experience`
- **Update contact info** → edit `DATA.contact`

No HTML needs to be touched for content changes.

---

## Installation

Clone the repository and open the site locally — no install step required.

```bash
git clone https://github.com/keshav-jora/portfolio.git
cd portfolio
```

Then open `index.html` in any browser:

```bash
# macOS
open index.html

# Linux
xdg-open index.html

# Windows
start index.html
```

Or use a local dev server for a closer match to production:

```bash
# Python (no install needed)
python3 -m http.server 8000
# then visit http://localhost:8000
```

---

## Live Demo

**[keshav-jora.github.io/portfolio](https://keshav-jora.github.io/portfolio/)**

---

## Projects Featured

### CareerOS Lite *(Flagship)*
A productivity dashboard for students to manage internships, certifications, coding progress, milestones, and notes in one place. Built with React 18, Recharts, Lucide React, and LocalStorage. Live at [career-os-lite.vercel.app](https://career-os-lite.vercel.app/) · [GitHub](https://github.com/Keshav-Jora/CareerOS-Lite)

### Smart Waste Impact Analyzer *(EcoCalc)*
A web app for analysing environmental impact of waste using real lifecycle emission factors. Built with HTML, CSS, JavaScript, and Python. Presented at **Greenovation 3.0**, a national-level sustainability hackathon.

---

## Contact

| Channel  | Link |
|----------|------|
| Email    | [kesujora01@gmail.com](mailto:kesujora01@gmail.com) |
| LinkedIn | [linkedin.com/in/keshav-j-ab6bb1375](https://www.linkedin.com/in/keshav-j-ab6bb1375) |
| GitHub   | [github.com/keshav-jora](https://github.com/keshav-jora) |
| Portfolio| [keshav-jora.github.io/portfolio](https://keshav-jora.github.io/portfolio/) |

---

## License

This project is open source under the [MIT License](LICENSE).  
You are free to use the code structure as a reference — please do not copy personal content (photos, bio, project descriptions) without permission.


---

*Built with HTML, CSS & JS · Portfolio V2 · © 2026 Keshav Jora*
