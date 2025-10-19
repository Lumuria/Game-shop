import React, { useState } from 'react';
import styled from 'styled-components';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import ProductManagement from '../components/admin/ProductManagement';
import OrderManagement from '../components/admin/OrderManagement';
import UserManagement from '../components/admin/UserManagement';
import SystemSettings from '../components/admin/SystemSettings';

const DashboardContainer = styled.div`
  min-height: 100vh;
  background: #f5f7fa;
  display: flex;
`;

const Sidebar = styled.div`
  width: 280px;
  background: linear-gradient(180deg, #2c3e50 0%, #34495e 100%);
  color: white;
  padding: 0;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
  position: fixed;
  height: 100vh;
  overflow-y: auto;
`;

const SidebarHeader = styled.div`
  padding: 30px 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
`;

const Logo = styled.div`
  font-size: 2rem;
  margin-bottom: 10px;
`;

const AdminInfo = styled.div`
  font-size: 0.9rem;
  opacity: 0.8;
`;

const NavMenu = styled.nav`
  padding: 20px 0;
`;

const NavItem = styled.div<{ active?: boolean }>`
  padding: 15px 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  border-left: 3px solid ${props => props.active ? '#3498db' : 'transparent'};
  background: ${props => props.active ? 'rgba(52, 152, 219, 0.1)' : 'transparent'};
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-left-color: #3498db;
  }

  display: flex;
  align-items: center;
  gap: 12px;
`;

const NavIcon = styled.span`
  font-size: 1.2rem;
  width: 20px;
`;

const MainContent = styled.div`
  flex: 1;
  margin-left: 280px;
  padding: 30px;
`;

const Header = styled.div`
  background: white;
  padding: 20px 30px;
  border-radius: 15px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  margin-bottom: 30px;
  display: flex;
  justify-content: between;
  align-items: center;
`;

const HeaderTitle = styled.h1`
  color: #2c3e50;
  margin: 0;
  font-size: 1.8rem;
  font-weight: 600;
`;

const LogoutButton = styled.button`
  background: #e74c3c;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
  margin-left: auto;

  &:hover {
    background: #c0392b;
    transform: translateY(-1px);
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 25px;
  margin-bottom: 30px;
`;

const StatCard = styled.div`
  background: white;
  padding: 25px;
  border-radius: 15px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const StatIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 15px;
  color: #3498db;
`;

const StatValue = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 5px;
`;

const StatLabel = styled.div`
  color: #7f8c8d;
  font-size: 0.9rem;
`;

const ContentArea = styled.div`
  background: white;
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
`;

const WelcomeMessage = styled.div`
  text-align: center;
  padding: 40px;
  color: #7f8c8d;
`;

const QuickActions = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 30px;
`;

const ActionButton = styled.button`
  background: linear-gradient(135deg, #3498db, #2980b9);
  color: white;
  border: none;
  padding: 20px;
  border-radius: 12px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(52, 152, 219, 0.3);
  }
`;

const ActionIcon = styled.span`
  font-size: 2rem;
`;

type MenuItem = 'dashboard' | 'products' | 'orders' | 'users' | 'settings';

const AdminDashboard: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<MenuItem>('dashboard');
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  const menuItems = [
    { id: 'dashboard' as MenuItem, label: 'لوحة التحكم', icon: '📊' },
    { id: 'products' as MenuItem, label: 'إدارة المنتجات', icon: '📦' },
    { id: 'orders' as MenuItem, label: 'الطلبات', icon: '🛒' },
    { id: 'users' as MenuItem, label: 'المستخدمين', icon: '👥' },
    { id: 'settings' as MenuItem, label: 'الإعدادات', icon: '⚙️' }
  ];

  const stats = [
    { icon: '📦', value: '156', label: 'إجمالي المنتجات' },
    { icon: '🛒', value: '89', label: 'الطلبات الجديدة' },
    { icon: '👥', value: '1,234', label: 'المستخدمين' },
    { icon: '💰', value: '45,678 ر.س', label: 'المبيعات اليوم' }
  ];

  const renderContent = () => {
    switch (activeMenu) {
      case 'dashboard':
        return (
          <div>
            <StatsGrid>
              {stats.map((stat, index) => (
                <StatCard key={index}>
                  <StatIcon>{stat.icon}</StatIcon>
                  <StatValue>{stat.value}</StatValue>
                  <StatLabel>{stat.label}</StatLabel>
                </StatCard>
              ))}
            </StatsGrid>
            
            <ContentArea>
              <WelcomeMessage>
                <h2>مرحباً بك في لوحة تحكم المدير</h2>
                <p>يمكنك من هنا إدارة جميع جوانب المتجر الإلكتروني</p>
                
                <QuickActions>
                  <ActionButton onClick={() => setActiveMenu('products')}>
                    <ActionIcon>📦</ActionIcon>
                    إضافة منتج جديد
                  </ActionButton>
                  <ActionButton onClick={() => setActiveMenu('orders')}>
                    <ActionIcon>🛒</ActionIcon>
                    عرض الطلبات
                  </ActionButton>
                  <ActionButton onClick={() => setActiveMenu('users')}>
                    <ActionIcon>👥</ActionIcon>
                    إدارة المستخدمين
                  </ActionButton>
                  <ActionButton onClick={() => setActiveMenu('settings')}>
                    <ActionIcon>⚙️</ActionIcon>
                    إعدادات النظام
                  </ActionButton>
                </QuickActions>
              </WelcomeMessage>
            </ContentArea>
          </div>
        );
      case 'products':
        return (
          <ContentArea>
            <ProductManagement />
          </ContentArea>
        );
      case 'orders':
        return (
          <ContentArea>
            <OrderManagement />
          </ContentArea>
        );
      case 'users':
        return (
          <ContentArea>
            <UserManagement />
          </ContentArea>
        );
      case 'settings':
        return (
          <ContentArea>
            <SystemSettings />
          </ContentArea>
        );
      default:
        return (
          <ContentArea>
            <WelcomeMessage>
              <h2>{menuItems.find(item => item.id === activeMenu)?.label}</h2>
              <p>هذا القسم قيد التطوير...</p>
            </WelcomeMessage>
          </ContentArea>
        );
    }
  };

  return (
    <DashboardContainer>
      <Sidebar>
        <SidebarHeader>
          <Logo>🎮</Logo>
          <AdminInfo>
            مرحباً، {user?.username}<br />
            مدير النظام
          </AdminInfo>
        </SidebarHeader>
        
        <NavMenu>
          {menuItems.map((item) => (
            <NavItem
              key={item.id}
              active={activeMenu === item.id}
              onClick={() => setActiveMenu(item.id)}
            >
              <NavIcon>{item.icon}</NavIcon>
              {item.label}
            </NavItem>
          ))}
        </NavMenu>
      </Sidebar>

      <MainContent>
        <Header>
          <HeaderTitle>لوحة تحكم المدير</HeaderTitle>
          <LogoutButton onClick={handleLogout}>
            تسجيل الخروج
          </LogoutButton>
        </Header>

        {renderContent()}
      </MainContent>
    </DashboardContainer>
  );
};

export default AdminDashboard;
