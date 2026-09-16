## nephro-life (artifacts/nephro-life) — static shell + widget

**Entry point:** `artifacts/nephro-life/index.html` — static HTML shell served by Vite. `<script type="module" src="/src/main.tsx">` boots the React app into `#root`.

**Execution order:**
1. Browser loads `index.html`.
2. `#root` div mounts, `/src/main.tsx` runs (React app — not touched by this change).
3. Outside `#root`, at the bottom of `<body>`: `.convai-wrap` div + `<elevenlabs-convai>` custom element + its embed script (`https://unpkg.com/@elevenlabs/convai-widget-embed`) load independently of the React tree.
4. Widget script populates the custom element's shadow DOM (chat bubble, buttons, "Powered by" text).
5. `.convai-wrap` CSS (`overflow:hidden`, tall `90vh` box, widget shifted `bottom:-34px` inside it) clips the branding text permanently while leaving the buttons and expand-on-click panel fully visible.

**Call map (widget-relevant only):** none — this is static markup/CSS, not JS logic. No functions call into or out of the widget; it's a self-contained web component.

**Latest changes (2026-09-16):** Added `.convai-wrap` wrapper + CSS around the existing `<elevenlabs-convai>` tag in `index.html` to hide "Powered by ElevenAgents" branding without breaking the widget's expand-on-click. See [DECISIONS.md](DECISIONS.md) for the full reasoning.
