import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../hooks/useLanguage';
import { useTheme } from '../hooks/useTheme';
import { useCart } from '../hooks/useCart';
import ProductCard from '../components/ProductCard';

// بيانات الأجهزة الطرفية
const peripheralsData = [
  {
    id: 'per-001',
    name: 'Samsung Odyssey G7 32" Gaming Monitor',
    nameAr: 'شاشة ألعاب سامسونج أوديسي جي7 32 بوصة',
    price: 649.99,
    originalPrice: 799.99,
    image: '/images/monitor-samsung.jpg',
    category: 'monitors',
    categoryAr: 'شاشات',
    brand: 'Samsung',
    description: 'Curved QLED gaming monitor with 240Hz refresh rate',
    descriptionAr: 'شاشة ألعاب منحنية QLED بمعدل تحديث 240 هرتز',
    features: ['32" QLED Display', '240Hz Refresh Rate', '1ms Response Time', 'G-Sync Compatible'],
    featuresAr: ['شاشة QLED 32 بوصة', 'معدل تحديث 240 هرتز', 'زمن استجابة 1 مللي ثانية', 'متوافق مع G-Sync'],
    inStock: true,
    isNew: false,
    onSale: true,
    rating: 4.7,
    reviews: 189
  },
  {
    id: 'per-002',
    name: 'LG UltraGear 27" 4K Gaming Monitor',
    nameAr: 'شاشة ألعاب إل جي ألترا جير 27 بوصة 4K',
    price: 599.99,
    originalPrice: null,
    image: '/images/monitor-lg.jpg',
    category: 'monitors',
    categoryAr: 'شاشات',
    brand: 'LG',
    description: '4K IPS gaming monitor with HDR support',
    descriptionAr: 'شاشة ألعاب IPS بدقة 4K مع دعم HDR',
    features: ['27" 4K IPS', '144Hz Refresh Rate', 'HDR10 Support', 'USB-C Connectivity'],
    featuresAr: ['IPS 4K 27 بوصة', 'معدل تحديث 144 هرتز', 'دعم HDR10', 'اتصال USB-C'],
    inStock: true,
    isNew: true,
    onSale: false,
    rating: 4.6,
    reviews: 156
  },
  {
    id: 'per-003',
    name: 'Audio-Technica ATH-M50x Headphones',
    nameAr: 'سماعات أوديو تكنيكا ATH-M50x',
    price: 149.99,
    originalPrice: null,
    image: '/images/headphones-audiotechnica.jpg',
    category: 'audio',
    categoryAr: 'صوتيات',
    brand: 'Audio-Technica',
    description: 'Professional studio monitor headphones',
    descriptionAr: 'سماعات مراقبة استوديو احترافية',
    features: ['45mm Drivers', 'Detachable Cable', 'Swiveling Earcups', 'Professional Sound'],
    featuresAr: ['مشغلات 45 مم', 'كابل قابل للفصل', 'أكواب أذن دوارة', 'صوت احترافي'],
    inStock: true,
    isNew: false,
    onSale: false,
    rating: 4.8,
    reviews: 267
  },
  {
    id: 'per-004',
    name: 'Blue Yeti USB Microphone',
    nameAr: 'ميكروفون بلو يتي USB',
    price: 99.99,
    originalPrice: 129.99,
    image: '/images/microphone-blue.jpg',
    category: 'audio',
    categoryAr: 'صوتيات',
    brand: 'Blue',
    description: 'Professional USB microphone for streaming and recording',
    descriptionAr: 'ميكروفون USB احترافي للبث والتسجيل',
    features: ['Multiple Pickup Patterns', 'Real-time Headphone Monitoring', 'Plug & Play', 'Studio Quality'],
    featuresAr: ['أنماط التقاط متعددة', 'مراقبة سماعة فورية', 'توصيل وتشغيل', 'جودة استوديو'],
    inStock: true,
    isNew: false,
    onSale: true,
    rating: 4.5,
    reviews: 234
  },
  {
    id: 'per-005',
    name: 'Elgato Stream Deck',
    nameAr: 'إلجاتو ستريم ديك',
    price: 149.99,
    originalPrice: null,
    image: '/images/streamdeck-elgato.jpg',
    category: 'streaming',
    categoryAr: 'بث',
    brand: 'Elgato',
    description: 'Customizable control surface for content creators',
    descriptionAr: 'سطح تحكم قابل للتخصيص لمنشئي المحتوى',
    features: ['15 LCD Keys', 'Customizable Actions', 'Multi-app Integration', 'Drag & Drop Setup'],
    featuresAr: ['15 مفتاح LCD', 'إجراءات قابلة للتخصيص', 'تكامل متعدد التطبيقات', 'إعداد بالسحب والإفلات'],
    inStock: true,
    isNew: true,
    onSale: false,
    rating: 4.7,
    reviews: 145
  },
  {
    id: 'per-006',
    name: 'Logitech BRIO 4K Webcam',
    nameAr: 'كاميرا ويب لوجيتك بريو 4K',
    price: 199.99,
    originalPrice: 249.99,
    image: '/images/webcam-brio.jpg',
    category: 'streaming',
    categoryAr: 'بث',
    brand: 'Logitech',
    description: 'Ultra HD 4K webcam with HDR and auto-focus',
    descriptionAr: 'كاميرا ويب فائقة الدقة 4K مع HDR وتركيز تلقائي',
    features: ['4K Ultra HD', 'HDR Support', 'Auto Focus', 'Windows Hello Compatible'],
    featuresAr: ['فائق الدقة 4K', 'دعم HDR', 'تركيز تلقائي', 'متوافق مع Windows Hello'],
    inStock: false,
    isNew: false,
    onSale: true,
    rating: 4.4,
    reviews: 178
  },
  {
    id: 'per-007',
    name: 'Wacom Intuos Pro Graphics Tablet',
    nameAr: 'لوح رسومات واكوم إنتوس برو',
    price: 349.99,
    originalPrice: null,
    image: '/images/tablet-wacom.jpg',
    category: 'creative',
    categoryAr: 'إبداعية',
    brand: 'Wacom',
    description: 'Professional graphics tablet for digital artists',
    descriptionAr: 'لوح رسومات احترافي للفنانين الرقميين',
    features: ['8192 Pressure Levels', 'Multi-touch Support', 'Wireless Connectivity', 'Pro Pen 2 Included'],
    featuresAr: ['8192 مستوى ضغط', 'دعم اللمس المتعدد', 'اتصال لاسلكي', 'قلم برو 2 مرفق'],
    inStock: true,
    isNew: false,
    onSale: false,
    rating: 4.9,
    reviews: 89
  },
  {
    id: 'per-008',
    name: 'Epson EcoTank ET-2720 Printer',
    nameAr: 'طابعة إبسون إيكو تانك ET-2720',
    price: 199.99,
    originalPrice: 229.99,
    image: '/images/printer-epson.jpg',
    category: 'printers',
    categoryAr: 'طابعات',
    brand: 'Epson',
    description: 'All-in-one printer with refillable ink tanks',
    descriptionAr: 'طابعة متعددة الوظائف مع خزانات حبر قابلة للتعبئة',
    features: ['Print, Scan, Copy', 'Refillable Ink Tanks', 'Wireless Printing', 'Mobile App Support'],
    featuresAr: ['طباعة، مسح، نسخ', 'خزانات حبر قابلة للتعبئة', 'طباعة لاسلكية', 'دعم تطبيق الهاتف'],
    inStock: true,
    isNew: false,
    onSale: true,
    rating: 4.3,
    reviews: 123
  }
];

