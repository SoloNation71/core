// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// src/App.jsx
import { Routes, Route, Navigate } from "react-router-dom";
import { DashboardLayout } from "./components/layouts/DashboardLayout";
import { DashboardHome } from "./pages/DashboardHome";
import { Profile } from "./pages/Profile";
import { Treasury } from "./pages/Treasury";
import { Governance } from "./pages/Governance";
import { CitizenStore } from "./pages/CitizenStore";
import { CitizenAcademy } from "./pages/CitizenAcademy";
import { AccountSettings } from "./pages/AccountSettings";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<DashboardHome />} />
        <Route path="profile" element={<Profile />} />
        <Route path="treasury" element={<Treasury />} />
        <Route path="governance" element={<Governance />} />
        <Route path="store" element={<CitizenStore />} />
        <Route path="academy" element={<CitizenAcademy />} />
        <Route path="settings" element={<AccountSettings />} />
      </Route>
    </Routes>
  );
}

export default App;

// src/components/layouts/DashboardLayout.jsx
import { Outlet, NavLink } from "react-router-dom";

export function DashboardLayout() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        <aside className="w-64 bg-white shadow-xl p-4">
          <h2 className="text-xl font-bold mb-6">Solo Nation</h2>
          <nav className="flex flex-col gap-2">
            <NavLink to="." end className={({ isActive }) => isActive ? "font-bold" : "text-gray-600"}>Dashboard</NavLink>
            <NavLink to="profile" className={({ isActive }) => isActive ? "font-bold" : "text-gray-600"}>Profile</NavLink>
            <NavLink to="treasury" className={({ isActive }) => isActive ? "font-bold" : "text-gray-600"}>Treasury</NavLink>
            <NavLink to="governance" className={({ isActive }) => isActive ? "font-bold" : "text-gray-600"}>Governance</NavLink>
            <NavLink to="store" className={({ isActive }) => isActive ? "font-bold" : "text-gray-600"}>Store</NavLink>
            <NavLink to="academy" className={({ isActive }) => isActive ? "font-bold" : "text-gray-600"}>Academy</NavLink>
            <NavLink to="settings" className={({ isActive }) => isActive ? "font-bold" : "text-gray-600"}>Settings</NavLink>
          </nav>
        </aside>

        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

// Example Page: src/pages/DashboardHome.jsx
export function DashboardHome() {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Welcome, Citizen</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl p-4 shadow">SoloCoin Balance</div>
        <div className="bg-white rounded-2xl p-4 shadow">SoloGold Holdings</div>
        <div className="bg-white rounded-2xl p-4 shadow">Pending Votes</div>
        <div className="bg-white rounded-2xl p-4 shadow">System Announcements</div>
      </div>
    </div>
  );
}

// Placeholder Pages (repeat this pattern for others)
// src/pages/Profile.jsx
export function Profile() {
  return <div className="text-xl">Profile Page</div>;
}

// src/pages/Treasury.jsx
export function Treasury() {
  return <div className="text-xl">Treasury Page</div>;
}

// src/pages/Governance.jsx
export function Governance() {
  return <div className="text-xl">Governance Page</div>;
}

// src/pages/CitizenStore.jsx
export function CitizenStore() {
  return <div className="text-xl">Citizen Store Page</div>;
}

// src/pages/CitizenAcademy.jsx
export function CitizenAcademy() {
  return <div className="text-xl">Citizen Academy Page</div>;
}

// src/pages/AccountSettings.jsx
export function AccountSettings() {
  return <div className="text-xl">Settings Page</div>;
}
