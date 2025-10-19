import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useCart } from '../hooks/useCart';
import { useToast } from '../contexts/ToastContext';
import { Product } from '../contexts/CartContext';

// Mock wishlist data - in a real app this would be stored in context or API
const mockWishlistItems: Product[] = [
  {
    id: '1',
    name: 'PlayStation 5 Digital Edition',
    category: 'games',
    price: 399.99,
    image: 'https://via.placeholder.com/300x300?text=PS5',
    description: 'Next-gen gaming console with lightning-fast loading times and stunning graphics.',
    inStock: true,
    isNew: true,
    isFeatured: true,
  },
  {
    id: '4',
    name: 'NVIDIA GeForce RTX 3080',
    category: 'components',
    price: 699.99,
    image: 'https://via.placeholder.com/300x300?text=RTX3080',
    description: 'High-end graphics card for ultimate gaming performance.',
    inStock: false,
  },
  {
    id: '7',
    name: 'Samsung Odyssey G7 32" Gaming Monitor',
    category: 'peripherals',
    price: 799.99,
    discountPrice: 649.99,
    image: 'https://via.placeholder.com/300x300?text=Monitor',
    description: 'Curved QLED gaming monitor with 240Hz refresh rate and 1ms response time.',
    inStock: true,
  }
];

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

const Header2 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
  }
`;

const Title = styled.h1`
  margin: 0;
  color: var(--text-primary);
  font-size: 2rem;
`;

const ItemCount = styled.span`
  color: var(--text-secondary);
  font-size: 1rem;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 1rem;
  
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ActionButton = styled.button`
  background-color: transparent;
  color: var(--primary-color);
  border: 1px solid var(--primary-color);
  border-radius: 6px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--primary-color);
    color: white;
  }
  
  @media (max-width: 768px) {
    flex: 1;
  }
`;

const WishlistGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1rem;
  }
`;

const WishlistCard = styled.div`
  background-color: var(--surface-color);
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;
  position: relative;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 25px var(--shadow-color);
  }
`;

const ProductImage = styled.div`
  position: relative;
  aspect-ratio: 1;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
  
  &:hover img {
    transform: scale(1.05);
  }
`;

const RemoveButton = styled.button`
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  background-color: rgba(255, 255, 255, 0.9);
  border: none;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.2rem;
  color: #ef4444;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #ef4444;
    color: white;
    transform: scale(1.1);
  }
`;

const ProductBadges = styled.div`
  position: absolute;
  top: 0.75rem;
  left: 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Badge = styled.span<{ type: 'new' | 'sale' | 'outOfStock' }>`
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.7rem;
  font-weight: bold;
  text-transform: uppercase;
  
  ${props => {
    switch (props.type) {
      case 'new':
        return 'background-color: #10b981; color: white;';
      case 'sale':
        return 'background-color: #ef4444; color: white;';
      case 'outOfStock':
        return 'background-color: #6b7280; color: white;';
    }
  }}
`;

const ProductInfo = styled.div`
  padding: 1.25rem;
`;

const ProductCategory = styled.span`
  color: var(--text-secondary);
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const ProductName = styled.h3`
  margin: 0.5rem 0;
  color: var(--text-primary);
  font-size: 1rem;
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const ProductDescription = styled.p`
  color: var(--text-secondary);
  font-size: 0.9rem;
  line-height: 1.4;
  margin: 0.5rem 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const PriceSection = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 1rem 0;
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

const ProductActions = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const AddToCartButton = styled.button`
  flex: 1;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 6px;
  padding: 0.75rem;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover:not(:disabled) {
    background-color: var(--secondary-color);
  }
  
  &:disabled {
    background-color: var(--border-color);
    cursor: not-allowed;
  }
`;

const ViewButton = styled(Link)`
  background-color: transparent;
  color: var(--primary-color);
  border: 1px solid var(--primary-color);
  border-radius: 6px;
  padding: 0.75rem 1rem;
  font-size: 0.9rem;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--primary-color);
    color: white;
  }
`;

const EmptyWishlist = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  background-color: var(--surface-color);
  border-radius: 12px;
  border: 1px solid var(--border-color);
  
  h3 {
    margin-bottom: 1rem;
    color: var(--text-primary);
    font-size: 1.5rem;
  }
  
  p {
    margin-bottom: 2rem;
    color: var(--text-secondary);
    font-size: 1rem;
  }
`;

const BrowseButton = styled(Link)`
  display: inline-block;
  background-color: var(--primary-color);
  color: white;
  padding: 1rem 2rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--secondary-color);
    transform: translateY(-2px);
  }
`;

const FilterSection = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    gap: 0.5rem;
  }
`;

const FilterButton = styled.button<{ active: boolean }>`
  background-color: ${props => props.active ? 'var(--primary-color)' : 'transparent'};
  color: ${props => props.active ? 'white' : 'var(--text-secondary)'};
  border: 1px solid ${props => props.active ? 'var(--primary-color)' : 'var(--border-color)'};
  border-radius: 20px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--primary-color);
    color: white;
    border-color: var(--primary-color);
  }
