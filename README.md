# 🚀 Predusk AI - Modern AI Chat Interface

A comprehensive AI chat interface built with modern web technologies. This project showcases a full-stack approach with Next.js 15, TypeScript, Tailwind CSS, and a complete component library documented with Storybook.

[![Netlify Status](https://api.netlify.com/api/v1/badges/YOUR-BADGE-ID/deploy-status)](https://app.netlify.com/sites/predusk-ai/deploys)

## 🌟 Features

- **🤖 Interactive Chat Interface** - Real-time messaging with AI-powered responses
- **🎨 Modern UI Components** - Built with shadcn/ui and Radix primitives
- **📱 Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- **🔍 Advanced Search** - Command palette with fuzzy search functionality
- **⚙️ Customizable Settings** - Theme switching, model selection, and parameters
- **📚 Component Documentation** - Complete Storybook integration
- **🔄 Real-time Updates** - Live message editing and deletion
- **♿ Accessibility First** - WCAG compliant with full keyboard navigation

---

## 🌐 Live Demo & Resources  

- **🚀 Live Application:** [https://predusk-ai.netlify.app](https://predusk-ai.netlify.app)
- **📂 GitHub Repository:** [https://github.com/vivek-22bmsit/predusk-ai](https://github.com/vivek-22bmsit/predusk-ai)
- **🎨 Figma Design:** [View Mockups](https://www.figma.com/proto/W9nnPjbpjMUv7FgExKIBhJ/Untitled?node-id=4-29&t=aGzlTlAvMC2bgaD6-1)
- **📖 Storybook:** [Component Library](https://predusk-ai.netlify.app/storybook) _(Coming Soon)_

---

## 🛠️ Tech Stack

### Frontend
- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 3.4
- **Components:** shadcn/ui + Radix UI
- **Animations:** Framer Motion
- **Icons:** Lucide React

### Development & Tools
- **Documentation:** Storybook 8
- **Build Tool:** Turbopack
- **Linting:** ESLint 9
- **Deployment:** Netlify
- **Version Control:** Git + GitHub

---

## ⚡ Quick Start

### Prerequisites
- **Node.js** 18+ (recommended: 20+)
- **npm** 9+ or **yarn** 1.22+
- **Git** for version control

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/vivek-22bmsit/predusk-ai.git
cd predusk-ai

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open your browser
# Visit: http://localhost:3000
```

### Available Scripts

```bash
# Development
npm run dev          # Start dev server with Turbopack
npm run dev:webpack  # Start dev server with Webpack

# Production
npm run build        # Build for production
npm run start        # Start production server

# Quality & Documentation  
npm run lint         # Run ESLint
npm run storybook    # Start Storybook server
npm run build-storybook  # Build Storybook

# Testing (when available)
npm test             # Run test suite
```

---

## Research

### Platforms Reviewed

1. OpenAI Playground  
   - Flexible parameter controls (temperature, tokens, etc.).  
   - Clean UI with model selection dropdown.  

2. Anthropic Claude Chat UI  
   - Simple, conversational interface with collapsible side panel.  
   - Clear distinction between user and AI messages.  

3. Hugging Face Spaces  
   - Strong community-driven UI demos.  
   - Support for hosting multiple models with UI previews.  

4. Microsoft Copilot Lab  
   - Task-focused prompt library with reusable templates.  
   - Polished UX with modern animations.  

### Features Chosen (6 Core)

From these UIs, I selected 6 core features for my prototype:  
- Model Selector (dropdown)  
- Prompt Editor with template save/load  
- Parameters Panel (temperature, max tokens, etc.)  
- Chat Area with styled user and AI bubbles  
- Search Dialog with command palette experience  
- Sidebar Navigation (for switching views and models)  

---

## Design

- Tool Used: Figma Mockup (replace with your actual Figma link or screenshot)  
- Tailwind Mapping:  
  - Colors: Primary (blue-600), Secondary (gray-700), Background (gray-50).  
  - Typography: Tailwind font utilities with font-sans.  
  - Spacing: Used Tailwind scale (p-4, gap-6, etc.).  
  - Animations: Framer Motion for hover, focus, and modal transitions.  

Each mockup element was translated directly to Tailwind classes, ensuring pixel-perfect parity between Figma and code.

---

## Development

### Core Features Implemented

1. Model Selector – Dropdown to switch between GPT-3.5, GPT-4, and dummy models.  
2. Prompt Editor – Textarea with save and load support (dummy JSON data).  
3. Parameters Panel – Sliders for temperature, max tokens, and top-p.  
4. Chat Interface – Styled bubbles for user and AI messages.  
5. Search Dialog – Command palette modal using @radix-ui/react-dialog.  
6. Sidebar Navigation – Collapsible sidebar for navigation and model selection.  

### Accessibility and UX Polish

- All components are keyboard-navigable.  
- Added ARIA labels for modals, buttons, and sliders.  
- Used Framer Motion for smooth transitions and hover states.  

---

## Mock API Setup (/src/data/ + /src/app/api/)

### Mock Data
- File: /src/data/mockData.ts  
- Includes:
  - Interfaces: User, Message, ChatRoom, DashboardMetric.  
  - Realistic Indian names (e.g., Vivek Sharma, Prachi Gupta).  
  - Professional email domains (@techcorp.io).  
  - Async API functions with simulated latency.  

### API Endpoints
- GET /api/users – Fetch all users with pagination.  
- POST /api/users – Create a new user with validation.  
- GET /api/messages – Fetch messages with room filtering.  
- POST /api/messages – Send a new message with timestamp.  
- GET /api/dashboard – Analytics and metrics.  

### Testing
Run the development server:
```bash
npm run dev
```

Then visit:

- http://localhost:3000/api/users  
- http://localhost:3000/api/messages  
- http://localhost:3000/api/dashboard  

---

# Storybook Component Library

## Configuration
- Folder: `.storybook/` with `main.ts` and `preview.ts`  
- Framework: Next.js with Vite integration  
- Addons: Accessibility, Docs, Controls, Onboarding  

## Stories Created
- `Overview.mdx` – Project documentation  
- `ChatArea.stories.tsx` – Chat interface with message states  
- `Sidebar.stories.tsx` – Collapsible navigation sidebar  
- `Navigation.stories.tsx` – Top navigation bar  
- `Chart.stories.tsx` – Data visualization components  
- `SearchDialog.stories.tsx` – Modal search functionality  

## Features Documented
- Interactive previews  
- Multiple states and variants  
- Responsive design examples  
- Accessibility testing  
- Props controls and documentation  

## Running Storybook
```bash
npm run storybook
```

Storybook opens at:  
[http://localhost:6006](http://localhost:6006)

---


# Deployment
- Deployed on Netlify: Live Demo Link:[https://predusk-ai.netlify.app]
- Repository: GitHub Repository: [(https://github.com/vivek-22bmsit/predusk-ai]

---

# Submission Checklist
- Live URL (Netlify)  
- GitHub Repository (TypeScript + strict mode)  
- README (Research, Design, Development, Mock API, Storybook)  
- Mock API Setup (`/src/app/api/` and `/src/data/`)  
- Storybook (`.storybook/` and `/src/stories/`)  
- Figma Link (UI Mockups)  

---

This README demonstrates the end-to-end workflow: research, design, build, document, and deploy.
