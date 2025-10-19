import React, { useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
// import Header from '../components/Header'; // تم إزالته لأنه مضاف في App.tsx
// import Footer from '../components/Footer'; // تم إزالته لأنه مضاف في App.tsx
import ProductGrid from '../components/ProductGrid';
import SearchModal from '../components/SearchModal';
import { Product } from '../contexts/CartContext';
import { useProducts } from '../hooks/useProducts'; // استيراد useProducts


// Mock featured products for the homepage
const featuredProducts: Product[] = [
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
    id: '3',
    name: 'Logitech G Pro X Gaming Headset',
    category: 'accessories',
    price: 129.99,
    discountPrice: 99.99,
    image: 'https://via.placeholder.com/300x300?text=Headset',
    description: 'Professional-grade gaming headset with Blue VO!CE microphone technology.',
    inStock: true,
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
    isFeatured: true,
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
    isFeatured: true,
  }
];

// Mock bestsellers
const bestSellers: Product[] = [
  {
    id: '2',
    name: 'Xbox Series X',
    category: 'games',
    price: 499.99,
    image: 'https://via.placeholder.com/300x300?text=Xbox',
    description: 'The most powerful Xbox ever with 4K gaming and high frame rates.',
    inStock: true,
  },
  {
    id: '6',
    name: 'Razer DeathAdder V2 Gaming Mouse',
    category: 'peripherals',
    price: 69.99,
    image: 'https://via.placeholder.com/300x300?text=Mouse',
    description: 'High-precision gaming mouse with optical switches.',
    inStock: true,
  },
  {
    id: '5',
    name: 'AMD Ryzen 9 5900X',
    category: 'components',
    price: 549.99,
    discountPrice: 499.99,
    image: 'https://via.placeholder.com/300x300?text=Ryzen9',
    description: '12-core, 24-thread processor for demanding tasks and gaming.',
    inStock: true,
  },
  {
    id: '8',
    name: 'Corsair Vengeance RGB Pro 32GB RAM',
    category: 'components',
    price: 159.99,
    image: 'https://via.placeholder.com/300x300?text=RAM',
    description: 'High-performance DDR4 memory with RGB lighting.',
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
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const HeroSection = styled.section`
  position: relative;
  height: 500px;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://via.placeholder.com/1920x500?text=Gaming+Store');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 3rem;
  border-radius: 8px;
  overflow: hidden;
  
  @media (max-width: 768px) {
    height: 300px;
  }
`;

const HeroContent = styled.div`
  text-align: center;
  color: white;
  max-width: 800px;
  padding: 0 2rem;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const HeroButton = styled.a`
  display: inline-block;
  background-color: var(--primary-color);
  color: white;
  padding: 0.8rem 2rem;
  border-radius: 4px;
  font-weight: bold;
  text-decoration: none;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: var(--secondary-color);
  }
`;

const CategorySection = styled.section`
  margin-bottom: 3rem;
`;

const CategoryTitle = styled.h2`
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
  color: var(--text-primary);
`;

const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const CategoryCard = styled.a`
  position: relative;
  height: 200px;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: white;
  font-weight: bold;
  font-size: 1.5rem;
  text-align: center;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }
`;

const CategoryName = styled.span`
  position: relative;
  z-index: 2;
`;

const PCBuilderPromo = styled.section`
  background-color: var(--surface-color);
  border-radius: 8px;
  padding: 2rem;
  margin-bottom: 3rem;
  display: flex;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const PromoContent = styled.div`
  flex: 1;
  padding-right: 2rem;
  
  @media (max-width: 768px) {
    padding-right: 0;
    padding-bottom: 1.5rem;
    text-align: center;
  }
`;

const PromoTitle = styled.h2`
  margin-bottom: 1rem;
  font-size: 1.8rem;
  color: var(--text-primary);
`;

const PromoDescription = styled.p`
  margin-bottom: 1.5rem;
  color: var(--text-secondary);
  line-height: 1.6;
`;

const PromoButton = styled.a`
  display: inline-block;
  background-color: var(--primary-color);
  color: white;
  padding: 0.8rem 2rem;
  border-radius: 4px;
  font-weight: bold;
  text-decoration: none;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: var(--secondary-color);
  }
`;

const PromoImage = styled.div`
  flex: 1;
  height: 300px;
  background-image: url('https://via.placeholder.com/600x300?text=Build+Your+PC');
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  
  @media (max-width: 768px) {
    width: 100%;
    height: 200px;
  }
`;

const HomePage: React.FC = () => {
  const { t } = useTranslation();
  
    // Combine all products for search
  const { products: allProducts } = useProducts(); // استخدام useProducts لجلب المنتجات
  
  return (
    <PageContainer>
      {/* <Header /> تم إزالته لأنه مضاف في App.tsx */ }
      
      <MainContent>
        <HeroSection>
          <HeroContent>
            <HeroTitle>{t('app.name')}</HeroTitle>
            <HeroSubtitle>{t('app.tagline')}</HeroSubtitle>
            <HeroButton href="/store">{t('nav.store')}</HeroButton>
          </HeroContent>
        </HeroSection>
        
        <Container>
          <CategorySection>
            <CategoryTitle>{t('home.browseCategories')}</CategoryTitle>
            <CategoryGrid>
              <CategoryCard href="/store/games" style={{ backgroundImage: 'url(https://via.placeholder.com/300x200?text=Games)' }}>
                <CategoryName>{t('categories.games')}</CategoryName>
              </CategoryCard>
              <CategoryCard href="/accessories" style={{ backgroundImage: 'url(https://via.placeholder.com/300x200?text=Accessories)' }}>
                <CategoryName>{t('categories.accessories')}</CategoryName>
              </CategoryCard>
              <CategoryCard href="/components" style={{ backgroundImage: 'url(https://via.placeholder.com/300x200?text=Components)' }}>
                <CategoryName>{t('categories.components')}</CategoryName>
              </CategoryCard>
              <CategoryCard href="/peripherals" style={{ backgroundImage: 'url(https://via.placeholder.com/300x200?text=Peripherals)' }}>
                <CategoryName>{t('categories.peripherals')}</CategoryName>
              </CategoryCard>
            </CategoryGrid>
          </CategorySection>
          
          <ProductGrid products={featuredProducts} title={t('home.featuredProducts')} />
          
          <PCBuilderPromo>
            <PromoContent>
              <PromoTitle>{t('PC Builder')}</PromoTitle>
              <PromoDescription>
                {t('pc Builder')}
              </PromoDescription>
              <PromoButton href="/pc-builder">{t('StartBuilding')}</PromoButton>
            </PromoContent>
            <PromoImage />
          </PCBuilderPromo>
          
          <ProductGrid products={bestSellers} title={t('home.bestSellers')} />
        </Container>
      </MainContent>
      
      {/* <Footer /> تم إزالته لأنه مضاف في App.tsx */ }
      
      {/* <SearchModal تم نقله إلى Header.tsx */ }
    </PageContainer>
  );
};

export default HomePage;
