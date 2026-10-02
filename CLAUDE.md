# Ryneura — Project Context for Claude Code

## Company
- **Name:** Ryneura
- **Type:** IT Company — AI, ML, Computer Vision, SaaS Products
- **Tagline:** Intelligence, Reimagined.
- **Contact:** hello@ryneura.com | www.ryneura.com
- **Location:** Remote-first · Global Clients

---

## Logo Specifications

The official Ryneura logo consists of three parts:

### 1. Logo Mark (the "R" icon)
- A bold stylized letter **R** with a gradient fill:
  - Top-left: Cyan `#00D4FF`
  - Mid: Blue `#3B6EF5`
  - Bottom: Deep purple-magenta `#A855F7`
- A **neural network node graphic** overlaid on the top-left of the R:
  - Small filled circles (dots) connected by thin lines
  - Dot colors: cyan `#00D4FF` and purple `#A855F7`
  - Line color: semi-transparent white or light cyan
- The R has a modern, geometric, slightly rounded style

### 2. Wordmark ("RYNEURA")
- All caps, bold modern geometric sans-serif font (similar to Exo 2, Orbitron, or Space Grotesk Bold)
- Color: White `#FFFFFF`
- The letters **"NE"** in "RYNEURA" have a subtle blue/cyan gradient underline or highlight `#2563EB` → `#00D4FF`
- A small blue triangle `▲` appears after the final "A" as a brand accent, color: `#3B82F6`

### 3. Tagline
- Text: *"Intelligence, Reimagined."*
- Style: Light weight, wide letter-spacing (~0.15em), gray-white `#A0B0CC`
- Sits below the wordmark, center-aligned

### Logo Usage in the Website
- **Navbar:** Use the logo image file (`/assets/logo.png` or `/assets/logo.svg`) at height `36px–40px`. Do NOT recreate it in CSS — display the actual image asset.
- **Footer:** Same logo image at height `32px`, slightly reduced opacity `opacity-80`
- **Favicon:** Use the R mark only, cropped square
- **Logo file path:** `src/assets/ryneura-logo.png` (user will place the file here)
- Always preserve the logo aspect ratio — never stretch
- Minimum clear space: equal to the height of the "R" mark on all sides
- Do NOT place logo on light backgrounds — always on dark surfaces only

---

## Design System

### Color Palette (Derived from Logo)

```
/* Backgrounds */
Background:        #080D1A   (deep navy-black — matches logo bg)
Surface:           #0D1526   (card/section background)
Surface-2:         #111827   (slightly lighter surface)
Border:            #1E2D45   (subtle borders)
Border-glow:       rgba(59, 110, 245, 0.3)

/* Brand Gradient (from logo R) */
Gradient-Start:    #00D4FF   (cyan)
Gradient-Mid:      #3B6EF5   (blue)
Gradient-End:      #A855F7   (purple-magenta)

/* Primary Actions */
Primary:           #3B6EF5   (blue — buttons, links, CTAs)
Primary-Hover:     #2563EB   (darker blue on hover)

/* Accents */
Accent-Cyan:       #00D4FF   (highlights, glows, tags)
Accent-Purple:     #A855F7   (secondary highlights, gradients)
Accent-Triangle:   #3B82F6   (the ▲ brand accent)

/* Text */
Text-Primary:      #F0F6FF   (near-white)
Text-Secondary:    #A0B0CC   (tagline, subtext, muted)
Text-Muted:        #5A6A85   (placeholders, disabled)

/* Semantic */
Success:           #00E5A0   (green)
Warning:           #F59E0B   (amber)
Error:             #EF4444   (red)
```

### Gradient Utilities (use throughout the site)
```css
/* Brand gradient — use on hero heading, section labels, icons */
.gradient-brand {
  background: linear-gradient(135deg, #00D4FF 0%, #3B6EF5 50%, #A855F7 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Glow shadow — use on cards, buttons, logo */
.glow-primary {
  box-shadow: 0 0 30px rgba(59, 110, 245, 0.35), 0 0 60px rgba(0, 212, 255, 0.15);
}

/* Glassmorphism card */
.glass-card {
  background: rgba(13, 21, 38, 0.7);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(59, 110, 245, 0.2);
}
```

### Typography
- **Headings font:** Space Grotesk (Bold 600–700) — matches the geometric logo wordmark style
- **Body font:** Inter (Regular 400, Medium 500)
- **Monospace/tags:** JetBrains Mono or Fira Code
- Load via Google Fonts

| Role | Size | Weight |
|---|---|---|
| Display (Hero) | 68–72px | 700 |
| H1 | 52–56px | 600 |
| H2 | 36–40px | 600 |
| H3 | 22–24px | 500 |
| Body | 16px | 400 |
| Small / Tags | 13–14px | 500 |

