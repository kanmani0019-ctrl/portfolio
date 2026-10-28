# Java Developer Portfolio

A production-ready personal portfolio for a Java / backend engineer, built with **React 18 + Vite** and plain CSS (no UI framework, no icon library — only `react` and `react-dom` ship to the browser).

## Quick start

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs to dist/
npm run preview  # serve the production build locally
```

## Making it yours

**Everything on the site is rendered from one file: [`src/data/portfolio.js`](src/data/portfolio.js).**
You do not need to touch any component to change the content.

| What you want to change | Where |
| --- | --- |
| Name, role, summary, email, phone, social links | `profile` |
| Java snippet in the hero code window | `heroSnippet` |
| The two small cards floating over the code window | `heroFloats` |
| Animated counters (years, projects, modules…) | `stats` |
| The four "what I'm good at" cards | `highlights` |
| Skill categories and proficiency bars | `skillGroups` |
| "Currently learning" chips | `learning` |
| Scrolling tech chips under the hero | `techMarquee` |
| Jobs and bullet points | `experience` |
| Degrees | `education` |
| Certifications | `certifications` |
| Projects, tech stacks, metrics, repo links | `projects` |
| Recommendations | `testimonials` (empty = section hidden) |
| Nav items | `navLinks` |
| Every section heading and intro paragraph | `sectionCopy` |

Two more things worth doing:

1. **Resume** — drop your `resume.pdf` into [`public/`](public/). The nav button already points at `/resume.pdf`.
2. **Page title & meta description** — edit [`index.html`](index.html).

### Project filter tabs

The filter row above the project grid is generated from each project's `tags` array, so adding
`tags: ['Backend', 'Cloud']` to a project automatically creates those tabs. Set `featured: true`
on a project to give it a double-width, highlighted card that also shows its `detail` paragraph.

### Brand colour

The accent is defined once at the top of [`src/styles/global.css`](src/styles/global.css):

```css
--brand: #f97316;    /* primary  */
--brand-2: #ef4444;  /* gradient partner */
--accent: #38bdf8;   /* tertiary */
```

Change those three and the entire site — buttons, bars, glows, timeline, avatars — follows.

## Contact form

`Contact.jsx` validates input client-side and then opens the visitor's mail client via a
prefilled `mailto:` link. That works with zero backend. To use a real service instead, replace the
`window.location.href = ...` line in `submit()` with a `fetch()` to Formspree, EmailJS, or your own API.

## What's included

- Sticky glass navbar with scroll progress bar, scroll-spy active link, and a mobile drawer
- Dark / light theme, persisted to `localStorage`, defaulting to the OS preference
- Animated hero with a syntax-highlighted Java code window and an infinite tech marquee
- Count-up statistics that trigger on scroll
- Skill bars that fill when their card enters the viewport
- Timeline experience section with a "Current" badge
- Filterable project grid with metric callouts and featured cards
- Testimonials, contact form, footer, and a back-to-top button
- `IntersectionObserver` scroll reveals throughout, with a full `prefers-reduced-motion` fallback
- Responsive from 320px up; semantic landmarks, focus-visible rings, and aria labels

## Deploying

The build is fully static — `npm run build` and upload `dist/`.

- **Vercel / Netlify**: build command `npm run build`, publish directory `dist`
- **GitHub Pages**: add `base: '/<repo-name>/'` to `vite.config.js` before building

## Structure

```
src/
  data/portfolio.js       ← the only file you normally edit
  components/             ← one .jsx + matching .css per section
  hooks/
    useTheme.js           dark/light with localStorage
    useScrollReveal.js    IntersectionObserver reveals
    useActiveSection.js   nav scroll-spy
  styles/global.css       design tokens, reset, shared primitives
```
