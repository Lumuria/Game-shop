import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductGrid from '../components/ProductGrid';
import CategoryFilter from '../components/CategoryFilter';
import PriceFilter from '../components/PriceFilter';
import { Product } from '../contexts/CartContext';

// Mock data for demonstration
const mockProducts: Product[] = [
  {
    id: '1',
    name: 'PlayStation 5 Digital Edition',
    category: 'games',
    price: 399.99,
    image: 'https://via.placeholder.com/300x300?text=PS5',
    description: 'Next-gen gaming console with lightning-fast loading times and stunning graphics.',
    inStock: true,
    isNew: true,
  },
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
    id: '3',
    name: 'Logitech G Pro X Gaming Headset',
    category: 'accessories',
    price: 129.99,
    discountPrice: 99.99,
    image: 'https://via.placeholder.com/300x300?text=Headset',
    description: 'Professional-grade gaming headset with Blue VO!CE microphone technology.',
    inStock: true,
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
    id: '6',
    name: 'Razer DeathAdder V2 Gaming Mouse',
    category: 'peripherals',
    price: 69.99,
    image: 'https://via.placeholder.com/300x300?text=Mouse',
    description: 'High-precision gaming mouse with optical switches.',
    inStock: true,
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
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = React.useState<string | null>(null);
  const [priceRange, setPriceRange] = React.useState({ min: 0, max: 1000 });
  const [showMobileFilters, setShowMobileFilters] = React.useState(false);
  
  // Filter products based on selected category and price range
  const filteredProducts = mockProducts.filter(product => {
    const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
    const matchesPrice = 
      (product.discountPrice || product.price) >= priceRange.min && 
      (product.discountPrice || product.price) <= priceRange.max;
    
    return matchesCategory && matchesPrice;
  });
  
  const categories = Array.from(new Set(mockProducts.map(product => product.category)));
  
  const handlePriceChange = (min: number, max: number) => {
    setPriceRange({ min, max });
  };
  
  const toggleMobileFilters = () => {
    setShowMobileFilters(!showMobileFilters);
  };
  
  return (
    <PageContainer>
      <Header />
      
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
      
      <Footer />
    </PageContainer>
  );
};

export default StorePage;
