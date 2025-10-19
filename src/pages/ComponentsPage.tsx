import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../hooks/useLanguage';
import { useTheme } from '../hooks/useTheme';
import { useCart } from '../hooks/useCart';
import ProductCard from '../components/ProductCard';

// بيانات قطع الكمبيوتر المحدثة والشاملة
const componentsData = [
  // معالجات (Processors)
  {
    id: 'cpu-1',
    name: 'AMD Ryzen 9 5900X',
    nameAr: 'معالج إيه إم دي رايزن 9 5900 إكس',
    price: 549.99,
    originalPrice: 599.99,
    image: 'https://images.unsplash.com/photo-1555617981-dac3880eac6e?w=400',
    category: 'processors',
    categoryAr: 'معالجات',
    description: '12-Core, 24-Thread Unlocked Desktop Processor',
    descriptionAr: 'معالج سطح مكتب غير مقفل 12 نواة، 24 خيط',
    inStock: true,
    isNew: false,
    rating: 4.9,
    reviews: 456
  },
  {
    id: 'cpu-2',
    name: 'Intel Core i9-12900K',
    nameAr: 'معالج إنتل كور آي 9-12900 كي',
    price: 589.99,
    originalPrice: null,
    image: 'https://images.unsplash.com/photo-1555617981-dac3880eac6e?w=400',
    category: 'processors',
    categoryAr: 'معالجات',
    description: '16-Core (8P+8E) Desktop Processor with Integrated Graphics',
    descriptionAr: 'معالج سطح مكتب 16 نواة (8P+8E) مع رسومات مدمجة',
    inStock: true,
    isNew: true,
    rating: 4.8,
    reviews: 234
  },
  {
    id: 'cpu-3',
    name: 'AMD Ryzen 7 5800X3D',
    nameAr: 'معالج إيه إم دي رايزن 7 5800 إكس 3 دي',
    price: 449.99,
    originalPrice: null,
    image: 'https://images.unsplash.com/photo-1555617981-dac3880eac6e?w=400',
    category: 'processors',
    categoryAr: 'معالجات',
    description: '8-Core, 16-Thread Desktop Processor with 3D V-Cache',
    descriptionAr: 'معالج سطح مكتب 8 نواة، 16 خيط مع ذاكرة تخزين ثلاثية الأبعاد',
    inStock: true,
    isNew: true,
    rating: 4.9,
    reviews: 189
  },
  {
    id: 'cpu-4',
    name: 'Intel Core i7-12700K',
    nameAr: 'معالج إنتل كور آي 7-12700 كي',
    price: 409.99,
    originalPrice: 449.99,
    image: 'https://images.unsplash.com/photo-1555617981-dac3880eac6e?w=400',
    category: 'processors',
    categoryAr: 'معالجات',
    description: '12-Core (8P+4E) Desktop Processor',
    descriptionAr: 'معالج سطح مكتب 12 نواة (8P+4E)',
    inStock: true,
    isNew: false,
    rating: 4.7,
    reviews: 345
  },
  {
    id: 'cpu-5',
    name: 'AMD Ryzen 5 5600X',
    nameAr: 'معالج إيه إم دي رايزن 5 5600 إكس',
    price: 299.99,
    originalPrice: 329.99,
    image: 'https://images.unsplash.com/photo-1555617981-dac3880eac6e?w=400',
    category: 'processors',
    categoryAr: 'معالجات',
    description: '6-Core, 12-Thread Unlocked Desktop Processor',
    descriptionAr: 'معالج سطح مكتب غير مقفل 6 نواة، 12 خيط',
    inStock: true,
    isNew: false,
    rating: 4.8,
    reviews: 567
  },

  // كروت الرسومات (Graphics Cards)
  {
    id: 'gpu-1',
    name: 'NVIDIA GeForce RTX 4090',
    nameAr: 'كارت رسومات إنفيديا جي فورس آر تي إكس 4090',
    price: 1599.99,
    originalPrice: null,
    image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=400',
    category: 'graphics-cards',
    categoryAr: 'كروت رسومات',
    description: 'The Ultimate GeForce RTX GPU for Gaming and Creating',
    descriptionAr: 'كارت رسومات جي فورس آر تي إكس الأقوى للألعاب والإبداع',
    inStock: true,
    isNew: true,
    rating: 4.9,
    reviews: 123
  },
  {
    id: 'gpu-2',
    name: 'NVIDIA GeForce RTX 4080',
    nameAr: 'كارت رسومات إنفيديا جي فورس آر تي إكس 4080',
    price: 1199.99,
    originalPrice: null,
    image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=400',
    category: 'graphics-cards',
    categoryAr: 'كروت رسومات',
    description: 'Beyond Fast for Gamers and Creators',
    descriptionAr: 'أسرع من السريع للاعبين والمبدعين',
    inStock: true,
    isNew: true,
    rating: 4.8,
    reviews: 189
  },
  {
    id: 'gpu-3',
    name: 'AMD Radeon RX 7900 XTX',
    nameAr: 'كارت رسومات إيه إم دي راديون آر إكس 7900 إكس تي إكس',
    price: 999.99,
    originalPrice: null,
    image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=400',
    category: 'graphics-cards',
    categoryAr: 'كروت رسومات',
    description: 'High-Performance Gaming Graphics Card',
    descriptionAr: 'كارت رسومات ألعاب عالي الأداء',
    inStock: true,
    isNew: true,
    rating: 4.7,
    reviews: 234
  },
  {
    id: 'gpu-4',
    name: 'NVIDIA GeForce RTX 3080',
    nameAr: 'كارت رسومات إنفيديا جي فورس آر تي إكس 3080',
    price: 699.99,
    originalPrice: 799.99,
    image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=400',
    category: 'graphics-cards',
    categoryAr: 'كروت رسومات',
    description: 'Ampere Architecture Gaming Graphics Card',
    descriptionAr: 'كارت رسومات ألعاب بمعمارية أمبير',
    inStock: false,
    isNew: false,
    rating: 4.8,
    reviews: 456
  },
  {
    id: 'gpu-5',
    name: 'AMD Radeon RX 6800 XT',
    nameAr: 'كارت رسومات إيه إم دي راديون آر إكس 6800 إكس تي',
    price: 649.99,
    originalPrice: 699.99,
    image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=400',
    category: 'graphics-cards',
    categoryAr: 'كروت رسومات',
    description: 'RDNA 2 Gaming Graphics Card',
    descriptionAr: 'كارت رسومات ألعاب آر دي إن إيه 2',
    inStock: true,
    isNew: false,
    rating: 4.6,
    reviews: 345
  },

  // الذاكرة (Memory/RAM)
  {
    id: 'ram-1',
    name: 'Corsair Vengeance RGB Pro 32GB (2x16GB) DDR4',
    nameAr: 'ذاكرة كورسير فينجانس آر جي بي برو 32 جيجا (2×16 جيجا) دي دي آر 4',
    price: 159.99,
    originalPrice: null,
    image: 'https://images.unsplash.com/photo-1562976540-1502c2145186?w=400',
    category: 'memory',
    categoryAr: 'ذاكرة',
    description: 'High Performance DDR4 Desktop Memory with RGB Lighting',
    descriptionAr: 'ذاكرة سطح مكتب دي دي آر 4 عالية الأداء مع إضاءة آر جي بي',
    inStock: true,
    isNew: false,
    rating: 4.8,
    reviews: 234
  },
  {
    id: 'ram-2',
    name: 'G.SKILL Trident Z5 RGB 32GB (2x16GB) DDR5',
    nameAr: 'ذاكرة جي سكيل ترايدنت زد 5 آر جي بي 32 جيجا (2×16 جيجا) دي دي آر 5',
    price: 299.99,
    originalPrice: 349.99,
    image: 'https://images.unsplash.com/photo-1562976540-1502c2145186?w=400',
    category: 'memory',
    categoryAr: 'ذاكرة',
    description: 'Next-Gen DDR5 Memory with RGB Lighting',
    descriptionAr: 'ذاكرة دي دي آر 5 الجيل التالي مع إضاءة آر جي بي',
    inStock: true,
    isNew: true,
    rating: 4.9,
    reviews: 156
  },
  {
    id: 'ram-3',
    name: 'Kingston Fury Beast 16GB (2x8GB) DDR4',
    nameAr: 'ذاكرة كينجستون فيوري بيست 16 جيجا (2×8 جيجا) دي دي آر 4',
    price: 79.99,
    originalPrice: 99.99,
    image: 'https://images.unsplash.com/photo-1562976540-1502c2145186?w=400',
    category: 'memory',
    categoryAr: 'ذاكرة',
    description: 'High-Speed DDR4 Gaming Memory',
    descriptionAr: 'ذاكرة ألعاب دي دي آر 4 عالية السرعة',
    inStock: true,
    isNew: false,
    rating: 4.6,
    reviews: 345
  },
  {
    id: 'ram-4',
    name: 'Corsair Dominator Platinum RGB 64GB (4x16GB) DDR4',
    nameAr: 'ذاكرة كورسير دومينيتر بلاتينيوم آر جي بي 64 جيجا (4×16 جيجا) دي دي آر 4',
    price: 599.99,
    originalPrice: null,
    image: 'https://images.unsplash.com/photo-1562976540-1502c2145186?w=400',
    category: 'memory',
    categoryAr: 'ذاكرة',
    description: 'Premium DDR4 Memory with Patented DHX Cooling',
    descriptionAr: 'ذاكرة دي دي آر 4 متميزة مع تبريد دي إتش إكس المسجل',
    inStock: true,
    isNew: false,
    rating: 4.9,
    reviews: 89
  },

  // التخزين (Storage)
  {
    id: 'ssd-1',
    name: 'Samsung 980 PRO 1TB NVMe SSD',
    nameAr: 'قرص تخزين سامسونج 980 برو 1 تيرا إن في إم إي',
    price: 149.99,
    originalPrice: 179.99,
    image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=400',
    category: 'storage',
    categoryAr: 'تخزين',
    description: 'PCIe 4.0 NVMe SSD for High-Performance Computing',
    descriptionAr: 'قرص تخزين إن في إم إي بي سي آي إي 4.0 للحوسبة عالية الأداء',
    inStock: true,
    isNew: false,
    rating: 4.8,
    reviews: 567
  },
  {
    id: 'ssd-2',
    name: 'WD Black SN850X 2TB NVMe SSD',
    nameAr: 'قرص تخزين دبليو دي بلاك إس إن 850 إكس 2 تيرا إن في إم إي',
    price: 299.99,
    originalPrice: null,
    image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=400',
    category: 'storage',
    categoryAr: 'تخزين',
    description: 'Gaming SSD with Heatsink for PlayStation 5',
    descriptionAr: 'قرص تخزين ألعاب مع مبدد حراري لبلايستيشن 5',
    inStock: true,
    isNew: true,
    rating: 4.7,
    reviews: 234
  },
  {
    id: 'ssd-3',
    name: 'Crucial MX4 1TB SATA SSD',
    nameAr: 'قرص تخزين كروشيال إم إكس 4 1 تيرا ساتا',
    price: 89.99,
    originalPrice: 109.99,
    image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=400',
    category: 'storage',
    categoryAr: 'تخزين',
    description: 'SATA 2.5" Internal SSD',
    descriptionAr: 'قرص تخزين داخلي ساتا 2.5 بوصة',
    inStock: true,
    isNew: false,
    rating: 4.5,
    reviews: 456
  },
  {
    id: 'hdd-1',
    name: 'Seagate BarraCuda 4TB HDD',
    nameAr: 'قرص صلب سيجيت باراكودا 4 تيرا',
    price: 89.99,
    originalPrice: null,
    image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=400',
    category: 'storage',
    categoryAr: 'تخزين',
    description: '3.5" Internal Hard Drive for Desktop',
    descriptionAr: 'قرص صلب داخلي 3.5 بوصة لسطح المكتب',
    inStock: true,
    isNew: false,
    rating: 4.4,
    reviews: 345
  },

  // اللوحات الأم (Motherboards)
  {
    id: 'mb-1',
    name: 'ASUS ROG Strix B550-F Gaming',
    nameAr: 'لوحة أم أسوس آر أو جي ستريكس بي 550-إف جيمنج',
    price: 189.99,
    originalPrice: 219.99,
    image: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=400',
    category: 'motherboards',
    categoryAr: 'لوحات أم',
    description: 'AMD B550 ATX Gaming Motherboard',
    descriptionAr: 'لوحة أم ألعاب إيه إم دي بي 550 إيه تي إكس',
    inStock: true,
    isNew: false,
    rating: 4.7,
    reviews: 234
  },
  {
    id: 'mb-2',
    name: 'MSI MAG B550 TOMAHAWK',
    nameAr: 'لوحة أم إم إس آي ماج بي 550 توماهوك',
    price: 179.99,
    originalPrice: null,
    image: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=400',
    category: 'motherboards',
    categoryAr: 'لوحات أم',
    description: 'AMD B550 ATX Motherboard',
    descriptionAr: 'لوحة أم إيه إم دي بي 550 إيه تي إكس',
    inStock: true,
    isNew: false,
    rating: 4.6,
    reviews: 189
  },
  {
    id: 'mb-3',
    name: 'ASUS ROG Maximus Z690 Hero',
    nameAr: 'لوحة أم أسوس آر أو جي ماكسيموس زد 690 هيرو',
    price: 599.99,
    originalPrice: null,
    image: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=400',
    category: 'motherboards',
    categoryAr: 'لوحات أم',
    description: 'Intel Z690 ATX Gaming Motherboard',
    descriptionAr: 'لوحة أم ألعاب إنتل زد 690 إيه تي إكس',
    inStock: true,
    isNew: true,
    rating: 4.9,
    reviews: 123
  },

  // مزودات الطاقة (Power Supplies)
  {
    id: 'psu-1',
    name: 'Corsair RM850x 850W 80+ Gold',
    nameAr: 'مزود طاقة كورسير آر إم 850 إكس 850 واط 80+ ذهبي',
    price: 139.99,
    originalPrice: 159.99,
    image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400',
    category: 'power-supplies',
    categoryAr: 'مزودات طاقة',
    description: 'Fully Modular ATX Power Supply',
    descriptionAr: 'مزود طاقة إيه تي إكس معياري بالكامل',
    inStock: true,
    isNew: false,
    rating: 4.8,
    reviews: 345
  },
  {
    id: 'psu-2',
    name: 'EVGA SuperNOVA 1000 G5 80+ Gold',
    nameAr: 'مزود طاقة إي في جي إيه سوبر نوفا 1000 جي 5 80+ ذهبي',
    price: 199.99,
    originalPrice: null,
    image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400',
    category: 'power-supplies',
    categoryAr: 'مزودات طاقة',
    description: '1000W Fully Modular Power Supply',
    descriptionAr: 'مزود طاقة 1000 واط معياري بالكامل',
    inStock: true,
    isNew: true,
    rating: 4.7,
    reviews: 189
  },
  {
    id: 'psu-3',
    name: 'Seasonic Focus GX-750 80+ Gold',
    nameAr: 'مزود طاقة سيسونيك فوكس جي إكس-750 80+ ذهبي',
    price: 119.99,
    originalPrice: 139.99,
    image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400',
    category: 'power-supplies',
    categoryAr: 'مزودات طاقة',
    description: '750W Fully Modular Power Supply',
    descriptionAr: 'مزود طاقة 750 واط معياري بالكامل',
    inStock: true,
    isNew: false,
    rating: 4.9,
    reviews: 267
  },

  // التبريد (Cooling)
  {
    id: 'cool-1',
    name: 'NZXT Kraken X63 280mm AIO Cooler',
    nameAr: 'مبرد إن زد إكس تي كراكن إكس 63 280 مم إيه آي أو',
    price: 149.99,
    originalPrice: null,
    image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400',
    category: 'cooling',
    categoryAr: 'تبريد',
    description: 'All-in-One Liquid CPU Cooler',
    descriptionAr: 'مبرد معالج سائل الكل في واحد',
    inStock: true,
    isNew: false,
    rating: 4.6,
    reviews: 234
  },
  {
    id: 'cool-2',
    name: 'Corsair iCUE H150i Elite Capellix',
    nameAr: 'مبرد كورسير آي كيو إي إتش 150 آي إليت كابيليكس',
    price: 189.99,
    originalPrice: 219.99,
    image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400',
    category: 'cooling',
    categoryAr: 'تبريد',
    description: '360mm RGB Liquid CPU Cooler',
    descriptionAr: 'مبرد معالج سائل آر جي بي 360 مم',
    inStock: true,
    isNew: true,
    rating: 4.8,
    reviews: 156
  },
  {
    id: 'cool-3',
    name: 'Noctua NH-D15 Air CPU Cooler',
    nameAr: 'مبرد معالج هوائي نوكتوا إن إتش-دي 15',
    price: 99.99,
    originalPrice: null,
    image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400',
    category: 'cooling',
    categoryAr: 'تبريد',
    description: 'Premium Air CPU Cooler with Dual Fans',
    descriptionAr: 'مبرد معالج هوائي متميز بمروحتين',
    inStock: true,
    isNew: false,
    rating: 4.9,
    reviews: 345
  }
];

