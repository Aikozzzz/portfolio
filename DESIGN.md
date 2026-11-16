# Portfolio Design Specification

## 1. Project Overview

**Project:** Kyaw Zin Hein — Personal Portfolio  
**Type:** Public-facing developer portfolio  
**Primary stack:** React, Vite, Tailwind CSS, Framer Motion, React Three Fiber, Three.js  
**Primary audience:** Recruiters, engineering managers, internship reviewers, collaborators, and other developers

The website should present Kyaw Zin Hein as a capable early-career software, cloud, DevOps, and high-performance computing engineer. It should feel modern, technically confident, and memorable without becoming difficult to read or slow to load.

The design uses charcoal and near-black surfaces, warm red-orange accents, and a portrait-led hero. Lynn Htet Thant’s portfolio informs the oversized typography and red details. Kaung Htike San’s portfolio informs the split hero and charcoal background.

---

## 2. Product Goals

1. Explain who Kyaw is within five seconds.
2. Show proof through projects, technologies, certifications, and measurable outcomes.
3. Make it easy to open GitHub, LinkedIn, a résumé, and contact options.
4. Create a memorable experience through purposeful animation rather than visual noise.
5. Load quickly and remain usable on low-powered devices and unstable connections.
6. Look professional enough for internship and junior engineering applications.

### Success signals

- A visitor understands the target roles from the hero section.
- Featured projects can be scanned without opening every project.
- The site works with keyboard navigation and reduced-motion settings.
- Core content remains available when JavaScript animation or WebGL is unavailable.
- Lighthouse targets are met on the deployed production build.

---

## 3. Brand Positioning

### Personal statement

> I build reliable, human-friendly software and infrastructure, with interests in full-stack development, DevOps, cloud systems, and high-performance computing.

### Suggested role line

**Software Engineer · DevOps & Cloud Learner · HPC Student**

### Personality

- Curious
- Practical
- Reliable
- Technical but approachable
- Ambitious without exaggeration

### Writing tone

Use direct, specific language. Prefer evidence over generic claims.

Good:

> Built a scheduler-based high-availability web service using SLURM, Docker, NGINX, HAProxy, Keepalived, and NFS.

Avoid:

> I am a passionate and hardworking developer who loves technology.

---

## 4. Information Architecture

Use a single-page structure with deep links for each section.

1. **Navigation**
2. **Hero**
3. **Selected Work**
4. **About**
5. **Experience and Leadership**
6. **Skills and Tools**
7. **Certifications and Education**
8. **GitHub or Engineering Activity**
9. **Contact**
10. **Footer**

### Navigation items

- Home
- Work
- About
- Experience
- Skills
- Contact

Keep the primary navigation short. Secondary details belong inside sections, not in the top navigation.

---

## 5. Visual Direction

### 5.1 Theme

Default to charcoal with warm red-orange accents. The light theme uses warm off-white surfaces and preserves the visitor’s saved preference.

