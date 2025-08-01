import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

import AdminPage from "./pages/AdminPage";
import HomePage from "./pages/HomePage";
import PCBuilderPage from "./pages/PCBuilderPage";
import PremiumSoftwarePage from "./pages/PremiumSoftwarePage";
import ProfilePage from "./pages/ProfilePage";
import StorePage from "./pages/StorePage";

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const browserLang = navigator.language.startsWith("ar") ? "ar" : "en";
    i18n.changeLanguage(browserLang);
  }, []);

  return (
    <Router basename="/Game-shop">
      <div style={{ padding: "10px", textAlign: "center" }}>
        <button
          onClick={() => i18n.changeLanguage("en")}
          style={{ margin: "0 10px", padding: "5px 15px" }}
        >
          English
        </button>
        <button
          onClick={() => i18n.changeLanguage("ar")}
          style={{ margin: "0 10px", padding: "5px 15px" }}
        >
          العربية
        </button>
      </div>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/pc-builder" element={<PCBuilderPage />} />
        <Route path="/premium-software" element={<PremiumSoftwarePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/store" element={<StorePage />} />
      </Routes>
    </Router>
  );
}

export default App;
