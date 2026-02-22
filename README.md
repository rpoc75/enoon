# SWIFT — Astro SaaS Theme

**Author:** ENOON

---

## Overview

SWIFT is a clean, modern starter theme built with **Astro**, **React Islands**, and **Tailwind CSS**.  
Designed for SaaS landing pages, product sites, and modern web apps.  
Fast by default, easy to customize, and structured for real‑world use.

## Screenshots

![App Screenshot](public/screenshot.png)
![Feature Demo](public/dark.png)

---

## 🚀 Features

- ⚡ **Astro** for ultra‑fast performance
- 🧩 **React islands** for interactive components where needed
- 🎨 **Tailwind CSS** for a consistent, utility‑first design system
- 🖼️ Clean, modern layout with:
  - Hero section
  - Features
  - Pricing
  - Testimonials
  - Contact form
  - Footer navigation
- 📱 Fully responsive
- ✨ Smooth micro‑animations
- 🧱 Easy‑to‑extend component structure
- 🧹 Minimal JavaScript, no unnecessary complexity

---

## 📦 Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | [Astro](https://astro.build) (content + routing) |
| Interactivity | [React](https://react.dev) (islands) |
| Styling | [Tailwind CSS](https://tailwindcss.com) |
| Types | TypeScript (API route) |
| Fonts | Google Fonts — Inter (body) + Lexend (headings) |

---

## 🛠️ Getting Started

> **Note:** For local builds, use the `@astrojs/node` adapter.

### Prerequisites

- Node.js ≥ 18
- npm ≥ 9

### Installation

```bash
npm install
```

### Development

Start the local dev server:

```bash
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) in your browser.

---

## 📦 Build / Preview

```bash
# Production build
npm run build

# Preview production build locally
npm run preview
```

Astro handles routing automatically based on the `pages/` directory.

---

## 🎨 Customization

- **Colors** — all colors use Tailwind utility classes. Customize the palette in `tailwind.config.mjs`.
- **Fonts** — change fonts in `src/styles/global.css`.

---

## 📬 Contact Form Endpoint

The contact form posts to `/api/contact`.

The default handler logs submissions to the server console:

```ts
console.log("New contact form submission:", data);
```

Replace this with your preferred integration:

- Email service (e.g. Resend, SendGrid)
- Database write
- Third‑party API (e.g. HubSpot, Mailchimp)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 🙌 Credits

Built by [ENOON](https://github.com/rpoc75) using Astro, React, and Tailwind.  
Created for developers who want a fast, modern starting point for SaaS products.
