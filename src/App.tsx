import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import { CartProvider } from './contexts/CartContext';
import { PCBuilderProvider } from './contexts/PCBuilderContext';
import { ToastProvider } from './contexts/ToastContext';
import GlobalStyles from './styles/GlobalStyles';
import HomePage from './pages/HomePage';
import StorePage from './pages/StorePage';
import PCBuilderPage from './pages/PCBuilderPage';
import Header from './components/Header';
import Footer from './components/Footer';
import './i18n';

function App() {
  return (
    <Router>
      <LanguageProvider>
        <ThemeProvider>
          <CartProvider>
            <PCBuilderProvider>
              <ToastProvider>
                <GlobalStyles />
                <Header />
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/store" element={<StorePage />} />
                  <Route path="/pc-builder" element={<PCBuilderPage />} />
                </Routes>
                <Footer />
              </ToastProvider>
            </PCBuilderProvider>
          </CartProvider>
        </ThemeProvider>
      </LanguageProvider>
    </Router>
  );
}

export default App;
