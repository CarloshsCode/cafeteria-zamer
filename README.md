Luna Brew Café — Sitio estático

Archivos incluidos:
- index.html — Página principal (hero, menú, sobre nosotros, contacto)
- css/style.css — Estilos modernos (Grid/Flexbox, responsive)
- js/main.js — Interacciones (menú móvil, animaciones)
- images/ — Imágenes y favicon

Cómo probar localmente:
1) Abrir `index.html` en el navegador (sólo lectura). Para una mejor experiencia con rutas y iframes, sirve con un servidor estático.

Windows (PowerShell) ejemplo:

```powershell
# Desde la carpeta del proyecto
python -m http.server 5500 --bind 127.0.0.1
# Luego abre http://127.0.0.1:5500 en el navegador
```

Notas de diseño:
- Tipografía: Poppins desde Google Fonts.
- Colores: paleta cálida inspirada en cafés.
- Reemplazar imágenes placeholder en `images/` por fotografías optimizadas (JPG/WEBP) para un sitio en producción.

Accesibilidad y buenas prácticas:
- Skip link para saltar al contenido.
- Menú accesible con aria-expanded y soporte Escape.
- Uso de etiquetas semánticas (header, main, section, article, footer).

Licencia: Este proyecto es ficticio y proporcionado como ejemplo.
