import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

interface User {
  id: string;
  username: string;
  email: string;
  fullName: string;
  phone: string;
  role: 'user' | 'admin';
  status: 'active' | 'inactive' | 'banned';
  registrationDate: string;
  lastLogin: string;
  totalOrders: number;
  totalSpent: number;
}

const Container = styled.div`
  padding: 0;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

const Title = styled.h2`
  color: #2c3e50;
  margin: 0;
  font-size: 1.5rem;
`;

const AddButton = styled.button`
  background: linear-gradient(135deg, #27ae60, #2ecc71);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 16px rgba(39, 174, 96, 0.3);
  }
`;

const FilterBar = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
  flex-wrap: wrap;
`;

const FilterSelect = styled.select`
  padding: 8px 12px;
  border: 2px solid #e1e5e9;
  border-radius: 6px;
  font-size: 0.9rem;

  &:focus {
    outline: none;
    border-color: #3498db;
  }
`;

const SearchInput = styled.input`
  padding: 8px 12px;
  border: 2px solid #e1e5e9;
  border-radius: 6px;
  font-size: 0.9rem;
  min-width: 200px;

  &:focus {
    outline: none;
    border-color: #3498db;
  }
`;

const UsersTable = styled.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
`;

const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr 1fr 1fr 1fr 1fr 1fr;
  background: #f8f9fa;
  padding: 15px;
  font-weight: 600;
  color: #2c3e50;
  border-bottom: 1px solid #e1e5e9;
`;

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr 1fr 1fr 1fr 1fr 1fr;
  padding: 15px;
  border-bottom: 1px solid #f1f3f4;
  align-items: center;
  transition: background-color 0.2s ease;

  &:hover {
    background: #f8f9fa;
  }

  &:last-child {
    border-bottom: none;
  }
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const UserName = styled.div`
  font-weight: 500;
  color: #2c3e50;
`;

const UserEmail = styled.div`
  font-size: 0.85rem;
  color: #7f8c8d;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const RoleBadge = styled.div<{ role: string }>`
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 500;
  text-align: center;
  color: white;
  background: ${props => props.role === 'admin' ? '#e74c3c' : '#3498db'};
`;

const StatusBadge = styled.div<{ status: string }>`
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 500;
  text-align: center;
  color: white;
  background: ${props => {
    switch (props.status) {
      case 'active': return '#27ae60';
      case 'inactive': return '#f39c12';
      case 'banned': return '#e74c3c';
      default: return '#95a5a6';
    }
  }};
`;

const UserStats = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  font-size: 0.85rem;
`;

const ActionButton = styled.button<{ variant?: 'edit' | 'ban' | 'delete' }>`
  background: ${props => 
    props.variant === 'delete' ? '#e74c3c' : 
    props.variant === 'ban' ? '#f39c12' : '#3498db'
  };
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.8rem;
  margin: 0 2px;
  transition: all 0.2s ease;

  &:hover {
    opacity: 0.9;
    transform: translateY(-1px);
  }
`;

const Modal = styled.div<{ show: boolean }>`
  display: ${props => props.show ? 'flex' : 'none'};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  border-radius: 12px;
  padding: 30px;
  width: 90%;
  max-width: 500px;
  max-height: 80vh;
  overflow-y: auto;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const ModalTitle = styled.h3`
  color: #2c3e50;
  margin: 0;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #7f8c8d;

  &:hover {
    color: #2c3e50;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  color: #2c3e50;
  font-weight: 500;
  margin-bottom: 5px;
  font-size: 0.9rem;
`;

const Input = styled.input`
  padding: 10px;
  border: 2px solid #e1e5e9;
  border-radius: 6px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #3498db;
  }
`;

const Select = styled.select`
  padding: 10px;
  border: 2px solid #e1e5e9;
  border-radius: 6px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #3498db;
  }
