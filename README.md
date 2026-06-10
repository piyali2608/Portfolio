# 🌌 Cosmic Developer Portfolio

A premium, interactive developer portfolio built with **React**, **Framer Motion**, and a customized hardware-accelerated fluid design system. The application features a deep stellar-space ambient aesthetic alongside a high-fidelity iridescent nebula light profile.

---

## 🚀 Stellar Features

* **💨 Hardware-Accelerated Cosmic Smoke:** Features organic, flowing background smoke trails driven by custom SVG `feTurbulence` fractal noise layers mapping, optimized directly for GPU performance.
* **🌀 Interactive Spiral Trailing Cursor:** An ultra-smooth, custom cursor trail mapping that dynamically adapts its blend profiles and color contrast between Deep Space (Dark Mode) and Iridescent Nebula (Light Mode).
* **🔄 Anti-AI Flop Flashcards:** Clean, 3D perspective modules with precise structural backface-visibility protection preventing visual bleed during active transitions.
* **🛠️ Minimalist Low-Profile UI Controls:** Refined custom actions and button systems designed to remove generic AI template looks in favor of modern, sleek layouts.
* **🤖 Integrated Assistant Chatbot:** A contextual FAQ platform widget giving immediate interactions regarding project history and background metrics.
* **📱 Universal Responsive Flow:** Fluid breakdowns constructed via dedicated media query wrappers allowing columns to break gracefully across all smartphone viewports.

---

## 🛠️ Project Architecture

```text
src/
├── components/
│   ├── Background/
│   │   └── CosmicSmoke.js       # SVG fractal noise smoke animation layer
│   ├── Chatbot/
│   │   └── Chatbot.js           # FAQ client interactive chatbot
│   ├── Cursor/
│   │   └── CursorSpiral.js      # Advanced 3D accelerated tracking cursor
│   ├── FlashCard/
│   │   └── FlashCard.js         # Perspective 3D flipping information cards
│   ├── Navbar/
│   │   └── Navbar.js            # Blurred sticky navigation assembly
│   ├── ScrollProgress/
│   │   └── ScrollProgress.js    # Horizontal timeline progress line
│   └── StarField/
│   │   └── StarField.js         # Interstellar canvas space background nodes
├── context/
│   └── ThemeContext.js          # Main context binding themes to document body
├── data/
│   └── portfolioData.js         # Central data storage module for core content
├── pages/
│   ├── About.js                 # About page layout with responsive sub-grids
│   ├── Contact.js               # Clean feedback messaging interface
│   ├── Experience.js            # Historical career progress timeline map
│   ├── Hero.js                  # Main landing view with cosmic badge highlights
│   ├── Projects.js              # Projects page with minimal actions & chips
│   └── Skills.js                # Core technologies and visual skill track bars
├── styles/
│   └── globals.css              # Central hub for variables, cards & mix-blend layers
├── App.js                       # Primary layout initialization and router hub
└── index.js                     # React DOM injection base pipeline