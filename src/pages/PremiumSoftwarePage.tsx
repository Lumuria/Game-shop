import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useLanguage } from '../hooks/useLanguage';
import { useAuth } from '../contexts/AuthContext';
import { useCart } from '../hooks/useCart';
import { useToast } from '../contexts/ToastContext';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface Software {
  id: string;
  name: string;
  description: string;
  image: string;
  type: 'premium' | 'trial' | 'subscription';
  features: string[];
  currentPrice: number;
  originalPrice?: number;
  discount?: number;
  category: string;
}

const PageContainer = styled.div`
  background-color: var(--background-color);
  color: var(--text-primary);
  min-height: 100vh;
  padding: 2rem;
`;

const HeroSection = styled.section`
  text-align: center;
  margin-bottom: 2rem;
`;

const HeroTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  color: var(--text-secondary);
`;

const ContentSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
`;

const FilterBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
  align-items: center;
`;

const FilterButton = styled.button<{ active: boolean }>`
  padding: 0.6rem 1.2rem;
  background-color: ${({ active }) => (active ? 'var(--primary-color)' : 'transparent')};
  color: ${({ active }) => (active ? 'white' : 'var(--text-primary)')};
  border: 1px solid var(--primary-color);
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--primary-color);
    color: white;
  }
`;

const SearchInput = styled.input`
  flex-grow: 1;
  padding: 0.6rem 1rem;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  background-color: var(--surface-color);
  color: var(--text-primary);

  &:focus {
    outline: none;
    border-color: var(--primary-color);
  }
`;

const LoadingSpinner = styled.div`
  font-size: 2rem;
  text-align: center;
  padding: 4rem;
`;

const SoftwareGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
`;

const SoftwareCard = styled.div`
  background-color: var(--surface-color);
  border-radius: 8px;
  box-shadow: 0 2px 8px var(--shadow-color);
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const SoftwareImage = styled.div<{ image: string }>`
  background-image: url(${({ image }) => image});
  background-size: cover;
  background-position: center;
  height: 180px;
  position: relative;
`;

const SoftwareBadge = styled.span<{ type: string }>`
  position: absolute;
  top: 8px;
  left: 8px;
  background-color: ${({ type }) =>
    type === 'premium' ? 'gold' :
    type === 'trial' ? 'dodgerblue' :
    type === 'subscription' ? 'mediumseagreen' :
    'gray'};
  color: white;
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
  font-weight: bold;
  font-size: 0.75rem;
`;

const SoftwareContent = styled.div`
  padding: 1rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const SoftwareTitle = styled.h3`
  margin: 0 0 0.5rem;
  font-size: 1.2rem;
`;

const SoftwareDescription = styled.p`
  flex-grow: 1;
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin-bottom: 0.5rem;
`;

const SoftwareFeatures = styled.ul`
  list-style-type: disc;
  margin: 0 0 1rem 1.2rem;
  padding: 0;
  font-size: 0.85rem;
  color: var(--text-secondary);
`;

const Feature = styled.li``;

const PriceSection = styled.div`
  margin-bottom: 1rem;
`;

const Price = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
`;

const CurrentPrice = styled.span`
  font-weight: bold;
  color: var(--text-primary);
  font-size: 1.1rem;
`;

const OriginalPrice = styled.span`
  text-decoration: line-through;
  color: var(--text-secondary);
  font-size: 0.9rem;
`;

const Discount = styled.span`
  background-color: var(--error-color);
  color: white;
  border-radius: 4px;
  padding: 0.1rem 0.4rem;
  font-size: 0.75rem;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 1rem;
`;

const PrimaryButton = styled.button`
  flex-grow: 1;
  background-color: var(--primary-color);
  border: none;
  color: white;
  padding: 0.7rem;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: var(--secondary-color);
  }
`;

const SecondaryButton = styled.button`
  background-color: transparent;
  border: 1px solid var(--primary-color);
  color: var(--primary-color);
  padding: 0.7rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: var(--primary-color);
    color: white;
  }
