import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

interface Order {
  id: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  items: OrderItem[];
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  createdAt: string;
  shippingAddress: string;
}

interface OrderItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
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

const OrdersTable = styled.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
`;

const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr 1fr 1fr 1fr;
  background: #f8f9fa;
  padding: 15px;
  font-weight: 600;
  color: #2c3e50;
  border-bottom: 1px solid #e1e5e9;
`;

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr 1fr 1fr 1fr;
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

const OrderId = styled.div`
  font-weight: 500;
  color: #3498db;
`;

const CustomerInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const CustomerName = styled.div`
  font-weight: 500;
  color: #2c3e50;
`;

const CustomerContact = styled.div`
  font-size: 0.85rem;
  color: #7f8c8d;
`;

const OrderTotal = styled.div`
  font-weight: 600;
  color: #27ae60;
`;

const StatusBadge = styled.div<{ status: string }>`
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  text-align: center;
  color: white;
  background: ${props => {
    switch (props.status) {
      case 'pending': return '#f39c12';
      case 'processing': return '#3498db';
      case 'shipped': return '#9b59b6';
      case 'delivered': return '#27ae60';
      case 'cancelled': return '#e74c3c';
      default: return '#95a5a6';
    }
  }};
`;

const OrderDate = styled.div`
  font-size: 0.9rem;
  color: #7f8c8d;
`;

const ActionButton = styled.button<{ variant?: 'view' | 'edit' | 'delete' }>`
  background: ${props => 
    props.variant === 'delete' ? '#e74c3c' : 
    props.variant === 'edit' ? '#f39c12' : '#3498db'
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
  max-width: 600px;
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

const OrderDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const DetailSection = styled.div`
  background: #f8f9fa;
  padding: 15px;
  border-radius: 8px;
`;

const SectionTitle = styled.h4`
  color: #2c3e50;
  margin: 0 0 10px 0;
  font-size: 1rem;
`;

const ItemsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const OrderItemRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background: white;
  border-radius: 6px;
`;

const ItemInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ItemImage = styled.div`
  font-size: 1.5rem;
`;

const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemName = styled.div`
  font-weight: 500;
  color: #2c3e50;
`;

const ItemPrice = styled.div`
  font-size: 0.9rem;
  color: #7f8c8d;
`;

const StatusSelect = styled.select`
  padding: 8px 12px;
  border: 2px solid #e1e5e9;
  border-radius: 6px;
  font-size: 1rem;
  width: 100%;

  &:focus {
    outline: none;
    border-color: #3498db;
  }
`;

const UpdateButton = styled.button`
  background: linear-gradient(135deg, #27ae60, #2ecc71);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  margin-top: 15px;
  width: 100%;

  &:hover {
    opacity: 0.9;
  }
`;

