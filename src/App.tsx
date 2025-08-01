import React from "react";
// استبدل BrowserRouter بـ HashRouter اذا حبيت
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import { AuthProvider } from "./contexts/AuthContext";
import { ToastProvider } from "./contexts/ToastContext";

import AdminPage from "./pages/AdminPage";
import HomePage from "./pages/HomePage";
import PCBuilderPage from "./pages/PCBuilderPage";
import PremiumSoftwarePage from "./pages/PremiumSoftwarePage";
import ProfilePage from "./pages/ProfilePage";
import StorePage from "./pages/StorePage";

const basename = process.env.NODE_ENV === "production" ? "/Game-shop" : "/";

function App() {
  return (
    <AuthProvider>
      <ToastProvider>
        <Router basename={basename}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/store" element={<StorePage />} />
            <Route path="/pc-builder" element={<PCBuilderPage />} />
            <Route path="/premium-software" element={<PremiumSoftwarePage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/admin" element={<AdminPage />} />
          </Routes>
        </Router>
      </ToastProvider>
    </AuthProvider>
  );
}

export default App;
