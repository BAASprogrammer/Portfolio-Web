# Portfolio Web

Portafolio web personal desarrollado con React, TypeScript y Vite.

## Autora

**BAASprogrammer**

## Tecnologías

- **Frontend:** React 18 + TypeScript
- **Build Tool:** Vite
- **Estilos:** Tailwind CSS
- **Backend:** Vercel Serverless Functions
- **Formulario de contacto:** Formspree

## Características

- Diseño responsive y moderno
- Animaciones fluidas
- Formulario de contacto funcional
- Secciones: Introducción, Sobre mí, Experiencia, Habilidades, Proyectos y Contacto

## Estructura del Proyecto

```
Portfolio-Web/
├── api/
│   └── send-email.ts          # Serverless function para envío de emails
├── frontend/
│   ├── public/                 # Archivos estáticos
│   ├── src/
│   │   ├── assets/
│   │   │   ├── css/           # Estilos adicionales
│   │   │   ├── fonts/         # Fuentes personalizadas
│   │   │   └── images/        # Imágenes y previews
│   │   ├── components/
│   │   │   ├── AnimatedBackground.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Introduction.tsx
│   │   │   ├── MainContent.tsx
│   │   │   └── SocialLinks.tsx
│   │   ├── context/
│   │   │   └── ScrollContext.tsx
│   │   ├── hooks/             # Custom hooks
│   │   ├── pages/
│   │   │   ├── About.tsx
│   │   │   ├── ContactForm.tsx
│   │   │   ├── Experience.tsx
│   │   │   ├── PersonalIntro.tsx
│   │   │   ├── Projects.tsx
│   │   │   └── Skills.tsx
│   │   ├── types/
│   │   │   └── SectionProps.ts
│   │   ├── App.tsx
│   │   ├── App.css
│   │   ├── main.tsx
│   │   └── index.css
│   ├── eslint.config.js
│   ├── index.html
│   ├── package.json
│   ├── postcss.config.js
│   ├── tailwind.config.js
│   ├── tsconfig.json
│   └── vite.config.ts
├── package.json
├── vercel.json
└── README.md
```

## Instalación

```bash
# Clonar repositorio
git clone https://github.com/BAASprogrammer/Portfolio-Web.git

# Instalar dependencias
cd Portfolio-Web
npm install
cd frontend
npm install

# Ejecutar en desarrollo
npm run dev
```

## Variables de entorno

Crear un archivo `.env` en la raíz con:

```
FORMSPREE_ID=tu_id_de_formspree
```

## Despliegue

El proyecto está configurado para desplegarse en **Vercel**.

## Licencia

MIT

---

Desarrollado por **BAASprogrammer**
