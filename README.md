# 🌸 Lore Training

PWA de entrenamiento en casa, nutrición y vitácora de progreso — de 70 kg a 50 kg, con un programa pensado para cuidar la espalda y una alimentación pensada para la resistencia a la insulina.

## Contenido

- `index.html` — aplicación completa (HTML + CSS + JS, sin dependencias de build).
- - `manifest.webmanifest` — hace que la app sea instalable en el celular (ícono, nombre, colores, modo pantalla completa).
  - - `sw.js` — service worker: permite instalar la app y usarla sin conexión una vez cargada.
    - - `icons/` — íconos de la app (192px y 512px, versión normal y "maskable" para Android).
     
      - **Importante:** sube los 4 elementos juntos (`index.html`, `manifest.webmanifest`, `sw.js`, la carpeta `icons/`) manteniendo esa misma estructura de carpetas — si falta alguno, la app sigue funcionando igual, pero no se podrá instalar como app ni usar sin conexión.
     
      - ## Cómo usarla — y cómo instalarla como app en el celular
     
      - **Opción rápida (sin instalar como app):** abre `index.html` directamente en el navegador del celular o computador. Todo el progreso (perfil, entrenamientos, vitácora, mercado, música) se guarda localmente en el navegador (localStorage / IndexedDB) — no requiere backend ni conexión a internet una vez cargada.
     
      - **Para que se vea y se instale como una app real:**
     
      - 1. Activa GitHub Pages para este repositorio: Settings → Pages → Deploy from branch → rama main, carpeta / (root) → Save.
        2. 2. Espera 1-2 minutos y copia la URL pública que te da GitHub.
           3. 3. Abre esa URL en el navegador del celular.
              4. 4. Android (Chrome): toca el menú → "Instalar app" o "Agregar a pantalla de inicio".
                 5. 5. iPhone (Safari): toca el botón compartir → "Agregar a pantalla de inicio".
                   
                    6. ## Funcionalidades
                   
                    7. - Programa de entrenamiento por etapas (Adaptación → Condicionamiento → Fuerza y definición → Fuerza avanzada), con avance manual según tolerancia, dolor de espalda y sesiones completadas.
                       - - Biblioteca de 32 ejercicios pensados para proteger la espalda (bird-dog, dead bug, Pallof, puente de glúteo, remo sentado, press apoyado, gato-camello, entre otros).
                         - - Ejercicios de tonificación de brazos, espalda y abdomen, junto con una nota honesta sobre por qué no existe la reducción de grasa localizada.
                           - - Modo de entrenamiento a pantalla completa con temporizador, series/repeticiones, descansos y señales de audio.
                             - - Nutrición: 36 recetas colombianas compuestas con más proteína, más fibra y menos azúcar añadida, sin lenguaje de "detox".
                               - - Lista de mercado automática y vitácora de progreso con gráfica, racha y logros.

                               ## Aviso

                               Esta aplicación no sustituye valoración médica, fisioterapia ni nutricional profesional. Antes de iniciar o modificar el programa, confirma con tu médico o fisioterapeuta qué movimientos, rangos e impactos están permitidos para tu espalda, y sigue el acompañamiento de tu médico o nutricionista para el manejo de la resistencia a la insulina. Esta app es un apoyo, no un tratamiento médico.
                               
