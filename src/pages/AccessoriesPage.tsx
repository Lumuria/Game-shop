import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../hooks/useLanguage';
import { useTheme } from '../hooks/useTheme';
import { useCart } from '../hooks/useCart';
import ProductCard from '../components/ProductCard';

// بيانات الإكسسوارات المحدثة والشاملة
const accessoriesData = [
  // سماعات الألعاب
  {
    id: 'acc-1',
    name: 'Logitech G Pro X Gaming Headset',
    nameAr: 'سماعة ألعاب لوجيتك جي برو إكس',
    price: 129.99,
    originalPrice: 149.99,
    image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400',
    category: 'headsets',
    categoryAr: 'سماعات',
    description: 'Professional gaming headset with Blue VO!CE technology',
    descriptionAr: 'سماعة ألعاب احترافية بتقنية بلو فويس',
    inStock: true,
    isNew: false,
    rating: 4.8,
    reviews: 245
  },
  {
    id: 'acc-2',
    name: 'HyperX Cloud II Gaming Headset',
    nameAr: 'سماعة هايبر إكس كلاود 2',
    price: 99.99,
    originalPrice: 129.99,
    image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400',
    category: 'headsets',
    categoryAr: 'سماعات',
    description: '7.1 virtual surround sound gaming headset',
    descriptionAr: 'سماعة ألعاب بصوت محيطي افتراضي 7.1',
    inStock: true,
    isNew: false,
    rating: 4.7,
    reviews: 278
  },
  {
    id: 'acc-3',
    name: 'SteelSeries Arctis 7 Wireless',
    nameAr: 'سماعة ستيل سيريز أركتيس 7 لاسلكية',
    price: 149.99,
    originalPrice: null,
    image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400',
    category: 'headsets',
    categoryAr: 'سماعات',
    description: 'Wireless gaming headset with DTS Headphone:X 2.0',
    descriptionAr: 'سماعة ألعاب لاسلكية بتقنية دي تي إس هيدفون إكس 2.0',
    inStock: true,
    isNew: true,
    rating: 4.6,
    reviews: 189
  },
  {
    id: 'acc-4',
    name: 'Corsair HS70 Pro Wireless',
    nameAr: 'سماعة كورسير إتش إس 70 برو لاسلكية',
    price: 99.99,
    originalPrice: null,
    image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400',
    category: 'headsets',
    categoryAr: 'سماعات',
    description: 'Wireless gaming headset with 7.1 surround sound',
    descriptionAr: 'سماعة ألعاب لاسلكية بصوت محيطي 7.1',
    inStock: true,
    isNew: false,
    rating: 4.5,
    reviews: 156
  },
  {
    id: 'acc-5',
    name: 'Audio-Technica ATH-M50x',
    nameAr: 'سماعة أوديو تكنيكا إيه تي إتش إم 50 إكس',
    price: 149.99,
    originalPrice: null,
    image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400',
    category: 'headsets',
    categoryAr: 'سماعات',
    description: 'Professional monitor headphones',
    descriptionAr: 'سماعات مراقبة احترافية',
    inStock: true,
    isNew: false,
    rating: 4.8,
    reviews: 345
  },

  // فئران الألعاب
  {
    id: 'acc-6',
    name: 'Razer DeathAdder V2 Gaming Mouse',
    nameAr: 'فأرة ألعاب رايزر ديث أدر في 2',
    price: 69.99,
    originalPrice: null,
    image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=400',
    category: 'mice',
    categoryAr: 'فئران',
    description: 'Ergonomic gaming mouse with Focus+ 20K sensor',
    descriptionAr: 'فأرة ألعاب مريحة بمستشعر فوكس+ 20 ألف',
    inStock: true,
    isNew: true,
    rating: 4.7,
    reviews: 189
  },
  {
    id: 'acc-7',
    name: 'Logitech G502 HERO Gaming Mouse',
    nameAr: 'فأرة لوجيتك جي 502 هيرو',
    price: 79.99,
    originalPrice: 99.99,
    image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=400',
    category: 'mice',
    categoryAr: 'فئران',
    description: 'High performance gaming mouse with HERO 25K sensor',
    descriptionAr: 'فأرة ألعاب عالية الأداء بمستشعر هيرو 25 ألف',
    inStock: true,
    isNew: false,
    rating: 4.8,
    reviews: 345
  },
  {
    id: 'acc-8',
    name: 'SteelSeries Rival 600 Gaming Mouse',
    nameAr: 'فأرة ستيل سيريز رايفل 600',
    price: 89.99,
    originalPrice: null,
    image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=400',
    category: 'mice',
    categoryAr: 'فئران',
    description: 'Dual sensor gaming mouse with weight system',
    descriptionAr: 'فأرة ألعاب بمستشعر مزدوج ونظام أوزان',
    inStock: true,
    isNew: false,
    rating: 4.6,
    reviews: 234
  },
  {
    id: 'acc-9',
    name: 'Corsair M65 RGB Elite Gaming Mouse',
    nameAr: 'فأرة كورسير إم 65 آر جي بي إليت',
    price: 59.99,
    originalPrice: 79.99,
    image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=400',
    category: 'mice',
    categoryAr: 'فئران',
    description: 'FPS gaming mouse with 18,000 DPI sensor',
    descriptionAr: 'فأرة ألعاب إف بي إس بمستشعر 18 ألف دي بي آي',
    inStock: true,
    isNew: false,
    rating: 4.5,
    reviews: 167
  },
  {
    id: 'acc-10',
    name: 'Razer Basilisk V3 Pro',
    nameAr: 'فأرة رايزر باسيليسك في 3 برو',
    price: 159.99,
    originalPrice: null,
    image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=400',
    category: 'mice',
    categoryAr: 'فئران',
    description: 'Wireless gaming mouse with Focus Pro 30K sensor',
    descriptionAr: 'فأرة ألعاب لاسلكية بمستشعر فوكس برو 30 ألف',
    inStock: true,
    isNew: true,
    rating: 4.9,
    reviews: 123
  },

  // لوحات المفاتيح
  {
    id: 'acc-11',
    name: 'Corsair K95 RGB Platinum Keyboard',
    nameAr: 'لوحة مفاتيح كورسير كي 95 آر جي بي بلاتينيوم',
    price: 249.99,
    originalPrice: 299.99,
    image: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400',
    category: 'keyboards',
    categoryAr: 'لوحات مفاتيح',
    description: 'Mechanical gaming keyboard with Cherry MX switches',
    descriptionAr: 'لوحة مفاتيح ألعاب ميكانيكية بمفاتيح تشيري إم إكس',
    inStock: true,
    isNew: false,
    rating: 4.9,
    reviews: 312
  },
  {
    id: 'acc-12',
    name: 'Razer BlackWidow V3 Pro',
    nameAr: 'لوحة مفاتيح رايزر بلاك ويدو في 3 برو',
    price: 229.99,
    originalPrice: null,
    image: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400',
    category: 'keyboards',
    categoryAr: 'لوحات مفاتيح',
    description: 'Wireless mechanical gaming keyboard with Green switches',
    descriptionAr: 'لوحة مفاتيح ألعاب ميكانيكية لاسلكية بمفاتيح خضراء',
    inStock: true,
    isNew: true,
    rating: 4.7,
    reviews: 198
  },
  {
    id: 'acc-13',
    name: 'Logitech G915 TKL Wireless',
    nameAr: 'لوحة مفاتيح لوجيتك جي 915 تي كي إل لاسلكية',
    price: 229.99,
    originalPrice: null,
    image: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400',
    category: 'keyboards',
    categoryAr: 'لوحات مفاتيح',
    description: 'Low-profile wireless mechanical gaming keyboard',
    descriptionAr: 'لوحة مفاتيح ألعاب ميكانيكية لاسلكية منخفضة الارتفاع',
    inStock: true,
    isNew: false,
    rating: 4.8,
    reviews: 267
  },
  {
    id: 'acc-14',
    name: 'SteelSeries Apex Pro TKL',
    nameAr: 'لوحة مفاتيح ستيل سيريز أبيكس برو تي كي إل',
    price: 189.99,
    originalPrice: 219.99,
    image: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400',
    category: 'keyboards',
    categoryAr: 'لوحات مفاتيح',
    description: 'Adjustable mechanical gaming keyboard with OmniPoint switches',
    descriptionAr: 'لوحة مفاتيح ألعاب ميكانيكية قابلة للتعديل بمفاتيح أومني بوينت',
    inStock: true,
    isNew: false,
    rating: 4.6,
    reviews: 145
  },
  {
    id: 'acc-15',
    name: 'HyperX Alloy FPS Pro',
    nameAr: 'لوحة مفاتيح هايبر إكس ألوي إف بي إس برو',
    price: 69.99,
    originalPrice: 89.99,
    image: 'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400',
    category: 'keyboards',
    categoryAr: 'لوحات مفاتيح',
    description: 'Compact mechanical gaming keyboard',
    descriptionAr: 'لوحة مفاتيح ألعاب ميكانيكية مدمجة',
    inStock: true,
    isNew: false,
    rating: 4.5,
    reviews: 189
  },

  // بادات الفأرة
  {
    id: 'acc-16',
    name: 'SteelSeries QcK Gaming Mousepad',
    nameAr: 'بادة فأرة ستيل سيريز كيو سي كي',
    price: 14.99,
    originalPrice: null,
    image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=400',
    category: 'mousepads',
    categoryAr: 'بادات فأرة',
    description: 'High-performance cloth gaming mousepad',
    descriptionAr: 'بادة فأرة قماشية عالية الأداء للألعاب',
    inStock: true,
    isNew: false,
    rating: 4.6,
    reviews: 156
  },
  {
    id: 'acc-17',
    name: 'Corsair MM800 RGB Polaris',
    nameAr: 'بادة فأرة كورسير إم إم 800 آر جي بي بولاريس',
    price: 59.99,
    originalPrice: 79.99,
    image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=400',
    category: 'mousepads',
    categoryAr: 'بادات فأرة',
    description: 'RGB gaming mousepad with 15 RGB zones',
    descriptionAr: 'بادة فأرة ألعاب آر جي بي مع 15 منطقة إضاءة',
    inStock: true,
    isNew: false,
    rating: 4.4,
    reviews: 123
  },
  {
    id: 'acc-18',
    name: 'Razer Goliathus Extended Chroma',
    nameAr: 'بادة فأرة رايزر جولياثوس إكستندد كروما',
    price: 59.99,
    originalPrice: null,
    image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=400',
    category: 'mousepads',
    categoryAr: 'بادات فأرة',
    description: 'Extended RGB gaming mousepad with Chroma lighting',
    descriptionAr: 'بادة فأرة ألعاب آر جي بي ممتدة بإضاءة كروما',
    inStock: true,
    isNew: true,
    rating: 4.5,
    reviews: 189
  },
  {
    id: 'acc-19',
    name: 'Logitech G640 Large Cloth Gaming Mousepad',
    nameAr: 'بادة فأرة لوجيتك جي 640 قماشية كبيرة',
    price: 29.99,
    originalPrice: null,
    image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=400',
    category: 'mousepads',
    categoryAr: 'بادات فأرة',
    description: 'Large cloth gaming mousepad for low DPI gaming',
    descriptionAr: 'بادة فأرة قماشية كبيرة للألعاب بدقة منخفضة',
    inStock: true,
    isNew: false,
    rating: 4.3,
    reviews: 234
  },

  // كاميرات الويب
  {
    id: 'acc-20',
    name: 'Logitech C920 HD Pro Webcam',
    nameAr: 'كاميرا ويب لوجيتك سي 920 إتش دي برو',
    price: 79.99,
    originalPrice: null,
    image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400',
    category: 'webcams',
    categoryAr: 'كاميرات ويب',
    description: 'Full HD 1080p webcam for streaming and video calls',
    descriptionAr: 'كاميرا ويب فل إتش دي 1080 بي للبث والمكالمات المرئية',
    inStock: true,
    isNew: false,
    rating: 4.5,
    reviews: 145
  },
  {
    id: 'acc-21',
    name: 'Razer Kiyo Streaming Webcam',
    nameAr: 'كاميرا ويب رايزر كيو للبث',
    price: 99.99,
    originalPrice: 129.99,
    image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400',
    category: 'webcams',
    categoryAr: 'كاميرات ويب',
    description: 'Streaming webcam with built-in ring light',
    descriptionAr: 'كاميرا ويب للبث مع إضاءة دائرية مدمجة',
    inStock: false,
    isNew: false,
    rating: 4.7,
    reviews: 234
  },
  {
    id: 'acc-22',
    name: 'Elgato Facecam',
    nameAr: 'كاميرا إلجاتو فيس كام',
    price: 199.99,
    originalPrice: null,
    image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400',
    category: 'webcams',
    categoryAr: 'كاميرات ويب',
    description: 'Premium webcam for content creators',
    descriptionAr: 'كاميرا ويب متميزة لصناع المحتوى',
    inStock: true,
    isNew: true,
    rating: 4.8,
    reviews: 167
  },
  {
    id: 'acc-23',
    name: 'Logitech BRIO 4K Ultra HD Webcam',
    nameAr: 'كاميرا ويب لوجيتك بريو 4 كي ألترا إتش دي',
    price: 199.99,
    originalPrice: 249.99,
    image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400',
    category: 'webcams',
    categoryAr: 'كاميرات ويب',
    description: '4K Ultra HD webcam with HDR and Windows Hello',
    descriptionAr: 'كاميرا ويب 4 كي ألترا إتش دي مع إتش دي آر وويندوز هيلو',
    inStock: true,
    isNew: false,
    rating: 4.6,
    reviews: 189
  },

  // إكسسوارات إضافية
  {
    id: 'acc-24',
    name: 'Blue Yeti USB Microphone',
    nameAr: 'ميكروفون بلو يتي يو إس بي',
    price: 99.99,
    originalPrice: 129.99,
    image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=400',
    category: 'microphones',
    categoryAr: 'ميكروفونات',
    description: 'Professional USB microphone for streaming and recording',
    descriptionAr: 'ميكروفون يو إس بي احترافي للبث والتسجيل',
    inStock: true,
    isNew: false,
    rating: 4.7,
    reviews: 345
  },
  {
    id: 'acc-25',
    name: 'Elgato Stream Deck',
    nameAr: 'إلجاتو ستريم ديك',
    price: 149.99,
    originalPrice: null,
    image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=400',
    category: 'streaming',
    categoryAr: 'أدوات البث',
    description: 'Live content creation controller with 15 LCD keys',
    descriptionAr: 'وحدة تحكم إنشاء المحتوى المباشر مع 15 مفتاح إل سي دي',
    inStock: true,
    isNew: true,
    rating: 4.8,
    reviews: 234
  }
];

