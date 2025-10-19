import React, { useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';
import { useLanguage } from '../hooks/useLanguage';
import { useCart } from '../hooks/useCart';
import { useAuth } from '../hooks/useAuth';
import SearchModal from './SearchModal';
import { useProducts } from '../hooks/useProducts';

import CartModal from './CartModal';

const HeaderContainer = styled.header`
  background-color: var(--surface-color);
  box-shadow: 0 2px 4px var(--shadow-color);
  position: sticky;
  top: 0;
  z-index: 100;
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid var(--border-color);
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--primary-color);
`;

const SearchBar = styled.div`
  flex: 1;
  max-width: 500px;
  margin: 0 1rem;
  position: relative;

  @media (max-width: 768px) {
    display: none;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 0.5rem 1rem;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  background-color: var(--background-color);
  color: var(--text-primary);

  &:focus {
    outline: none;
    border-color: var(--primary-color);
  }
`;

const UserActions = styled.div`
  display: flex;
  align-items: center;
`;

const ActionButton = styled.button`
  background: none;
  border: none;
  color: var(--text-primary);
  margin-left: 1rem;
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  &:hover {
    color: var(--primary-color);
  }
`;

const CartBadge = styled.span`
  background-color: var(--secondary-color);
  color: white;
  border-radius: 50%;
  padding: 0.1rem 0.4rem;
  font-size: 0.7rem;
  position: absolute;
  top: -5px;
  right: -5px;
`;

const NavBar = styled.nav`
  padding: 0.5rem 1rem;
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  overflow-x: auto;

  @media (max-width: 768px) {
    justify-content: space-between;
  }
`;

const NavItem = styled.li`
  padding: 0 0.5rem; /* Add horizontal padding for spacing */
  margin-right: 1.5rem;
  white-space: nowrap;

  &:last-child {
    margin-right: 0;
  }
`;

const NavLink = styled(Link)`
  color: var(--text-primary);
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 0;
  position: relative;

  &:hover {
    color: var(--primary-color);
  }

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--primary-color);
    transition: width 0.3s ease;
  }

  &:hover:after {
    width: 100%;
  }
`;

const MobileSearchButton = styled(ActionButton)`
  @media (min-width: 769px) {
    display: none;
  }
`;

const LanguageToggle = styled(ActionButton)`
  position: relative;
`;

const ThemeToggle = styled(ActionButton)`
  position: relative;
`;



const Header: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { products } = useProducts(); // افتراض أن هذا الهوك يوفر قائمة المنتجات

  const { t } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const { language, changeLanguage } = useLanguage();
  const { totalItems } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const navigate = useNavigate();
  const { isAuthenticated, isAdmin } = useAuth(); // ✅ جلب حالة المستخدم

  const handleLanguageToggle = () => {
    changeLanguage(language === 'en' ? 'ar' : 'en');
  };

    const handleSearchClick = () => {
    setIsSearchOpen(true);
  };

  const handleAccountClick = () => {
    if (isAuthenticated && isAdmin) {
      navigate('/admin/dashboard');
    } else if (isAuthenticated) {
      navigate('/profile');
    } else {
      navigate('/login');
    }
  };

  const handleCartClick = () => {
    navigate('/cart');
  };

  return (
    <HeaderContainer>
      <TopBar>
        <Logo>{t('Name')}</Logo>
        <SearchBar>
          <SearchInput 
            placeholder={t('Search')} 
            onClick={handleSearchClick}
            readOnly
          />
        </SearchBar>
        <UserActions>
          <MobileSearchButton aria-label={t('Search')} onClick={handleSearchClick}>
            <span>🔍</span>
          </MobileSearchButton>
          <LanguageToggle onClick={handleLanguageToggle}>
            <span>{language === 'en' ? 'AR' : 'EN'}</span>
            <small>{t('Language')}</small>
          </LanguageToggle>
          <ThemeToggle onClick={toggleTheme}>
            <span>{theme === 'light' ? '🌙' : '☀️'}</span>
            <small>{t('Theme')}</small>
          </ThemeToggle>

          {/* ✅ زر الحساب */}
          <ActionButton aria-label={t('Account')} onClick={handleAccountClick}>
            <span>👤</span>
            <small>{t('Account')}</small>
          </ActionButton>

          <ActionButton aria-label={t('Cart')} style={{ position: 'relative' }} onClick={handleCartClick}>
            <span>🛒</span>
            <CartBadge>{totalItems}</CartBadge>
            <small>{t('Cart')}</small>
          </ActionButton>
        </UserActions>
      </TopBar>
      <NavBar>
        <NavList>
          <NavItem>
            <NavLink to="/">{t('Home')}</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/store">{t('Store')}</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/pc-builder">{t('PCBuilder')}</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/games">{t('Categories.Games')}</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/accessories">{t('Categories.Accessories')}</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/components">{t('Categories.Components')}</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/peripherals">{t('Categories.Peripherals')}</NavLink>
          </NavItem>
        </NavList>
      </NavBar>
      
      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} products={products} />
    </HeaderContainer>
  );
};

export default Header;
