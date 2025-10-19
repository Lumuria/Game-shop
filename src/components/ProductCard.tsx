import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { useCart } from '../hooks/useCart';
import { useToast } from '../contexts/ToastContext';
import { Product } from '../contexts/CartContext';

interface ProductCardProps {
  product: Product;
}

const Card = styled.div`
  background-color: var(--surface-color);
  border-radius: 8px;
  box-shadow: 0 2px 8px var(--shadow-color);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px var(--shadow-color);
  }
`;

const ImageContainer = styled.div`
  position: relative;
  padding-top: 75%; /* 4:3 Aspect Ratio */
  overflow: hidden;
`;

const ProductImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${Card}:hover & {
    transform: scale(1.05);
  }
`;

const BadgeContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Badge = styled.span<{ type: 'new' | 'sale' | 'out' }>`
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.7rem;
  font-weight: bold;
  text-transform: uppercase;
  color: white;
  background-color: ${({ type }) => 
    type === 'new' ? 'var(--primary-color)' : 
    type === 'sale' ? 'var(--secondary-color)' : 
    'var(--error-color)'};
`;

const ContentContainer = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const Category = styled.span`
  color: var(--text-secondary);
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
`;

const Title = styled.h3`
  margin: 0 0 0.5rem;
  font-size: 1rem;
  color: var(--text-primary);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: auto;
  padding-top: 0.5rem;
`;

const Price = styled.span`
  font-weight: bold;
  font-size: 1.1rem;
  color: var(--text-primary);
`;

const OriginalPrice = styled.span`
  text-decoration: line-through;
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin-left: 0.5rem;
`;

const ActionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;

const Button = styled.button<{ primary?: boolean }>`
  padding: 0.5rem;
  border: none;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  
  background-color: ${({ primary }) => 
    primary ? 'var(--primary-color)' : 'transparent'};
  color: ${({ primary }) => 
    primary ? 'white' : 'var(--text-primary)'};
  border: ${({ primary }) => 
    primary ? 'none' : '1px solid var(--border-color)'};

  &:hover {
    background-color: ${({ primary }) => 
      primary ? 'var(--primary-color)' : 'var(--background-color)'};
  }

  &:disabled {
    background-color: var(--border-color);
    color: var(--text-secondary);
    cursor: not-allowed;
  }
`;

const AddToCartButton = styled(Button)`
  flex: 1;
`;

const WishlistButton = styled(Button)`
  margin-left: 0.5rem;
  width: 40px;
  height: 40px;
`;

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { t } = useTranslation();
  const { addToCart } = useCart();
  const { showToast } = useToast();

  const handleAddToCart = () => {
    addToCart(product, 1);
    showToast(`${product.name} ${t('cart.addedToCart')}`, 'success');
  };

  return (
    <Card>
      <ImageContainer>
        <ProductImage src={product.image} alt={product.name} />
        <BadgeContainer>
          {product.isNew && <Badge type="new">{t('product.new')}</Badge>}
          {product.discountPrice && <Badge type="sale">{t('product.sale')}</Badge>}
          {!product.inStock && <Badge type="out">{t('product.outOfStock')}</Badge>}
        </BadgeContainer>
      </ImageContainer>
      <ContentContainer>
        <Category>{t(`categories.${product.category.toLowerCase()}`)}</Category>
        <Title>{product.name}</Title>
        <PriceContainer>
          <Price>
            {product.discountPrice ? `$${product.discountPrice}` : `$${product.price}`}
          </Price>
          {product.discountPrice && <OriginalPrice>${product.price}</OriginalPrice>}
        </PriceContainer>
        <ActionContainer>
          <AddToCartButton 
            primary 
            onClick={handleAddToCart}
            disabled={!product.inStock}
          >
            {product.inStock ? t('product.addToCart') : t('product.outOfStock')}
          </AddToCartButton>
          <WishlistButton>❤️</WishlistButton>
        </ActionContainer>
      </ContentContainer>
    </Card>
  );
};

export default ProductCard;
