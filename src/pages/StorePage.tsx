import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
// import Header from '../components/Header'; // تم إزالته لأنه مضاف في App.tsx
// import Footer from '../components/Footer'; // تم إزالته لأنه مضاف في App.tsx
import ProductGrid from '../components/ProductGrid';
import CategoryFilter from '../components/CategoryFilter';
import PriceFilter from '../components/PriceFilter';
import { useProducts } from '../hooks/useProducts';




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

const StoreLayout = styled.div`
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Sidebar = styled.aside`
  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileFilters = styled.div`
  display: none;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const FilterButton = styled.button`
  background-color: var(--surface-color);
  border: 1px solid var(--border-color);
  color: var(--text-primary);
  padding: 0.8rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  
  &:hover {
    background-color: var(--background-color);
  }
`;

const FilterIcon = styled.span`
  margin-right: 0.5rem;
`;

const StorePage: React.FC = () => {
  const { products, isLoading, error } = useProducts();
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = React.useState<string | null>(null);
  const [priceRange, setPriceRange] = React.useState({ min: 0, max: 1000 });
  const [showMobileFilters, setShowMobileFilters] = React.useState(false);
  
  // Filter products based on selected category and price range
  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
    const matchesPrice = 
      (product.discountPrice || product.price) >= priceRange.min && 
      (product.discountPrice || product.price) <= priceRange.max;
    
    return matchesCategory && matchesPrice;
  });
  
  const categories = Array.from(new Set(products.map(product => product.category)));
  
  const handlePriceChange = (min: number, max: number) => {
    setPriceRange({ min, max });
  };
  
  const toggleMobileFilters = () => {
    setShowMobileFilters(!showMobileFilters);
  };
  
  return (
    <PageContainer>
{/* <Header /> تم إزالته لأنه مضاف في App.tsx */ }
      
      <MainContent>
        <Container>
          <h1>{t('nav.store')}</h1>
          
          <MobileFilters>
            <FilterButton onClick={toggleMobileFilters}>
              <FilterIcon>🔍</FilterIcon>
              {t('store.filters')}
            </FilterButton>
            
            {showMobileFilters && (
              <>
                <CategoryFilter 
                  categories={categories}
                  selectedCategory={selectedCategory}
                  onSelectCategory={setSelectedCategory}
                />
                <PriceFilter 
                  minPrice={0}
                  maxPrice={1000}
                  currentMin={priceRange.min}
                  currentMax={priceRange.max}
                  onPriceChange={handlePriceChange}
                />
              </>
            )}
          </MobileFilters>
          
          <StoreLayout>
            <Sidebar>
              <CategoryFilter 
                categories={categories}
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
              />
              <PriceFilter 
                minPrice={0}
                maxPrice={1000}
                currentMin={priceRange.min}
                currentMax={priceRange.max}
                onPriceChange={handlePriceChange}
              />
            </Sidebar>
            
            <div>
              <ProductGrid 
                products={filteredProducts} 
                title={selectedCategory ? t(`categories.${selectedCategory.toLowerCase()}`) : t('store.allProducts')}
              />
            </div>
          </StoreLayout>
        </Container>
      </MainContent>
      
{/* <Footer /> تم إزالته لأنه مضاف في App.tsx */ }
    </PageContainer>
  );
};

export default StorePage;
