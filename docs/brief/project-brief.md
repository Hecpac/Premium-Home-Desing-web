# BRIEF v1.1 (EJECUTABLE) — PREMIUM HOME DESIGN (2026)

**Objetivo:** Sitio "Portfolio + Lead Engine" Agentic-Ready para constructora de lujo (Dallas). Estética Ferrari (emoción/velocidad/rojo) + Neo-Swiss (orden, grillas, tipografía).

**Principio rector:** Luxury = claridad + control + performance.

---

## 0) Alcance del Producto (Outcome)

### Resultados esperados
- Captación de leads premium (concierge multi-step + calendar/CRM).
- Autoridad de marca (proyectos + proceso + insights).
- Performance real (CWV 2.0 en producción) y SEO agéntico.

### Páginas mínimas (MVP premium)
- **Home** (hero + proof + featured projects + concierge CTA)
- **Portfolio / Projects index** (filtros por tipo/estilo/ubicación)
- **Project detail** (template)
- **Services** (proceso + paquetes + FAQ)
- **Areas Served** (Dallas + suburbios; SEO local)
- **Insights** (blog/guías) + artículo
- **About / Team** (si aplica)
- **Contact + Concierge Form** (multi-step)
- **Privacy + Terms**

---

## 1) Stack Tecnológico (Non-Negotiables)

| Layer | Technology |
|-------|------------|
| Framework | Next.js 16 (App Router) + Turbopack |
| Rendering | PPR (Partial Prerendering) con reglas definidas (ver §2) |
| Styling | Tailwind CSS v4 |
| Motion | Framer Motion (springs only; motion budget) |
| IA/Estado | Vercel AI SDK (streaming) + MCP (Model Context Protocol) |
| CMS | Headless (Sanity recomendado) con esquemas tipados y preview |

### Tailwind Rules
- Uso obligatorio de `@container`
- `text-wrap: balance` en headings

---

## 2) Reglas de Render (PPR + Streaming) — "No Ambiguo"

### Static Shell (siempre prerender)
- Navbar, footer, layout grid, tokens, fonts, critical CSS
- Hero layout (estructura), placeholders, copy base
- Secciones de contenido "base" (sin datos dinámicos pesados)

### Dynamic Streaming (server streaming)
- Featured projects (si vienen de CMS y requieren query)
- Testimonials (rotación / selección)
- Insights list (últimos posts)
- Concierge "AI assist" (si aplica)

### Client Components (solo cuando sea necesario)
**Permitidos únicamente en:**
- Gallery / lightbox / before-after (si existe)
- Filtros interactivos (si no se logra con server navigation)
- Concierge multi-step + validaciones UX
- Agent UI (streaming UI)

> **Todo lo demás: Server Components por defecto.**

### Cache & Revalidación (regla de oro)
- Contenido CMS: ISR/tag revalidate por tipo (projects, insights, areas, services)
- Páginas críticas: revalidate corto + on-demand revalidate desde CMS
- Evitar `no-store` salvo casos justificados (concierge AI / sesiones)

---

## 3) Performance & Core Web Vitals 2.0 (SLOs)

### Objetivos (producción, p75)
| Metric | Target |
|--------|--------|
| INP | < 200ms |
| LCP | < 2.5s |
| CLS | 0.00 (tolerancia mínima) |

### Presupuestos (Performance Budgets)
- JS total inicial (home): estricto (evitar libs pesadas)
- Terceros: mínimos y diferidos (tracking/CRM con estrategia)
- Fonts: preload + subsets + `font-display: swap`

### Reglas específicas

#### Hero LCP
- 1 imagen LCP principal (no video como LCP)
- `fetchpriority="high"` + sizes correctos + placeholder blur
- Si hay video: poster primero, video lazy

#### INP
- Evitar carousels pesados; preferir grids
- Dividir tareas largas; evitar listeners excesivos
- Framer motion: no animar layout en scroll continuo

#### CLS
- `aspect-ratio` obligatorio en media (imágenes/video)
- Skeletons con altura fija

---

## 4) Sistema de Diseño — "Premium Corsa"

### Layout
- Neo-Swiss grid (12 cols / breakpoints claros)
- Bento grids modulares, reordenables por CMS (featured blocks)

### Colores (tokens)
| Token | Value | Usage |
|-------|-------|-------|
| Primary accent | Rosso Corsa `#D40000` | CTAs, highlights |
| Base dark | `#111111` | Default background |
| Base light | `#F3F4F6` | Optional light mode |
| Neutrales | Carbón / Titanio / Hueso | Balance |

> **Regla:** El rojo es acento, no "fondo dominante".

### Tipografía
- **Font:** Grotesca fuerte: Inter o Geist
- **Jerarquía Neo-Swiss:**
  - H1 sobrio, tracking leve, balance wrap
  - Labels: mayúsculas contenidas (no gritar)
  - Body: legibilidad primero

