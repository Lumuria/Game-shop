import React, { useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useAuth } from '../hooks/useAuth';
import { useToast } from '../contexts/ToastContext';

const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  flex: 1;
  padding: 2rem 0;
  background-color: var(--background-color);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const ProfileLayout = styled.div`
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 2rem;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const Sidebar = styled.div`
  background-color: var(--surface-color);
  border-radius: 12px;
  padding: 1.5rem;
  border: 1px solid var(--border-color);
  height: fit-content;
  position: sticky;
  top: 2rem;
`;

const UserInfo = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid var(--border-color);
`;

const Avatar = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: var(--primary-color);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  font-size: 2rem;
  color: white;
`;

const UserName = styled.h2`
  margin: 0 0 0.5rem;
  color: var(--text-primary);
  font-size: 1.3rem;
`;

const UserEmail = styled.p`
  margin: 0;
  color: var(--text-secondary);
  font-size: 0.9rem;
`;

const MenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const MenuItem = styled.li`
  margin-bottom: 0.5rem;
`;

const MenuLink = styled(Link)<{ active?: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  text-decoration: none;
  color: ${props => props.active ? 'var(--primary-color)' : 'var(--text-secondary)'};
  background-color: ${props => props.active ? 'rgba(59, 130, 246, 0.1)' : 'transparent'};
  transition: all 0.3s ease;
  
  &:hover {
    background-color: rgba(59, 130, 246, 0.1);
    color: var(--primary-color);
  }
`;

const MenuButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  border: none;
  background: none;
  color: var(--text-secondary);
  cursor: pointer;
  width: 100%;
  text-align: left;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: rgba(239, 68, 68, 0.1);
    color: #ef4444;
  }
`;

const MainSection = styled.div`
  background-color: var(--surface-color);
  border-radius: 12px;
  padding: 2rem;
  border: 1px solid var(--border-color);
`;

const SectionTitle = styled.h1`
  margin: 0 0 2rem;
  color: var(--text-primary);
  font-size: 1.8rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const InputRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  color: var(--text-primary);
  font-weight: 500;
  font-size: 0.9rem;
`;

const Input = styled.input`
  padding: 0.75rem 1rem;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  background-color: var(--background-color);
  color: var(--text-primary);
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
  
  &:disabled {
    background-color: var(--border-color);
    cursor: not-allowed;
  }
`;

const TextArea = styled.textarea`
  padding: 0.75rem 1rem;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  background-color: var(--background-color);
  color: var(--text-primary);
  font-size: 1rem;
  min-height: 100px;
  resize: vertical;
  font-family: inherit;
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const SaveButton = styled.button`
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 8px;
  padding: 0.875rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover:not(:disabled) {
    background-color: var(--secondary-color);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const CancelButton = styled.button`
  background-color: transparent;
  color: var(--text-secondary);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 0.875rem 2rem;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--background-color);
    border-color: var(--text-secondary);
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const StatCard = styled.div`
  background-color: var(--background-color);
  border-radius: 8px;
  padding: 1.5rem;
  text-align: center;
  border: 1px solid var(--border-color);
`;

const StatNumber = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  color: var(--text-secondary);
  font-size: 0.9rem;
