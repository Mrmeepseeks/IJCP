# 🏫 Instituto José de la Cruz Puche - Sitio Web

Bienvenido al proyecto web del Instituto José de la Cruz Puche.

## 📁 Estructura del Proyecto

```
instituto-puche/
├── index.html          → Página principal (estructura HTML)
├── css/
│   └── estilos.css    → Todos los estilos visuales
├── js/
│   └── main.js        → Toda la interactividad
├── img/               → Aquí van las imágenes (cuando las tengas)
└── README.md          → Este archivo
```

## 🎯 ¿Cómo funciona?

### **index.html** - La estructura
Este es el "esqueleto" de la página. Contiene:
- Las secciones (Hero, Quiénes somos, Niveles, Galería, etc.)
- Los textos y contenidos
- Los formularios
- Links a los archivos CSS y JS

**Para editar textos:** Abre `index.html` y busca el texto que quieres cambiar.

### **css/estilos.css** - El diseño
Aquí están todos los colores, tamaños, animaciones y el diseño visual.

**Para cambiar colores:** Modifica las variables en la línea 8-18
**Para ajustar tamaños:** Busca la sección correspondiente (hay comentarios que te guían)

### **js/main.js** - La interactividad
Hace que la página sea dinámica:
- Animaciones al hacer scroll
- Resalta el menú según donde estés
- Maneja los formularios

## 🚀 ¿Cómo ver la página?

1. **Localmente (en tu computadora):**
   - Abre el archivo `index.html` con tu navegador
   - ¡Listo! Ya puedes ver la página

2. **En internet:**
   - Sigue las instrucciones de publicación (GitHub Pages o Netlify)

## 🎨 Personalización Rápida

### Cambiar los colores principales
Abre `css/estilos.css` y modifica las líneas 8-18:

```css
:root {
  --azul-oscuro: #1a3a6b;   ← Color principal
  --azul-medio: #2563b8;    ← Color secundario
  --amarillo: #fbbf24;      ← Color de acentos
}
```

### Cambiar textos
Abre `index.html` y busca el texto que quieres cambiar. Por ejemplo:
- Línea ~50: Título del hero
- Línea ~150: Misión del colegio
- Línea ~300: Información de contacto

### Agregar una nueva noticia
En `index.html`, busca la sección de noticias (aprox. línea 230) y copia este código:

```html
<div class="noticia-card fade-in">
  <div class="noticia-img">🎉</div>
  <div class="noticia-body">
    <div class="noticia-categoria">📢 Categoría</div>
    <h3>Título de la noticia</h3>
    <p>Descripción de la noticia aquí.</p>
    <div class="noticia-fecha">📅 Fecha</div>
  </div>
</div>
```

## 📝 Próximos pasos

1. ✅ Entender la estructura del código
2. ⏳ Actualizar con datos reales del colegio
3. ⏳ Agregar fotos reales a la galería
4. ⏳ Publicar en internet
5. ⏳ Conectar formularios a un backend

## 🆘 ¿Necesitas ayuda?

Si algo no funciona:
1. Verifica que todos los archivos estén en sus carpetas correctas
2. Abre la consola del navegador (F12) y busca errores
3. Asegúrate de que los nombres de archivos coincidan exactamente

## 📚 Recursos para aprender más

- HTML: https://developer.mozilla.org/es/docs/Web/HTML
- CSS: https://developer.mozilla.org/es/docs/Web/CSS
- JavaScript: https://developer.mozilla.org/es/docs/Web/JavaScript

---

**Hecho con ❤️ para la comunidad educativa del Instituto José de la Cruz Puche**