`;

const PremiumSoftwarePage: React.FC = () => {
  const [software, setSoftware] = useState<Software[]>([]);
  const [filteredSoftware, setFilteredSoftware] = useState<Software[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const { isRTL } = useLanguage();
  const { t } = useTranslation();
  const { user } = useAuth();
  const { addToCart } = useCart();
  const { showToast } = useToast();

  const categories = [
    { id: 'all', name: t('allCategories') || 'الكل' },
    { id: 'design', name: t('design') || 'تصميم' },
    { id: 'utility', name: t('utility') || 'أدوات' },
    { id: 'security', name: t('security') || 'أمان' },
  ];

  const mockSoftware: Software[] = [
    {
      id: 'sw1',
      name: 'برنامج فوتوشوب',
      description: 'برنامج تحرير الصور الاحترافي',
      image: '/images/photoshop.jpg',
      type: 'premium',
      features: ['تعديل متقدم للصور', 'دعم الطبقات', 'أدوات احترافية'],
      currentPrice: 99.99,
      originalPrice: 149.99,
      discount: 33,
      category: 'design',
    },
    {
      id: 'sw2',
      name: 'برنامج تجريبي',
      description: 'نسخة تجريبية مجانية',
      image: '/images/trial.jpg',
      type: 'trial',
      features: ['مدة 30 يوم', 'تجربة كاملة'],
      currentPrice: 0,
      category: 'utility',
    },
    {
      id: 'sw3',
      name: 'برنامج أمان',
      description: 'حماية متقدمة لجهازك',
      image: '/images/security.jpg',
      type: 'subscription',
      features: ['مكافحة فيروسات', 'جدار حماية', 'تحديثات تلقائية'],
      currentPrice: 49.99,
      originalPrice: 59.99,
      discount: 17,
      category: 'security',
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      setSoftware(mockSoftware);
      setFilteredSoftware(mockSoftware);
      setIsLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    let filtered = software;
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }
    if (searchTerm) {
      filtered = filtered.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    setFilteredSoftware(filtered);
  }, [software, selectedCategory, searchTerm]);

  const handleAddToCart = (item: Software) => {
    if (!user) {
      showToast(t('loginRequired') || 'يرجى تسجيل الدخول أولاً', 'info');
      return;
    }
    addToCart(
  {
    id: item.id,
    name: item.name,
    price: item.currentPrice,
    image: item.image,
    description: item.description,
    category: 'software',
    inStock: true, 
  },
  1
);

    showToast(t('addedToCart') || 'تم إضافة البرنامج إلى السلة', 'success');
  };

  const handleTrialDownload = (item: Software) => {
    if (!user) {
      showToast(t('loginRequired') || 'يرجى تسجيل الدخول أولاً', 'info');
      return;
    }
    showToast(t('trialStarted') || 'تم بدء النسخة التجريبية', 'success');
  };

  const getBadgeText = (type: string) => {
    switch (type) {
      case 'premium': return t('premium') || 'مدفوع';
      case 'trial': return t('trial') || 'تجريبي';
      case 'subscription': return t('subscription') || 'اشتراك';
      default: return '';
    }
  };

  return (
    <PageContainer dir={isRTL ? 'rtl' : 'ltr'}>
      <Header />
      <HeroSection>
        <HeroTitle>{t('premiumSoftware') || 'البرامج المدفوعة'}</HeroTitle>
        <HeroSubtitle>{t('premiumSoftwareDescription') || 'اكتشف مجموعة واسعة من البرامج المتخصصة والأدوات الاحترافية'}</HeroSubtitle>
      </HeroSection>

      <ContentSection>
        <FilterBar>
          {categories.map(category => (
            <FilterButton
              key={category.id}
              active={selectedCategory === category.id}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name}
            </FilterButton>
          ))}
          <SearchInput
            type="text"
            placeholder={t('searchSoftware') || 'البحث في البرامج...'}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </FilterBar>

        {isLoading ? (
          <LoadingSpinner>⏳</LoadingSpinner>
        ) : (
          <SoftwareGrid>
            {filteredSoftware.map(item => (
              <SoftwareCard key={item.id}>
                <SoftwareImage image={item.image}>
                  <SoftwareBadge type={item.type}>{getBadgeText(item.type)}</SoftwareBadge>
                </SoftwareImage>

                <SoftwareContent>
                  <SoftwareTitle>{item.name}</SoftwareTitle>
                  <SoftwareDescription>{item.description}</SoftwareDescription>

                  <SoftwareFeatures>
                    {item.features.slice(0, 3).map((feature, index) => (
                      <Feature key={index}>{feature}</Feature>
                    ))}
                  </SoftwareFeatures>

                  <PriceSection>
                    <Price>
                      <CurrentPrice>${item.currentPrice}</CurrentPrice>
                      {item.originalPrice && <OriginalPrice>${item.originalPrice}</OriginalPrice>}
                      {item.discount && <Discount>-{item.discount}%</Discount>}
                    </Price>
                  </PriceSection>

                  <ActionButtons>
                    {item.type === 'trial' ? (
                      <PrimaryButton onClick={() => handleTrialDownload(item)}>
                        {t('startTrial') || 'بدء التجربة'}
                      </PrimaryButton>
                    ) : (
                      <PrimaryButton onClick={() => handleAddToCart(item)}>
                        {t('addToCart') || 'إضافة للسلة'}
                      </PrimaryButton>
                    )}
                    <SecondaryButton>{t('viewDetails') || 'التفاصيل'}</SecondaryButton>
                  </ActionButtons>
                </SoftwareContent>
              </SoftwareCard>
            ))}
          </SoftwareGrid>
        )}

        {filteredSoftware.length === 0 && !isLoading && (
          <div style={{ textAlign: 'center', padding: '3rem', color: '#666' }}>
            {t('noSoftwareFound') || 'لم يتم العثور على برامج'}
          </div>
        )}
      </ContentSection>
      <Footer />
    </PageContainer>
  );
};

export default PremiumSoftwarePage;