`;

const SubmitButton = styled.button`
  background: linear-gradient(135deg, #3498db, #2980b9);
  color: white;
  border: none;
  padding: 12px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  margin-top: 10px;

  &:hover {
    opacity: 0.9;
  }
`;

const UserManagement: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [roleFilter, setRoleFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    fullName: '',
    phone: '',
    role: 'user' as 'user' | 'admin',
    status: 'active' as 'active' | 'inactive' | 'banned'
  });

  // بيانات تجريبية للمستخدمين
  useEffect(() => {
    const sampleUsers: User[] = [
      {
        id: '1',
        username: 'ahmed_gamer',
        email: 'ahmed@example.com',
        fullName: 'أحمد محمد',
        phone: '+966501234567',
        role: 'user',
        status: 'active',
        registrationDate: '2024-01-15',
        lastLogin: '2024-01-20',
        totalOrders: 5,
        totalSpent: 12500
      },
      {
        id: '2',
        username: 'fatima_tech',
        email: 'fatima@example.com',
        fullName: 'فاطمة علي',
        phone: '+966507654321',
        role: 'user',
        status: 'active',
        registrationDate: '2024-01-10',
        lastLogin: '2024-01-19',
        totalOrders: 3,
        totalSpent: 8900
      },
      {
        id: '3',
        username: 'mohammed_pro',
        email: 'mohammed@example.com',
        fullName: 'محمد السعد',
        phone: '+966509876543',
        role: 'user',
        status: 'inactive',
        registrationDate: '2024-01-05',
        lastLogin: '2024-01-10',
        totalOrders: 1,
        totalSpent: 4500
      },
      {
        id: '4',
        username: 'admin_user',
        email: 'admin@example.com',
        fullName: 'مدير النظام',
        phone: '+966500000000',
        role: 'admin',
        status: 'active',
        registrationDate: '2023-12-01',
        lastLogin: '2024-01-20',
        totalOrders: 0,
        totalSpent: 0
      }
    ];
    setUsers(sampleUsers);
    setFilteredUsers(sampleUsers);
  }, []);

  // تصفية المستخدمين
  useEffect(() => {
    let filtered = users;

    if (roleFilter !== 'all') {
      filtered = filtered.filter(user => user.role === roleFilter);
    }

    if (statusFilter !== 'all') {
      filtered = filtered.filter(user => user.status === statusFilter);
    }

    if (searchTerm) {
      filtered = filtered.filter(user =>
        user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.fullName.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredUsers(filtered);
  }, [users, roleFilter, statusFilter, searchTerm]);

  const getRoleText = (role: string) => {
    return role === 'admin' ? 'مدير' : 'مستخدم';
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active': return 'نشط';
      case 'inactive': return 'غير نشط';
      case 'banned': return 'محظور';
      default: return status;
    }
  };

  const handleAddUser = () => {
    setEditingUser(null);
    setFormData({
      username: '',
      email: '',
      fullName: '',
      phone: '',
      role: 'user',
      status: 'active'
    });
    setShowModal(true);
  };

  const handleEditUser = (user: User) => {
    setEditingUser(user);
    setFormData({
      username: user.username,
      email: user.email,
      fullName: user.fullName,
      phone: user.phone,
      role: user.role,
      status: user.status
    });
    setShowModal(true);
  };

  const handleBanUser = (userId: string) => {
    if (window.confirm('هل أنت متأكد من حظر هذا المستخدم؟')) {
      setUsers(users.map(user =>
        user.id === userId ? { ...user, status: 'banned' as const } : user
      ));
    }
  };

  const handleDeleteUser = (userId: string) => {
    if (window.confirm('هل أنت متأكد من حذف هذا المستخدم؟')) {
      setUsers(users.filter(user => user.id !== userId));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const userData: User = {
      id: editingUser?.id || Date.now().toString(),
      username: formData.username,
      email: formData.email,
      fullName: formData.fullName,
      phone: formData.phone,
      role: formData.role,
      status: formData.status,
      registrationDate: editingUser?.registrationDate || new Date().toISOString().split('T')[0],
      lastLogin: editingUser?.lastLogin || 'لم يسجل دخول بعد',
      totalOrders: editingUser?.totalOrders || 0,
      totalSpent: editingUser?.totalSpent || 0
    };

    if (editingUser) {
      setUsers(users.map(user => user.id === editingUser.id ? userData : user));
    } else {
      setUsers([...users, userData]);
    }

    setShowModal(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <Container>
      <Header>
        <Title>إدارة المستخدمين</Title>
        <AddButton onClick={handleAddUser}>
          <span>👤</span>
          إضافة مستخدم جديد
        </AddButton>
      </Header>

      <FilterBar>
        <FilterSelect
          value={roleFilter}
          onChange={(e) => setRoleFilter(e.target.value)}
        >
          <option value="all">جميع الأدوار</option>
          <option value="user">مستخدم</option>
          <option value="admin">مدير</option>
        </FilterSelect>

        <FilterSelect
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="all">جميع الحالات</option>
          <option value="active">نشط</option>
          <option value="inactive">غير نشط</option>
          <option value="banned">محظور</option>
        </FilterSelect>

        <SearchInput
          type="text"
          placeholder="البحث في المستخدمين..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </FilterBar>

      <UsersTable>
        <TableHeader>
          <div>معلومات المستخدم</div>
          <div>معلومات الاتصال</div>
          <div>الدور</div>
          <div>الحالة</div>
          <div>الطلبات</div>
          <div>آخر دخول</div>
          <div>الإجراءات</div>
        </TableHeader>

        {filteredUsers.map(user => (
          <TableRow key={user.id}>
            <UserInfo>
              <UserName>{user.fullName}</UserName>
              <UserEmail>@{user.username}</UserEmail>
            </UserInfo>
            <ContactInfo>
              <div>{user.email}</div>
              <div>{user.phone}</div>
            </ContactInfo>
            <RoleBadge role={user.role}>
              {getRoleText(user.role)}
            </RoleBadge>
            <StatusBadge status={user.status}>
              {getStatusText(user.status)}
            </StatusBadge>
            <UserStats>
              <div>{user.totalOrders} طلب</div>
              <div>{user.totalSpent} ر.س</div>
            </UserStats>
            <div>{user.lastLogin}</div>
            <div>
              <ActionButton variant="edit" onClick={() => handleEditUser(user)}>
                تعديل
              </ActionButton>
              {user.status !== 'banned' && (
                <ActionButton variant="ban" onClick={() => handleBanUser(user.id)}>
                  حظر
                </ActionButton>
              )}
              <ActionButton variant="delete" onClick={() => handleDeleteUser(user.id)}>
                حذف
              </ActionButton>
            </div>
          </TableRow>
        ))}
      </UsersTable>

      <Modal show={showModal}>
        <ModalContent>
          <ModalHeader>
            <ModalTitle>
              {editingUser ? 'تعديل المستخدم' : 'إضافة مستخدم جديد'}
            </ModalTitle>
            <CloseButton onClick={() => setShowModal(false)}>×</CloseButton>
          </ModalHeader>

          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label>اسم المستخدم</Label>
              <Input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label>البريد الإلكتروني</Label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label>الاسم الكامل</Label>
              <Input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label>رقم الهاتف</Label>
              <Input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label>الدور</Label>
              <Select
                name="role"
                value={formData.role}
                onChange={handleInputChange}
                required
              >
                <option value="user">مستخدم</option>
                <option value="admin">مدير</option>
              </Select>
            </FormGroup>

            <FormGroup>
              <Label>الحالة</Label>
              <Select
                name="status"
                value={formData.status}
                onChange={handleInputChange}
                required
              >
                <option value="active">نشط</option>
                <option value="inactive">غير نشط</option>
                <option value="banned">محظور</option>
              </Select>
            </FormGroup>

            <SubmitButton type="submit">
              {editingUser ? 'تحديث المستخدم' : 'إضافة المستخدم'}
            </SubmitButton>
          </Form>
        </ModalContent>
      </Modal>
    </Container>
  );
};

export default UserManagement;