// فئات قطع الكمبيوتر
const categories = [
  { id: 'all', name: 'جميع القطع', nameEn: 'All Components' },
  { id: 'processors', name: 'معالجات', nameEn: 'Processors' },
  { id: 'graphics-cards', name: 'كروت رسومات', nameEn: 'Graphics Cards' },
  { id: 'memory', name: 'ذاكرة', nameEn: 'Memory' },
  { id: 'storage', name: 'تخزين', nameEn: 'Storage' },
  { id: 'motherboards', name: 'لوحات أم', nameEn: 'Motherboards' },
  { id: 'power-supplies', name: 'مزودات طاقة', nameEn: 'Power Supplies' },
  { id: 'cooling', name: 'تبريد', nameEn: 'Cooling' }
];

const ComponentsContainer = styled.div`
  min-height: 100vh;
  background: var(--background-color);
  color: var(--text-primary);
  padding: 2rem 0;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: var(--text-secondary);
  max-width: 600px;
  margin: 0 auto;
`;

const FilterSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
  justify-content: center;
`;

const FilterButton = styled.button<{ active: boolean }>`
  padding: 0.75rem 1.5rem;
  border: 2px solid ${props => props.active ? 'var(--primary-color)' : 'var(--border-color)'};
  background: ${props => props.active ? 'var(--primary-color)' : 'transparent'};
  color: ${props => props.active ? 'white' : 'var(--text-primary)'};
  border-radius: 25px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background: var(--primary-color);
    color: white;
    transform: translateY(-2px);
  }
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const NoProducts = styled.div`
  text-align: center;
  padding: 3rem;
  color: var(--text-secondary);
  font-size: 1.1rem;
`;

