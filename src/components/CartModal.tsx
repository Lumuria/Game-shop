import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { useCart } from '../hooks/useCart';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Overlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const Modal = styled.div`
  background-color: var(--surface-color);
  border-radius: 12px;
  padding: 2rem;
  max-width: 600px;
  width: 90%;
  max-height: 80vh;
  overflow-y: auto;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--border-color);
`;

const Title = styled.h2`
  margin: 0;
  color: var(--text-primary);
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--text-secondary);
  padding: 0.5rem;
  border-radius: 50%;
  
  &:hover {
    background-color: var(--background-color);
  }
`;

const CartItem = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 1px solid var(--border-color);
  
  &:last-child {
    border-bottom: none;
  }
`;

const ItemImage = styled.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 1rem;
`;

const ItemDetails = styled.div`
  flex: 1;
`;

const ItemName = styled.h4`
  margin: 0 0 0.5rem;
  color: var(--text-primary);
  font-size: 0.9rem;
`;

const ItemPrice = styled.span`
  color: var(--primary-color);
  font-weight: bold;
`;

const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  margin: 0 1rem;
`;

const QuantityButton = styled.button`
  background-color: var(--primary-color);
  color: white;
  border: none;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background-color: var(--secondary-color);
  }
  
  &:disabled {
    background-color: var(--border-color);
    cursor: not-allowed;
  }
`;

const Quantity = styled.span`
  margin: 0 0.5rem;
  font-weight: bold;
  min-width: 20px;
  text-align: center;
`;

const RemoveButton = styled.button`
  background: none;
  border: none;
  color: var(--error-color);
  cursor: pointer;
  padding: 0.5rem;
  
  &:hover {
    background-color: var(--background-color);
    border-radius: 4px;
  }
`;

const EmptyCart = styled.div`
  text-align: center;
  padding: 2rem;
  color: var(--text-secondary);
`;

const Footer = styled.div`
  margin-top: 1.5rem;
  padding-top: 1rem;
  border-top: 1px solid var(--border-color);
`;

const Total = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  font-weight: bold;
  color: var(--text-primary);
`;

const CheckoutButton = styled.button`
  width: 100%;
  background-color: var(--primary-color);
  color: white;
  border: none;
  padding: 1rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  
  &:hover {
    background-color: var(--secondary-color);
  }
  
  &:disabled {
    background-color: var(--border-color);
    cursor: not-allowed;
  }
`;

const CartModal: React.FC<CartModalProps> = ({ isOpen, onClose }) => {
  const { t } = useTranslation();
  const { cartItems, updateQuantity, removeFromCart, totalPrice, clearCart } = useCart();

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <Overlay isOpen={isOpen} onClick={handleOverlayClick}>
      <Modal>
        <Header>
          <Title>{t('cart.title')}</Title>
          <CloseButton onClick={onClose}>×</CloseButton>
        </Header>
        
        {cartItems.length === 0 ? (
          <EmptyCart>
            <p>{t('cart.empty')}</p>
          </EmptyCart>
        ) : (
          <>
            {cartItems.map((item) => (
              <CartItem key={item.product.id}>
                <ItemImage src={item.product.image} alt={item.product.name} />
                <ItemDetails>
                  <ItemName>{item.product.name}</ItemName>
                  <ItemPrice>
                    ${item.product.discountPrice || item.product.price}
                  </ItemPrice>
                </ItemDetails>
                <QuantityControls>
                  <QuantityButton
                    onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                  >
                    -
                  </QuantityButton>
                  <Quantity>{item.quantity}</Quantity>
                  <QuantityButton
                    onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                  >
                    +
                  </QuantityButton>
                </QuantityControls>
                <RemoveButton onClick={() => removeFromCart(item.product.id)}>
                  🗑️
                </RemoveButton>
              </CartItem>
            ))}
            
            <Footer>
              <Total>
                <span>{t('cart.total')}:</span>
                <span>${totalPrice.toFixed(2)}</span>
              </Total>
              <CheckoutButton>
                {t('cart.checkout')}
              </CheckoutButton>
            </Footer>
          </>
        )}
      </Modal>
    </Overlay>
  );
};

export default CartModal;

