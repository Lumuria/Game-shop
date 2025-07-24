import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { usePCBuilder } from '../hooks/usePCBuilder';
import { PCComponent } from '../contexts/PCBuilderContext';
import { useCart } from '../hooks/useCart';

// Mock data for PC components
const mockComponents: Record<string, PCComponent[]> = {
  processor: [
    {
      id: 'cpu1',
      type: 'processor',
      name: 'Intel Core i9-12900K',
      brand: 'Intel',
      price: 589.99,
      image: 'https://via.placeholder.com/150?text=i9-12900K',
      specifications: {
        cores: '16 (8P+8E)',
        threads: '24',
        baseFrequency: '3.2 GHz',
        boostFrequency: '5.2 GHz',
        socket: 'LGA1700',
        tdp: '125W'
      },
      powerConsumption: 125,
      performanceScore: 95
    },
    {
      id: 'cpu2',
      type: 'processor',
      name: 'AMD Ryzen 9 5950X',
      brand: 'AMD',
      price: 549.99,
      image: 'https://via.placeholder.com/150?text=Ryzen9-5950X',
      specifications: {
        cores: '16',
        threads: '32',
        baseFrequency: '3.4 GHz',
        boostFrequency: '4.9 GHz',
        socket: 'AM4',
        tdp: '105W'
      },
      powerConsumption: 105,
      performanceScore: 92
    }
  ],
  motherboard: [
    {
      id: 'mb1',
      type: 'motherboard',
      name: 'ASUS ROG Maximus Z690 Hero',
      brand: 'ASUS',
      price: 599.99,
      image: 'https://via.placeholder.com/150?text=Z690-Hero',
      specifications: {
        chipset: 'Intel Z690',
        socket: 'LGA1700',
        formFactor: 'ATX',
        memorySlots: '4',
        maxMemory: '128GB'
      },
      compatibleWith: {
        memoryType: ['DDR5'],
        processorBrand: ['Intel']
      },
      powerConsumption: 35,
      performanceScore: 90
    },
    {
      id: 'mb2',
      type: 'motherboard',
      name: 'MSI MPG X570 Gaming Pro Carbon WiFi',
      brand: 'MSI',
      price: 269.99,
      image: 'https://via.placeholder.com/150?text=X570-Gaming',
      specifications: {
        chipset: 'AMD X570',
        socket: 'AM4',
        formFactor: 'ATX',
        memorySlots: '4',
        maxMemory: '128GB'
      },
      compatibleWith: {
        memoryType: ['DDR4'],
        processorBrand: ['AMD']
      },
      powerConsumption: 30,
      performanceScore: 85
    }
  ],
  memory: [
    {
      id: 'ram1',
      type: 'memory',
      name: 'Corsair Dominator Platinum RGB 32GB DDR5',
      brand: 'Corsair',
      price: 329.99,
      image: 'https://via.placeholder.com/150?text=DDR5-RAM',
      specifications: {
        capacity: '32GB (2x16GB)',
        type: 'DDR5',
        speed: '5200MHz',
        casLatency: 'CL38'
      },
      powerConsumption: 15,
      performanceScore: 90
    },
    {
      id: 'ram2',
      type: 'memory',
      name: 'G.Skill Trident Z RGB 32GB DDR4',
      brand: 'G.Skill',
      price: 159.99,
      image: 'https://via.placeholder.com/150?text=DDR4-RAM',
      specifications: {
        capacity: '32GB (2x16GB)',
        type: 'DDR4',
        speed: '3600MHz',
        casLatency: 'CL16'
      },
      powerConsumption: 12,
      performanceScore: 80
    }
  ],
  graphics: [
    {
      id: 'gpu1',
      type: 'graphics',
      name: 'NVIDIA GeForce RTX 3080 Ti',
      brand: 'NVIDIA',
      price: 1199.99,
      image: 'https://via.placeholder.com/150?text=RTX3080Ti',
      specifications: {
        memory: '12GB GDDR6X',
        coreClock: '1365 MHz',
        boostClock: '1665 MHz',
        interface: 'PCIe 4.0 x16'
      },
      powerConsumption: 350,
      performanceScore: 95
    },
    {
      id: 'gpu2',
      type: 'graphics',
      name: 'AMD Radeon RX 6900 XT',
      brand: 'AMD',
      price: 999.99,
      image: 'https://via.placeholder.com/150?text=RX6900XT',
      specifications: {
        memory: '16GB GDDR6',
        coreClock: '1825 MHz',
        boostClock: '2250 MHz',
        interface: 'PCIe 4.0 x16'
      },
      powerConsumption: 300,
      performanceScore: 90
    }
  ],
  storage: [
    {
      id: 'ssd1',
      type: 'storage',
      name: 'Samsung 980 PRO 2TB NVMe SSD',
      brand: 'Samsung',
      price: 279.99,
      image: 'https://via.placeholder.com/150?text=980PRO',
      specifications: {
        capacity: '2TB',
        interface: 'PCIe 4.0 x4',
        readSpeed: '7000 MB/s',
        writeSpeed: '5100 MB/s'
      },
      powerConsumption: 8,
      performanceScore: 95
    },
    {
      id: 'ssd2',
      type: 'storage',
      name: 'WD Black SN850 1TB NVMe SSD',
      brand: 'Western Digital',
      price: 149.99,
      image: 'https://via.placeholder.com/150?text=SN850',
      specifications: {
        capacity: '1TB',
        interface: 'PCIe 4.0 x4',
        readSpeed: '7000 MB/s',
        writeSpeed: '5300 MB/s'
      },
      powerConsumption: 7,
      performanceScore: 92
    }
  ],
  powerSupply: [
    {
      id: 'psu1',
      type: 'powerSupply',
      name: 'Corsair HX1000i Platinum',
      brand: 'Corsair',
      price: 269.99,
      image: 'https://via.placeholder.com/150?text=HX1000i',
      specifications: {
        wattage: '1000W',
        efficiency: '80+ Platinum',
        modular: 'Full',
        fanSize: '140mm'
      },
      powerConsumption: 0,
      performanceScore: 90
    },
    {
      id: 'psu2',
      type: 'powerSupply',
      name: 'EVGA SuperNOVA 850 G5',
      brand: 'EVGA',
      price: 149.99,
      image: 'https://via.placeholder.com/150?text=SuperNOVA850',
      specifications: {
        wattage: '850W',
        efficiency: '80+ Gold',
        modular: 'Full',
        fanSize: '135mm'
      },
      powerConsumption: 0,
      performanceScore: 85
    }
  ],
  case: [
    {
      id: 'case1',
      type: 'case',
      name: 'Lian Li PC-O11 Dynamic',
      brand: 'Lian Li',
      price: 149.99,
      image: 'https://via.placeholder.com/150?text=PC-O11',
      specifications: {
        formFactor: 'Mid Tower',
        motherboardSupport: 'E-ATX, ATX, Micro-ATX, Mini-ITX',
        dimensions: '445mm x 272mm x 446mm',
        weight: '9.7kg'
      },
      powerConsumption: 0,
      performanceScore: 0
    },
    {
      id: 'case2',
      type: 'case',
      name: 'Corsair 5000D Airflow',
      brand: 'Corsair',
      price: 164.99,
      image: 'https://via.placeholder.com/150?text=5000D',
      specifications: {
        formFactor: 'Mid Tower',
        motherboardSupport: 'ATX, Micro-ATX, Mini-ITX',
        dimensions: '520mm x 245mm x 520mm',
        weight: '12.1kg'
      },
      powerConsumption: 0,
      performanceScore: 0
    }
  ],
  cooling: [
    {
      id: 'cool1',
      type: 'cooling',
      name: 'NZXT Kraken X73 RGB',
      brand: 'NZXT',
      price: 179.99,
      image: 'https://via.placeholder.com/150?text=KrakenX73',
      specifications: {
        type: 'Liquid',
        radiatorSize: '360mm',
        fanSize: '3x 120mm',
        rgb: 'Yes'
      },
      powerConsumption: 15,
      performanceScore: 90
    },
    {
      id: 'cool2',
      type: 'cooling',
      name: 'Noctua NH-D15',
      brand: 'Noctua',
      price: 99.99,
      image: 'https://via.placeholder.com/150?text=NH-D15',
      specifications: {
        type: 'Air',
        height: '165mm',
        fanSize: '2x 140mm',
        rgb: 'No'
      },
      powerConsumption: 5,
      performanceScore: 85
    }
  ]
};

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

