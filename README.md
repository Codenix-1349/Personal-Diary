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

**Personal Diary** is a modern, responsive diary frontend project.  
The focus is on **clean component structure**, **modal-based state management**, and a **polished UI** (Dark Mode + Grid Layout).

---

## 🖼 UI Preview

<table>
  <tr>
    <td><b>🏠 Entry Overview</b><br/><i>Grid Layout</i></td>
    <td><b>➕ Create Entry</b><br/><i>Modal</i></td>
    <td><b>👁 View / Edit</b><br/><i>Dark Mode</i></td>
  </tr>
  <tr>
    <td>
      <img alt="Entry Overview"
           width="320"
           src="https://github.com/user-attachments/assets/aa551ad4-3177-48f1-9a22-4a92a5dd684e" />
    </td>
    <td>
      <img alt="Create Entry Modal"
           width="320"
           src="https://github.com/user-attachments/assets/5080ae1e-5a3a-46ba-8022-587a722836e2" />
    </td>
    <td>
      <img alt="View / Edit Entry (Dark Mode)"
           width="320"
           src="https://github.com/user-attachments/assets/e1d41fae-85af-468e-93cd-dc4517de5d8e" />
    </td>
  </tr>
</table>

---

## ✨ Features

### Core
- Create diary entries (title, date, content)
- View entry details in overlay modal
- Edit entries via modal workflow
- Delete entries with confirmation modal
- Empty-state UI (“No diary entries yet…”)

### UI/UX
- Responsive grid layout for entries
- Dark mode toggle
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
- `EntryList` = rendering layer
- `EntryCard` = UI abstraction
- Modals = single responsibility per workflow (Add / View / Edit / Delete)
- State centralized in `App.jsx`, passed down via props

---

## 🛠 Tech Stack

- **React** (component architecture, state-driven UI)
- **Vite** (development server / bundling)
- **TailwindCSS** (utility-first styling)
- **JavaScript (ES6+)**

---

## 🚀 Getting Started

```bash
git clone https://github.com/Codenix-1349/Personal-Diary.git
cd Personal-Diary
npm install
npm run dev
```

Runs on:

```
http://localhost:5173
```

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
- Backend integration (Firebase / Supabase)
- Authentication (private diary mode)
- Rich text / Markdown support
- Testing (Vitest)

---

## 👨‍💻 Author

Patrick Neumann  
GitHub: https://github.com/Codenix-1349  
LinkedIn: https://linkedin.com/in/patrick-neumann-532367276  