Design references: [Lynn Htet Thant](https://lynnhtet-drab.vercel.app/) and [Kaung Htike San](https://kaunghtikesan.vercel.app/).

### 5.2 Color tokens

| Role | Dark theme |
|---|---|
| Page | `#191919` |
| Recessed surface | `#141414` |
| Surface | `#20201F` |
| Text | `#F2F2F2` |
| Secondary text | `#B9B2AD` |
| Accent text | `#FF8B63` |
| Action fill | `#ED5429` |
| Reference red | `#E50914` |
| Reference orange | `#DF3D00` |

The brighter action fill and accent text support contrast on buttons and links. The red appears in the wordmark, and orange tints the contact panel.

### 5.3 Image treatment

Use the supplied headshot in a warm frame that preserves the full photo. Use project-specific diagrams and illustrations in Selected Work. Keep glow and motion inside visual elements so reading surfaces stay quiet.

### 5.4 Typography

- **Display and headings:** Barlow Condensed
- **Body:** DM Sans
- **Metadata:** IBM Plex Mono

Typography scale:

```text
Hero display: clamp(3rem, 8vw, 7.5rem)
H1: clamp(2.5rem, 6vw, 5rem)
H2: clamp(2rem, 4vw, 3.5rem)
H3: clamp(1.25rem, 2vw, 1.75rem)
Body large: 1.125rem
Body: 1rem
Small: 0.875rem
Metadata: 0.75rem–0.8125rem
```

Use tight line-height for headings and comfortable line-height for body text.

### 5.5 Layout

- Maximum content width: `1200px–1280px`
- Reading width: `680px–760px`
- Main horizontal padding: `clamp(1rem, 4vw, 4rem)`
- Section spacing: `clamp(5rem, 10vw, 9rem)`
- Use a 12-column desktop grid and a simple stacked mobile layout.

### 5.6 Shape and depth

- Card radius: `20px–28px`
- Button radius: `999px` for pills or `14px–16px` for rectangular actions
- Border: one-pixel translucent stroke
- Shadow: soft ambient shadow only
- Glass blur: use sparingly and never behind long paragraphs

---

## 6. Core Experience

### 6.1 Navigation

Desktop behavior:

- Sticky, full-width header with a subtle border and translucent background
- Active section indicator follows scroll position
- Includes résumé button and theme control only if they fit cleanly

Mobile behavior:

- Compact header with name or monogram
- Accessible menu button
- Full-screen or bottom-sheet menu with large tap targets
- Close menu after selecting a link

### 6.2 Hero

The hero must contain:

- Availability indicator
- Name
- Role line
- One concise value statement
- Primary action: **View Projects**
- Secondary action: **Download Résumé** or **Contact Me**
- GitHub and LinkedIn links
- Lightweight visual system on the right or in the background

Suggested hero copy structure:

```text
Available for internships and collaborative projects

Kyaw Zin Hein
Software Engineer · DevOps & Cloud Learner · HPC Student

I build reliable applications and infrastructure, from modern web products to distributed and high-availability systems.
```

Hero visual ideas:

- Abstract low-poly orb or particle network
- Animated grid with subtle pointer response
- Floating technical keywords such as React, Docker, SLURM, AWS, and Python
- Terminal-inspired status card showing current focus

Do not place a complex 3D model directly behind the main text.

### 6.3 Selected Work

Show three to five strong projects. Each project card should include:

- Project name
- One-sentence problem statement
- Role or responsibility
- Three to six technologies
- One measurable or concrete result
- Repository and live-demo links when available
- Visual preview or architecture image

Recommended featured project categories:

1. High-performance or distributed systems
2. Full-stack public-interest product
3. Cloud or DevOps infrastructure
4. Data analysis or recommendation system

#### Project card variants

- One large featured card
- Two medium cards
- Remaining work in a compact list

Hover effects may include a small lift, moving border light, image parallax, and arrow movement. Never rotate cards so much that text becomes hard to read.

### 6.4 About

Keep the About section personal but career-focused.

Include:

- Current university and specialization
- Main engineering interests
- What kinds of problems Kyaw enjoys solving
- Current learning goals
- One human detail, such as Japanese learning, guitar, or community leadership

Avoid a long autobiography.

### 6.5 Experience and Leadership

Use an animated vertical timeline or stacked cards.

Each item:

- Organization
- Role
- Dates
- Two or three concise impact bullets
- Optional technologies or competencies

Potential categories:

- Technical projects
- AIESEC leadership and external relations
- Hackathon interviewing or community activity
- Academic team projects

### 6.6 Skills

Do not use animated percentage bars or unsupported proficiency scores.

Group skills by practical use:

- Frontend
- Backend
- Cloud and DevOps
- HPC and distributed systems
- Databases and data
- Languages and tools

Use icons carefully. Every icon must have a text label.

### 6.7 Certifications and Education

Include:

- University of Information Technology, Yangon
- Relevant specialization or major
- ITPEC IP
- ITPEC FE
- Japanese language level when appropriate

Credentials should include issuer and year. Add verification links only when available.

### 6.8 Contact

The contact area should be simple and trustworthy.

Include:

- Short invitation
- Email link
- Contact form
- GitHub and LinkedIn
- Response expectation without making a rigid promise

Form fields:

- Name
- Email
- Message

States:

- Idle
- Sending
- Success
- Validation error
- Network or Formspree error
- `mailto:` fallback

Do not expose private phone numbers, home addresses, private IDs, or unnecessary personal data.

---

## 7. Motion Design System

### 7.1 Principles

Motion must:

- Explain hierarchy
- Provide feedback
- Direct attention
- Make transitions feel continuous
- Stop when the user requests reduced motion

Motion must not:

- Delay access to content
- Continuously move large text blocks
- Hijack scroll
- Trigger nausea through excessive parallax
- Run expensive effects off-screen

### 7.2 Timing tokens

```ts
export const duration = {
  instant: 0.12,
  fast: 0.2,
  normal: 0.35,
  slow: 0.6,
  reveal: 0.8,
};

export const easing = {
  standard: [0.22, 1, 0.36, 1],
  enter: [0.16, 1, 0.3, 1],
  exit: [0.7, 0, 0.84, 0],
};
```

### 7.3 Reusable animation patterns

- Section reveal: opacity plus 20–32 px vertical movement
- Staggered children: 60–100 ms separation
- Button hover: 2 px lift and subtle glow
- Link hover: animated underline or arrow shift
- Project image: restrained scale from 1 to 1.03
- Navigation: smooth background and border transition
- Page load: hero elements reveal in a controlled sequence
- Scroll progress: thin non-distracting indicator

### 7.4 Reduced motion

Use both CSS and JavaScript checks.

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
  }
}
```

For Framer Motion, use `useReducedMotion()` and replace moving transitions with fades or immediate state changes.

---

## 8. Three.js Direction

Three.js should act as atmosphere, not as the main product.

### Approved effects

- Low-poly gradient orb
- Sparse particles connected by distance
- Soft floating geometry
- Pointer-influenced camera drift
- Shader-based noise background with low update cost

### Constraints

- Render only on large screens
- Lazy-load the canvas after critical content
- Cap DPR to `[1, 1.5]`
- Disable antialiasing when quality remains acceptable
- Pause rendering when the tab is hidden
- Stop or significantly reduce updates when off-screen
- Disable when reduced motion is enabled
- Provide a static CSS gradient fallback

### Performance budget

- Initial JavaScript target: under 250 KB compressed, excluding lazily loaded 3D code
- Three.js chunk: lazy-loaded and separated from the main bundle
- Avoid high-poly imported models
- Avoid large uncompressed textures
- Reuse geometries and materials

---

## 9. Component Architecture

Suggested structure:

```text
src/
├── app/
│   ├── App.jsx
│   └── routes.jsx
├── components/
│   ├── common/
│   │   ├── Button.jsx
│   │   ├── Container.jsx
│   │   ├── SectionHeading.jsx
│   │   ├── MagneticLink.jsx
│   │   └── SkipLink.jsx
│   ├── layout/
│   │   ├── Header.jsx
│   │   ├── MobileMenu.jsx
│   │   └── Footer.jsx
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── Projects.jsx
│   │   ├── About.jsx
│   │   ├── Experience.jsx
│   │   ├── Skills.jsx
│   │   ├── Credentials.jsx
│   │   └── Contact.jsx
│   ├── projects/
│   │   ├── ProjectCard.jsx
│   │   └── ProjectModal.jsx
│   └── three/
│       ├── HeroScene.jsx
│       ├── ParticleField.jsx
│       └── SceneFallback.jsx
├── data/
│   ├── profile.js
│   ├── projects.js
│   ├── experience.js
│   └── skills.js
├── hooks/
│   ├── useActiveSection.js
│   ├── useMediaQuery.js
│   └── useDocumentVisibility.js
├── lib/
│   ├── motion.js
│   ├── analytics.js
│   └── validation.js
├── styles/
│   └── globals.css
└── assets/
```

Shared profile details, project entries, skills, experience, and credentials live in `src/data/portfolioData.js`. Theme and layout tokens live in `src/index.css`.

---

## 10. Content Data Model

Example project object:

```js
{
  slug: "scheduler-ha-web-services",
  title: "Scheduler-Based High-Availability Web Services",
  summary: "Used SLURM to supervise persistent Dockerized NGINX services across redundant infrastructure.",
  role: "System design, deployment, testing, and documentation",
  stack: ["SLURM", "Docker", "NGINX", "HAProxy", "Keepalived", "NFS"],
  highlights: [
    "Designed controller, service, traffic, and shared-storage planes",
    "Implemented load balancing and virtual-IP failover",
    "Documented failure scenarios and recovery behavior"
  ],
  image: "/projects/ha-web-services.webp",
  repositoryUrl: "",
  liveUrl: "",
  featured: true
}
```

Never show a dead link. Hide actions when their URLs are unavailable.

---

## 11. Responsive Design

### Mobile: below 640 px

- One-column layout
- Static or greatly simplified visual effects
- Hero text remains above the fold where practical
- Cards use full width
- Minimum touch target: 44 × 44 px
- No hover-only information

### Tablet: 640–1023 px

- One or two columns depending on content
- Keep 3D disabled unless profiling proves it is safe
- Timeline can remain stacked

### Desktop: 1024 px and above

- 12-column layout
- 3D enhancement enabled based on motion preference and device capability
- Larger typography and richer hover states

### Wide desktop: 1440 px and above

- Do not stretch text lines excessively
- Keep the content container centered
- Use negative space rather than enlarging every component

---

## 12. Accessibility Requirements

- Semantic landmarks: `header`, `nav`, `main`, `section`, `footer`
- One primary `h1`
- Logical heading order
- Visible focus styles
- Skip-to-content link
- Keyboard-operable menu, modal, and project links
- Alt text for meaningful images
- Decorative visuals hidden from assistive technology
- Contrast meeting WCAG AA
- No information conveyed through color alone
- Form inputs with labels and helpful error messages
- Modal focus trap and Escape-key support
- Reduced-motion support

Use `aria-current="page"` or `aria-current="location"` for the active navigation item where suitable.

---

## 13. Performance Requirements

- Use responsive WebP or AVIF project images
- Lazy-load below-the-fold images
- Preload only the most important font weights
- Prefer local font files or a privacy-conscious delivery method
- Code-split Three.js and project-detail experiences
- Avoid heavy animation libraries beyond the selected stack
- Use `content-visibility: auto` carefully for long lower sections
- Test on a mid-range Android device and throttled network

### Lighthouse targets

- Performance: 90 or higher
- Accessibility: 95 or higher
- Best Practices: 95 or higher
- SEO: 95 or higher

These targets should be checked on a production deployment, not only in the development server.

---

## 14. SEO and Public Sharing

Required metadata:

- Descriptive title
- Meta description
- Canonical URL
- Open Graph title, description, image, and URL
- Twitter card metadata
- Favicon and web app icons
- `robots.txt`
- `sitemap.xml`
- Person and WebSite structured data

Suggested title:

```text
Kyaw Zin Hein — Software, DevOps & HPC Portfolio
```

Suggested description:

```text
Portfolio of Kyaw Zin Hein, a University of Information Technology student building full-stack applications, cloud infrastructure, and high-performance computing systems.
```

Public-safety checks:

- Remove secrets and internal endpoints
- Use a dedicated public email or protected form endpoint
- Do not publish student IDs, private phone numbers, exact home addresses, or confidential project data
- Confirm résumé PDF does not expose unnecessary personal information

---

## 15. Analytics and Privacy

Analytics are optional. When used:

- Prefer privacy-respecting analytics
- Track only useful events, such as project opens, résumé downloads, and successful contact submissions
- Do not collect sensitive form content
- Provide a short privacy note when required

---

## 16. Implementation Phases

### Phase 1 — Foundation

- Define tokens and global styles
- Build semantic layout and data files
- Create navigation, hero, and static sections
- Add responsive behavior

### Phase 2 — Core polish

- Build project cards and experience timeline
- Add contact-form states
- Add SEO metadata and social preview
- Improve content quality

### Phase 3 — Motion

- Add shared Framer Motion variants
- Add reveal, hover, and navigation transitions
- Validate reduced-motion behavior

### Phase 4 — Three.js enhancement

- Lazy-load the hero scene
- Add CSS fallback
- Profile GPU and CPU usage
- Disable or simplify effects where needed

### Phase 5 — Quality and release

- Accessibility audit
- Cross-browser testing
- Performance profiling
- Production build validation
- Deploy to Vercel or Netlify
- Test links, contact delivery, metadata, and mobile layouts

---

## 17. Definition of Done

The portfolio is ready for public release when:

- All sections contain final content
- Featured project claims are accurate
- Navigation and forms work with keyboard only
- Reduced-motion mode is verified
- Three.js has a stable static fallback
- No console errors appear in production
- All links work
- The contact form and fallback are tested
- Social preview image renders correctly
- Lighthouse and manual performance checks are acceptable
- The site is tested at 320 px, 768 px, 1024 px, and 1440 px widths
- No private or confidential information is exposed
