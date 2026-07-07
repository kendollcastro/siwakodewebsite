# Siwakode

Official website for Siwakode — a web development and digital solutions agency based in Jacó, Costa Rica.

## Tech Stack

- **Vite** + **React** + **Tailwind CSS**
- Bilingual (EN/ES) via React Context (`LanguageContext`)
- Contact form via Web3Forms
- Deployed on Vercel

## Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run lint` | ESLint check |
| `npm run preview` | Preview production build |

## Project Structure

```
src/
├── assets/          – SVG logos and images
├── components/      – React components (8 sections)
├── context/         – LanguageContext provider
├── hooks/           – useScrollReveal, useLanguage
├── i18n.js          – Translation strings (EN/ES)
├── App.jsx          – Root layout with lazy sections
├── main.jsx         – Entry point
└── index.css        – Tailwind theme + design tokens
```

## Env Variables

| Variable | Description |
|----------|-------------|
| `VITE_WEB3FORMS_KEY` | Web3Forms API access key for contact form |
