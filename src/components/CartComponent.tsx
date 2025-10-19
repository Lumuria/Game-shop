import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { useCart } from '../hooks/useCart';
import { CartItem } from '../contexts/CartContext';

const CartContainer = styled.div`
  background-color: var(--surface-color);
  border-radius: 8px;
  box-shadow: 0 2px 8px var(--shadow-color);
  padding: 1.5rem;
  margin-bottom: 2rem;
`;


const CartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--border-color);
`;

const CartTitle = styled.h2`
  margin: 0;
  color: var(--text-primary);
`;

const CartItemCount = styled.span`
  background-color: var(--primary-color);
  color: white;
  border-radius: 50%;
  padding: 0.2rem 0.6rem;
  font-size: 0.9rem;
  margin-left: 0.5rem;
`;

const EmptyCart = styled.div`
  text-align: center;
  padding: 3rem 0;
  color: var(--text-secondary);
`;

const CartItemList = styled.div`
  margin-bottom: 1.5rem;
`;

const CartItemContainer = styled.div`
  display: flex;
  padding: 1rem 0;
  border-bottom: 1px solid var(--border-color);

  &:last-child {
    border-bottom: none;
  }
`;

const ItemImage = styled.div`
  width: 80px;
  height: 80px;
  margin-right: 1rem;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 4px;
  }
`;

const ItemDetails = styled.div`
  flex-grow: 1;
`;

const ItemName = styled.h3`
  margin: 0 0 0.5rem;
  font-size: 1rem;
`;

const ItemPrice = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const CurrentPrice = styled.span`
  font-weight: bold;
  color: var(--text-primary);
`;

const OriginalPrice = styled.span`
  text-decoration: line-through;
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin-left: 0.5rem;
`;

const ItemActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const QuantityControl = styled.div`
  display: flex;
  align-items: center;
`;

const QuantityButton = styled.button`
  background-color: var(--background-color);
  border: 1px solid var(--border-color);
  color: var(--text-primary);
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--border-color);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const QuantityValue = styled.span`
  padding: 0 0.8rem;
  min-width: 40px;
  text-align: center;
`;

const RemoveButton = styled.button`
  background: none;
  border: none;
  color: var(--error-color);
  cursor: pointer;
  font-size: 0.9rem;
  padding: 0.3rem 0.6rem;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
`;

const CartSummary = styled.div`
  background-color: var(--background-color);
  border-radius: 8px;
  padding: 1.5rem;
`;

const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
    padding-top: 1rem;
    border-top: 1px solid var(--border-color);
  }
`;

const SummaryLabel = styled.span`
  color: var(--text-secondary);
`;

const SummaryValue = styled.span<{ bold?: boolean }>`
  font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
  color: var(--text-primary);
`;

const TotalValue = styled(SummaryValue)`
  font-size: 1.2rem;
  color: var(--primary-color);
`;

const PromoCodeContainer = styled.div`
  margin: 1.5rem 0;
`;

const PromoCodeTitle = styled.h3`
  font-size: 1rem;
  margin-bottom: 0.8rem;
`;

const PromoCodeForm = styled.form`
  display: flex;
`;

const PromoCodeInput = styled.input`
  flex-grow: 1;
  padding: 0.8rem;
  border: 1px solid var(--border-color);
  border-radius: 4px 0 0 4px;
  background-color: var(--surface-color);
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
  border-radius: 0 4px 4px 0;
  padding: 0 1.5rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    opacity: 0.9;
  }
`;

const CheckoutButton = styled.button`
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 4px;
  padding: 1rem;
  width: 100%;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 1.5rem;

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    background-color: var(--border-color);
    cursor: not-allowed;
  }
`;

const ContinueShoppingButton = styled.button`
  background-color: transparent;
  color: var(--primary-color);
  border: 1px solid var(--primary-color);
  border-radius: 4px;
  padding: 1rem;
  width: 100%;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;

  &:hover {
    background-color: var(--primary-color);
    color: white;
  }
