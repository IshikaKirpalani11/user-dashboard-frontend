# 🧑‍💻 User Dashboard – Frontend Developer Test Challenge

This is a **User Dashboard** built using **ReactJS**, created as part of a Frontend Developer Test. It implements dynamic filtering, role-based UI, and global state management using Redux Toolkit and Context API.

---

## 🚀 Features

### ✅ Core Functionality
- Displays a list of users with:
  - **Name**
  - **Email**
  - **Role** (Admin, Member, Owner)
  - **Status** (Active / Inactive)
- **Search by name** (with debounce logic)
- **Toggle user status** (Active ↔ Inactive)
- **Filter by role** using a dropdown

### ✅ Role-Based UI (Simulated Auth)
- Uses `AuthContext` to simulate login with:
  - **Super Admin**
  - **Tenant Admin**
- Based on role:
  - Super Admin sees **Audit Logs**
  - Tenant Admin does not see it

### ✅ State Management
- Uses **Redux Toolkit** for global state:
  - Manages user list, search filter, and role filter
  - Includes actions: `toggleStatus`, `setSearchText`, `setFilterRole`

---

## 🧱 Tech Stack

- ⚛️ ReactJS (Functional Components + Hooks)
- 🔄 Redux Toolkit (Global State)
- 🧠 React Context API (Auth Simulation)
- 📁 React Router (Page Routing)
- 🎨 CSS Modules (Component-scoped Styling)
- ⏱️ Debounce Function (Optimized search filtering)

---

## 🗂️ Folder Structure

src/
│
├── app/ # Redux store config
├── assets/ # Static assets (images, etc.)
├── components/ # UI components (UserCard, SearchBar, etc.)
├── context/ # AuthContext for login simulation
├── features/ # Redux slices (e.g., userSlice)
├── pages/ # Route pages like Dashboard
├── styles/ # CSS Modules
├── utils/ # Debounce function, mock data
└── index.js


---

## 📦 Installation

```bash
git clone https://github.com/IshikaKirpalani11/user-dashboard-frontend.git
cd user-dashboard-frontend
npm install
npm start
