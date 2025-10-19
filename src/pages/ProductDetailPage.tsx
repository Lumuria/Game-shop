import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductGrid from '../components/ProductGrid';
import { useCart } from '../hooks/useCart';
import { useToast } from '../contexts/ToastContext';
import { Product, Review } from '../contexts/CartContext';

// Mock product data - in a real app this would come from an API
const mockProducts: Product[] = [
  {
    id: '1',
    name: 'PlayStation 5 Digital Edition',
    category: 'games',
    price: 399.99,
    image: 'https://via.placeholder.com/600x600?text=PS5',
    description: 'Next-gen gaming console with lightning-fast loading times and stunning graphics. Experience immersive gaming like never before with the PlayStation 5 Digital Edition.',
    inStock: true,
    isNew: true,
    isFeatured: true,
    specifications: {
      'المعالج': 'AMD Zen 2 8-Core CPU',
      'بطاقة الرسوميات': 'AMD RDNA 2 GPU',
      'الذاكرة': '16GB GDDR6',
      'التخزين': '825GB SSD',
      'الدقة': 'Up to 4K 120Hz',
      'الصوت': '3D Audio Technology'
    },
    images: [
      'https://via.placeholder.com/600x600?text=PS5-1',
      'https://via.placeholder.com/600x600?text=PS5-2',
      'https://via.placeholder.com/600x600?text=PS5-3',
      'https://via.placeholder.com/600x600?text=PS5-4'
    ],
    reviews: [
      {
        id: '1',
        userName: 'أحمد محمد',
        rating: 5,
        comment: 'جهاز رائع! الألعاب تعمل بسلاسة والجرافيك مذهل.',
        date: '2024-01-15'
      },
      {
        id: '2',
        userName: 'سارة أحمد',
        rating: 4,
        comment: 'جودة ممتازة ولكن السعر مرتفع قليلاً.',
        date: '2024-01-10'
      }
    ]
  },
  // Add more mock products as needed
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

const Breadcrumb = styled.nav`
  margin-bottom: 2rem;
  font-size: 0.9rem;
  color: var(--text-secondary);
  
  a {
    color: var(--primary-color);
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const ProductSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ImageGallery = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const MainImage = styled.div`
  aspect-ratio: 1;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid var(--border-color);
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ThumbnailGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.5rem;
`;

const Thumbnail = styled.button<{ active: boolean }>`
  aspect-ratio: 1;
  border: 2px solid ${props => props.active ? 'var(--primary-color)' : 'var(--border-color)'};
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  background: none;
  padding: 0;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  &:hover {
    border-color: var(--primary-color);
  }
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ProductTitle = styled.h1`
  font-size: 2rem;
  color: var(--text-primary);
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const ProductCategory = styled.span`
  color: var(--text-secondary);
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const PriceSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Price = styled.span`
  font-size: 2rem;
  font-weight: bold;
  color: var(--primary-color);
`;

const OriginalPrice = styled.span`
  font-size: 1.2rem;
  color: var(--text-secondary);
  text-decoration: line-through;
`;

const Badge = styled.span<{ type: 'new' | 'sale' | 'stock' }>`
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: bold;
  text-transform: uppercase;
  
  ${props => {
    switch (props.type) {
      case 'new':
        return 'background-color: #10b981; color: white;';
      case 'sale':
        return 'background-color: #ef4444; color: white;';
      case 'stock':
        return 'background-color: #f3f4f6; color: var(--text-secondary);';
    }
  }}
`;

const Description = styled.p`
  color: var(--text-secondary);
  line-height: 1.6;
  font-size: 1rem;
`;

const ActionSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const QuantitySelector = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const QuantityLabel = styled.span`
  color: var(--text-primary);
  font-weight: 500;
`;

const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  overflow: hidden;
`;

const QuantityButton = styled.button`
  background-color: var(--surface-color);
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  color: var(--text-primary);
  
  &:hover {
    background-color: var(--background-color);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const QuantityInput = styled.input`
  border: none;
  padding: 0.5rem;
  width: 60px;
  text-align: center;
  background-color: var(--background-color);
  color: var(--text-primary);
  
  &:focus {
    outline: none;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const AddToCartButton = styled.button`
  flex: 1;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 8px;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover:not(:disabled) {
    background-color: var(--secondary-color);
    transform: translateY(-2px);
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const WishlistButton = styled.button`
  background-color: transparent;
  color: var(--primary-color);
  border: 2px solid var(--primary-color);
  border-radius: 8px;
  padding: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--primary-color);
    color: white;
  }
`;

const TabContainer = styled.div`
  margin-top: 3rem;
`;

const TabList = styled.div`
  display: flex;
  border-bottom: 1px solid var(--border-color);
  margin-bottom: 2rem;
`;

const Tab = styled.button<{ active: boolean }>`
  background: none;
  border: none;
  padding: 1rem 2rem;
  cursor: pointer;
  color: ${props => props.active ? 'var(--primary-color)' : 'var(--text-secondary)'};
  border-bottom: 2px solid ${props => props.active ? 'var(--primary-color)' : 'transparent'};
  font-weight: ${props => props.active ? '600' : '400'};
  transition: all 0.3s ease;
  
  &:hover {
    color: var(--primary-color);
  }
`;

const TabContent = styled.div`
  min-height: 200px;
`;

const SpecTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  
  tr {
    border-bottom: 1px solid var(--border-color);
  }
  
  td {
    padding: 1rem;
    
    &:first-child {
      font-weight: 600;
      color: var(--text-primary);
      width: 30%;
    }
    
    &:last-child {
      color: var(--text-secondary);
    }
  }
`;

const ReviewsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ReviewCard = styled.div`
  background-color: var(--surface-color);
  border-radius: 8px;
  padding: 1.5rem;
  border: 1px solid var(--border-color);
`;

const ReviewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const ReviewerName = styled.span`
  font-weight: 600;
  color: var(--text-primary);
`;

const ReviewDate = styled.span`
  color: var(--text-secondary);
  font-size: 0.9rem;
`;

const StarRating = styled.div`
  display: flex;
  gap: 0.25rem;
  margin-bottom: 0.5rem;
`;

const Star = styled.span<{ filled: boolean }>`
  color: ${props => props.filled ? '#fbbf24' : '#d1d5db'};
  font-size: 1.2rem;
`;

const ReviewComment = styled.p`
  color: var(--text-secondary);
  line-height: 1.5;
  margin: 0;
`;

const ProductDetailPage: React.FC = () => {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { showToast } = useToast();
  
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API call to fetch product
    const fetchProduct = async () => {
      setIsLoading(true);
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const foundProduct = mockProducts.find(p => p.id === id);
      if (foundProduct) {
        setProduct(foundProduct);
      } else {
        navigate('/store');
        showToast('المنتج غير موجود', 'error');
      }
      setIsLoading(false);
    };

    fetchProduct();
  }, [id, navigate, showToast]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
      showToast(`تم إضافة ${product.name} إلى السلة`, 'success');
    }
  };

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity);
    }
  };

  if (isLoading) {
    return (
      <PageContainer>
        <Header />
        <MainContent>
          <Container>
            <div style={{ textAlign: 'center', padding: '3rem' }}>
              جاري التحميل...
            </div>
          </Container>
        </MainContent>
        <Footer />
      </PageContainer>
    );
  }

  if (!product) {
    return null;
  }

  const relatedProducts = mockProducts.filter(p => 
    p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  return (
    <PageContainer>
      <Header />
      
      <MainContent>
        <Container>
          <Breadcrumb>
            <a href="/">الرئيسية</a> / <a href="/store">المتجر</a> / {product.name}
          </Breadcrumb>
          
          <ProductSection>
            <ImageGallery>
              <MainImage>
                <img 
                  src={product.images?.[selectedImageIndex] || product.image} 
                  alt={product.name}
                />
              </MainImage>
              {product.images && product.images.length > 1 && (
                <ThumbnailGrid>
                  {product.images.map((image, index) => (
                    <Thumbnail
                      key={index}
                      active={index === selectedImageIndex}
                      onClick={() => setSelectedImageIndex(index)}
                    >
                      <img src={image} alt={`${product.name} ${index + 1}`} />
                    </Thumbnail>
                  ))}
                </ThumbnailGrid>
              )}
            </ImageGallery>
            
            <ProductInfo>
              <div>
                <ProductCategory>{t(`categories.${product.category}`)}</ProductCategory>
                <ProductTitle>{product.name}</ProductTitle>
              </div>
              
              <PriceSection>
                <Price>${product.discountPrice || product.price}</Price>
                {product.discountPrice && (
                  <OriginalPrice>${product.price}</OriginalPrice>
                )}
                {product.isNew && <Badge type="new">{t('product.new')}</Badge>}
                {product.discountPrice && <Badge type="sale">{t('product.sale')}</Badge>}
              </PriceSection>
              
              <Badge type="stock">
                {product.inStock ? t('product.inStock') : t('product.outOfStock')}
              </Badge>
              
              <Description>{product.description}</Description>
              
              <ActionSection>
                <QuantitySelector>
                  <QuantityLabel>الكمية:</QuantityLabel>
                  <QuantityControls>
                    <QuantityButton 
                      onClick={() => handleQuantityChange(quantity - 1)}
                      disabled={quantity <= 1}
                    >
                      -
                    </QuantityButton>
                    <QuantityInput 
                      type="number" 
                      value={quantity}
                      onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
                      min="1"
                      max="10"
                    />
                    <QuantityButton 
                      onClick={() => handleQuantityChange(quantity + 1)}
                      disabled={quantity >= 10}
                    >
                      +
                    </QuantityButton>
                  </QuantityControls>
                </QuantitySelector>
                
                <ButtonGroup>
                  <AddToCartButton 
                    onClick={handleAddToCart}
                    disabled={!product.inStock}
                  >
                    {product.inStock ? t('product.addToCart') : t('product.outOfStock')}
                  </AddToCartButton>
                  <WishlistButton>
                    ❤️
                  </WishlistButton>
                </ButtonGroup>
              </ActionSection>
            </ProductInfo>
          </ProductSection>
          
          <TabContainer>
            <TabList>
              <Tab 
                active={activeTab === 'description'} 
                onClick={() => setActiveTab('description')}
              >
                الوصف
              </Tab>
              <Tab 
                active={activeTab === 'specifications'} 
                onClick={() => setActiveTab('specifications')}
              >
                {t('product.specifications')}
              </Tab>
              <Tab 
                active={activeTab === 'reviews'} 
                onClick={() => setActiveTab('reviews')}
              >
                {t('product.reviews')} ({product.reviews?.length || 0})
              </Tab>
            </TabList>
            
            <TabContent>
              {activeTab === 'description' && (
                <div>
                  <h3>تفاصيل المنتج</h3>
                  <p>{product.description}</p>
                  <p>
                    هذا المنتج يوفر أداءً استثنائياً وجودة عالية تلبي احتياجات اللاعبين المحترفين. 
                    تم تصميمه باستخدام أحدث التقنيات لضمان تجربة لعب سلسة ومثيرة.
                  </p>
                </div>
              )}
              
              {activeTab === 'specifications' && product.specifications && (
                <SpecTable>
                  <tbody>
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <tr key={key}>
                        <td>{key}</td>
                        <td>{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </SpecTable>
              )}
              
              {activeTab === 'reviews' && (
                <ReviewsSection>
                  {product.reviews && product.reviews.length > 0 ? (
                    product.reviews.map(review => (
                      <ReviewCard key={review.id}>
                        <ReviewHeader>
                          <ReviewerName>{review.userName}</ReviewerName>
                          <ReviewDate>{review.date}</ReviewDate>
                        </ReviewHeader>
                        <StarRating>
                          {[1, 2, 3, 4, 5].map(star => (
                            <Star key={star} filled={star <= review.rating}>
                              ★
                            </Star>
                          ))}
                        </StarRating>
                        <ReviewComment>{review.comment}</ReviewComment>
                      </ReviewCard>
                    ))
                  ) : (
                    <p>لا توجد تقييمات بعد. كن أول من يقيم هذا المنتج!</p>
                  )}
                </ReviewsSection>
              )}
            </TabContent>
          </TabContainer>
          
          {relatedProducts.length > 0 && (
            <ProductGrid 
              products={relatedProducts} 
              title={t('product.relatedProducts')}
            />
          )}
        </Container>
      </MainContent>
      
      <Footer />
    </PageContainer>
  );
};

export default ProductDetailPage;
