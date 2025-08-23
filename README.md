# Predusk AI – Frontend Prototype  

Frontend prototype of an **AI interface** developed as part of the **Frontend & UI/UX Designer Assessment**.  
Built with **Next.js, React, TypeScript, Tailwind CSS, Radix UI, and Storybook**, it showcases **research, design, and development skills**.  

Core features include:  
- Model selector  
- Prompt editor with templates  
- Chat UI  
- Parameters panel  
- Search dialog  
- Sidebar navigation  
- Mock API  
- Storybook component library  

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

## 📦 Installation & Run  

### Prerequisites
- **Node.js** 18+ (recommended: 20+)
- **npm** 9+ or **yarn** 1.22+
- **Git** for version control 

### Steps  
```bash
# 1. Clone the repository
git clone https://github.com/vivek-22bmsit/predusk-ai.git
cd predusk-ai

# 2. Install dependencies
npm install

# 3. Run the development server
npm run dev
# Open http://localhost:3000

# 4. Run Storybook (optional)
npm run storybook
# Open http://localhost:6006
```

---

## 🔍 Research  

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

## 💻 Development  

### Core Features Implemented

1. **Model Selector** – Dropdown for GPT-3.5, GPT-4, dummy models.  
2. **Prompt Editor** – Textarea with save/load support (dummy JSON).  
3. **Parameters Panel** – Sliders for temperature, max tokens, top-p.  
4. **Chat Interface** – Styled user & AI bubbles.  
5. **Search Dialog** – Command palette modal (Radix UI).  
6. **Sidebar Navigation** – Collapsible sidebar with model switching.  

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

### Endpoints  
- `GET /api/users` – Fetch users with pagination  
- `POST /api/users` – Create user with validation  
- `GET /api/messages` – Fetch messages (room filter)  
- `POST /api/messages` – Send new message  
- `GET /api/dashboard` – Fetch analytics metrics  

### Example Test  
Run the dev server:  
```bash
npm run dev
```
Visit:  
- http://localhost:3000/api/users  
- http://localhost:3000/api/messages  
- http://localhost:3000/api/dashboard  

---

## 📚 Storybook Component Library  

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

### Features  
- Interactive previews  
- Multiple states/variants  
- Responsive examples  
- Accessibility testing  
- Props documentation  

Run Storybook:  
```bash
npm run storybook
```
Opens at: http://localhost:6006  

---

## 🌍 Deployment  

- **Platform:** Netlify  
- **Live URL:** [https://predusk-ai.netlify.app] 
- **Repository:** [https://github.com/vivek-22bmsit/predusk-ai] 

---

## ✅ Submission Checklist  

- [✅] Live Deployment (Netlify)  
- [✅] GitHub Repository (TypeScript strict mode)  
- [✅] README (Research, Design, Development, API, Storybook)  
- [✅] Mock API Setup (`/src/app/api` + `/src/data/`)  
- [✅] Storybook (`.storybook/` + `/src/stories/`)  
- [✅] Figma Mockup Link  

---

✨ This README documents the full workflow: **Research → Design → Development → Deployment → Submission**.  