const ComponentsPage: React.FC = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const { theme } = useTheme();
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // فلترة قطع الكمبيوتر حسب الفئة المختارة
  const filteredComponents = selectedCategory === 'all' 
    ? componentsData 
    : componentsData.filter(component => component.category === selectedCategory);

  // دالة إضافة القطعة للسلة
  const handleAddToCart = (component: any) => {
    addToCart({
      id: component.id,
      name: language === 'ar' ? component.nameAr : component.name,
      price: component.price,
      discountPrice: component.originalPrice || undefined,
      image: component.image,
      category: language === 'ar' ? component.categoryAr : component.category,
      description: language === 'ar' ? component.descriptionAr : component.description,
      inStock: component.inStock,
      isNew: component.isNew,
      rating: component.rating,
      reviews: []
    });
  };

  return (
    <ComponentsContainer>
      <Container>
        <Header>
          <Title>
            {language === 'ar' ? 'قطع الكمبيوتر' : 'Computer Components'}
          </Title>
          <Subtitle>
            {language === 'ar' 
              ? 'اكتشف أحدث قطع الكمبيوتر عالية الأداء لبناء نظامك المثالي'
              : 'Discover the latest high-performance computer components to build your perfect system'
            }
          </Subtitle>
        </Header>

        <FilterSection>
          {categories.map(category => (
            <FilterButton
              key={category.id}
              active={selectedCategory === category.id}
              onClick={() => setSelectedCategory(category.id)}
            >
              {language === 'ar' ? category.name : category.nameEn}
            </FilterButton>
          ))}
        </FilterSection>

        {filteredComponents.length > 0 ? (
          <ProductsGrid>
            {filteredComponents.map(component => (
              <ProductCard
                key={component.id}
                product={{
                  id: component.id,
                  name: language === 'ar' ? component.nameAr : component.name,
                  price: component.price,
                  discountPrice: component.originalPrice || undefined,
                  image: component.image,
                  category: language === 'ar' ? component.categoryAr : component.category,
                  description: language === 'ar' ? component.descriptionAr : component.description,
                  inStock: component.inStock,
                  isNew: component.isNew,
                  rating: component.rating,
                  reviews: []
                }}
              />
            ))}
          </ProductsGrid>
        ) : (
          <NoProducts>
            {language === 'ar' 
              ? 'لا توجد قطع في هذه الفئة حالياً'
              : 'No components available in this category'
            }
          </NoProducts>
        )}
      </Container>
    </ComponentsContainer>
  );
};

export default ComponentsPage;