const PeripheralsContainer = styled.div`
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

const PeripheralsPage: React.FC = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const { theme } = useTheme();
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [filteredProducts, setFilteredProducts] = useState(peripheralsData);

  const categories = [
    { id: 'all', name: 'الكل', nameEn: 'All' },
    { id: 'monitors', name: 'شاشات', nameEn: 'Monitors' },
    { id: 'audio', name: 'صوتيات', nameEn: 'Audio' },
    { id: 'streaming', name: 'بث', nameEn: 'Streaming' },
    { id: 'creative', name: 'إبداعية', nameEn: 'Creative' },
    { id: 'printers', name: 'طابعات', nameEn: 'Printers' }
  ];

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredProducts(peripheralsData);
    } else {
      setFilteredProducts(peripheralsData.filter(product => product.category === selectedCategory));
    }
  }, [selectedCategory]);

  const handleAddToCart = (product: any) => {
    addToCart({
      id: product.id,
      name: language === 'ar' ? product.nameAr : product.name,
      price: product.price,
      image: product.image,
      category: language === 'ar' ? product.categoryAr : product.category,
      description: language === 'ar' ? product.descriptionAr : product.description,
      inStock: product.inStock
    });
  };

  return (
    <PeripheralsContainer>
      <Container>
        <Header>
          <Title>
            {language === 'ar' ? 'الأجهزة الطرفية' : 'Peripherals'}
          </Title>
          <Subtitle>
            {language === 'ar' 
              ? 'اكتشف مجموعة شاملة من الأجهزة الطرفية عالية الجودة لتحسين إنتاجيتك وإبداعك'
              : 'Discover a comprehensive range of high-quality peripherals to enhance your productivity and creativity'
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

        {filteredProducts.length > 0 ? (
          <ProductsGrid>
            {filteredProducts.map(product => (
              <ProductCard
                key={product.id}
                product={{
                  id: product.id,
                  name: language === 'ar' ? product.nameAr : product.name,
                  price: product.price,
                  discountPrice: product.originalPrice || undefined,
                  image: product.image,
                  category: language === 'ar' ? product.categoryAr : product.category,

                  description: language === 'ar' ? product.descriptionAr : product.description,
                  inStock: product.inStock,
                  isNew: product.isNew,
                  rating: product.rating,
                  reviews: []
                }}
              />
            ))}
          </ProductsGrid>
        ) : (
          <NoProducts>
            {language === 'ar' 
              ? 'لا توجد منتجات في هذه الفئة حالياً'
              : 'No products available in this category'
            }
          </NoProducts>
        )}
      </Container>
    </PeripheralsContainer>
  );
};

export default PeripheralsPage;
