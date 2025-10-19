import React, { useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useCart } from '../hooks/useCart';
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

const Title = styled.h1`
  margin-bottom: 2rem;
  color: var(--text-primary);
  font-size: 2rem;
`;

const CartLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 350px;
  gap: 2rem;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const CartItems = styled.div`
  background-color: var(--surface-color);
  border-radius: 12px;
  padding: 1.5rem;
  border: 1px solid var(--border-color);
`;

const EmptyCart = styled.div`
  text-align: center;
  padding: 3rem;
  color: var(--text-secondary);
  
  h3 {
    margin-bottom: 1rem;
    color: var(--text-primary);
  }
  
  p {
    margin-bottom: 2rem;
  }
`;

const ContinueShoppingButton = styled(Link)`
  display: inline-block;
  background-color: var(--primary-color);
  color: white;
  padding: 0.875rem 2rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--secondary-color);
    transform: translateY(-2px);
  }
`;

const CartItem = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1.5rem 0;
  border-bottom: 1px solid var(--border-color);
  
  &:last-child {
    border-bottom: none;
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ItemImage = styled.div`
  width: 120px;
  height: 120px;
  flex-shrink: 0;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid var(--border-color);
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
  }
`;

const ItemDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ItemName = styled.h3`
  margin: 0;
  color: var(--text-primary);
  font-size: 1.1rem;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ItemCategory = styled.span`
  color: var(--text-secondary);
  font-size: 0.9rem;
  text-transform: capitalize;
`;

const ItemPrice = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: auto;
`;

const CurrentPrice = styled.span`
  font-weight: bold;
  color: var(--primary-color);
  font-size: 1.1rem;
`;

const OriginalPrice = styled.span`
  color: var(--text-secondary);
  text-decoration: line-through;
  font-size: 0.9rem;
`;

const ItemActions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 1rem;
  
  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  overflow: hidden;
`;

const QuantityButton = styled.button`
  background-color: var(--surface-color);
  border: none;
  padding: 0.5rem 0.75rem;
  cursor: pointer;
  color: var(--text-primary);
  font-size: 1rem;
  
  &:hover:not(:disabled) {
    background-color: var(--background-color);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const QuantityInput = styled.input`
  border: none;
  padding: 0.5rem;
  width: 50px;
  text-align: center;
  background-color: var(--background-color);
  color: var(--text-primary);
  
  &:focus {
    outline: none;
  }
`;

const RemoveButton = styled.button`
  background: none;
  border: none;
  color: #ef4444;
  cursor: pointer;
  font-size: 1.2rem;
  padding: 0.5rem;
  border-radius: 4px;
  
  &:hover {
    background-color: #fee2e2;
  }
`;

const OrderSummary = styled.div`
  background-color: var(--surface-color);
  border-radius: 12px;
  padding: 1.5rem;
  border: 1px solid var(--border-color);
  height: fit-content;
  position: sticky;
  top: 2rem;
`;

const SummaryTitle = styled.h3`
  margin: 0 0 1.5rem;
  color: var(--text-primary);
`;

const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 0;
  border-bottom: 1px solid var(--border-color);
  
  &:last-of-type {
    border-bottom: none;
    font-weight: bold;
    font-size: 1.1rem;
    color: var(--text-primary);
  }
`;

const SummaryLabel = styled.span`
  color: var(--text-secondary);
`;

const SummaryValue = styled.span`
  color: var(--text-primary);
  font-weight: 500;
`;

const PromoCodeSection = styled.div`
  margin: 1.5rem 0;
  padding: 1.5rem 0;
  border-top: 1px solid var(--border-color);
  border-bottom: 1px solid var(--border-color);
`;

const PromoCodeInput = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

const PromoInput = styled.input`
  flex: 1;
  padding: 0.75rem;
  border: 1px solid var(--border-color);
  border-radius: 6px;
  background-color: var(--background-color);
  color: var(--text-primary);
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
  }
`;

const ApplyButton = styled.button`
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 6px;
  padding: 0.75rem 1rem;
  cursor: pointer;
  font-weight: 500;
  
  &:hover {
    background-color: var(--secondary-color);
  }
`;

const CheckoutButton = styled.button`
  width: 100%;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 8px;
  padding: 1rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover:not(:disabled) {
    background-color: var(--secondary-color);
    transform: translateY(-2px);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const SecurityNote = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;
  padding: 0.75rem;
  background-color: var(--background-color);
  border-radius: 6px;
  font-size: 0.9rem;
  color: var(--text-secondary);
`;

const CartPage: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { cartItems, updateQuantity, removeFromCart, totalPrice, totalItems } = useCart();
  const { showToast } = useToast();
  
  const [promoCode, setPromoCode] = useState('');
  const [appliedPromo, setAppliedPromo] = useState<string | null>(null);
  const [discount, setDiscount] = useState(0);

  const subtotal = totalPrice;
  const tax = subtotal * 0.1; // 10% tax
  const shipping = subtotal > 100 ? 0 : 15; // Free shipping over $100
  const total = subtotal + tax + shipping - discount;

  const handleQuantityChange = (itemId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      handleRemoveItem(itemId);
    } else {
      updateQuantity(itemId, newQuantity);
    }
  };

  const handleRemoveItem = (itemId: string) => {
    removeFromCart(itemId);
    showToast('تم حذف المنتج من السلة', 'success');
  };

  const handleApplyPromo = () => {
    // Simple promo code validation
    const validPromoCodes: Record<string, number> = {
      'SAVE10': 10,
      'WELCOME20': 20,
      'GAMING15': 15
    };

    if (validPromoCodes[promoCode.toUpperCase()]) {
      const discountAmount = (subtotal * validPromoCodes[promoCode.toUpperCase()]) / 100;
      setDiscount(discountAmount);
      setAppliedPromo(promoCode.toUpperCase());
      showToast(`تم تطبيق كود الخصم! وفرت $${discountAmount.toFixed(2)}`, 'success');
      setPromoCode('');
    } else {
      showToast('كود الخصم غير صحيح', 'error');
    }
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) return;
    
    // Navigate to checkout page
    navigate('/checkout');
  };

  if (cartItems.length === 0) {
    return (
      <PageContainer>
        <Header />
        
        <MainContent>
          <Container>
            <Title>{t('cart.title')}</Title>
            
            <CartItems>
              <EmptyCart>
                <h3>{t('cart.empty')}</h3>
                <p>لم تقم بإضافة أي منتجات إلى سلة التسوق بعد</p>
                <ContinueShoppingButton to="/store">
                  {t('cart.continueShopping')}
                </ContinueShoppingButton>
              </EmptyCart>
            </CartItems>
          </Container>
        </MainContent>
        
        <Footer />
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <Header />
      
      <MainContent>
        <Container>
          <Title>{t('cart.title')} ({totalItems} منتج)</Title>
          
          <CartLayout>
            <CartItems>
              {cartItems.map((item) => (
                <CartItem key={item.product.id}>
                  <ItemImage>
                    <img src={item.product.image} alt={item.product.name} />
                  </ItemImage>
                  
                  <ItemDetails>
                    <ItemName>{item.product.name}</ItemName>
                    <ItemCategory>{t(`categories.${item.product.category}`)}</ItemCategory>
                    <ItemPrice>
                      <CurrentPrice>
                        ${(item.product.discountPrice || item.product.price).toFixed(2)}
                      </CurrentPrice>
                      {item.product.discountPrice && (
                        <OriginalPrice>${item.product.price.toFixed(2)}</OriginalPrice>
                      )}
                    </ItemPrice>
                  </ItemDetails>
                  
                  <ItemActions>
                    <QuantityControls>
                      <QuantityButton 
                        onClick={() => handleQuantityChange(item.product.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                      >
                        -
                      </QuantityButton>
                      <QuantityInput 
                        type="number" 
                        value={item.quantity}
                        onChange={(e) => handleQuantityChange(item.product.id, parseInt(e.target.value) || 1)}
                        min="1"
                        max="10"
                      />
                      <QuantityButton 
                        onClick={() => handleQuantityChange(item.product.id, item.quantity + 1)}
                        disabled={item.quantity >= 10}
                      >
                        +
                      </QuantityButton>
                    </QuantityControls>
                    
                    <RemoveButton onClick={() => handleRemoveItem(item.product.id)}>
                      🗑️
                    </RemoveButton>
                  </ItemActions>
                </CartItem>
              ))}
            </CartItems>
            
            <OrderSummary>
              <SummaryTitle>ملخص الطلب</SummaryTitle>
              
              <SummaryRow>
                <SummaryLabel>{t('cart.subtotal')}</SummaryLabel>
                <SummaryValue>${subtotal.toFixed(2)}</SummaryValue>
              </SummaryRow>
              
              <SummaryRow>
                <SummaryLabel>{t('cart.tax')}</SummaryLabel>
                <SummaryValue>${tax.toFixed(2)}</SummaryValue>
              </SummaryRow>
              
              <SummaryRow>
                <SummaryLabel>{t('cart.shipping')}</SummaryLabel>
                <SummaryValue>
                  {shipping === 0 ? 'مجاني' : `$${shipping.toFixed(2)}`}
                </SummaryValue>
              </SummaryRow>
              
              {discount > 0 && (
                <SummaryRow>
                  <SummaryLabel>الخصم ({appliedPromo})</SummaryLabel>
                  <SummaryValue style={{ color: '#10b981' }}>
                    -${discount.toFixed(2)}
                  </SummaryValue>
                </SummaryRow>
              )}
              
              <SummaryRow>
                <SummaryLabel>{t('cart.total')}</SummaryLabel>
                <SummaryValue>${total.toFixed(2)}</SummaryValue>
              </SummaryRow>
              
              <PromoCodeSection>
                <SummaryLabel>كود الخصم</SummaryLabel>
                <PromoCodeInput>
                  <PromoInput
                    type="text"
                    placeholder="أدخل كود الخصم"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                  />
                  <ApplyButton onClick={handleApplyPromo}>
                    {t('cart.apply')}
                  </ApplyButton>
                </PromoCodeInput>
              </PromoCodeSection>
              
              <CheckoutButton onClick={handleCheckout}>
                {t('cart.checkout')}
              </CheckoutButton>
              
              <SecurityNote>
                🔒 الدفع آمن ومحمي بتشفير SSL
              </SecurityNote>
            </OrderSummary>
          </CartLayout>
        </Container>
      </MainContent>
      
      <Footer />
    </PageContainer>
  );
};

export default CartPage;
