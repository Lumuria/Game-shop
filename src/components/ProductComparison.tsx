import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Product } from '../contexts/CartContext';

interface ProductComparisonProps {
  products: Product[];
  onClose: () => void;
}

const ComparisonOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;

const ComparisonContainer = styled.div`
  background-color: var(--surface-color);
  border-radius: 8px;
  box-shadow: 0 5px 20px var(--shadow-color);
  width: 90%;
  max-width: 1000px;
  max-height: 90vh;
  overflow-y: auto;
  padding: 1.5rem;
`;

const ComparisonHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--border-color);
`;

const ComparisonTitle = styled.h2`
  margin: 0;
  color: var(--text-primary);
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: var(--text-secondary);
  font-size: 1.5rem;
  cursor: pointer;
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--error-color);
  }
`;

const ComparisonTable = styled.div`
  display: grid;
  grid-template-columns: 200px repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  overflow-x: auto;
`;

const TableHeader = styled.div`
  font-weight: bold;
  color: var(--text-primary);
  padding: 0.8rem;
  background-color: var(--background-color);
  border-radius: 4px;
  text-align: center;
`;

const TableCell = styled.div`
  padding: 0.8rem;
  border-bottom: 1px solid var(--border-color);
  color: var(--text-primary);
  
  &:first-child {
    font-weight: bold;
    color: var(--text-secondary);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: contain;
  margin-bottom: 0.5rem;
`;

const ProductName = styled.div`
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const ProductPrice = styled.div`
  font-size: 1.1rem;
  color: var(--primary-color);
  font-weight: bold;
`;

const OriginalPrice = styled.span`
  text-decoration: line-through;
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin-left: 0.5rem;
  font-weight: normal;
`;

const ActionButton = styled.button`
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.5rem;
  width: 100%;
  margin-top: 0.5rem;
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

const ProductComparison: React.FC<ProductComparisonProps> = ({ products, onClose }) => {
  const { t } = useTranslation();
  
  // Define comparison attributes
  const attributes = [
    'category',
    'price',
    'inStock',
    'specifications.processor',
    'specifications.memory',
    'specifications.storage',
    'specifications.graphics',
    'specifications.display',
    'specifications.connectivity',
    'specifications.battery',
    'specifications.dimensions',
    'specifications.weight',
  ];
  
  return (
    <ComparisonOverlay>
      <ComparisonContainer>
        <ComparisonHeader>
          <ComparisonTitle>{t('product.comparison')}</ComparisonTitle>
          <CloseButton onClick={onClose}>&times;</CloseButton>
        </ComparisonHeader>
        
        <ComparisonTable>
          {/* Header row with product images and names */}
          <TableHeader></TableHeader>
          {products.map((product) => (
            <TableHeader key={product.id}>
              <ProductImage src={product.image} alt={product.name} />
              <ProductName>{product.name}</ProductName>
              <ProductPrice>
                {product.discountPrice ? (
                  <>
                    ${product.discountPrice}
                    <OriginalPrice>${product.price}</OriginalPrice>
                  </>
                ) : (
                  `$${product.price}`
                )}
              </ProductPrice>
              <ActionButton disabled={!product.inStock}>
                {product.inStock ? t('product.addToCart') : t('product.outOfStock')}
              </ActionButton>
            </TableHeader>
          ))}
          
          {/* Category row */}
          <TableCell>{t('product.category')}</TableCell>
          {products.map((product) => (
            <TableCell key={`${product.id}-category`}>
              {t(`categories.${product.category.toLowerCase()}`)}
            </TableCell>
          ))}
          
          {/* Availability row */}
          <TableCell>{t('product.availability')}</TableCell>
          {products.map((product) => (
            <TableCell key={`${product.id}-stock`}>
              {product.inStock ? (
                <span style={{ color: 'var(--success-color)' }}>{t('product.inStock')}</span>
              ) : (
                <span style={{ color: 'var(--error-color)' }}>{t('product.outOfStock')}</span>
              )}
            </TableCell>
          ))}
          
          {/* Specifications rows */}
          {Object.entries(products[0]?.specifications || {}).map(([key, value]) => (
            <React.Fragment key={key}>
              <TableCell>{t(`product.specifications.${key}`)}</TableCell>
              {products.map((product) => (
                <TableCell key={`${product.id}-${key}`}>
                  {product.specifications?.[key] || '-'}
                </TableCell>
              ))}
            </React.Fragment>
          ))}
        </ComparisonTable>
      </ComparisonContainer>
    </ComparisonOverlay>
  );
};

export default ProductComparison;
