User Management CRUD App

A responsive User Management CRUD application built with React + Vite and Material UI, following a clean and scalable project structure.

This project demonstrates real-world frontend practices such as API abstraction, environment variables, responsive UI design, and version control.

🚀 Features
Create, Read, Update, Delete (CRUD) users

Responsive layout (mobile & desktop)

Material UI components for consistent design

Confirmation dialog before deleting users

Centralized API layer using Axios

Environment-based configuration using .env

Tech Stack
React (Vite)
Material UI (MUI)
Axios
MockAPi-server (mock backend for local development)
Git & GitHub
Vercel (deployment)

📁 Project Structure


src/
├─ api/
│  └─ userApi.js        # API abstraction layer
├─ components/
│  ├─ UserForm.jsx
│  ├─ UserList.jsx
│  └─ ConfirmDialog.jsx
├─ pages/
│  └─ Users.jsx         # Main page
├─ config/
│  └─ axios.js (optional)
├─ App.jsx
├─ main.jsx
This structure separates pages, reusable components, and API logic to keep the application scalable and maintainable.
⚙️ Environment Variables
Create  .env file in the project root:

Env
VITE_API_BASE_URL=http://localhost:3001
In Vite, environment variables must start with VITE_.
The .env file is ignored by Git for security and flexibility across environments.
🖥 Local Development
1️⃣ Install dependencies

Bash
npm install
2️⃣ Start mock backend (json-server)

Bash
npx json-server --watch db.json --port 3001
3️⃣ Start frontend

Bash
npm run dev
Open the app at:
http://localhost:5173

🌐 Deployment
The frontend is deployed using Vercel.
Build command: npm run build
Output directory: dist
Environment variables are configured in the Vercel dashboard
Backend is mocked locally using MockAPI.io.
🧠 Key Learnings
Clean component-based architecture
API abstraction using Axios instances
Proper usage of environment variables
Responsive UI design with Material UI
Git-based workflow and cloud deployment