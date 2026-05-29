# Global Gate Academy — Website

بوابتك الذكية نحو التعليم الدولي

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build
npm run preview
```

---

## Project Structure

```
├── index.html                  # Vite HTML entry
├── src/
│   ├── main.jsx                # React entry point
│   ├── App.jsx                 # Root component — add/remove sections here
│   ├── index.css               # Design tokens & global styles
│   ├── hooks.js                # Shared hooks (useReveal, useCounter, navTo)
│   └── components/
│       ├── Navbar.jsx
│       ├── Hero.jsx
│       ├── About.jsx           # About + Values + Why Us
│       ├── Services.jsx        # 7 service cards
│       ├── Destinations.jsx    # 6 study destinations
│       ├── Programs.jsx        # 3 academy programs
│       ├── Statistics.jsx      # Animated counters
│       ├── Testimonials.jsx    # Student quotes + Partners
│       ├── CTA.jsx             # Call to action banner
│       ├── Contact.jsx         # Contact form + info
│       └── Footer.jsx
├── public/
│   ├── fonts/HacenTunisia.ttf
│   └── images/
│       ├── logo.png            # Color logo (for light backgrounds)
│       └── logo-white.png      # White logo (for dark backgrounds)
└── Global Gate Academy.html    # Standalone preview (no build needed)
```

---

## How to Customize

### Colors & Typography
Edit CSS custom properties at the top of `src/index.css`:
```css
:root {
  --pp: #7B35D0;   /* Purple  */
  --bl: #1B87E4;   /* Blue    */
  --cy: #00C9C8;   /* Cyan    */
}
```

### Content / Copy
Each component has a `CONST` data block at the top of the file — edit those to update text, lists, and labels without touching JSX.

### Sections
Add or remove sections in `src/App.jsx`.

### Navigation Links
Edit the `links` array in `src/components/Navbar.jsx`.

---

## Tech Stack
- React 18
- Vite 5
- Pure CSS (no UI framework)
- Custom font: Hacen Tunisia
- Google Fonts: Noto Kufi Arabic
