# 📔 Personal Diary
> Modern React Diary App with Modal Architecture, Image Support & Dark Mode

<p align="center">
  <img alt="React" title="React 18" height="36" style="margin:0 20px;" 
       src="https://raw.githubusercontent.com/github/explore/main/topics/react/react.png" />
  <img alt="Vite" title="Vite" height="36" style="margin:0 20px;" 
       src="https://raw.githubusercontent.com/github/explore/main/topics/vite/vite.png" />
  <img alt="Tailwind CSS" title="Tailwind CSS" height="36" style="margin:0 20px;" 
       src="https://raw.githubusercontent.com/github/explore/main/topics/tailwind/tailwind.png" />
  <img alt="JavaScript" title="JavaScript" height="36" style="margin:0 20px;" 
       src="https://raw.githubusercontent.com/github/explore/main/topics/javascript/javascript.png" />
</p>


---

## 📖 Overview

**Personal Diary** ist eine moderne, responsiv gestaltete Tagebuch-Applikation, entwickelt mit React und Vite.

Das Projekt demonstriert:

- Strukturierte Component-Architektur
- State Management für modale Workflows
- Controlled Forms
- Conditional Rendering
- Grid Layout Design
- Dark Mode Theming
- CRUD-Operationen mit sauberer UI-Logik

Der Fokus liegt auf UI/UX, modularer Struktur und klarer Trennung von Verantwortlichkeiten.

---

## 🖼 UI Preview

### 🏠 Entry Overview (Grid Layout)

<img width="1909" height="939" alt="image" src="https://github.com/user-attachments/assets/0764ffc3-7582-4460-a025-38628779f621" />
 

### ➕ Create Entry Modal

<img width="1914" height="936" alt="image" src="https://github.com/user-attachments/assets/5080ae1e-5a3a-46ba-8022-587a722836e2" />

### 👁 View / Edit Entry Modal in Dark Mode

<img width="1914" height="932" alt="image" src="https://github.com/user-attachments/assets/e1d41fae-85af-468e-93cd-dc4517de5d8e" />


---

## ✨ Features

### 📌 Core Functionality
- Create diary entries
- Edit existing entries
- Delete entries (mit Confirm Modal)
- View Entry Details im Overlay
- Grid-basierte Entry-Darstellung
- Empty-State Handling

### 🖼 Image Support
- Image via URL
- Optional File Upload (UI vorbereitet)

### 🌗 Dark Mode
- Dynamisches Theming
- Conditional Styling via Props

### 🔍 Search
- Live Filtering der Einträge

---

## 🧠 Architecture

```
src/
│
├── components/
│   ├── Header.jsx
│   ├── EntryCard.jsx
│   ├── EntryList.jsx
│   ├── AddEntryModal.jsx
│   ├── EditEntryModal.jsx
│   ├── ViewEntryModal.jsx
│   └── DeleteConfirmModal.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

### Component Strategy

- `EntryList` → Rendering Layer
- `EntryCard` → UI Abstraction
- Modals → Separate Responsibility pro Workflow
- State Management zentral im `App.jsx`

---

## 🛠 Tech Stack

| Layer | Technologie |
|-------|-------------|
| Frontend | React 18 |
| Tooling | Vite |
| Styling | TailwindCSS |
| State Handling | useState |
| Language | JavaScript (ES6+) |

---

## 🚀 Getting Started

### 1. Clone Repository

```bash
git clone <YOUR_REPO_URL>
cd personalDiary
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

App läuft unter:

```
http://localhost:5173
```

---

## 🎯 What This Project Demonstrates

- Modal State Management Patterns
- Controlled Form Handling
- Clean Component Separation
- Conditional Rendering
- UI Composition mit TailwindCSS
- UX-orientierte Layout Struktur
- Reusable Component Design

---

## 📦 Possible Future Improvements

- LocalStorage Persistence
- Backend Integration (Firebase / Supabase)
- Authentication Layer
- Rich Text Editor
- Markdown Support
- Animations (Framer Motion)
- Unit Testing (Vitest)

---

## 👨‍💻 Author

Patrick Neumann  
Junior Full-Stack Developer  

GitHub: https://github.com/Codenix-1349  
LinkedIn: https://linkedin.com/in/patrick-neumann-532367276
