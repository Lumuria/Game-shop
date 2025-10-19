import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import WishlistPage from './pages/WishlistPage';
import ProfilePage from './pages/ProfilePage';

import AdminDashboard from './pages/AdminDashboard';
import AccessoriesPage from './pages/AccessoriesPage';
import ComponentsPage from './pages/ComponentsPage';
import PeripheralsPage from './pages/PeripheralsPage';
import GamesPage from './pages/GamesPage';
import ContactPage from './pages/ContactPage';
import FAQPage from './pages/FAQPage';
import SupportPage from './pages/SupportPage';
import AboutPage from './pages/AboutPage';
import ProtectedRoute from './components/ProtectedRoute';
import Header from './components/Header';
import Footer from './components/Footer';
import './i18n';

function App() {
  return (
    <Router>
      <LanguageProvider>
        <ThemeProvider>
          <AuthProvider>
            <CartProvider>
              <PCBuilderProvider>
                <ToastProvider>
                  <GlobalStyles />
                  <>
        <Header />
        <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/store" element={<StorePage />} />
                    <Route path="/store/:category" element={<StorePage />} />
                    <Route path="/accessories" element={<AccessoriesPage />} />
                    <Route path="/components" element={<ComponentsPage />} />
                    <Route path="/peripherals" element={<PeripheralsPage />} />
                    <Route path="/games" element={<GamesPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/faq" element={<FAQPage />} />
                    <Route path="/support" element={<SupportPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/product/:id" element={<ProductDetailPage />} />
                    <Route path="/pc-builder" element={<PCBuilderPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/cart" element={<CartPage />} />
                    <Route 
                      path="/profile" 
                      element={
                        <ProtectedRoute>
                          <ProfilePage />
                        </ProtectedRoute>
                      } 
                    />
                    <Route 
                      path="/wishlist" 
                      element={
                        <ProtectedRoute>
                          <WishlistPage />
                        </ProtectedRoute>
                      } 
                    />
                    <Route path="/admin/login" element={<LoginPage />} />
                    <Route 
                      path="/admin/dashboard" 
                      element={
                        <ProtectedRoute requireAdmin={true}>
                          <AdminDashboard />
                        </ProtectedRoute>
                      } 
                    />
                  </Routes>
      <Footer />
      </>
                </ToastProvider>
              </PCBuilderProvider>
            </CartProvider>
          </AuthProvider>
        </ThemeProvider>
      </LanguageProvider>
    </Router>
  );
}

export default App;