const OrderManagement: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [filteredOrders, setFilteredOrders] = useState<Order[]>([]);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [statusFilter, setStatusFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // بيانات تجريبية للطلبات
  useEffect(() => {
    const sampleOrders: Order[] = [
      {
        id: 'ORD-001',
        customerName: 'أحمد محمد',
        customerEmail: 'ahmed@example.com',
        customerPhone: '+966501234567',
        items: [
          {
            id: '1',
            name: 'كرت الرسوميات RTX 4080',
            price: 4500,
            quantity: 1,
            image: '🎮'
          },
          {
            id: '2',
            name: 'معالج Intel Core i7',
            price: 2200,
            quantity: 1,
            image: '💻'
          }
        ],
        total: 6700,
        status: 'pending',
        createdAt: '2024-01-20',
        shippingAddress: 'الرياض، المملكة العربية السعودية'
      },
      {
        id: 'ORD-002',
        customerName: 'فاطمة علي',
        customerEmail: 'fatima@example.com',
        customerPhone: '+966507654321',
        items: [
          {
            id: '3',
            name: 'ذاكرة RAM 32GB',
            price: 800,
            quantity: 2,
            image: '🧠'
          }
        ],
        total: 1600,
        status: 'processing',
        createdAt: '2024-01-19',
        shippingAddress: 'جدة، المملكة العربية السعودية'
      },
      {
        id: 'ORD-003',
        customerName: 'محمد السعد',
        customerEmail: 'mohammed@example.com',
        customerPhone: '+966509876543',
        items: [
          {
            id: '1',
            name: 'كرت الرسوميات RTX 4080',
            price: 4500,
            quantity: 1,
            image: '🎮'
          }
        ],
        total: 4500,
        status: 'delivered',
        createdAt: '2024-01-18',
        shippingAddress: 'الدمام، المملكة العربية السعودية'
      }
    ];
    setOrders(sampleOrders);
    setFilteredOrders(sampleOrders);
  }, []);

  // تصفية الطلبات
  useEffect(() => {
    let filtered = orders;

    if (statusFilter !== 'all') {
      filtered = filtered.filter(order => order.status === statusFilter);
    }

    if (searchTerm) {
      filtered = filtered.filter(order =>
        order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.customerEmail.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredOrders(filtered);
  }, [orders, statusFilter, searchTerm]);

  const getStatusText = (status: string) => {
    switch (status) {
      case 'pending': return 'في الانتظار';
      case 'processing': return 'قيد المعالجة';
      case 'shipped': return 'تم الشحن';
      case 'delivered': return 'تم التسليم';
      case 'cancelled': return 'ملغي';
      default: return status;
    }
  };

  const handleViewOrder = (order: Order) => {
    setSelectedOrder(order);
    setShowModal(true);
  };

  const handleUpdateStatus = (orderId: string, newStatus: string) => {
    setOrders(orders.map(order =>
      order.id === orderId ? { ...order, status: newStatus as Order['status'] } : order
    ));
    
    if (selectedOrder && selectedOrder.id === orderId) {
      setSelectedOrder({ ...selectedOrder, status: newStatus as Order['status'] });
    }
  };

  const handleDeleteOrder = (orderId: string) => {
    if (window.confirm('هل أنت متأكد من حذف هذا الطلب؟')) {
      setOrders(orders.filter(order => order.id !== orderId));
    }
  };

  return (
    <Container>
      <Header>
        <Title>إدارة الطلبات</Title>
      </Header>

      <FilterBar>
        <FilterSelect
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="all">جميع الطلبات</option>
          <option value="pending">في الانتظار</option>
          <option value="processing">قيد المعالجة</option>
          <option value="shipped">تم الشحن</option>
          <option value="delivered">تم التسليم</option>
          <option value="cancelled">ملغي</option>
        </FilterSelect>

        <SearchInput
          type="text"
          placeholder="البحث في الطلبات..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </FilterBar>

      <OrdersTable>
        <TableHeader>
          <div>رقم الطلب</div>
          <div>معلومات العميل</div>
          <div>المجموع</div>
          <div>الحالة</div>
          <div>التاريخ</div>
          <div>الإجراءات</div>
        </TableHeader>

        {filteredOrders.map(order => (
          <TableRow key={order.id}>
            <OrderId>{order.id}</OrderId>
            <CustomerInfo>
              <CustomerName>{order.customerName}</CustomerName>
              <CustomerContact>{order.customerEmail}</CustomerContact>
              <CustomerContact>{order.customerPhone}</CustomerContact>
            </CustomerInfo>
            <OrderTotal>{order.total} ر.س</OrderTotal>
            <StatusBadge status={order.status}>
              {getStatusText(order.status)}
            </StatusBadge>
            <OrderDate>{order.createdAt}</OrderDate>
            <div>
              <ActionButton variant="view" onClick={() => handleViewOrder(order)}>
                عرض
              </ActionButton>
              <ActionButton variant="delete" onClick={() => handleDeleteOrder(order.id)}>
                حذف
              </ActionButton>
            </div>
          </TableRow>
        ))}
      </OrdersTable>

      <Modal show={showModal}>
        <ModalContent>
          <ModalHeader>
            <ModalTitle>تفاصيل الطلب {selectedOrder?.id}</ModalTitle>
            <CloseButton onClick={() => setShowModal(false)}>×</CloseButton>
          </ModalHeader>

          {selectedOrder && (
            <OrderDetails>
              <DetailSection>
                <SectionTitle>معلومات العميل</SectionTitle>
                <div><strong>الاسم:</strong> {selectedOrder.customerName}</div>
                <div><strong>البريد الإلكتروني:</strong> {selectedOrder.customerEmail}</div>
                <div><strong>الهاتف:</strong> {selectedOrder.customerPhone}</div>
                <div><strong>عنوان الشحن:</strong> {selectedOrder.shippingAddress}</div>
              </DetailSection>

              <DetailSection>
                <SectionTitle>المنتجات المطلوبة</SectionTitle>
                <ItemsList>
                  {selectedOrder.items.map(item => (
                    <OrderItemRow key={item.id}>
                      <ItemInfo>
                        <ItemImage>{item.image}</ItemImage>
                        <ItemDetails>
                          <ItemName>{item.name}</ItemName>
                          <ItemPrice>{item.price} ر.س × {item.quantity}</ItemPrice>
                        </ItemDetails>
                      </ItemInfo>
                      <div>{item.price * item.quantity} ر.س</div>
                    </OrderItemRow>
                  ))}
                </ItemsList>
                <div style={{ textAlign: 'right', marginTop: '15px', fontSize: '1.1rem', fontWeight: 'bold' }}>
                  المجموع الكلي: {selectedOrder.total} ر.س
                </div>
              </DetailSection>

              <DetailSection>
                <SectionTitle>تحديث حالة الطلب</SectionTitle>
                <StatusSelect
                  value={selectedOrder.status}
                  onChange={(e) => handleUpdateStatus(selectedOrder.id, e.target.value)}
                >
                  <option value="pending">في الانتظار</option>
                  <option value="processing">قيد المعالجة</option>
                  <option value="shipped">تم الشحن</option>
                  <option value="delivered">تم التسليم</option>
                  <option value="cancelled">ملغي</option>
                </StatusSelect>
                <UpdateButton onClick={() => setShowModal(false)}>
                  حفظ التغييرات
                </UpdateButton>
              </DetailSection>
            </OrderDetails>
          )}
        </ModalContent>
      </Modal>
    </Container>
  );
};

export default OrderManagement;