// فئات الإكسسوارات
const categories = [
  { id: 'all', name: 'جميع الإكسسوارات', nameEn: 'All Accessories' },
  { id: 'headsets', name: 'سماعات', nameEn: 'Headsets' },
  { id: 'mice', name: 'فئران', nameEn: 'Mice' },
  { id: 'keyboards', name: 'لوحات مفاتيح', nameEn: 'Keyboards' },
  { id: 'mousepads', name: 'بادات فأرة', nameEn: 'Mousepads' },
  { id: 'webcams', name: 'كاميرات ويب', nameEn: 'Webcams' },
  { id: 'microphones', name: 'ميكروفونات', nameEn: 'Microphones' },
  { id: 'streaming', name: 'أدوات البث', nameEn: 'Streaming' }
];

const AccessoriesContainer = styled.div`
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

const AccessoriesPage: React.FC = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const { theme } = useTheme();
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // فلترة الإكسسوارات حسب الفئة المختارة
  const filteredAccessories = selectedCategory === 'all' 
    ? accessoriesData 
    : accessoriesData.filter(accessory => accessory.category === selectedCategory);

  // دالة إضافة الإكسسوار للسلة
  const handleAddToCart = (accessory: any) => {
    addToCart({
      id: accessory.id,
      name: language === 'ar' ? accessory.nameAr : accessory.name,
      price: accessory.price,
      discountPrice: accessory.originalPrice || undefined,
      image: accessory.image,
      category: language === 'ar' ? accessory.categoryAr : accessory.category,
      description: language === 'ar' ? accessory.descriptionAr : accessory.description,
      inStock: accessory.inStock,
      isNew: accessory.isNew,
      rating: accessory.rating,
      reviews: []
    });
  };

  return (
    <AccessoriesContainer>
      <Container>
        <Header>
          <Title>
            {language === 'ar' ? 'إكسسوارات الألعاب' : 'Gaming Accessories'}
          </Title>
          <Subtitle>
            {language === 'ar' 
              ? 'اكتشف مجموعة واسعة من إكسسوارات الألعاب عالية الجودة لتعزيز تجربة اللعب'
              : 'Discover a wide range of high-quality gaming accessories to enhance your gaming experience'
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

        {filteredAccessories.length > 0 ? (
          <ProductsGrid>
            {filteredAccessories.map(accessory => (
              <ProductCard
                key={accessory.id}
                product={{
                  id: accessory.id,
                  name: language === 'ar' ? accessory.nameAr : accessory.name,
                  price: accessory.price,
                  discountPrice: accessory.originalPrice || undefined,
                  image: accessory.image,
                  category: language === 'ar' ? accessory.categoryAr : accessory.category,
                  description: language === 'ar' ? accessory.descriptionAr : accessory.description,
                  inStock: accessory.inStock,
                  isNew: accessory.isNew,
                  rating: accessory.rating,
                  reviews: []
                }}
              />
            ))}
          </ProductsGrid>
        ) : (
          <NoProducts>
            {language === 'ar' 
              ? 'لا توجد إكسسوارات في هذه الفئة حالياً'
              : 'No accessories available in this category'
            }
          </NoProducts>
        )}
      </Container>
    </AccessoriesContainer>
  );
};

export default AccessoriesPage;
