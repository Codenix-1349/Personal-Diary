# 📔 Personal Diary
> Modern React Diary App with Modal Architecture, Image Support & Dark Mode

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

<img width="1907" alt="Entry Grid" src="https://github.com/user-attachments/assets/1c2e6f05-77f0-4978-9926-309484362c5e" />

### ➕ Create Entry Modal

<img width="1894" alt="New Entry Modal" src="https://github.com/user-attachments/assets/13c24ec0-efe7-4ce9-b58b-f1fb0335886a" />

### 👁 View / Edit Entry Modal

<img width="1894" alt="View Entry Modal" src="https://github.com/user-attachments/assets/71874b20-b09b-47a2-b395-d5728b8faaea" />

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
