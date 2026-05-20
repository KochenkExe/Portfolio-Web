# 📂 My Portfolio

> My personal portfolio website showcasing my skills, achievements, and projects.

---

## ✨ Features & Architecture

This is my personal portfolio website, featuring:
*   **Bento Grid Layout**: A sleek, premium grid-based interface built using CSS Grid and Flexbox for optimal visual hierarchy.
*   **Dynamic Projects Fetching**: My projects are dynamically pulled from a **Supabase** database backend, allowing real-time content updates without rebuilding the frontend.
*   **Interactivity & Micro-Animations**: Smooth hover transitions, interactive category filtering (All, Business & Analytics, Web Development), and dynamic loading skeletons.
*   **Performance & SEO Optimized**: Pre-fetched Google Fonts, semantic HTML5 structure, responsive layout tags, and meta descriptions.
*   **Analytics Integration**: Integrated with **Vercel Analytics** to track page views and visitor engagement in real-time.

---

## 🛠️ Technology Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend Framework** | React.js 19 + Vite 8 |
| **Styling** | Vanilla CSS (Tailored HSL variables, glassmorphic cards) |
| **Icons & Visuals** | Lucide React, Simple Icons |
| **Backend & Database** | Supabase JS client (PostgreSQL database) |
| **Telemetry & Deployment** | Vercel Analytics + Vercel Hosting |

---

## 📂 Project Structure

```text
Portfolio Web v2/
├── public/                 # Static assets (Favicons, vector graphics)
│   ├── hj.svg              # My main branding logo
│   └── favicon.svg         # Tab icon
├── src/
│   ├── assets/             # Images and local SVGs (Tableau, PowerBI, Excel, etc.)
│   ├── components/         # Reusable React components
│   │   ├── About.jsx       # My profile details & core roles
│   │   ├── Contact.jsx     # My social links & contact card
│   │   ├── Header.jsx      # Navigation bar
│   │   ├── Hero.jsx        # Landing hero banner & my university stats
│   │   ├── Projects.jsx    # Projects grid & category filters (integrated with Supabase)
│   │   ├── Skills.jsx      # My tech stack categorization
│   │   └── Timeline.jsx    # My education & achievements timeline
│   ├── App.jsx             # App layout & Vercel Analytics mounting
│   ├── index.css           # Global styles, variables, typography, and utility classes
│   ├── supabaseClient.js   # Supabase client instantiation
│   └── main.jsx            # React application entry point
├── package.json            # Scripts & project dependencies
├── vite.config.js          # Vite configurations
└── eslint.config.js        # ESLint code quality configurations
```

---

## 🚀 Getting Started

### 📋 Prerequisites

Ensure you have **Node.js** (v18.x or higher recommended) and **npm** installed on your system.

### ⚙️ Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/KochenkExe/Portfolio-Web.git
   cd "Portfolio Web v2"
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Database Configuration (Supabase):**
   The project connects to my Supabase database. You can locate and modify the Supabase configuration in `src/supabaseClient.js`:
   ```javascript
   const supabaseUrl = 'YOUR_SUPABASE_URL';
   const supabaseKey = 'YOUR_SUPABASE_ANON_KEY';
   ```
   *Note: Ensure your Supabase table is named `projects` with columns matching: `id`, `title`, `description`, `category` (e.g., 'ba', 'fe'), `tags` (text array), and `project_url`.*

---

## 💻 Available Scripts

In the project directory, you can run:

#### 🟢 Run Development Server
```bash
npm run dev
```
Starts the local development server at `http://localhost:5173`. Supports Hot Module Replacement (HMR).

#### 🏗️ Build for Production
```bash
npm run build
```
Compiles the production-ready code into the `dist` folder. The build is optimized and minified for performance.

#### 🔍 Code Linting
```bash
npm run lint
```
Runs ESLint to inspect code quality and enforce formatting rules.

#### 👁️ Preview Production Build
```bash
npm run preview
```
Locally runs the production build output from the `dist` directory to test the built application.

---

## ✍️ Customizing the Portfolio

To adapt this portfolio for your own details:
1. **Bio & Stats**: Open `src/components/Hero.jsx` and `src/components/About.jsx` to update the name, education, GPA, and description.
2. **Socials**: Edit `src/components/Contact.jsx` to point to your own email, LinkedIn, and GitHub links.
3. **Skills**: Customize `src/components/Skills.jsx` to add/remove languages, frameworks, or tools.
4. **Assets**: Place your personal photograph as `src/assets/selfphoto.png`.

---

## 👤 Author

*   **Harun Jeynaro Dewantoro Putra**
*   Email: [hjeynaro@gmail.com](mailto:hjeynaro@gmail.com)
*   LinkedIn: [linkedin.com/in/harun-jeynaro](https://www.linkedin.com/in/harun-jeynaro)
*   GitHub: [@KochenkExe](https://github.com/KochenkExe)