const BuilderTitle = styled.h1`
  margin-bottom: 1.5rem;
  color: var(--text-primary);
`;

const BuilderSubtitle = styled.p`
  margin-bottom: 2rem;
  color: var(--text-secondary);
  font-size: 1.1rem;
`;

const BuilderLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 350px;
  gap: 2rem;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const ComponentsSection = styled.div``;

const ComponentCategory = styled.div`
  margin-bottom: 2rem;
`;

const CategoryHeader = styled.h2`
  margin-bottom: 1rem;
  font-size: 1.5rem;
  color: var(--text-primary);
`;

const ComponentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ComponentCard = styled.div<{ selected: boolean }>`
  background-color: var(--surface-color);
  border: 2px solid ${props => props.selected ? 'var(--primary-color)' : 'var(--border-color)'};
  border-radius: 8px;
  padding: 1rem;
  display: flex;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px var(--shadow-color);
  }
`;

const ComponentImage = styled.div`
  width: 80px;
  height: 80px;
  margin-right: 1rem;
  flex-shrink: 0;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const ComponentInfo = styled.div`
  flex-grow: 1;
`;

const ComponentName = styled.h3`
  margin: 0 0 0.5rem;
  font-size: 1rem;
`;

const ComponentBrand = styled.p`
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`;

const ComponentPrice = styled.p`
  font-weight: bold;
  color: var(--primary-color);
