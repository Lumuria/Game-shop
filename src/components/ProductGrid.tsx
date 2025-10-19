import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import ProductCard from './ProductCard';
import { Product } from '../contexts/CartContext';

interface ProductGridProps {
  products: Product[];
  title?: string;
}

const GridContainer = styled.div`
  margin: 2rem 0;
`;

const Title = styled.h2`
  margin-bottom: 1.5rem;
  color: var(--text-primary);
  font-size: 1.8rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  
  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const EmptyMessage = styled.div`
  text-align: center;
  padding: 3rem 0;
  color: var(--text-secondary);
  font-size: 1.2rem;
`;

const ProductGrid: React.FC<ProductGridProps> = ({ products, title }) => {
  const { t } = useTranslation();
  
  return (
    <GridContainer>
      {title && <Title>{title}</Title>}
      {products.length > 0 ? (
        <Grid>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Grid>
      ) : (
        <EmptyMessage>{t('product.noProductsFound')}</EmptyMessage>
      )}
    </GridContainer>
  );
};

export default ProductGrid;
