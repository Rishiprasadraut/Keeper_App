# 📝 **React Notes App**

A simple and elegant notes application built with **React** and **Tailwind CSS**.
Users can create notes with a title and description, view them instantly, and delete them when needed.
The project is fully component-based, modular, and easy to scale.

---

## 🚀 **Features**

* Add notes with a title and description
* Delete notes instantly
* Responsive UI with Tailwind CSS
* Component-based architecture (`NoteForm`, `NoteCard`, `NoteList`, `Note`)
* Clean state management using React Hooks
* Auto-scroll support for long notes list

---

## 📂 **Tech Stack**

| Technology            | Purpose                           |
| --------------------- | --------------------------------- |
| **React**             | UI rendering and state management |
| **Tailwind CSS**      | Styling + responsive layout       |
| **JavaScript (ES6+)** | Logic and interactivity           |

---

## 📁 **Project Structure**

```
src/
 ├── components/
 │     ├── Note.jsx
 │     ├── NoteForm.jsx
 │     ├── NoteList.jsx
 │     └── NoteCard.jsx
 ├── App.jsx
 └── main.jsx
```

---

## 🧩 **Component Breakdown**

### **1. NoteForm**

Handles user input and form submission.

### **2. NoteList**

Loops through all notes and displays them.

### **3. NoteCard**

Shows a single note with delete functionality.

### **4. Note (Parent)**

Manages state, handlers, and passes props downward.

---

## ⚙️ **Installation & Setup**

Clone the project and install dependencies:

```sh
npm install
```

Run the development server:

```sh
npm run dev
```

Build for production:

```sh
npm run build
```

---

## 🖼️ **How It Works**

### ✅ Adding a note

* User types Title and Description
* Clicks “+” button
* Note appears instantly below in the list

### ❌ Deleting a note

* Click the "Delete" button on any note
* Note is removed from the list

---

## 🌱 **Future Enhancements**

* Edit note feature
* Search bar
* Color-tagging each note
* LocalStorage persistence
* Framer Motion animations
* Drag-and-drop ordering

---

## ❤️ **Contributing**

Feel free to fork the repo and improve the app.
All contributions are welcome!

---

## 📄 **License**

This project is open-source and available under the MIT License.

