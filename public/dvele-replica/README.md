# Dvele Homes Replica

Esta es una réplica de alta fidelidad del sitio web de Dvele Homes, construida con Vanilla HTML, CSS y JavaScript, siguiendo los principios de "High Performance" y "Cinematic Luxury".

## Estructura del Proyecto

El proyecto se encuentra alojado dentro de la carpeta `public/dvele-replica` para ser servido estáticamente por el servidor principal de Next.js.

```
/public/dvele-replica
  /assets        # Imágenes y videos (placeholders incluidos)
  /css           # Estilos CSS modernos (Variables, Reset, Main, Responsive)
  /js            # Lógica JS (Sticky nav, Animaciones, Formulario)
  index.html     # Estructura semántica principal
  README.md      # Este archivo
```

## Cómo ejecutar

Dado que este proyecto está dentro de una aplicación Next.js existente:

1.  Asegúrese de que el servidor de desarrollo esté corriendo:
    ```bash
    npm run dev
    ```
2.  Abra su navegador y visite:
    [http://localhost:3000/dvele-replica/index.html](http://localhost:3000/dvele-replica/index.html)

## Características Implementadas

*   **Sin Frameworks Pesados**: 100% Vanilla JS y CSS.
*   **Diseño Responsivo**: Adaptado para Móvil (375px), Tablet (768px) y Desktop (1024px+).
*   **Performance**: Uso de `IntersectionObserver` para animaciones ligeras.
*   **Estética Premium**: Tipografía Inter, espaciado generoso y paleta de colores corporativa.
*   **Interactividad**:
    *   Header "Sticky" con efecto de desenfoque (backdrop-filter).
    *   Animaciones de entrada (Fade-in).
    *   Smooth scroll para navegación interna.
    *   Validación simulada de formulario de newsletter.

## Notas sobre Assets

Se han utilizado imágenes y configuraciones de placeholder para los videos e imágenes. Para la versión final de producción, reemplace los archivos en `/assets/images` y `/assets/videos` con los recursos de alta definición originales.
