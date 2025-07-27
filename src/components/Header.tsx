import React, { useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';  // مهم جداً!
import { useTheme } from '../hooks/useTheme';
import { useLanguage } from '../hooks/useLanguage';
import { useCart } from '../hooks/useCart';
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
  position: relative;
`;

const CartBadge = styled.span`
  background-color: var(--secondary-color);
  color: white;
  border-radius: 50%;
  padding: 0.1rem 0.4rem;
  font-size: 0.7rem;
  position: absolute;
  top: -5px;
  right: -10px;
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
  margin-right: 1.5rem;
  white-space: nowrap;

  &:last-child {
    margin-right: 0;
  }
`;

const NavLink = styled(Link)`  /* استخدم Link من react-router-dom */
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

const LanguageToggle = styled(ActionButton)``;

const ThemeToggle = styled(ActionButton)``;

interface HeaderProps {
  onSearchClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onSearchClick }) => {
  const { t } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const { language, changeLanguage } = useLanguage();
  const { totalItems } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleLanguageToggle = () => {
    changeLanguage(language === 'en' ? 'ar' : 'en');
  };

  const handleCartClick = () => {
    setIsCartOpen(true);
  };

  const handleCartClose = () => {
    setIsCartOpen(false);
  };

  return (
    <HeaderContainer>
      <TopBar>
        <Logo>{t('app.name')}</Logo>

        <SearchBar>
          <SearchInput
            placeholder={t('nav.search')}
            onClick={onSearchClick}
            readOnly
            aria-label={t('nav.search')}
          />
        </SearchBar>

        <UserActions>
          <MobileSearchButton aria-label={t('nav.search')} onClick={onSearchClick}>
            🔍
          </MobileSearchButton>

          <LanguageToggle
            aria-label={t('nav.language')}
            onClick={handleLanguageToggle}
            title={t('nav.language')}
          >
            {language === 'en' ? 'AR' : 'EN'}
            <small>{t('nav.language')}</small>
          </LanguageToggle>

          <ThemeToggle
            aria-label={t('nav.theme')}
            onClick={toggleTheme}
            title={t('nav.theme')}
          >
            {theme === 'light' ? '🌙' : '☀️'}
            <small>{t('nav.theme')}</small>
          </ThemeToggle>

          <ActionButton aria-label={t('nav.account')} title={t('nav.account')}>
            👤
            <small>{t('nav.account')}</small>
          </ActionButton>

          <ActionButton
            aria-label={t('nav.cart')}
            onClick={handleCartClick}
            title={t('nav.cart')}
          >
            🛒
            {totalItems > 0 && <CartBadge>{totalItems}</CartBadge>}
            <small>{t('nav.cart')}</small>
          </ActionButton>
        </UserActions>
      </TopBar>

      <NavBar>
        <NavList>
          <NavItem>
            <NavLink to="/">{t('nav.home')}</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/store">{t('nav.store')}</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/pc-builder">{t('nav.pcBuilder')}</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/store/games">{t('categories.games')}</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/store/accessories">{t('categories.accessories')}</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/store/components">{t('categories.components')}</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/store/peripherals">{t('categories.peripherals')}</NavLink>
          </NavItem>
        </NavList>
      </NavBar>

      <CartModal isOpen={isCartOpen} onClose={handleCartClose} />
    </HeaderContainer>
  );
};

export default Header;
