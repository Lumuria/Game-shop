import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../hooks/useLanguage';
import { useTranslation } from 'react-i18next';

const NotificationContainer = styled.div`
  position: relative;
`;

const NotificationButton = styled.button`
  background: none;
  border: none;
  color: ${props => props.theme.colors.text};
  font-size: 1.2rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  position: relative;
  transition: all 0.2s;

  &:hover {
    background: ${props => props.theme.colors.hover};
  }
`;

const NotificationBadge = styled.span<{ count: number }>`
  position: absolute;
  top: -2px;
  right: -2px;
  background: #ff4444;
  color: white;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  font-size: 0.7rem;
  font-weight: 600;
  display: ${props => props.count > 0 ? 'flex' : 'none'};
  align-items: center;
  justify-content: center;
`;

const NotificationDropdown = styled.div<{ isOpen: boolean; isRTL: boolean }>`
  position: absolute;
  top: calc(100% + 0.5rem);
  ${props => props.isRTL ? 'left: 0;' : 'right: 0;'}
  background: ${props => props.theme.colors.surface};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  width: 350px;
  max-height: 400px;
  z-index: 1000;
  opacity: ${props => props.isOpen ? 1 : 0};
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  transform: ${props => props.isOpen ? 'translateY(0)' : 'translateY(-10px)'};
  transition: all 0.2s;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 300px;
    ${props => props.isRTL ? 'left: -250px;' : 'right: -250px;'}
  }
`;

const NotificationHeader = styled.div`
  padding: 1rem;
  border-bottom: 1px solid ${props => props.theme.colors.border};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NotificationTitle = styled.h3`
  color: ${props => props.theme.colors.text};
  font-size: 1rem;
  font-weight: 600;
  margin: 0;
`;

const ClearAllButton = styled.button`
  background: none;
  border: none;
  color: ${props => props.theme.colors.primary};
  font-size: 0.8rem;
  cursor: pointer;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  transition: all 0.2s;

  &:hover {
    background: ${props => props.theme.colors.hover};
  }
`;

const NotificationList = styled.div`
  max-height: 300px;
  overflow-y: auto;
`;

const NotificationItem = styled.div<{ isRead: boolean }>`
  padding: 1rem;
  border-bottom: 1px solid ${props => props.theme.colors.border};
  cursor: pointer;
  transition: all 0.2s;
  background: ${props => props.isRead ? 'transparent' : `${props.theme.colors.primary}10`};

  &:hover {
    background: ${props => props.theme.colors.hover};
  }

  &:last-child {
    border-bottom: none;
  }
`;

const NotificationIcon = styled.div<{ type: string }>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  background: ${props => {
    switch (props.type) {
      case 'order': return '#4CAF50';
      case 'promotion': return '#ff9800';
      case 'system': return '#2196F3';
      case 'warning': return '#f44336';
      default: return '#666';
    }
  }};
  color: white;
`;

const NotificationContent = styled.div`
  flex: 1;
`;

const NotificationMessage = styled.div`
  color: ${props => props.theme.colors.text};
  font-size: 0.9rem;
  line-height: 1.4;
  margin-bottom: 0.25rem;
`;

const NotificationTime = styled.div`
  color: ${props => props.theme.colors.textSecondary};
  font-size: 0.8rem;
`;

const NotificationItemContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: flex-start;
`;

const EmptyState = styled.div`
  padding: 2rem;
  text-align: center;
  color: ${props => props.theme.colors.textSecondary};
  font-size: 0.9rem;
`;

interface Notification {
  id: string;
  type: 'order' | 'promotion' | 'system' | 'warning';
  message: string;
  time: string;
  isRead: boolean;
}

const NotificationCenter: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const { user } = useAuth();
  const { isRTL } = useLanguage();
  const { t } = useTranslation();

  // بيانات تجريبية للإشعارات
  const mockNotifications: Notification[] = [
    {
      id: '1',
      type: 'order',
      message: 'تم تأكيد طلبك #001 وسيتم شحنه قريباً',
      time: '5 دقائق',
      isRead: false
    },
    {
      id: '2',
      type: 'promotion',
      message: 'خصم 25% على جميع برامج Adobe - عرض محدود!',
      time: '1 ساعة',
      isRead: false
    },
    {
      id: '3',
      type: 'system',
      message: 'تم تحديث نظام الأمان - يرجى مراجعة إعداداتك',
      time: '3 ساعات',
      isRead: true
    },
    {
      id: '4',
      type: 'order',
      message: 'تم تسليم طلبك #002 بنجاح',
      time: '1 يوم',
      isRead: true
    },
    {
      id: '5',
      type: 'warning',
      message: 'انتبه: محاولة دخول مشبوهة إلى حسابك',
      time: '2 أيام',
      isRead: false
    }
  ];

  useEffect(() => {
    if (user) {
      setNotifications(mockNotifications);
    }
  }, [user]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const unreadCount = notifications.filter(n => !n.isRead).length;

  const handleNotificationClick = (id: string) => {
    setNotifications(prev =>
      prev.map(notification =>
        notification.id === id
          ? { ...notification, isRead: true }
          : notification
      )
    );
  };

  const handleClearAll = () => {
    setNotifications(prev =>
      prev.map(notification => ({ ...notification, isRead: true }))
    );
  };

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'order': return '📦';
      case 'promotion': return '🎉';
      case 'system': return '⚙️';
      case 'warning': return '⚠️';
      default: return '📢';
    }
  };

  const formatTime = (time: string) => {
    return `${t('since') || 'منذ'} ${time}`;
  };

  if (!user) return null;

  return (
    <NotificationContainer ref={dropdownRef}>
      <NotificationButton onClick={() => setIsOpen(!isOpen)}>
        🔔
        <NotificationBadge count={unreadCount}>
          {unreadCount > 9 ? '9+' : unreadCount}
        </NotificationBadge>
      </NotificationButton>

      <NotificationDropdown isOpen={isOpen} isRTL={isRTL}>
        <NotificationHeader>
          <NotificationTitle>
            {t('notifications') || 'الإشعارات'}
          </NotificationTitle>
          {unreadCount > 0 && (
            <ClearAllButton onClick={handleClearAll}>
              {t('markAllRead') || 'تحديد الكل كمقروء'}
            </ClearAllButton>
          )}
        </NotificationHeader>

        <NotificationList>
          {notifications.length === 0 ? (
            <EmptyState>
              {t('noNotifications') || 'لا توجد إشعارات'}
            </EmptyState>
          ) : (
            notifications.map(notification => (
              <NotificationItem
                key={notification.id}
                isRead={notification.isRead}
                onClick={() => handleNotificationClick(notification.id)}
              >
                <NotificationItemContainer>
                  <NotificationIcon type={notification.type}>
                    {getNotificationIcon(notification.type)}
                  </NotificationIcon>
                  <NotificationContent>
                    <NotificationMessage>
                      {notification.message}
                    </NotificationMessage>
                    <NotificationTime>
                      {formatTime(notification.time)}
                    </NotificationTime>
                  </NotificationContent>
                </NotificationItemContainer>
              </NotificationItem>
            ))
          )}
        </NotificationList>
      </NotificationDropdown>
    </NotificationContainer>
  );
};

export default NotificationCenter;

