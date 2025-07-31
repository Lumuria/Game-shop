import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminPage from "./pages/AdminPage";
import HomePage from "./pages/HomePage";
import PCBuilderPage from "./pages/PCBuilderPage";
import PremiumSoftwarePage from "./pages/PremiumSoftwarePage";
import ProfilePage from "./pages/ProfilePage";
import StorePage from "./pages/StorePage";

function App() {
  return (
    <Router basename="/">
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
