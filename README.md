# AI Interface Prototype – Frontend Assessment

This project is a frontend-only prototype of an AI interface, designed as part of the Frontend & UI/UX Designer Assessment. It demonstrates research, design, and development skills using Next.js, React, TypeScript, Tailwind CSS, and Storybook.

---

## Installation & Run

### Prerequisites
- Node.js (v18 or higher recommended)  
- npm or yarn package manager  

### Steps
```bash
# 1. Clone the repository
git clone <your-repo-url>
cd <your-project-folder>

# 2. Install dependencies
npm install

# 3. Run the development server
npm run dev

# 4. Open the app in your browser
http://localhost:3000

# 5. Run Storybook (optional)
npm run storybook
http://localhost:6006
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
- Deployed on Vercel: Live Demo Link (replace with your deployment URL)  
- Repository: GitHub Repository (replace with your repo URL)  

---

# Submission Checklist
- Live URL (Vercel)  
- GitHub Repository (TypeScript + strict mode)  
- README (Research, Design, Development, Mock API, Storybook)  
- Mock API Setup (`/src/app/api/` and `/src/data/`)  
- Storybook (`.storybook/` and `/src/stories/`)  
- Figma Link (UI Mockups)  

---

This README demonstrates the end-to-end workflow: research, design, build, document, and deploy.