### Motion (Framer)
- Solo springs, micro-interacciones:
  - hover lift sutil
  - reveal minimal
  - transitions suaves

> **Prohibido:** animaciones constantes, parallax agresivo.

### Componentes clave (MVP)
- Navbar (sticky premium + focus visible)
- Hero (headline + proof + CTA)
- Project cards (bento)
- Project gallery
- Concierge form (multi-step)
- Testimonials
- FAQ
- Footer con trust & location

---

## 5) UI Agéntica (sin "gimmick")

### Principios
- IA visible solo cuando aporta valor.
- Estados discretos (shimmer/glow suave) y copy claro.

### 3 Use Cases (obligatorios si hay IA)
1. **Concierge Assist:** sugiere tipo de proyecto/estilo según inputs del formulario.
2. **Project Match:** "proyectos similares" basado en tags + preferencias.
3. **Q&A del proceso:** responde usando contenido verificado (CMS/knowledge base).

### Seguridad / Scope IA
- No prometer costos exactos si no hay reglas.
- Si el usuario escribe PII: avisos + límites + almacenamiento controlado.

---

## 6) CMS (Sanity) — Arquitectura de Contenido

### Tipos (schemas)

#### Project
- title, slug, location, year, type, style, budgetRange (opcional), status
- gallery (con aspectRatio), highlights, materials, metadata SEO

#### Service
- paquetes, proceso, FAQs, CTA config

#### Area Served
- city/region, copy local, proof, FAQs, internal links

#### Insight
- categories, author, read time, FAQ schema (si aplica)

#### Testimonial
- name, role, quote, source

#### Global Settings
- brand tokens, nav, footer, CTAs, social, tracking toggles

### Reglas CMS
- Draft + preview en Vercel
- On-demand revalidation por documento
- Asset pipeline con tamaños y formatos (AVIF/WebP)

---

## 7) SEO Agéntico (2026)

### Técnicos
- `/llms.txt` en raíz (curado: páginas core + estructura)
- `robots.txt`, `sitemap.xml` dinámico
- Canonicals, OpenGraph, Twitter cards
- **JSON-LD por tipo:**
  - Organization / LocalBusiness
  - Service
  - Article
  - FAQPage
  - BreadcrumbList
  - (Project: usar CreativeWork/Residence si aplica)

### Contenido (estrategia)
- **Clusters:** Services ↔ Insights ↔ Projects ↔ Areas
- **Local SEO:** páginas por ciudad/suburbio con intención clara
- **Images:** alt, filenames, structured metadata

---

## 8) Conversión (Lead Engine) — No opcional

### Concierge Multi-Step (MVP)
**Steps sugeridos:**
1. Tipo de proyecto + estilo
2. Ubicación (Dallas/suburbio) + ¿ya tiene lote?
3. Timeline
4. Rango de presupuesto (opciones)
5. Datos de contacto + preferencia (call/text/email)
6. Confirmación + next step (calendar)

### Integraciones
- **CRM:** HubSpot / GoHighLevel (definir uno)
- **Calendar booking:** Calendly o similar
- **Email transactional:** Resend / Postmark
- **Anti-spam:** Turnstile + rate limit

### Analytics (eventos)
- CTA clicks
- Form step drop-off
- Submit success
- Call / email / map clicks

---

## 9) Accesibilidad, Legal, Seguridad

- WCAG AA (contraste, focus, teclado)
- `prefers-reduced-motion` respetado
- Privacy + Terms
- Security headers (CSP, HSTS, etc.)
- Protección forms (rate limit + bot protection)
- Manejo de PII (política clara)

---

## 10) Testing, Observabilidad & Release

### Obligatorio
- Lighthouse CI en PRs (budgets)
- RUM: Vercel Speed Insights + Analytics
- Error/perf tracing: Sentry
- E2E básico: Playwright (flujos críticos: home → project → concierge submit)

### Entornos
- Dev / Preview / Prod
- Preview por PR con datos CMS de staging

---

## 11) Definition of Done (DoD) — "Listo de verdad"

- [ ] CWV objetivos medidos en producción (p75)
- [ ] 10–15 páginas core (MVP premium) completas
- [ ] CMS schemas + preview + revalidate funcionando
- [ ] Concierge + CRM + calendar + anti-spam operativo
- [ ] JSON-LD + sitemap + llms.txt implementados
- [ ] Accesibilidad AA (básico) + reduced motion
- [ ] Observabilidad (RUM + Sentry) + Lighthouse CI
- [ ] Seguridad mínima (headers + rate limit)

---

## 12) Entregables

1. **Repo Next.js 16** con arquitectura app router (server-first)
2. **Design tokens + componentes base** (Tailwind v4)
3. **CMS (Sanity)** schemas + dataset staging/prod
4. **Implementación IA** (3 casos) con Vercel AI SDK + MCP
5. **SEO pack** (llms.txt + JSON-LD + sitemap/robots)
6. **Conversion pack** (concierge + CRM + calendar + analytics)