`;

const ProfilePage: React.FC = () => {
  const { t } = useTranslation();
  const { user, logout } = useAuth();
  const { showToast } = useToast();
  
  const [activeSection, setActiveSection] = useState('profile');
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: user?.name?.split(' ')?.[0] || '',
    lastName: user?.name?.split(' ')?.[1] || '',
    email: user?.email || '',
    phone: '',
    address: '',
    city: '',
    country: '',
    bio: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically save to API
    showToast('تم حفظ التغييرات بنجاح', 'success');
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    // Reset form data
    setFormData({
      firstName: user?.name?.split(' ')?.[0] || '',
      lastName: user?.name?.split(' ')?.[1] || '',
      email: user?.email || '',
      phone: '',
      address: '',
      city: '',
      country: '',
      bio: ''
    });
  };

  const handleLogout = () => {
    logout();
    showToast('تم تسجيل الخروج بنجاح', 'success');
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  const renderProfileSection = () => (
    <>
      <SectionTitle>الملف الشخصي</SectionTitle>
      
      <StatsGrid>
        <StatCard>
          <StatNumber>12</StatNumber>
          <StatLabel>إجمالي الطلبات</StatLabel>
        </StatCard>
        <StatCard>
          <StatNumber>5</StatNumber>
          <StatLabel>المنتجات المفضلة</StatLabel>
        </StatCard>
        <StatCard>
          <StatNumber>$1,250</StatNumber>
          <StatLabel>إجمالي المشتريات</StatLabel>
        </StatCard>
      </StatsGrid>
      
      <Form onSubmit={handleSave}>
        <InputRow>
          <InputGroup>
            <Label htmlFor="firstName">الاسم الأول</Label>
            <Input
              id="firstName"
              name="firstName"
              type="text"
              value={formData.firstName}
              onChange={handleInputChange}
              disabled={!isEditing}
            />
          </InputGroup>
          
          <InputGroup>
            <Label htmlFor="lastName">الاسم الأخير</Label>
            <Input
              id="lastName"
              name="lastName"
              type="text"
              value={formData.lastName}
              onChange={handleInputChange}
              disabled={!isEditing}
            />
          </InputGroup>
        </InputRow>
        
        <InputGroup>
          <Label htmlFor="email">البريد الإلكتروني</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            disabled={!isEditing}
          />
        </InputGroup>
        
        <InputGroup>
          <Label htmlFor="phone">رقم الهاتف</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleInputChange}
            disabled={!isEditing}
            placeholder="+966 50 123 4567"
          />
        </InputGroup>
        
        <InputGroup>
          <Label htmlFor="address">العنوان</Label>
          <Input
            id="address"
            name="address"
            type="text"
            value={formData.address}
            onChange={handleInputChange}
            disabled={!isEditing}
            placeholder="الشارع والحي"
          />
        </InputGroup>
        
        <InputRow>
          <InputGroup>
            <Label htmlFor="city">المدينة</Label>
            <Input
              id="city"
              name="city"
              type="text"
              value={formData.city}
              onChange={handleInputChange}
              disabled={!isEditing}
              placeholder="الرياض"
            />
          </InputGroup>
          
          <InputGroup>
            <Label htmlFor="country">البلد</Label>
            <Input
              id="country"
              name="country"
              type="text"
              value={formData.country}
              onChange={handleInputChange}
              disabled={!isEditing}
              placeholder="المملكة العربية السعودية"
            />
          </InputGroup>
        </InputRow>
        
        <InputGroup>
          <Label htmlFor="bio">نبذة شخصية</Label>
          <TextArea
            id="bio"
            name="bio"
            value={formData.bio}
            onChange={handleInputChange}
            disabled={!isEditing}
            placeholder="اكتب نبذة مختصرة عن نفسك..."
          />
        </InputGroup>
        
        <ButtonGroup>
          {isEditing ? (
            <>
              <CancelButton type="button" onClick={handleCancel}>
                إلغاء
              </CancelButton>
              <SaveButton type="submit">
                حفظ التغييرات
              </SaveButton>
            </>
          ) : (
            <SaveButton type="button" onClick={() => setIsEditing(true)}>
              تعديل الملف الشخصي
            </SaveButton>
          )}
        </ButtonGroup>
      </Form>
    </>
  );

  return (
    <PageContainer>
      <Header />
      
      <MainContent>
        <Container>
          <ProfileLayout>
            <Sidebar>
              <UserInfo>
                <Avatar>
                  {user?.name ? getInitials(user.name) : '👤'}
                </Avatar>
                <UserName>{user?.name || 'المستخدم'}</UserName>
                <UserEmail>{user?.email}</UserEmail>
              </UserInfo>
              
              <MenuList>
                <MenuItem>
                  <MenuLink 
                    to="/profile" 
                    active={activeSection === 'profile'}
                    onClick={() => setActiveSection('profile')}
                  >
                    <span>👤</span>
                    الملف الشخصي
                  </MenuLink>
                </MenuItem>
                <MenuItem>
                  <MenuLink to="/orders">
                    <span>📦</span>
                    {t('account.orders')}
                  </MenuLink>
                </MenuItem>
                <MenuItem>
                  <MenuLink to="/wishlist">
                    <span>❤️</span>
                    {t('account.wishlist')}
                  </MenuLink>
                </MenuItem>
                <MenuItem>
                  <MenuLink to="/saved-configs">
                    <span>💾</span>
                    {t('account.savedConfigs')}
                  </MenuLink>
                </MenuItem>
                <MenuItem>
                  <MenuLink to="/notifications">
                    <span>🔔</span>
                    {t('account.notifications')}
                  </MenuLink>
                </MenuItem>
                <MenuItem>
                  <MenuButton onClick={handleLogout}>
                    <span>🚪</span>
                    {t('account.logout')}
                  </MenuButton>
                </MenuItem>
              </MenuList>
            </Sidebar>
            
            <MainSection>
              {renderProfileSection()}
            </MainSection>
          </ProfileLayout>
        </Container>
      </MainContent>
      
      <Footer />
    </PageContainer>
  );
};

export default ProfilePage;
