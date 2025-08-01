import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../hooks/useLanguage';
import { useToast } from '../contexts/ToastContext';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';

// [1] Styled Components
const PageContainer = styled.div`
  min-height: 100vh;
  background: var(--background-color);
`;

const ProfileContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

const ProfileHeader = styled.div`
  background: var(--surface-color);
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 2rem;
  border: 1px solid var(--border-color);
  text-align: center;
`;

const Avatar = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: var(--primary-color);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 3rem;
  font-weight: 700;
  margin: 0 auto 1rem;
  position: relative;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

const AvatarUpload = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
`;

const UserName = styled.h1`
  color: var(--text-primary);
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

const UserEmail = styled.p`
  color: var(--text-secondary);
  font-size: 1.1rem;
  margin-bottom: 1rem;
`;

const UserRole = styled.div<{ isAdmin: boolean }>`
  display: inline-block;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  background: ${props => props.isAdmin ? '#ff6b35' : '#4CAF50'};
  color: white;
  font-weight: 600;
  font-size: 0.9rem;
`;

// [2] Tabs
const TabContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  border-bottom: 1px solid var(--border-color);
`;

const Tab = styled.button<{ active: boolean }>`
  padding: 1rem 1.5rem;
  border: none;
  background: none;
  color: ${props => props.active ? 'var(--primary-color)' : 'var(--text-secondary)'};
  font-weight: 600;
  cursor: pointer;
  border-bottom: 2px solid ${props => props.active ? 'var(--primary-color)' : 'transparent'};
  transition: all 0.2s;

  &:hover {
    color: var(--primary-color);
  }
`;

const ContentArea = styled.div`
  background: var(--surface-color);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  padding: 2rem;
`;

// [3] Form elements
const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  color: var(--text-primary);
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  background: var(--background-color);
  color: var(--text-primary);
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px var(--primary-color)20;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  background: var(--background-color);
  color: var(--text-primary);
  font-size: 1rem;
  min-height: 100px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px var(--primary-color)20;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  margin-top: 2rem;
`;

const Button = styled.button<{ variant?: 'primary' | 'secondary' }>`
  padding: 0.75rem 1.5rem;
  border: 1px solid ${props => props.variant === 'primary' ? 'var(--primary-color)' : 'var(--border-color)'};
  background: ${props => props.variant === 'primary' ? 'var(--primary-color)' : 'var(--surface-color)'};
  color: ${props => props.variant === 'primary' ? 'white' : 'var(--text-primary)'};
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: ${props => props.variant === 'primary' ? 'var(--primary-color)' : 'var(--surface-color)'};
    transform: translateY(-1px);
    opacity: 0.9;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

// [4] Stats + Orders
const StatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const StatCard = styled.div`
  background: var(--surface-color);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 1.5rem;
  text-align: center;
`;

const StatValue = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  color: var(--text-secondary);
  font-size: 0.9rem;
`;

const OrderCard = styled.div`
  background: var(--surface-color);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 1rem;
`;

const OrderHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const OrderId = styled.span`
  font-weight: 600;
  color: var(--text-primary);
`;

const OrderStatus = styled.span<{ status: string }>`
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 600;
  color: white;
  background: ${props => {
    switch (props.status) {
      case 'completed': return '#4CAF50';
      case 'pending': return '#ff9800';
      case 'cancelled': return '#f44336';
      default: return '#666';
    }
  }};
`;

const OrderDetails = styled.div`
  color: var(--text-secondary);
  font-size: 0.9rem;
`;