`;

const SummarySection = styled.div`
  position: sticky;
  top: 2rem;
`;

const SummaryCard = styled.div`
  background-color: var(--surface-color);
  border-radius: 8px;
  box-shadow: 0 2px 8px var(--shadow-color);
  padding: 1.5rem;
  margin-bottom: 1.5rem;
`;

const SummaryTitle = styled.h2`
  margin: 0 0 1rem;
  font-size: 1.3rem;
`;

const CompatibilityScore = styled.div`
  text-align: center;
  margin-bottom: 1.5rem;
`;

const ScoreCircle = styled.div<{ score: number }>`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin: 0 auto 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: bold;
  color: white;
  background: ${props => {
    if (props.score >= 80) return 'var(--success-color)';
    if (props.score >= 50) return 'var(--warning-color)';
    return 'var(--error-color)';
  }};
`;

const ScoreLabel = styled.p`
  font-size: 1.1rem;
  color: var(--text-primary);
`;

const SummaryList = styled.div`
  margin-bottom: 1.5rem;
`;

const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.8rem 0;
  border-bottom: 1px solid var(--border-color);
  
  &:last-child {
    border-bottom: none;
  }
`;

const ItemLabel = styled.span`
  color: var(--text-secondary);
`;

const ItemValue = styled.span`
  font-weight: bold;
  color: var(--text-primary);
`;

const ActionButton = styled.button`
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 4px;
  padding: 1rem;
  width: 100%;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: opacity 0.3s ease;
  margin-bottom: 1rem;
  
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
  color: var(--primary-color);
  border: 1px solid var(--primary-color);
  
  &:hover {
    background-color: var(--primary-color);
    color: white;
  }
`;