`;

const WishlistPage: React.FC = () => {
  const { t } = useTranslation();
  const { addToCart } = useCart();
  const { showToast } = useToast();
  
  const [wishlistItems, setWishlistItems] = useState<Product[]>(mockWishlistItems);
  const [filter, setFilter] = useState<string>('all');

  const filteredItems = wishlistItems.filter(item => {
    if (filter === 'all') return true;
    if (filter === 'inStock') return item.inStock;
    if (filter === 'onSale') return !!item.discountPrice;
    return item.category === filter;
  });

  const handleRemoveFromWishlist = (productId: string) => {
    setWishlistItems(prev => prev.filter(item => item.id !== productId));
    showToast('تم حذف المنتج من قائمة الرغبات', 'success');
  };

  const handleAddToCart = (product: Product) => {
    if (product.inStock) {
      addToCart(product, 1);
      showToast(`تم إضافة ${product.name} إلى السلة`, 'success');
    }
  };

  const handleClearWishlist = () => {
    setWishlistItems([]);
    showToast('تم مسح قائمة الرغبات', 'success');
  };

  const handleAddAllToCart = () => {
    const inStockItems = wishlistItems.filter(item => item.inStock);
    inStockItems.forEach(item => addToCart(item, 1));
    showToast(`تم إضافة ${inStockItems.length} منتج إلى السلة`, 'success');
  };

  const categories = Array.from(new Set(wishlistItems.map(item => item.category)));

  if (wishlistItems.length === 0) {
    return (
      <PageContainer>
        <Header />
        
        <MainContent>
          <Container>
            <Title>{t('account.wishlist')}</Title>
            
            <EmptyWishlist>
              <h3>قائمة الرغبات فارغة</h3>
              <p>لم تقم بإضافة أي منتجات إلى قائمة الرغبات بعد</p>
              <BrowseButton to="/store">
                تصفح المنتجات
              </BrowseButton>
            </EmptyWishlist>
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
          <Header2>
            <div>
              <Title>{t('account.wishlist')}</Title>
              <ItemCount>{filteredItems.length} من {wishlistItems.length} منتج</ItemCount>
            </div>
            
            <ActionButtons>
              <ActionButton onClick={handleAddAllToCart}>
                إضافة الكل للسلة
              </ActionButton>
              <ActionButton onClick={handleClearWishlist}>
                مسح القائمة
              </ActionButton>
            </ActionButtons>
          </Header2>
          
          <FilterSection>
            <FilterButton 
              active={filter === 'all'} 
              onClick={() => setFilter('all')}
            >
              الكل
            </FilterButton>
            <FilterButton 
              active={filter === 'inStock'} 
              onClick={() => setFilter('inStock')}
            >
              متوفر
            </FilterButton>
            <FilterButton 
              active={filter === 'onSale'} 
              onClick={() => setFilter('onSale')}
            >
              عروض
            </FilterButton>
            {categories.map(category => (
              <FilterButton
                key={category}
                active={filter === category}
                onClick={() => setFilter(category)}
              >
                {t(`categories.${category}`)}
              </FilterButton>
            ))}
          </FilterSection>
          
          <WishlistGrid>
            {filteredItems.map((product) => (
              <WishlistCard key={product.id}>
                <ProductImage>
                  <img src={product.image} alt={product.name} />
                  <RemoveButton onClick={() => handleRemoveFromWishlist(product.id)}>
                    ×
                  </RemoveButton>
                  <ProductBadges>
                    {product.isNew && <Badge type="new">{t('product.new')}</Badge>}
                    {product.discountPrice && <Badge type="sale">{t('product.sale')}</Badge>}
                    {!product.inStock && <Badge type="outOfStock">{t('product.outOfStock')}</Badge>}
                  </ProductBadges>
                </ProductImage>
                
                <ProductInfo>
                  <ProductCategory>{t(`categories.${product.category}`)}</ProductCategory>
                  <ProductName>{product.name}</ProductName>
                  <ProductDescription>{product.description}</ProductDescription>
                  
                  <PriceSection>
                    <CurrentPrice>
                      ${(product.discountPrice || product.price).toFixed(2)}
                    </CurrentPrice>
                    {product.discountPrice && (
                      <OriginalPrice>${product.price.toFixed(2)}</OriginalPrice>
                    )}
                  </PriceSection>
                  
                  <ProductActions>
                    <AddToCartButton 
                      onClick={() => handleAddToCart(product)}
                      disabled={!product.inStock}
                    >
                      {product.inStock ? t('product.addToCart') : t('product.outOfStock')}
                    </AddToCartButton>
                    <ViewButton to={`/product/${product.id}`}>
                      عرض
                    </ViewButton>
                  </ProductActions>
                </ProductInfo>
              </WishlistCard>
            ))}
          </WishlistGrid>
        </Container>
      </MainContent>
      
      <Footer />
    </PageContainer>
  );
};

export default WishlistPage;
