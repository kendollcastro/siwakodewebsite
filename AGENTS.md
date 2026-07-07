# Siwakode - Project Agents & Skills Configuration

## Vercel React Best Practices (Installed)
- Location: `/Users/macbookpro/.agents/skills/vercel-react-best-practices`
- Apply when writing or refactoring React/Next.js components
- Key priorities: Eliminating Waterfalls, Bundle Size Optimization, Server-Side Performance, Re-render Optimization

## UI/UX Pro Max (Installed)
- Location: `/Users/macbookpro/.claude/skills/ui-ux-pro-max`
- Apply when designing new pages, creating UI components, choosing color schemes/typography, or reviewing UI
- Design system script: `python3 skills/ui-ux-pro-max/scripts/search.py "<query>" --design-system -p "Siwakode"`

## Project Structure
```
src/
  components/
    Header.jsx          - Fixed navigation with scroll effect
    HeroSection.jsx     - Hero with Bribri Soul messaging
    BrandStrip.jsx      - Marquee brand strip
    ServicesSection.jsx - Service cards with pricing
    ProjectsBento.jsx   - Bento grid showcase
    Testimonials.jsx    - Client testimonial card
    CtaForm.jsx         - Contact form CTA
    Footer.jsx          - Site footer
  App.jsx              - Root layout
  main.jsx             - Entry point
  index.css            - Tailwind + design tokens
```

## Design Tokens
- Colors: Primary (#1B3D2F), Primary Fixed (#A8E63D), Surface (#F0FAE8)
- Font: Sora (all text styles)
- Spacing: 4/8dp rhythm, section-gap: 8rem, container max-w-7xl

## Run Commands
- `npm run dev` - Development server
- `npm run build` - Production build
- `npm run lint` - ESLint check
- `npm run preview` - Preview production build
