Portfolio Web

My personal portfolio website built using React, Vite, and Supabase. The site is designed with a Neo-Brutalist aesthetic, featuring a high-contrast layout, thick black borders, flat colors, and zero border-radius.

---

## Design System

- **Style**: Sharp corners, high contrast, and flat background/card elements.
- **Palette**: Saturated accent colors on a creamy off-white background (`#f6f6f2`):
  - **Royal Blue** (`#2563eb`) - Primary actions and links
  - **Bright Yellow** (`#facc15`) - Business analysis accents
  - **Saturated Cyan** (`#06b6d4`) - Data analytics accents
  - **Hot Pink** (`#ec4899`) - Web development accents
  - **Bright Orange** (`#f97316`) - Section title accents
- **Typography**:
  - Headings & UI: `Space Grotesk` and `Outfit`
  - Code components: `Space Mono` / monospace

---

## Features

- **Bento Grid Layout**: Responsive dashboard-like grid layout optimized for mobile and desktop.
- **Terminal Mockup**: A simulated console on the hero section displaying a Python dictionary (`profile.py`) with my stats.
- **Role Focus**: Segmented cards detailing my competencies as a Business Analyst and Data Analyst.
- **Categorized Skills**: Filtered grids for programming languages, analytics/BI, and web development.
- **Supabase Backend**:
  - Fetches projects dynamically from a PostgreSQL database table.
  - Implements Neo-Brutalist skeleton loaders during database fetch.
  - Dynamically serves my ATS Resume from a Supabase storage bucket.
- **Vercel Analytics**: Built-in tracking for visitors and site metrics.

---

## Project Structure

```
Portfolio Web v2/
├── public/                 # Static assets
├── src/
│   ├── assets/             # Images and technology SVGs
│   ├── components/         # React components and styling
│   │   ├── About.jsx       # Biography and role highlights
│   │   ├── About.css
│   │   ├── Contact.jsx     # Contact section and social links
│   │   ├── Contact.css
│   │   ├── Header.jsx      # Navigation bar with scroll spy
│   │   ├── Header.css
│   │   ├── Hero.jsx        # Landing fold with terminal & resume button
│   │   ├── Hero.css
│   │   ├── Projects.jsx    # Project filtering and fetch logic
│   │   ├── Projects.css
│   │   ├── Skills.jsx      # Skills bento grid
│   │   ├── Skills.css
│   │   ├── Timeline.jsx    # Education and achievements timeline
│   │   └── Timeline.css
│   ├── App.jsx             # App layout
│   ├── App.css
│   ├── index.css           # Neo-Brutalist CSS overrides and variables
│   ├── main.jsx            # React root injection
│   └── supabaseClient.js   # Supabase client initialization
├── index.html              # Entry HTML file
├── package.json            # Manifest file
├── vite.config.js          # Vite config
└── eslint.config.js        # ESLint config
```

---

## Tech Stack

- **Front-end**: React 19, CSS variables
- **Tooling**: Vite, ESLint
- **Backend**: Supabase Database & Object Storage
- **Icons**: `lucide-react`, `react-icons`
- **Analytics**: `@vercel/analytics`

---

## Setup & Development

To run this project locally, ensure you have Node.js installed, then execute:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/KochenkExe/Portfolio-Web.git
   cd Portfolio-Web
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start the development server**:

   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```
   Production output will be generated in the `dist/` directory.