### Visual Style Rules
- Background always `#080D1A` — never white or light
- Hero section: 2 large blurred radial gradient orbs (cyan top-right, purple bottom-left)
- Glassmorphism cards on all service/feature cards
- Neural network animated background (subtle SVG dot grid with connecting lines — reference the logo's node graphic)
- Glow effects on hover using the brand gradient colors
- All section headings use the brand gradient text style
- Buttons: filled with `#3B6EF5`, hover transitions to gradient
- The `▲` triangle accent from the logo can be reused as a decorative element in section dividers or bullet points

---

## Site Structure

Single scrollable page — 3 navbar anchors:

| Navbar Item | Anchor | Section |
|---|---|---|
| Overview | `#overview` | Hero + About/Stats |
| Services | `#services` | 6 Service Cards |
| Contact | `#contact` | Contact Form |

---

## Sections

### 1. Navbar (Sticky)
- **Logo:** `<img src="/assets/ryneura-logo.png" alt="Ryneura" className="h-9" />`
- Links: Overview, Services, Contact + `Get Started →` CTA button (gradient fill)
- Transparent on top → `background: rgba(8, 13, 26, 0.85)` + `backdrop-blur-md` on scroll
- Bottom border on scroll: `border-bottom: 1px solid rgba(59, 110, 245, 0.2)`
- Mobile: hamburger with slide-down drawer

### 2. Hero (`#overview`)
- Full viewport height, two-column layout
- Eyebrow badge: `[ AI-Powered Solutions ]` — cyan border, gradient text
- Headline (gradient text): "Building the Future with Intelligent Technology"
- Subtext: Ryneura's mission statement
- CTAs: "Explore Services" (gradient filled) + "Talk to Us" (outlined with glow)
- Trust bar: "Trusted by innovative teams worldwide" + logo placeholders
- Right: Animated dashboard card with metrics + floating micro-tags
- Background: Neural node animation (dots + lines, like the logo mark)

### 3. Overview / About
- Label: `WHO WE ARE`
- Heading (gradient): "Intelligence at the Core of Everything We Build"
- 3 stat cards: `50+` Projects · `98%` Satisfaction · `5+` Years
- Animated number counter on scroll
- 4 "why us" pillars: Research-Backed AI · Production-Grade · Fast Iteration · Enterprise Security

### 4. Services (`#services`)
- Label: `WHAT WE DO`
- 6 glassmorphism cards, 3-col grid (desktop)
- Each card: gradient icon box + title + description + tech tag pills

**Services:**
1. AI Strategy & Consulting — Brain icon — Cyan glow
2. Machine Learning Development — Network icon — Blue glow
3. Computer Vision Systems — Eye icon — Green `#00E5A0` glow
4. SaaS Product Engineering — Layers icon — Purple glow
5. Generative AI Integration — Sparkles icon — Amber glow
6. Cloud & MLOps Infrastructure — Cloud icon — Sky blue glow

### 5. Process
- Label: `OUR PROCESS`
- 4-step timeline: Discover → Design → Build → Deploy & Scale
- Numbered circles with gradient border glow
- Connected by dashed gradient line

### 6. Contact (`#contact`)
- Two-column: left info + right form
- Heading: "Let's Build Something Intelligent"
- Form: Name, Email, Service dropdown, Message, Submit
- Glassmorphism form card, cyan glow on input focus

### 7. Footer
- Logo image (small, `h-8`) + tagline "Intelligence, Reimagined."
- Copyright: `© 2025 Ryneura. All rights reserved.`
- Quick nav links + social icons
- Top: full-width gradient divider `linear-gradient(90deg, transparent, #3B6EF5, #00D4FF, transparent)`

---

## Component Structure
```
src/
├── assets/
│   └── ryneura-logo.png      ← place the logo image file here
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── Overview.jsx
│   ├── Services.jsx
│   │   └── ServiceCard.jsx
│   ├── Process.jsx
│   ├── Contact.jsx
│   │   └── ContactForm.jsx
│   ├── Footer.jsx
│   └── ui/
│       ├── GlowButton.jsx
│       ├── SectionLabel.jsx
│       ├── StatCard.jsx
│       └── AnimatedCounter.jsx
├── hooks/
│   └── useScrollSpy.js
├── data/
│   └── constants.js
├── App.jsx
├── main.jsx
└── index.css
```

---

## Coding Rules
- Functional components only — no class components
- Tailwind CSS for all styling
- Framer Motion `whileInView` for scroll animations
- Cards stagger with 0.1s delay
- All content/data in `src/data/constants.js`
- No placeholder image services — CSS gradients, SVGs, Lucide icons
- Mobile-first responsive
- Clean, well-commented code
- Import logo as: `import logo from '../assets/ryneura-logo.png'`

---

## Commands
```bash
npm install
npm run dev     # localhost:5173
npm run build
```

---

## SEO
- Title: `Ryneura — AI & Software Engineering`
- Meta description: `Ryneura builds intelligent software — AI, ML, Computer Vision, and SaaS products for the next generation of businesses.`
- Favicon: Ryneura R mark (square crop of logo)
