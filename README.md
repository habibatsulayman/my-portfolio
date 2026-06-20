# Habeebah Sulayman — Mobile Software Engineer Portfolio

A premium, highly polished developer portfolio built using **Next.js**, **TypeScript**, **React**, and **Tailwind CSS v4** with **Framer Motion** scroll animations. 

Designed with a sleek, tech-forward aesthetic tailored for mobile and Kotlin Multiplatform (KMP) software development, this portfolio leverages a dark mode experience inspired by modern AI tools and developer platforms.

---

## 🎨 Visual Identity & Design System

The portfolio is built on a curated dark palette that emphasizes structure, clarity, and visual interest:

* **Background (`--bg`)**: Deep Charcoal `#0F1117`
* **Card Surfaces (`--surface`)**: Dark Slate `#1A1D27`
* **Deep Surfaces (`--surface-2`)**: Indigo Slate `#22263A` (used for skill chips & tag badges)
* **Borders (`--border`)**: Muted Violet-Grey `#2E3249`
* **Primary Text (`--text`)**: Soft Near-White `#F0EFF9`
* **Secondary Text (`--text-muted`)**: Pastel Lavender-Grey `#8B89A8`
* **Accent Primary (`--accent`)**: Electric Violet `#6C63FF`
* **Accent Secondary (`--accent-soft`)**: Soft Pastel Violet `#B8B5FF`
* **Success/Available Indicator (`--green`)**: Vibrant Mint `#4ADE80`

### Typography
* **Headings & Accents**: `Space Grotesk` — a geometric, tech-confident display face.
* **Body Text**: `Inter` — a highly legible, clean neo-grotesque sans-serif.

---

## ✨ Features & Architecture

### 1. Interactive Hero Section
* **Availability Badge**: A pulsing, glow-accented indicator showing availability for new roles.
* **Typewriter Tagline**: A terminal-style custom animated typing script that cycles through key specializations:
  * *Android / KMP Engineer*
  * *Kotlin Multiplatform · Android · iOS*
  * *Clean Architecture · MVVM · SQLDelight*
  * *Building AssistantX @ Layer Axis*
* **Metrics Board**: Inline stats highlighting core milestones:
  * 1+ Years at Layer Axis
  * 2 Platforms (Android · iOS)
  * 1 Live Play Store App
  * 6 Languages Localized

### 2. Career Timeline (Experience)
A structured chronology showcasing actual engineering contributions, fully documented with technical details:
* **Layer Axis (AssistantX)**: Kotlin Multiplatform AI Assistant app (Android & iOS). Highlights: GDPR-compliant account deletion flows, real-time chat history search using debounced `StateFlow` queries on SQLDelight with `flatMapLatest` cancellation, and theme persistency via DataStore.
* **Duplicate Contacts Remover**: Production Android App (Live on Play Store). Highlights: 6-language internationalization, Arabic plural system implementation, per-app language preference settings (`android:localeConfig`), and integration of the Google Play In-App Review API.

### 3. Split Projects Gallery
* **Main Projects Grid**: Interactive cards utilizing a smart viewport renderer. Phone screenshots (like *AssistantX*, *Duplicate Contacts Remover*, and *Spendly*) are automatically framed in a portrait viewport with `#0a0a0f` borders and `object-fit: contain`. Web screenshots (*Smart Chef*) use full-width `object-fit: cover`.
* **Fun Projects List**: A separate, lightweight container for side experiments (like *Tip Calculator*), reducing visual clutter in the main gallery.

### 4. Categorized Skills Matrix
A grid grouping toolsets into 4 categories:
1. **Mobile · KMP**: Kotlin, KMP, Jetpack Compose, Android SDK, iOS (shared KMP), Clean Architecture, MVVM + StateFlow.
2. **Data · Backend**: SQLDelight, Ktor, Firebase, RevenueCat, PostgreSQL, REST APIs.
3. **Testing · Tooling**: MockK, JUnit, UnconfinedTestDispatcher, Git · GitHub, Gradle, BuildKonfig.
4. **Web**: HTML5, CSS3, JavaScript, TypeScript, React, Next.js.
* *Note: Designed with responsive CSS overrides to automatically collapse to a single column on mobile viewports.*

### 5. Professional-Focused About Section
A clean, two-column layout presenting a professional biography linked to a scientific background (BSc in Microbiology from the University of Ilorin) and detail blocks covering Location, Role, Stack, and interests in Mobile Health & Bioinformatics.

### 6. Centered Contact Section
Clean, styled CTAs for direct emails and LinkedIn connections, along with direct links to GitHub and Twitter/X.

---

## 🛠️ Development & Commands

### Prerequisites
* Node.js (v18+ recommended)
* npm, yarn, or pnpm

### Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Build the production bundle**:
   ```bash
   npm run build
   ```
   This generates an optimized static build of the portfolio.

4. **Run production preview**:
   ```bash
   npm run start
   ```

---

## 📂 Project Structure

```text
├── app/
│   ├── globals.css      # Core styles, tailwind configs, layout variables
│   ├── layout.tsx       # Page wrapper, metadata settings, font configuration
│   └── page.tsx         # Main entry point importing layout components
├── components/
│   ├── navbar/
│   │   └── page.tsx     # Dark glassmorphic navigation bar with mobile support
│   ├── hero.tsx         # Terminal typewriter header, metrics
│   ├── experience.tsx   # Detailed career timeline and bullets
│   ├── projects.tsx     # Split project cards & portrait/landscape loaders
│   ├── skills.tsx       # Tech stack matrix
│   ├── about.tsx        # Structured bio
│   ├── contact.tsx      # Email / LinkedIn buttons & socials
│   └── footer.tsx       # Copyright footer
└── public/
    └── projects/        # Static screenshots and assets
```

---

## 🚀 Deployment

The portfolio is configured for zero-setup deployments on platforms like **Vercel** or **Netlify**:

### Deploying to Vercel
1. Push the code to a GitHub repository.
2. Log into Vercel and click **Add New Project**.
3. Import the repository. Vercel will automatically detect Next.js and apply the correct build settings.
4. Click **Deploy**.