`;

const CartItemComponent: React.FC<{ item: CartItem }> = ({ item }) => {
  const { t } = useTranslation();
  const { updateQuantity, removeFromCart } = useCart();
  const { product, quantity } = item;

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1) {
      updateQuantity(product.id, newQuantity);
    }
  };

  const handleRemove = () => {
    removeFromCart(product.id);
  };

  return (
    <CartItemContainer>
      <ItemImage>
        <img src={product.image} alt={product.name} />
      </ItemImage>
      <ItemDetails>
        <ItemName>{product.name}</ItemName>
        <ItemPrice>
          <CurrentPrice>
            ${product.discountPrice || product.price}
          </CurrentPrice>
          {product.discountPrice && (
            <OriginalPrice>${product.price}</OriginalPrice>
          )}
        </ItemPrice>
        <ItemActions>
          <QuantityControl>
            <QuantityButton
              onClick={() => handleQuantityChange(quantity - 1)}
              disabled={quantity <= 1}
            >
              -
            </QuantityButton>
            <QuantityValue>{quantity}</QuantityValue>
            <QuantityButton
              onClick={() => handleQuantityChange(quantity + 1)}
            >
              +
            </QuantityButton>
          </QuantityControl>
          <RemoveButton onClick={handleRemove}>
            {t('cart.remove')}
          </RemoveButton>
        </ItemActions>
      </ItemDetails>
    </CartItemContainer>
  );
};

const CartComponent: React.FC = () => {
  const { t } = useTranslation();
  const { cartItems, totalItems, totalPrice, clearCart } = useCart();

  // Calculate order summary values
  const tax = totalPrice * 0.05;
  const shipping = totalPrice > 0 ? 10 : 0;
  const discount = 0;
  const total = totalPrice + tax + shipping - discount;

  const handleCheckout = () => {
    // Handle checkout logic here
    console.log('Proceeding to checkout');
  };

  const handleContinueShopping = () => {
    // Handle continue shopping logic here
    console.log('Continuing shopping');
  };

  return (
    <CartContainer>
      <CartHeader>
        <CartTitle>
          {t('cart.title')}
          {totalItems > 0 && <CartItemCount>{totalItems}</CartItemCount>}
        </CartTitle>
        {totalItems > 0 && (
          <RemoveButton onClick={clearCart}>
            {t('cart.clearCart')}
          </RemoveButton>
        )}
      </CartHeader>

      {totalItems === 0 ? (
        <EmptyCart>
          <p>{t('cart.empty')}</p>
          <ContinueShoppingButton onClick={handleContinueShopping}>
            {t('cart.continueShopping')}
          </ContinueShoppingButton>
        </EmptyCart>
      ) : (
        <>
          <CartItemList>
            {cartItems.map((item) => (
              <CartItemComponent key={item.product.id} item={item} />
            ))}
          </CartItemList>

          <PromoCodeContainer>
            <PromoCodeTitle>{t('cart.promoCode')}</PromoCodeTitle>
            <PromoCodeForm onSubmit={(e) => e.preventDefault()}>
              <PromoCodeInput
                type="text"
                placeholder={t('cart.enterPromoCode')}
              />
              <ApplyButton type="submit">{t('cart.apply')}</ApplyButton>
            </PromoCodeForm>
          </PromoCodeContainer>

          <CartSummary>
            <SummaryRow>
              <SummaryLabel>{t('cart.subtotal')}</SummaryLabel>
              <SummaryValue>${totalPrice.toFixed(2)}</SummaryValue>
            </SummaryRow>
            <SummaryRow>
              <SummaryLabel>{t('cart.tax')}</SummaryLabel>
              <SummaryValue>${tax.toFixed(2)}</SummaryValue>
            </SummaryRow>
            <SummaryRow>
              <SummaryLabel>{t('cart.shipping')}</SummaryLabel>
              <SummaryValue>${shipping.toFixed(2)}</SummaryValue>
            </SummaryRow>
            {discount > 0 && (
              <SummaryRow>
                <SummaryLabel>{t('cart.discount')}</SummaryLabel>
                <SummaryValue>-${discount.toFixed(2)}</SummaryValue>
              </SummaryRow>
            )}
            <SummaryRow>
              <SummaryLabel>{t('cart.total')}</SummaryLabel>
              <TotalValue bold>${total.toFixed(2)}</TotalValue>
            </SummaryRow>
          </CartSummary>

          <CheckoutButton onClick={handleCheckout}>
            {t('cart.checkout')}
          </CheckoutButton>
          <ContinueShoppingButton onClick={handleContinueShopping}>
            {t('cart.continueShopping')}
          </ContinueShoppingButton>
        </>
      )}
    </CartContainer>
  );
};

export default CartComponent;