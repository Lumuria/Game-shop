import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../hooks/useLanguage';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

const PageContainer = styled.div`
  min-height: 100vh;
  background: ${props => props.theme.colors.background};
`;

const AdminContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
`;

const AdminHeader = styled.div`
  background: ${props => props.theme.colors.surface};
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 2rem;
  border: 1px solid ${props => props.theme.colors.border};
`;

const AdminTitle = styled.h1`
  color: ${props => props.theme.colors.text};
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

const AdminSubtitle = styled.p`
  color: ${props => props.theme.colors.textSecondary};
  font-size: 1.1rem;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const StatCard = styled.div`
  background: ${props => props.theme.colors.surface};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
  transition: all 0.3s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  }
`;

const StatIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const StatValue = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  color: ${props => props.theme.colors.textSecondary};
  font-weight: 500;
`;

const TabContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  border-bottom: 1px solid ${props => props.theme.colors.border};
`;

const Tab = styled.button<{ active: boolean }>`
  padding: 1rem 1.5rem;
  border: none;
  background: none;
  color: ${props => props.active ? props.theme.colors.primary : props.theme.colors.textSecondary};
  font-weight: 600;
  cursor: pointer;
  border-bottom: 2px solid ${props => props.active ? props.theme.colors.primary : 'transparent'};
  transition: all 0.2s;

  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

const ContentArea = styled.div`
  background: ${props => props.theme.colors.surface};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 12px;
  padding: 2rem;
`;

const ActionBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
  gap: 1rem;
`;

const SearchInput = styled.input`
  flex: 1;
  min-width: 250px;
  padding: 0.75rem;
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 8px;
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
  }
`;

const ActionButton = styled.button`
  background: ${props => props.theme.colors.primary};
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: ${props => props.theme.colors.primaryHover};
    transform: translateY(-1px);
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  padding: 1rem;
  text-align: left;
  font-weight: 600;
  border-bottom: 2px solid ${props => props.theme.colors.border};
`;

const TableRow = styled.tr`
  &:hover {
    background: ${props => props.theme.colors.hover};
  }
`;

const TableCell = styled.td`
  padding: 1rem;
  border-bottom: 1px solid ${props => props.theme.colors.border};
  color: ${props => props.theme.colors.text};
`;

const StatusBadge = styled.span<{ status: string }>`
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 600;
  color: white;
  background: ${props => {
    switch (props.status) {
      case 'active': return '#4CAF50';
      case 'pending': return '#ff9800';
      case 'completed': return '#2196F3';
      case 'cancelled': return '#f44336';
      default: return '#666';
    }
  }};
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const SmallButton = styled.button`
  padding: 0.5rem 0.75rem;
  border: 1px solid ${props => props.theme.colors.border};
  background: ${props => props.theme.colors.surface};
  color: ${props => props.theme.colors.text};
  border-radius: 6px;
  font-size: 0.8rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: ${props => props.theme.colors.hover};
  }

  &.danger {
    border-color: #f44336;
    color: #f44336;

    &:hover {
      background: #f44336;
      color: white;
    }
  }

  &.primary {
    border-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.primary};

    &:hover {
      background: ${props => props.theme.colors.primary};
      color: white;
    }
  }
`;

const Modal = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: ${props => props.isOpen ? 'flex' : 'none'};
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: ${props => props.theme.colors.surface};
  border-radius: 12px;
  padding: 2rem;
  width: 90%;
  max-width: 500px;
  max-height: 80vh;
  overflow-y: auto;
`;

const ModalTitle = styled.h3`
  color: ${props => props.theme.colors.text};
  margin-bottom: 1.5rem;
`;

const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: block;
  color: ${props => props.theme.colors.text};
  font-weight: 500;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 8px;
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 8px;
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  min-height: 100px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 8px;
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
  }
`;

const AdminPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'product' | 'user' | 'order'>('product');
  const [searchTerm, setSearchTerm] = useState('');

  const { user, isAdmin } = useAuth();
  const { isRTL } = useLanguage();
  const { t } = useTranslation();
  const navigate = useNavigate();

  // التحقق من صلاحيات المدير
  useEffect(() => {
    if (!user || !isAdmin()) {
      navigate('/');
    }
  }, [user, isAdmin, navigate]);

  // بيانات تجريبية
  const stats = {
    totalUsers: 1250,
    totalOrders: 890,
    totalProducts: 156,
    totalRevenue: 45600
  };

  const recentOrders = [
    { id: '1', user: 'أحمد محمد', product: 'Adobe Creative Suite', amount: 599, status: 'completed', date: '2024-01-15' },
    { id: '2', user: 'فاطمة أحمد', product: 'Microsoft Office', amount: 299, status: 'pending', date: '2024-01-14' },
    { id: '3', user: 'محمد علي', product: 'AutoCAD 2024', amount: 1299, status: 'active', date: '2024-01-13' },
  ];

  const users = [
    { id: '1', name: 'أحمد محمد', email: 'ahmed@example.com', role: 'user', status: 'active', joinDate: '2023-12-01' },
    { id: '2', name: 'فاطمة أحمد', email: 'fatima@example.com', role: 'user', status: 'active', joinDate: '2023-11-15' },
    { id: '3', name: 'محمد علي', email: 'mohammed@example.com', role: 'admin', status: 'active', joinDate: '2023-10-20' },
  ];

  const products = [
    { id: '1', name: 'Adobe Creative Suite 2024', category: 'design', price: 599, stock: 100, status: 'active' },
    { id: '2', name: 'Microsoft Office 365', category: 'productivity', price: 299, stock: 200, status: 'active' },
    { id: '3', name: 'AutoCAD 2024', category: 'engineering', price: 1299, stock: 50, status: 'active' },
  ];

  const openModal = (type: 'product' | 'user' | 'order') => {
    setModalType(type);
    setIsModalOpen(true);
  };

  const renderDashboard = () => (
    <>
      <StatsGrid>
        <StatCard>
          <StatIcon>👥</StatIcon>
          <StatValue>{stats.totalUsers.toLocaleString()}</StatValue>
          <StatLabel>{t('totalUsers') || 'إجمالي المستخدمين'}</StatLabel>
        </StatCard>
        <StatCard>
          <StatIcon>📦</StatIcon>
          <StatValue>{stats.totalOrders.toLocaleString()}</StatValue>
          <StatLabel>{t('totalOrders') || 'إجمالي الطلبات'}</StatLabel>
        </StatCard>
        <StatCard>
          <StatIcon>🛍️</StatIcon>
          <StatValue>{stats.totalProducts.toLocaleString()}</StatValue>
          <StatLabel>{t('totalProducts') || 'إجمالي المنتجات'}</StatLabel>
        </StatCard>
        <StatCard>
          <StatIcon>💰</StatIcon>
          <StatValue>${stats.totalRevenue.toLocaleString()}</StatValue>
          <StatLabel>{t('totalRevenue') || 'إجمالي الإيرادات'}</StatLabel>
        </StatCard>
      </StatsGrid>

      <ContentArea>
        <h3 style={{ marginBottom: '1.5rem', color: 'var(--text-primary)' }}>
          {t('recentOrders') || 'الطلبات الأخيرة'}
        </h3>
        <Table>
          <thead>
            <tr>
              <TableHeader>{t('orderId') || 'رقم الطلب'}</TableHeader>
              <TableHeader>{t('customer') || 'العميل'}</TableHeader>
              <TableHeader>{t('product') || 'المنتج'}</TableHeader>
              <TableHeader>{t('amount') || 'المبلغ'}</TableHeader>
              <TableHeader>{t('status') || 'الحالة'}</TableHeader>
              <TableHeader>{t('date') || 'التاريخ'}</TableHeader>
            </tr>
          </thead>
          <tbody>
            {recentOrders.map(order => (
              <TableRow key={order.id}>
                <TableCell>#{order.id}</TableCell>
                <TableCell>{order.user}</TableCell>
                <TableCell>{order.product}</TableCell>
                <TableCell>${order.amount}</TableCell>
                <TableCell>
                  <StatusBadge status={order.status}>
                    {order.status === 'completed' ? 'مكتمل' : 
                     order.status === 'pending' ? 'معلق' : 'نشط'}
                  </StatusBadge>
                </TableCell>
                <TableCell>{order.date}</TableCell>
              </TableRow>
            ))}
          </tbody>
        </Table>
      </ContentArea>
    </>
  );

  const renderUsers = () => (
    <ContentArea>
      <ActionBar>
        <SearchInput
          placeholder={t('searchUsers') || 'البحث في المستخدمين...'}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <ActionButton onClick={() => openModal('user')}>
          {t('addUser') || 'إضافة مستخدم'}
        </ActionButton>
      </ActionBar>
      
      <Table>
        <thead>
          <tr>
            <TableHeader>{t('name') || 'الاسم'}</TableHeader>
            <TableHeader>{t('email') || 'البريد الإلكتروني'}</TableHeader>
            <TableHeader>{t('role') || 'الدور'}</TableHeader>
            <TableHeader>{t('status') || 'الحالة'}</TableHeader>
            <TableHeader>{t('joinDate') || 'تاريخ الانضمام'}</TableHeader>
            <TableHeader>{t('actions') || 'الإجراءات'}</TableHeader>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <TableRow key={user.id}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role === 'admin' ? 'مدير' : 'مستخدم'}</TableCell>
              <TableCell>
                <StatusBadge status={user.status}>
                  {user.status === 'active' ? 'نشط' : 'غير نشط'}
                </StatusBadge>
              </TableCell>
              <TableCell>{user.joinDate}</TableCell>
              <TableCell>
                <ActionButtons>
                  <SmallButton className="primary">{t('edit') || 'تعديل'}</SmallButton>
                  <SmallButton className="danger">{t('delete') || 'حذف'}</SmallButton>
                </ActionButtons>
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </ContentArea>
  );

  const renderProducts = () => (
    <ContentArea>
      <ActionBar>
        <SearchInput
          placeholder={t('searchProducts') || 'البحث في المنتجات...'}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <ActionButton onClick={() => openModal('product')}>
          {t('addProduct') || 'إضافة منتج'}
        </ActionButton>
      </ActionBar>
      
      <Table>
        <thead>
          <tr>
            <TableHeader>{t('name') || 'الاسم'}</TableHeader>
            <TableHeader>{t('category') || 'الفئة'}</TableHeader>
            <TableHeader>{t('price') || 'السعر'}</TableHeader>
            <TableHeader>{t('stock') || 'المخزون'}</TableHeader>
            <TableHeader>{t('status') || 'الحالة'}</TableHeader>
            <TableHeader>{t('actions') || 'الإجراءات'}</TableHeader>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <TableRow key={product.id}>
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.category}</TableCell>
              <TableCell>${product.price}</TableCell>
              <TableCell>{product.stock}</TableCell>
              <TableCell>
                <StatusBadge status={product.status}>
                  {product.status === 'active' ? 'نشط' : 'غير نشط'}
                </StatusBadge>
              </TableCell>
              <TableCell>
                <ActionButtons>
                  <SmallButton className="primary">{t('edit') || 'تعديل'}</SmallButton>
                  <SmallButton className="danger">{t('delete') || 'حذف'}</SmallButton>
                </ActionButtons>
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </ContentArea>
  );

  const renderModal = () => (
    <Modal isOpen={isModalOpen} onClick={() => setIsModalOpen(false)}>
      <ModalContent onClick={e => e.stopPropagation()}>
        <ModalTitle>
          {modalType === 'product' && (t('addProduct') || 'إضافة منتج')}
          {modalType === 'user' && (t('addUser') || 'إضافة مستخدم')}
          {modalType === 'order' && (t('addOrder') || 'إضافة طلب')}
        </ModalTitle>
        
        {modalType === 'product' && (
          <>
            <FormGroup>
              <Label>{t('productName') || 'اسم المنتج'}</Label>
              <Input type="text" placeholder={t('enterProductName') || 'أدخل اسم المنتج'} />
            </FormGroup>
            <FormGroup>
              <Label>{t('category') || 'الفئة'}</Label>
              <Select>
                <option value="design">{t('design') || 'التصميم'}</option>
                <option value="productivity">{t('productivity') || 'الإنتاجية'}</option>
                <option value="engineering">{t('engineering') || 'الهندسة'}</option>
              </Select>
            </FormGroup>
            <FormGroup>
              <Label>{t('price') || 'السعر'}</Label>
              <Input type="number" placeholder="0.00" />
            </FormGroup>
            <FormGroup>
              <Label>{t('description') || 'الوصف'}</Label>
              <TextArea placeholder={t('enterDescription') || 'أدخل وصف المنتج'} />
            </FormGroup>
          </>
        )}

        {modalType === 'user' && (
          <>
            <FormGroup>
              <Label>{t('name') || 'الاسم'}</Label>
              <Input type="text" placeholder={t('enterName') || 'أدخل الاسم'} />
            </FormGroup>
            <FormGroup>
              <Label>{t('email') || 'البريد الإلكتروني'}</Label>
              <Input type="email" placeholder={t('enterEmail') || 'أدخل البريد الإلكتروني'} />
            </FormGroup>
            <FormGroup>
              <Label>{t('role') || 'الدور'}</Label>
              <Select>
                <option value="user">{t('user') || 'مستخدم'}</option>
                <option value="admin">{t('admin') || 'مدير'}</option>
              </Select>
            </FormGroup>
          </>
        )}

        <ActionButtons style={{ marginTop: '1.5rem', justifyContent: 'flex-end' }}>
          <SmallButton onClick={() => setIsModalOpen(false)}>
            {t('cancel') || 'إلغاء'}
          </SmallButton>
          <SmallButton className="primary">
            {t('save') || 'حفظ'}
          </SmallButton>
        </ActionButtons>
      </ModalContent>
    </Modal>
  );

 if (!user || typeof isAdmin !== 'function') {
  return <div style={{ padding: '2rem', textAlign: 'center' }}>جاري التحقق من الصلاحيات...</div>;
}