const PCBuilderPage: React.FC = () => {
  const { t } = useTranslation();
  const { 
    components, 
    addComponent, 
    removeComponent, 
    getCompatibilityScore,
    getPowerConsumption,
    getPerformanceScore,
    getTotalPrice
  } = usePCBuilder();
  const { addToCart } = useCart();
  
  const handleSelectComponent = (type: string, component: PCComponent) => {
    if (components[type]?.id === component.id) {
      removeComponent(type);
    } else {
      addComponent(type, component);
    }
  };
  
  const handleAddAllToCart = () => {
    Object.values(components).forEach(component => {
      if (component) {
        addToCart({
          id: component.id,
          name: component.name,
          category: component.type,
          price: component.price,
          image: component.image,
          description: `${component.brand} ${component.name}`,
          inStock: true
        }, 1);
      }
    });
  };
  
  const compatibilityScore = getCompatibilityScore();
  const powerConsumption = getPowerConsumption();
  const performanceScore = getPerformanceScore();
  const totalPrice = getTotalPrice();
  
  const hasComponents = Object.values(components).some(component => component !== null);
  
  return (
    <PageContainer>
      <Header />
      
      <MainContent>
        <Container>
          <BuilderTitle>{t('pcBuilder.title')}</BuilderTitle>
          <BuilderSubtitle>{t('pcBuilder.subtitle')}</BuilderSubtitle>
          
          <BuilderLayout>
            <ComponentsSection>
              {Object.keys(mockComponents).map((type) => (
                <ComponentCategory key={type}>
                  <CategoryHeader>{t(`pcBuilder.${type}`)}</CategoryHeader>
                  <ComponentGrid>
                    {mockComponents[type].map((component) => (
                      <ComponentCard 
                        key={component.id}
                        selected={components[type]?.id === component.id}
                        onClick={() => handleSelectComponent(type, component)}
                      >
                        <ComponentImage>
                          <img src={component.image} alt={component.name} />
                        </ComponentImage>
                        <ComponentInfo>
                          <ComponentName>{component.name}</ComponentName>
                          <ComponentBrand>{component.brand}</ComponentBrand>
                          <ComponentPrice>${component.price.toFixed(2)}</ComponentPrice>
                        </ComponentInfo>
                      </ComponentCard>
                    ))}
                  </ComponentGrid>
                </ComponentCategory>
              ))}
            </ComponentsSection>
            
            <SummarySection>
              <SummaryCard>
                <SummaryTitle>{t('pcBuilder.compatibility')}</SummaryTitle>
                <CompatibilityScore>
                  <ScoreCircle score={compatibilityScore}>
                    {compatibilityScore}%
                  </ScoreCircle>
                  <ScoreLabel>{t('pcBuilder.compatibilityScore')}</ScoreLabel>
                </CompatibilityScore>
                
                <SummaryList>
                  <SummaryItem>
                    <ItemLabel>{t('pcBuilder.powerConsumption')}</ItemLabel>
                    <ItemValue>{powerConsumption} W</ItemValue>
                  </SummaryItem>
                  <SummaryItem>
                    <ItemLabel>{t('pcBuilder.performanceEstimate')}</ItemLabel>
                    <ItemValue>{performanceScore}/100</ItemValue>
                  </SummaryItem>
                  <SummaryItem>
                    <ItemLabel>{t('cart.total')}</ItemLabel>
                    <ItemValue>${totalPrice.toFixed(2)}</ItemValue>
                  </SummaryItem>
                </SummaryList>
                
                <ActionButton 
                  onClick={handleAddAllToCart}
                  disabled={!hasComponents}
                >
                  {t('pcBuilder.addToCart')}
                </ActionButton>
                <SecondaryButton disabled={!hasComponents}>
                  {t('pcBuilder.saveConfig')}
                </SecondaryButton>
                <SecondaryButton disabled={!hasComponents}>
                  {t('pcBuilder.shareConfig')}
                </SecondaryButton>
              </SummaryCard>
            </SummarySection>
          </BuilderLayout>
        </Container>
      </MainContent>
      
      <Footer />
    </PageContainer>
  );
};

export default PCBuilderPage;
