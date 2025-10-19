import React, { useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../hooks/useLanguage';
import Header from '../components/Header';
import Footer from '../components/Footer';

const FAQContainer = styled.div`
  min-height: 100vh;
  background: var(--background-color);
  color: var(--text-primary);
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

const PageHeader = styled.div`
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

const SearchBox = styled.div`
  margin-bottom: 2rem;
  
  input {
    width: 100%;
    padding: 1rem;
    border: 1px solid var(--border-color);
    border-radius: 25px;
    background: var(--surface-color);
    color: var(--text-primary);
    font-size: 1rem;
    
    &:focus {
      outline: none;
      border-color: var(--primary-color);
    }
  }
`;

const FAQList = styled.div`
  margin-bottom: 3rem;
`;

const FAQItem = styled.div`
  background: var(--surface-color);
  border: 1px solid var(--border-color);
  border-radius: 10px;
  margin-bottom: 1rem;
  overflow: hidden;
`;

const FAQQuestion = styled.button`
  width: 100%;
  padding: 1.5rem;
  background: none;
  border: none;
  text-align: left;
  font-size: 1.1rem;
  font-weight: 500;
  color: var(--text-primary);
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background-color 0.3s ease;

  &:hover {
    background: var(--background-color);
  }

  .icon {
    font-size: 1.2rem;
    transition: transform 0.3s ease;
    
    &.open {
      transform: rotate(180deg);
    }
  }
`;

const FAQAnswer = styled.div<{ isOpen: boolean }>`
  max-height: ${props => props.isOpen ? '500px' : '0'};
  overflow: hidden;
  transition: max-height 0.3s ease;
  
  .content {
    padding: 0 1.5rem 1.5rem;
    color: var(--text-secondary);
    line-height: 1.6;
  }
`;

const CategoryFilter = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
  justify-content: center;
`;

const FilterButton = styled.button<{ active: boolean }>`
  padding: 0.5rem 1rem;
  border: 1px solid ${props => props.active ? 'var(--primary-color)' : 'var(--border-color)'};
  background: ${props => props.active ? 'var(--primary-color)' : 'transparent'};
  color: ${props => props.active ? 'white' : 'var(--text-primary)'};
  border-radius: 20px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.3s ease;

  &:hover {
    background: var(--primary-color);
    color: white;
  }
`;

// بيانات الأسئلة الشائعة
const faqData = [
  {
    id: 1,
    category: 'general',
    questionAr: 'ما هو متجر جيم تك؟',
    questionEn: 'What is Game Tech Store?',
    answerAr: 'متجر جيم تك هو متجر إلكتروني متخصص في بيع أحدث الألعاب والإكسسوارات وقطع الكمبيوتر للاعبين. نوفر مجموعة واسعة من المنتجات عالية الجودة بأسعار تنافسية.',
    answerEn: 'Game Tech Store is an online store specialized in selling the latest games, accessories, and computer components for gamers. We provide a wide range of high-quality products at competitive prices.'
  },
  {
    id: 2,
    category: 'shipping',
    questionAr: 'كم تستغرق عملية الشحن؟',
    questionEn: 'How long does shipping take?',
    answerAr: 'نوفر خدمة الشحن السريع داخل المملكة العربية السعودية خلال 1-3 أيام عمل. للطلبات الدولية، قد تستغرق 5-10 أيام عمل حسب الموقع.',
    answerEn: 'We provide fast shipping within Saudi Arabia within 1-3 business days. For international orders, it may take 5-10 business days depending on location.'
  },
  {
    id: 3,
    category: 'payment',
    questionAr: 'ما هي طرق الدفع المتاحة؟',
    questionEn: 'What payment methods are available?',
    answerAr: 'نقبل جميع بطاقات الائتمان الرئيسية (فيزا، ماستركارد، أمريكان إكسبريس)، والدفع عند الاستلام، وخدمات الدفع الإلكتروني مثل مدى وأبل باي.',
    answerEn: 'We accept all major credit cards (Visa, Mastercard, American Express), cash on delivery, and electronic payment services like Mada and Apple Pay.'
  },
  {
    id: 4,
    category: 'returns',
    questionAr: 'ما هي سياسة الإرجاع والاستبدال؟',
    questionEn: 'What is the return and exchange policy?',
    answerAr: 'يمكنك إرجاع أو استبدال المنتجات خلال 14 يوماً من تاريخ الاستلام، بشرط أن تكون في حالتها الأصلية مع العبوة والملحقات.',
    answerEn: 'You can return or exchange products within 14 days of receipt, provided they are in their original condition with packaging and accessories.'
  },
  {
    id: 5,
    category: 'warranty',
    questionAr: 'هل تقدمون ضمان على المنتجات؟',
    questionEn: 'Do you provide warranty on products?',
    answerAr: 'نعم، جميع منتجاتنا تأتي مع ضمان الشركة المصنعة. كما نوفر خدمة ما بعد البيع والدعم التقني لجميع عملائنا.',
    answerEn: 'Yes, all our products come with manufacturer warranty. We also provide after-sales service and technical support for all our customers.'
  },
  {
    id: 6,
    category: 'account',
    questionAr: 'كيف يمكنني إنشاء حساب جديد؟',
    questionEn: 'How can I create a new account?',
    answerAr: 'يمكنك إنشاء حساب جديد بالنقر على "تسجيل" في أعلى الصفحة، ثم ملء البيانات المطلوبة. يمكنك أيضاً التسجيل باستخدام حسابك في جوجل أو فيسبوك.',
    answerEn: 'You can create a new account by clicking "Register" at the top of the page, then filling in the required information. You can also register using your Google or Facebook account.'
  },
  {
    id: 7,
    category: 'orders',
    questionAr: 'كيف يمكنني تتبع طلبي؟',
    questionEn: 'How can I track my order?',
    answerAr: 'بعد تأكيد طلبك، ستتلقى رقم تتبع عبر البريد الإلكتروني أو الرسائل النصية. يمكنك استخدام هذا الرقم لتتبع حالة طلبك في أي وقت.',
    answerEn: 'After confirming your order, you will receive a tracking number via email or SMS. You can use this number to track your order status at any time.'
  },
  {
    id: 8,
    category: 'technical',
    questionAr: 'أحتاج مساعدة في اختيار قطع الكمبيوتر المناسبة؟',
    questionEn: 'I need help choosing the right computer components?',
    answerAr: 'فريقنا من الخبراء جاهز لمساعدتك في اختيار القطع المناسبة لاحتياجاتك وميزانيتك. يمكنك التواصل معنا عبر الدردشة المباشرة أو الهاتف.',
    answerEn: 'Our team of experts is ready to help you choose the right components for your needs and budget. You can contact us via live chat or phone.'
  },
  {
    id: 9,
    category: 'gaming',
    questionAr: 'هل تتوفر الألعاب الحديثة فور إصدارها؟',
    questionEn: 'Are new games available upon release?',
    answerAr: 'نعم، نحرص على توفير أحدث الألعاب فور إصدارها. يمكنك أيضاً الحجز المسبق للألعاب القادمة لضمان الحصول عليها.',
    answerEn: 'Yes, we make sure to provide the latest games upon their release. You can also pre-order upcoming games to guarantee getting them.'
  },
  {
    id: 10,
    category: 'support',
    questionAr: 'كيف يمكنني الحصول على الدعم التقني؟',
    questionEn: 'How can I get technical support?',
    answerAr: 'يمكنك الحصول على الدعم التقني من خلال عدة طرق: الدردشة المباشرة على الموقع، البريد الإلكتروني، أو الاتصال بخط الدعم المجاني.',
    answerEn: 'You can get technical support through several ways: live chat on the website, email, or calling our free support hotline.'
  }
];

const categories = [
  { id: 'all', nameAr: 'جميع الأسئلة', nameEn: 'All Questions' },
  { id: 'general', nameAr: 'عام', nameEn: 'General' },
  { id: 'shipping', nameAr: 'الشحن', nameEn: 'Shipping' },
  { id: 'payment', nameAr: 'الدفع', nameEn: 'Payment' },
  { id: 'returns', nameAr: 'الإرجاع', nameEn: 'Returns' },
  { id: 'warranty', nameAr: 'الضمان', nameEn: 'Warranty' },
  { id: 'account', nameAr: 'الحساب', nameEn: 'Account' },
  { id: 'orders', nameAr: 'الطلبات', nameEn: 'Orders' },
  { id: 'technical', nameAr: 'تقني', nameEn: 'Technical' },
  { id: 'gaming', nameAr: 'الألعاب', nameEn: 'Gaming' },
  { id: 'support', nameAr: 'الدعم', nameEn: 'Support' }
];

const FAQPage: React.FC = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const filteredFAQs = faqData.filter(faq => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesSearch = searchTerm === '' || 
      (language === 'ar' ? faq.questionAr : faq.questionEn)
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  return (
    <FAQContainer>
      <Header />
      <Container>
        <PageHeader>
          <Title>
            {language === 'ar' ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}
          </Title>
          <Subtitle>
            {language === 'ar' 
              ? 'ابحث عن إجابات للأسئلة الأكثر شيوعاً حول منتجاتنا وخدماتنا'
              : 'Find answers to the most common questions about our products and services'
            }
          </Subtitle>
        </PageHeader>

        <SearchBox>
          <input
            type="text"
            placeholder={language === 'ar' ? 'ابحث في الأسئلة الشائعة...' : 'Search in FAQ...'}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </SearchBox>

        <CategoryFilter>
          {categories.map(category => (
            <FilterButton
              key={category.id}
              active={selectedCategory === category.id}
              onClick={() => setSelectedCategory(category.id)}
            >
              {language === 'ar' ? category.nameAr : category.nameEn}
            </FilterButton>
          ))}
        </CategoryFilter>

        <FAQList>
          {filteredFAQs.map(faq => (
            <FAQItem key={faq.id}>
              <FAQQuestion onClick={() => toggleItem(faq.id)}>
                <span>{language === 'ar' ? faq.questionAr : faq.questionEn}</span>
                <span className={`icon ${openItems.includes(faq.id) ? 'open' : ''}`}>
                  ▼
                </span>
              </FAQQuestion>
              <FAQAnswer isOpen={openItems.includes(faq.id)}>
                <div className="content">
                  {language === 'ar' ? faq.answerAr : faq.answerEn}
                </div>
              </FAQAnswer>
            </FAQItem>
          ))}
        </FAQList>

        {filteredFAQs.length === 0 && (
          <div style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-secondary)' }}>
            {language === 'ar' 
              ? 'لم يتم العثور على أسئلة تطابق بحثك'
              : 'No questions found matching your search'
            }
          </div>
        )}
      </Container>
      <Footer />
    </FAQContainer>
  );
};

export default FAQPage;
