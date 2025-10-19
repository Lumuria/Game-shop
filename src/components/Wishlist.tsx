import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

interface WishlistProps {
  products: any[];
  onRemoveFromWishlist: (productId: string) => void;
  onAddToCart: (product: any) => void;
}

const WishlistContainer = styled.div`
  background-color: var(--surface-color);
  border-radius: 8px;
  box-shadow: 0 2px 8px var(--shadow-color);
  padding: 1.5rem;
`;

const WishlistHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--border-color);
`;

const WishlistTitle = styled.h2`
  margin: 0;
  color: var(--text-primary);
`;

const WishlistCount = styled.span`
  background-color: var(--primary-color);
  color: white;
  border-radius: 50%;
  padding: 0.2rem 0.6rem;
  font-size: 0.9rem;
  margin-left: 0.5rem;
`;

const EmptyWishlist = styled.div`
  text-align: center;
  padding: 3rem 0;
  color: var(--text-secondary);
`;

const WishlistItemList = styled.div``;

const WishlistItem = styled.div`
  display: flex;
  padding: 1rem 0;
  border-bottom: 1px solid var(--border-color);
  
  &:last-child {
    border-bottom: none;
  }
`;

const ItemImage = styled.div`
  width: 100px;
  height: 100px;
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
  font-size: 1.1rem;
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
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const ActionButton = styled.button`
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: opacity 0.3s ease;
  
  &:hover {
    opacity: 0.9;
  }
  
  &:disabled {
    background-color: var(--border-color);
    cursor: not-allowed;
  }
`;

const SecondaryButton = styled(ActionButton)`
  background-color: transparent;
  color: var(--text-secondary);
  border: 1px solid var(--border-color);
  
  &:hover {
    background-color: var(--background-color);
    opacity: 1;
  }
`;

const ItemStatus = styled.div`
  margin-left: auto;
  padding-left: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
`;

const StockStatus = styled.span<{ inStock: boolean }>`
  color: ${props => props.inStock ? 'var(--success-color)' : 'var(--error-color)'};
  font-size: 0.9rem;
`;

const RemoveButton = styled.button`
  background: none;
  border: none;
  color: var(--error-color);
  cursor: pointer;
  font-size: 0.9rem;
  padding: 0;
  transition: opacity 0.3s ease;
  
  &:hover {
    opacity: 0.8;
  }
`;

const Wishlist: React.FC<WishlistProps> = ({ products, onRemoveFromWishlist, onAddToCart }) => {
  const { t } = useTranslation();
  
  return (
    <WishlistContainer>
      <WishlistHeader>
        <WishlistTitle>
          {t('account.wishlist')}
          {products.length > 0 && <WishlistCount>{products.length}</WishlistCount>}
        </WishlistTitle>
      </WishlistHeader>
      
      {products.length === 0 ? (
        <EmptyWishlist>
          <p>{t('wishlist.empty')}</p>
        </EmptyWishlist>
      ) : (
        <WishlistItemList>
          {products.map((product) => (
            <WishlistItem key={product.id}>
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
                  <ActionButton 
                    onClick={() => onAddToCart(product)}
                    disabled={!product.inStock}
                  >
                    {t('product.addToCart')}
                  </ActionButton>
                  <SecondaryButton>
                    {t('product.compare')}
                  </SecondaryButton>
                </ItemActions>
              </ItemDetails>
              <ItemStatus>
                <StockStatus inStock={product.inStock}>
                  {product.inStock ? t('product.inStock') : t('product.outOfStock')}
                </StockStatus>
                <RemoveButton onClick={() => onRemoveFromWishlist(product.id)}>
                  {t('wishlist.remove')}
                </RemoveButton>
              </ItemStatus>
            </WishlistItem>
          ))}
        </WishlistItemList>
      )}
    </WishlistContainer>
  );
};

export default Wishlist;
