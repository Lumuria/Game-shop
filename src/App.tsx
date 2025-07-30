import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import { CartProvider } from './contexts/CartContext';
import { PCBuilderProvider } from './contexts/PCBuilderContext';
import { ToastProvider } from './contexts/ToastContext';
import { AuthProvider } from './contexts/AuthContext';
import GlobalStyles from './styles/GlobalStyles';
import HomePage from './pages/HomePage';
import StorePage from './pages/StorePage';
import PCBuilderPage from './pages/PCBuilderPage';
import PremiumSoftwarePage from './pages/PremiumSoftwarePage';
import AdminPage from './pages/AdminPage';
import './i18n';

function App() {
  return (
    <BrowserRouter basename={process.env.NODE_ENV === 'production' ? '/Game-shop' : '/'}>
      <LanguageProvider>
        <ThemeProvider>
          <AuthProvider>
            <CartProvider>
              <PCBuilderProvider>
                <ToastProvider>
                  <GlobalStyles />
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/store" element={<StorePage />} />
                    <Route path="/pc-builder" element={<PCBuilderPage />} />
                    <Route path="/premium-software" element={<PremiumSoftwarePage />} />
                    <Route path="/admin" element={<AdminPage />} />
                  </Routes>
                </ToastProvider>
              </PCBuilderProvider>
            </CartProvider>
          </AuthProvider>
        </ThemeProvider>
      </LanguageProvider>
    </BrowserRouter>
  );
}

export default App;
