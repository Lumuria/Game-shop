import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductGrid from '../components/ProductGrid';
import CategoryFilter from '../components/CategoryFilter';
import PriceFilter from '../components/PriceFilter';
import { Product } from '../contexts/CartContext';

// منتجات وهمية (mock data)
const mockProducts: Product[] = [
  {
    id: '1',
    name: 'PlayStation 5 Digital Edition',
    category: 'games',
    price: 399.99,
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/PlayStation_5_Console_and_DualSense_Controller.jpg',
    description: 'Next-gen gaming console with lightning-fast loading times and stunning graphics.',
    inStock: true,
    isNew: true,
  },
  {
    id: '2',
    name: 'Xbox Series X',
    category: 'games',
    price: 499.99,
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/43/Xbox_Series_X_and_Controller.png',
    description: 'The most powerful Xbox ever with 4K gaming and high frame rates.',
    inStock: true,
  },
  {
    id: '3',
    name: 'Logitech G Pro X Gaming Headset',
    category: 'accessories',
    price: 129.99,
    discountPrice: 99.99,
    image: 'https://resource.logitechg.com/content/dam/gaming/en/products/g-pro-x/g-pro-x-headset-gallery-1.png',
    description: 'Professional-grade gaming headset with Blue VO!CE microphone technology.',
    inStock: true,
  },
  {
    id: '4',
    name: 'NVIDIA GeForce RTX 3080',
    category: 'components',
    price: 699.99,
    image: 'https://images.nvidia.com/geforce/gallery/rtx-3080/gallery-01.png',
    description: 'High-end graphics card for ultimate gaming performance.',
    inStock: false,
  },
  {
    id: '5',
    name: 'AMD Ryzen 9 5900X',
    category: 'components',
    price: 549.99,
    discountPrice: 499.99,
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/AMD_Ryzen_9_5900X_Processor.png',
    description: '12-core, 24-thread processor for demanding tasks and gaming.',
    inStock: true,
  },
  {
    id: '6',
    name: 'Razer DeathAdder V2 Gaming Mouse',
    category: 'peripherals',
    price: 69.99,
    image: 'https://assets2.razerzone.com/images/pnx.assets/2b48496fa03c3d0be28aa4fa4f4edc9d/deathadder-v2-gallery-01.jpg',
    description: 'High-precision gaming mouse with optical switches.',
    inStock: true,
  },
  {
    id: '7',
    name: 'Samsung Odyssey G7 32" Gaming Monitor',
    category: 'peripherals',
    price: 799.99,
    discountPrice: 649.99,
    image: 'https://images.samsung.com/is/image/samsung/p6pim/levant/odyssey-g7-lc32g75tqsnxza-frontblack-282842214?$720_576_PNG$',
    description: 'Curved QLED gaming monitor with 240Hz refresh rate and 1ms response time.',
    inStock: true,
  },
  {
    id: '8',
    name: 'Corsair Vengeance RGB Pro 32GB RAM',
    category: 'components',
    price: 159.99,
    image: 'https://www.corsair.com/medias/sys_master/images/images/h24/h8d/9135015649886/-CH-256A-CPD-32GB-DDR4-3600MHz-C16-VE_RGB_PRO-DIMM.png',
    description: 'High-performance DDR4 memory with RGB lighting.',
    inStock: true,
  }
];

// 🎨 Styled Components
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

// 📦 Component
const StorePage: React.FC = () => {
  const { t } = useTranslation();

  const [selectedCategory, setSelectedCategory] = React.useState<string | null>(null);
  const [priceRange, setPriceRange] = React.useState({ min: 0, max: 1000 });
  const [showMobileFilters, setShowMobileFilters] = React.useState(false);

  const categories = Array.from(new Set(mockProducts.map(product => product.category)));

  const handlePriceChange = (min: number, max: number) => {
    setPriceRange({ min, max });
  };

  const toggleMobileFilters = () => {
    setShowMobileFilters(prev => !prev);
  };

  const filteredProducts = mockProducts.filter(product => {
    const price = product.discountPrice ?? product.price;
    const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
    const matchesPrice = price >= priceRange.min && price <= priceRange.max;
    return matchesCategory && matchesPrice;
  });

  return (
    <PageContainer>
      <Header />

      <MainContent>
        <Container>
          <h1>{t('nav.store') || 'Store'}</h1>

          <MobileFilters>
            <FilterButton onClick={toggleMobileFilters}>
              <FilterIcon>🔍</FilterIcon>
              {t('store.filters') || 'Filters'}
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
                title={
                  selectedCategory
                    ? t(`categories.${selectedCategory.toLowerCase()}`) || selectedCategory
                    : t('store.allProducts') || 'All Products'
                }
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
