# Pranav Kolhe — Portfolio

A responsive React + TypeScript portfolio with a dark visual system, scroll reveals, interactive project cards, and a lightweight 3D hero.

## Run locally
1. Install Node.js LTS.
2. Extract this ZIP.
3. Open the extracted folder in VS Code.
4. In the terminal run:
   ```bash
   npm install
   npm run dev
   ```
5. Open the localhost URL printed by Vite.

## Build for deployment
```bash
npm run build
npm run preview
```
The production site is generated in `dist/`.

## Personalise before publishing
- Update email, GitHub and LinkedIn URLs in `src/data.ts`.
- Put your latest PDF resume at `public/resume/Pranav-Kolhe-Resume.pdf`.
- Add real project screenshots to `public/projects/` and update `image` paths in `src/data.ts`.
- Replace project repository/demo links with the real URLs. Remove any demo link you do not have.
- Review every project description and technology list for accuracy.

## Deploy
Push the folder to GitHub, then import the repository into Vercel. Framework preset: Vite. Build command: `npm run build`. Output directory: `dist`.

## Notes
The contact form opens the visitor's email app using a mailto link; it does not store submissions on a server. For a hosted form, connect Formspree or your own backend.
The 3D hero uses WebGL. If a device cannot render WebGL, a CSS fallback is shown.

## Premium 3D hero animation update

The hero visual now uses a premium holographic PK monogram with a floating developer workspace. It replaces only the previous blue orb in `src/components/Scene.tsx`; the hero copy, navigation, colors, typography, and the other portfolio sections remain unchanged.

### Files changed
- `src/components/Scene.tsx` — new React Three Fiber scene, holographic PK centerpiece, orbit rings, floating 3D interface panels, subtle particles, and glass UI overlays.
- `src/index.css` — styles and responsive behavior for the new hero visual.

### Run locally
```bash
npm install
npm run dev
```
Open the local URL printed by Vite (usually `http://localhost:5173`).

### Verify a production build
```bash
npm run build
npm run preview
```
The hero uses the existing `@react-three/fiber` and `@react-three/drei` dependencies already listed in `package.json`; no additional package installation is required beyond the normal `npm install`.