// [5] Component
const ProfilePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    bio: '',
    phone: '',
    address: ''
  });

  const { user, updateProfile, isAdmin } = useAuth();
  const { isRTL } = useLanguage();
  const { t } = useTranslation();
  const { showToast } = useToast();

  useEffect(() => {
    if (user) {
      setFormData({
        username: user.username || '',
        email: user.email || '',
        bio: '',
        phone: '',
        address: ''
      });
    }
  }, [user]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSaveProfile = async () => {
    const success = await updateProfile({
      username: formData.username,
      email: formData.email
    });

    if (success) {
      showToast(t('profileUpdated') || 'تم تحديث الملف الشخصي بنجاح', 'success');
      setIsEditing(false);
    } else {
      showToast(t('updateFailed') || 'فشل في تحديث الملف الشخصي', 'error');
    }
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
  };

  const userStats = {
    totalOrders: 12,
    totalSpent: 2450,
    wishlistItems: 8,
    reviewsWritten: 5
  };

  const recentOrders = [
    { id: '001', product: 'Adobe Creative Suite', amount: 599, status: 'completed', date: '2024-01-15' },
    { id: '002', product: 'Microsoft Office', amount: 299, status: 'pending', date: '2024-01-10' },
    { id: '003', product: 'AutoCAD 2024', amount: 1299, status: 'completed', date: '2024-01-05' },
  ];

  if (!user) return null;

  return (
    <PageContainer dir={isRTL ? 'rtl' : 'ltr'}>
      <Header />
      <ProfileContainer>
        <ProfileHeader>
          <Avatar>
            {user.avatar ? (
              <img
                src={user.avatar}
                alt={user.username}
                style={{ width: '100%', height: '100%', borderRadius: '50%' }}
              />
            ) : (
              getInitials(user.username)
            )}
            <AvatarUpload type="file" accept="image/*" />
          </Avatar>
          <UserName>{user.username}</UserName>
          <UserEmail>{user.email}</UserEmail>
          <UserRole isAdmin={isAdmin()}>
            {isAdmin() ? t('admin') || 'مدير' : t('user') || 'مستخدم'}
          </UserRole>
        </ProfileHeader>

        <TabContainer>
          <Tab active={activeTab === 'profile'} onClick={() => setActiveTab('profile')}>
            {t('personalInfo') || 'المعلومات الشخصية'}
          </Tab>
          <Tab active={activeTab === 'orders'} onClick={() => setActiveTab('orders')}>
            {t('ordersAndStats') || 'الطلبات والإحصائيات'}
          </Tab>
          <Tab active={activeTab === 'security'} onClick={() => setActiveTab('security')}>
            {t('security') || 'الأمان'}
          </Tab>
        </TabContainer>

        <ContentArea>
          {activeTab === 'profile' && (
            <>
              <FormGroup>
                <Label>{t('username') || 'اسم المستخدم'}</Label>
                <Input
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                />
              </FormGroup>
              <FormGroup>
                <Label>{t('email') || 'البريد الإلكتروني'}</Label>
                <Input
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                />
              </FormGroup>
              <FormGroup>
                <Label>{t('bio') || 'نبذة شخصية'}</Label>
                <TextArea
                  name="bio"
                  value={formData.bio}
                  onChange={handleInputChange}
                  placeholder={t('enterBio') || 'أدخل نبذة عنك...'}
                  disabled={!isEditing}
                />
              </FormGroup>
              <FormGroup>
                <Label>{t('phone') || 'رقم الهاتف'}</Label>
                <Input
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                />
              </FormGroup>
              <FormGroup>
                <Label>{t('address') || 'العنوان'}</Label>
                <TextArea
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder={t('enterAddress') || 'أدخل عنوانك...'}
                  disabled={!isEditing}
                />
              </FormGroup>

              <ButtonGroup>
                {isEditing ? (
                  <>
                    <Button variant="secondary" onClick={() => setIsEditing(false)}>
                      {t('cancel') || 'إلغاء'}
                    </Button>
                    <Button variant="primary" onClick={handleSaveProfile}>
                      {t('save') || 'حفظ'}
                    </Button>
                  </>
                ) : (
                  <Button variant="primary" onClick={() => setIsEditing(true)}>
                    {t('edit') || 'تعديل'}
                  </Button>
                )}
              </ButtonGroup>
            </>
          )}

          {activeTab === 'orders' && (
            <>
              <StatGrid>
                <StatCard>
                  <StatValue>{userStats.totalOrders}</StatValue>
                  <StatLabel>{t('totalOrders') || 'إجمالي الطلبات'}</StatLabel>
                </StatCard>
                <StatCard>
                  <StatValue>${userStats.totalSpent}</StatValue>
                  <StatLabel>{t('totalSpent') || 'إجمالي المبلغ المنفق'}</StatLabel>
                </StatCard>
                <StatCard>
                  <StatValue>{userStats.wishlistItems}</StatValue>
                  <StatLabel>{t('wishlistItems') || 'عناصر قائمة الأمنيات'}</StatLabel>
                </StatCard>
                <StatCard>
                  <StatValue>{userStats.reviewsWritten}</StatValue>
                  <StatLabel>{t('reviewsWritten') || 'التقييمات المكتوبة'}</StatLabel>
                </StatCard>
              </StatGrid>

              <h3 style={{ marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
                {t('recentOrders') || 'الطلبات الأخيرة'}
              </h3>

              {recentOrders.map(order => (
                <OrderCard key={order.id}>
                  <OrderHeader>
                    <OrderId>#{t('order') || 'طلب'} {order.id}</OrderId>
                    <OrderStatus status={order.status}>
                      {order.status === 'completed' ? 'مكتمل' :
                        order.status === 'pending' ? 'معلق' : 'ملغي'}
                    </OrderStatus>
                  </OrderHeader>
                  <OrderDetails>
                    <div><strong>{order.product}</strong></div>
                    <div>{t('amount') || 'المبلغ'}: ${order.amount}</div>
                    <div>{t('date') || 'التاريخ'}: {order.date}</div>
                  </OrderDetails>
                </OrderCard>
              ))}
            </>
          )}

          {activeTab === 'security' && (
            <div style={{ textAlign: 'center', padding: '2rem', color: '#666' }}>
              {t('securitySettings') || 'إعدادات الأمان قيد التطوير'}
            </div>
          )}
        </ContentArea>
      </ProfileContainer>
      <Footer />
    </PageContainer>
  );
};

 export default ProfilePage;