if (!isAdmin()) {
  return <div style={{ padding: '2rem', textAlign: 'center' }}>ليس لديك صلاحيات الوصول.</div>;
}


  return (
    <PageContainer dir={isRTL ? 'rtl' : 'ltr'}>
      <Header />
      
      <AdminContainer>
        <AdminHeader>
          <AdminTitle>{t('adminPanel') || 'لوحة الإدارة'}</AdminTitle>
          <AdminSubtitle>
            {t('adminWelcome') || 'مرحباً بك في لوحة التحكم الإدارية'}
          </AdminSubtitle>
        </AdminHeader>

        <TabContainer>
          <Tab 
            active={activeTab === 'dashboard'} 
            onClick={() => setActiveTab('dashboard')}
          >
            {t('dashboard') || 'لوحة المعلومات'}
          </Tab>
          <Tab 
            active={activeTab === 'users'} 
            onClick={() => setActiveTab('users')}
          >
            {t('users') || 'المستخدمون'}
          </Tab>
          <Tab 
            active={activeTab === 'products'} 
            onClick={() => setActiveTab('products')}
          >
            {t('products') || 'المنتجات'}
          </Tab>
          <Tab 
            active={activeTab === 'orders'} 
            onClick={() => setActiveTab('orders')}
          >
            {t('orders') || 'الطلبات'}
          </Tab>
        </TabContainer>

        {activeTab === 'dashboard' && renderDashboard()}
        {activeTab === 'users' && renderUsers()}
        {activeTab === 'products' && renderProducts()}
        {activeTab === 'orders' && renderUsers()} {/* يمكن استخدام نفس التخطيط للطلبات */}

        {renderModal()}
      </AdminContainer>
    </PageContainer>
  );
};

export default AdminPage;


