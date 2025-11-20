# 📝 **React Notes App**

A simple and elegant notes application built with **React** and **Tailwind CSS**.
Users can create notes with a title and description, view them instantly, and delete them when needed.
The project is fully component-based, modular, and easy to scale.

---

### 🔗 Keeper App — Live Preview  
[**➡️ Preview Keeper App**](https://keeper-app-nu-five.vercel.app/)



## 🚀 **Features**

* Add notes with a title and description
* Delete notes instantly
* Responsive UI with Tailwind CSS
* Component-based architecture (`Card`, `Footer`, `Header`, `Note`,`NoteCard`)
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
 │     ├── Card.jsx
 │     ├── Footer.jsx
 │     ├── Header.jsx
 │     └── Note.jsx
 │     └── NoteCard.jsx
 ├── App.jsx
 └── main.jsx
```

---

# 🧩 **Component Breakdown**

### **1. Header**

Displays the top section of the application, including title or navigation.

---

### **2. Footer**

Renders the bottom section of the application, typically containing footer text.

---

### **3. Card**

A reusable styled container component used to wrap and present UI content consistently.

---

### **4. Note**

The main parent component that manages all note logic, state, and data flow.

---

### **5. NoteForm**

Handles user input for creating a new note and submits data to the parent.

---


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


