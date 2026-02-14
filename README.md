# 📔 Personal Diary
> Modern React diary frontend with modal workflows, image support & dark mode (React · Vite · TailwindCSS)

<p align="center">
  <img alt="React" title="React" height="36" style="margin:0 20px;"
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

**Personal Diary** ist eine moderne, responsiv gestaltete Tagebuch-App als Frontend-Projekt.  
Der Fokus liegt auf **sauberer Component-Struktur**, **State Management für modale Workflows** und einer **polierten UI** (Dark Mode + Grid Layout).

---

## 🖼 UI Preview

<table>
  <tr>
    <td><b>🏠 Entry Overview</b><br/><i>Grid Layout</i></td>
    <td><b>➕ Create Entry</b><br/><i>Modal</i></td>
    <td><b>👁 View / Edit</b><br/><i>Dark Mode</i></td>
  </tr>
  <tr>
    <td><img alt="Entry Overview" width="320" src="https://github.com/user-attachments/assets/0764ffc3-7582-4460-a025-38628779f621" /></td>
    <td><img alt="Create Entry Modal" width="320" src="https://github.com/user-attachments/assets/5080ae1e-5a3a-46ba-8022-587a722836e2" /></td>
    <td><img alt="View / Edit Entry (Dark Mode)" width="320" src="https://github.com/user-attachments/assets/e1d41fae-85af-468e-93cd-dc4517de5d8e" /></td>
  </tr>
</table>

---

## ✨ Features

### Core
- Create diary entries (Title, Date, Content)
- View entry details in overlay modal
- Edit entries via modal workflow
- Delete entries with confirmation modal
- Empty-state UI (“No diary entries yet…”)

### UI/UX
- Responsive grid layout for entries
- Dark Mode toggle
- Clear visual hierarchy (Cards → Modal → Actions)

### Media + Search
- Image support via URL
- Search bar for filtering entries

---

## 🧠 Architecture

```
src/
├── components/
│   ├── Header.jsx
│   ├── EntryList.jsx
│   ├── EntryCard.jsx
│   ├── AddEntryModal.jsx
│   ├── EditEntryModal.jsx
│   ├── ViewEntryModal.jsx
│   └── DeleteConfirmModal.jsx
├── App.jsx
├── main.jsx
└── index.css
```

**Design Principle:**  
- `EntryList` = Rendering layer  
- `EntryCard` = Card UI abstraction  
- Modals = jeweils 1 Responsibility pro Workflow (Add / View / Edit / Delete)  
- State zentral im `App.jsx`, Props runter in die Komponenten

---

## 🛠 Tech Stack

- **React** (Component Architecture, state-driven UI)
- **Vite** (Dev Server / Bundling)
- **TailwindCSS** (Utility-first Styling)
- **JavaScript (ES6+)**

---

## 🚀 Getting Started

```bash
git clone <YOUR_REPO_URL>
cd personalDiary
npm install
npm run dev
```

Runs on:

- `http://localhost:5173`

---

## 🎯 What This Project Demonstrates

- Modal state management patterns
- Controlled forms & validation-friendly structure
- Reusable components (Card/List/Modal separation)
- Conditional rendering + theming (Dark Mode)
- Responsive layout composition with TailwindCSS

---

## 📦 Next Improvements

- Persist entries (LocalStorage)
- Backend (Firebase / Supabase)
- Auth (private diary mode)
- Rich text / Markdown support
- Tests (Vitest)

---

## 👨‍💻 Author

Patrick Neumann  
GitHub: https://github.com/Codenix-1349  
LinkedIn: https://linkedin.com/in/patrick-neumann-532367276
