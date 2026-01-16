# Reglas de Arquitectura Técnica

## Regla 1: Client vs Server Components
- Por defecto, TODO es un Server Component.
- Usa `'use client'` SOLO en las hojas del árbol de componentes que requieran interactividad (hooks, event listeners).
- NO pases funciones como props a Server Components.

## Regla 2: Optimización de Imágenes
- Nunca uses `<img>` estándar. Usa `next/image`.
- Imágenes en el viewport inicial (Hero) deben tener `priority`.
- Imágenes decorativas deben tener `alt=""`.

## Regla 3: Tailwind v4 y Estilos
- No crees clases CSS personalizadas si Tailwind lo cubre.
- Usa variables CSS nativas para colores del tema: `bg-[var(--color-surface)]`.
- Diseño Mobile-First: `class="p-4 md:p-8"`.

## Regla 4: Accesibilidad (WCAG 2.2)
- Botones y enlaces deben tener un área táctil mínima de 44x44px.
- No uses `outline: none` sin proveer un estilo de foco alternativo visible.
- Usa HTML semántico (`<section>`, `<article>`, `<nav>`) en lugar de `<div>`.
