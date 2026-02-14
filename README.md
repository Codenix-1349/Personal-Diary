# 📔 Personal Diary
> Modern React Diary App with Modal Architecture, Image Support & Dark Mode (React + Vite + TailwindCSS)


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

<table>
  <tr>
    <td><b>🏠 Entry Overview</b><br/><sub>Grid Layout</sub></td>
    <td><b>➕ Create Entry</b><br/><sub>Modal</sub></td>
    <td><b>👁 View / Edit</b><br/><sub>Dark Mode</sub></td>
  </tr>
  <tr>
    <td>
      <img alt="Entry Overview (Grid Layout)"
           width="320"
           src="https://github.com/user-attachments/assets/cf6a3711-5bac-4738-8087-16e41592bf10" />

    </td>
    <td>
      <img alt="Create Entry Modal"
           width="320"
           src="https://github.com/user-attachments/assets/5080ae1e-5a3a-46ba-8022-587a722836e2" />
    </td>
    <td>
      <img alt="View / Edit Entry Modal in Dark Mode"
           width="320"
           src="https://github.com/user-attachments/assets/e1d41fae-85af-468e-93cd-dc4517de5d8e" />
    </td>
  </tr>
</table>



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
