import React, { useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../hooks/useTheme';
import { useLanguage } from '../hooks/useLanguage';
import { useCart } from '../hooks/useCart';
import { useAuth } from '../contexts/AuthContext';
import CartModal from './CartModal';
import LoginModal from './LoginModal';
import UserMenu from './UserMenu';
import NotificationCenter from './NotificationCenter';

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
  margin-right: 1.5rem;
  white-space: nowrap;

  &:last-child {
    margin-right: 0;
  }
`;

const NavLink = styled.a`
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

interface HeaderProps {
  onSearchClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onSearchClick }) => {
  const { t } = useTranslation();
  const { theme, toggleTheme } = useTheme();
  const { language, changeLanguage, isRTL } = useLanguage();
  const { totalItems } = useCart();
  const { user } = useAuth();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const handleLanguageToggle = () => {
    changeLanguage(language === 'en' ? 'ar' : 'en');
  };

  const handleCartClick = () => {
    setIsCartOpen(true);
  };

  const handleAccountClick = () => {
    if (user) {
      // المستخدم مسجل دخول - لا نحتاج لفعل شيء هنا لأن UserMenu سيظهر
    } else {
      setIsLoginOpen(true);
    }
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
          />
        </SearchBar>
        <UserActions>
          <MobileSearchButton aria-label={t('nav.search')} onClick={onSearchClick}>
            <span>🔍</span>
          </MobileSearchButton>
          <LanguageToggle onClick={handleLanguageToggle}>
            <span>{language === 'en' ? 'AR' : 'EN'}</span>
            <small>{t('nav.language')}</small>
          </LanguageToggle>
          <ThemeToggle onClick={toggleTheme}>
            <span>{theme === 'light' ? '🌙' : '☀️'}</span>
            <small>{t('nav.theme')}</small>
          </ThemeToggle>
          
          <NotificationCenter />
          
          {user ? (
            <UserMenu />
          ) : (
            <ActionButton aria-label={t('nav.account')} onClick={handleAccountClick}>
              <span>👤</span>
              <small>{t('nav.account')}</small>
            </ActionButton>
          )}
          
          <ActionButton aria-label={t('nav.cart')} style={{ position: 'relative' }} onClick={handleCartClick}>
            <span>🛒</span>
            <CartBadge>{totalItems}</CartBadge>
            <small>{t('nav.cart')}</small>
          </ActionButton>
        </UserActions>
      </TopBar>
      <NavBar>
        <NavList>
          <NavItem>
            <NavLink href="/">{t('nav.home')}</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/store">{t('nav.store')}</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/pc-builder">{t('nav.pcBuilder')}</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/premium-software">{t('nav.premiumSoftware') || 'البرامج المدفوعة'}</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/store/games">{t('categories.games')}</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/store/accessories">{t('categories.accessories')}</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/store/components">{t('categories.components')}</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/store/peripherals">{t('categories.peripherals')}</NavLink>
          </NavItem>
        </NavList>
      </NavBar>
      
      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </HeaderContainer>
  );
};

export default Header;
