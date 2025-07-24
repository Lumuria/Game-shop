import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Product } from '../contexts/CartContext';

interface RecommendationsProps {
  currentProduct?: Product;
  category?: string;
}

// Mock recommended products
const mockRecommendations = [
  {
    id: '101',
    name: 'Logitech G Pro Wireless Gaming Mouse',
    category: 'peripherals',
    price: 129.99,
    discountPrice: 99.99,
    image: 'https://via.placeholder.com/150?text=G-Pro-Mouse',
    description: 'Ultra-lightweight wireless gaming mouse with HERO sensor.',
    inStock: true,
  },
  {
    id: '102',
    name: 'HyperX Cloud II Gaming Headset',
    category: 'accessories',
    price: 99.99,
    image: 'https://via.placeholder.com/150?text=Cloud-II',
    description: 'Comfortable gaming headset with 7.1 virtual surround sound.',
    inStock: true,
  },
  {
    id: '103',
    name: 'SteelSeries Apex Pro Mechanical Keyboard',
    category: 'peripherals',
    price: 199.99,
    image: 'https://via.placeholder.com/150?text=Apex-Pro',
    description: 'Premium mechanical keyboard with adjustable actuation.',
    inStock: true,
  },
  {
    id: '104',
    name: 'ASUS ROG Swift 27" Gaming Monitor',
    category: 'peripherals',
    price: 699.99,
    discountPrice: 599.99,
    image: 'https://via.placeholder.com/150?text=ROG-Swift',
    description: '27-inch 1440p gaming monitor with 165Hz refresh rate.',
    inStock: true,
  }
];

const RecommendationsContainer = styled.div`
  margin: 2rem 0;
`;

const RecommendationsTitle = styled.h3`
  margin-bottom: 1.5rem;
  color: var(--text-primary);
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const ProductCard = styled.div`
  background-color: var(--surface-color);
  border-radius: 8px;
  box-shadow: 0 2px 4px var(--shadow-color);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px var(--shadow-color);
  }
`;

const ProductImage = styled.div`
  height: 150px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
  
  ${ProductCard}:hover img {
    transform: scale(1.05);
  }
`;

const ProductInfo = styled.div`
  padding: 1rem;
`;

const ProductName = styled.h4`
  margin: 0 0 0.5rem;
  font-size: 1rem;
  color: var(--text-primary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ProductPrice = styled.div`
  display: flex;
  align-items: center;
`;

const CurrentPrice = styled.span`
  font-weight: bold;
  color: var(--primary-color);
`;

const OriginalPrice = styled.span`
  text-decoration: line-through;
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin-left: 0.5rem;
`;

const AddToCartButton = styled.button`
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.5rem;
  width: 100%;
  margin-top: 0.8rem;
  cursor: pointer;
  transition: opacity 0.3s ease;
  
  &:hover {
    opacity: 0.9;
  }
`;

const RecommendationTabs = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid var(--border-color);
`;

const TabButton = styled.button<{ active: boolean }>`
  background: none;
  border: none;
  padding: 0.8rem 1.5rem;
  cursor: pointer;
  color: ${props => props.active ? 'var(--primary-color)' : 'var(--text-secondary)'};
  font-weight: ${props => props.active ? 'bold' : 'normal'};
  border-bottom: ${props => props.active ? '2px solid var(--primary-color)' : 'none'};
  margin-bottom: -1px;
  transition: all 0.3s ease;
  
  &:hover {
    color: var(--primary-color);
  }
`;

const Recommendations: React.FC<RecommendationsProps> = ({ currentProduct, category }) => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = React.useState('similar');
  
  return (
    <RecommendationsContainer>
      <RecommendationsTitle>{t('product.recommendations')}</RecommendationsTitle>
      
      <RecommendationTabs>
        <TabButton 
          active={activeTab === 'similar'} 
          onClick={() => setActiveTab('similar')}
        >
          {t('recommendations.similarProducts')}
        </TabButton>
        <TabButton 
          active={activeTab === 'frequently'} 
          onClick={() => setActiveTab('frequently')}
        >
          {t('recommendations.frequentlyBoughtTogether')}
        </TabButton>
        <TabButton 
          active={activeTab === 'viewed'} 
          onClick={() => setActiveTab('viewed')}
        >
          {t('recommendations.recentlyViewed')}
        </TabButton>
      </RecommendationTabs>
      
      <ProductGrid>
        {mockRecommendations.map(product => (
          <ProductCard key={product.id}>
            <ProductImage>
              <img src={product.image} alt={product.name} />
            </ProductImage>
            <ProductInfo>
              <ProductName>{product.name}</ProductName>
              <ProductPrice>
                <CurrentPrice>
                  ${product.discountPrice || product.price}
                </CurrentPrice>
                {product.discountPrice && (
                  <OriginalPrice>${product.price}</OriginalPrice>
                )}
              </ProductPrice>
              <AddToCartButton>{t('product.addToCart')}</AddToCartButton>
            </ProductInfo>
          </ProductCard>
        ))}
      </ProductGrid>
    </RecommendationsContainer>
  );
};

export default Recommendations;
