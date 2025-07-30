import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../hooks/useLanguage';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const UserMenuContainer = styled.div`
  position: relative;
`;

const UserButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: ${props => props.theme.colors.surface};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 8px;
  padding: 0.5rem 0.75rem;
  cursor: pointer;
  transition: all 0.2s;
  color: ${props => props.theme.colors.text};

  &:hover {
    background: ${props => props.theme.colors.hover};
    border-color: ${props => props.theme.colors.primary};
  }
`;

const Avatar = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${props => props.theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  font-size: 0.875rem;
`;

const Username = styled.span`
  font-weight: 500;
  max-width: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media (max-width: 768px) {
    display: none;
  }
`;

const ChevronIcon = styled.span<{ isOpen: boolean }>`
  transition: transform 0.2s;
  transform: ${props => props.isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
`;

const DropdownMenu = styled.div<{ isOpen: boolean; isRTL: boolean }>`
  position: absolute;
  top: calc(100% + 0.5rem);
  ${props => props.isRTL ? 'left: 0;' : 'right: 0;'}
  background: ${props => props.theme.colors.surface};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  min-width: 200px;
  z-index: 1000;
  opacity: ${props => props.isOpen ? 1 : 0};
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  transform: ${props => props.isOpen ? 'translateY(0)' : 'translateY(-10px)'};
  transition: all 0.2s;
`;

const MenuHeader = styled.div`
  padding: 1rem;
  border-bottom: 1px solid ${props => props.theme.colors.border};
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const UserDetails = styled.div`
  flex: 1;
`;

const UserName = styled.div`
  font-weight: 600;
  color: ${props => props.theme.colors.text};
  font-size: 0.9rem;
`;

const UserEmail = styled.div`
  font-size: 0.8rem;
  color: ${props => props.theme.colors.textSecondary};
  margin-top: 0.25rem;
`;

const UserRole = styled.div<{ isAdmin: boolean }>`
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
  border-radius: 12px;
  background: ${props => props.isAdmin ? '#ff6b35' : '#4CAF50'};
  color: white;
  font-weight: 500;
  text-align: center;
  margin-top: 0.5rem;
`;

const MenuList = styled.ul`
  list-style: none;
  padding: 0.5rem 0;
  margin: 0;
`;

const MenuItem = styled.li`
  padding: 0;
`;

const MenuLink = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  background: none;
  border: none;
  color: ${props => props.theme.colors.text};
  cursor: pointer;
  transition: all 0.2s;
  text-align: left;
  font-size: 0.9rem;

  &:hover {
    background: ${props => props.theme.colors.hover};
  }

  &.danger {
    color: ${props => props.theme.colors.error || '#ff4444'};
  }
`;

const MenuIcon = styled.span`
  font-size: 1.1rem;
  width: 20px;
  text-align: center;
`;

const Divider = styled.div`
  height: 1px;
  background: ${props => props.theme.colors.border};
  margin: 0.5rem 0;
`;

interface UserMenuProps {
  onOpenProfile?: () => void;
}

const UserMenu: React.FC<UserMenuProps> = ({ onOpenProfile }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { user, logout, isAdmin } = useAuth();
  const { isRTL } = useLanguage();
  const { t } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    logout();
    setIsOpen(false);
    navigate('/');
  };

  const handleAdminPanel = () => {
    navigate('/admin');
    setIsOpen(false);
  };

  const handleProfile = () => {
    if (onOpenProfile) {
      onOpenProfile();
    }
    setIsOpen(false);
  };

  if (!user) return null;

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
  };

  return (
    <UserMenuContainer ref={menuRef}>
      <UserButton onClick={() => setIsOpen(!isOpen)}>
        <Avatar>
          {user.avatar ? (
            <img src={user.avatar} alt={user.username} style={{ width: '100%', height: '100%', borderRadius: '50%' }} />
          ) : (
            getInitials(user.username)
          )}
        </Avatar>
        <Username>{user.username}</Username>
        <ChevronIcon isOpen={isOpen}>▼</ChevronIcon>
      </UserButton>

      <DropdownMenu isOpen={isOpen} isRTL={isRTL}>
        <MenuHeader>
          <UserInfo>
            <Avatar>
              {user.avatar ? (
                <img src={user.avatar} alt={user.username} style={{ width: '100%', height: '100%', borderRadius: '50%' }} />
              ) : (
                getInitials(user.username)
              )}
            </Avatar>
            <UserDetails>
              <UserName>{user.username}</UserName>
              <UserEmail>{user.email}</UserEmail>
              <UserRole isAdmin={isAdmin()}>
                {isAdmin() ? (t('admin') || 'مدير') : (t('user') || 'مستخدم')}
              </UserRole>
            </UserDetails>
          </UserInfo>
        </MenuHeader>

        <MenuList>
          <MenuItem>
            <MenuLink onClick={handleProfile}>
              <MenuIcon>👤</MenuIcon>
              {t('profile') || 'الملف الشخصي'}
            </MenuLink>
          </MenuItem>
          
          <MenuItem>
            <MenuLink onClick={() => navigate('/orders')}>
              <MenuIcon>📦</MenuIcon>
              {t('myOrders') || 'طلباتي'}
            </MenuLink>
          </MenuItem>

          <MenuItem>
            <MenuLink onClick={() => navigate('/wishlist')}>
              <MenuIcon>❤️</MenuIcon>
              {t('wishlist') || 'قائمة الأمنيات'}
            </MenuLink>
          </MenuItem>

          <MenuItem>
            <MenuLink onClick={() => navigate('/settings')}>
              <MenuIcon>⚙️</MenuIcon>
              {t('settings') || 'الإعدادات'}
            </MenuLink>
          </MenuItem>

          {isAdmin() && (
            <>
              <Divider />
              <MenuItem>
                <MenuLink onClick={handleAdminPanel}>
                  <MenuIcon>🛠️</MenuIcon>
                  {t('adminPanel') || 'لوحة الإدارة'}
                </MenuLink>
              </MenuItem>
            </>
          )}

          <Divider />
          <MenuItem>
            <MenuLink onClick={handleLogout} className="danger">
              <MenuIcon>🚪</MenuIcon>
              {t('logout') || 'تسجيل الخروج'}
            </MenuLink>
          </MenuItem>
        </MenuList>
      </DropdownMenu>
    </UserMenuContainer>
  );
};

export default UserMenu;

