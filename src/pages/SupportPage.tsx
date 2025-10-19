import React, { useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../hooks/useLanguage';
import Header from '../components/Header';
import Footer from '../components/Footer';

const SupportContainer = styled.div`
  min-height: 100vh;
  background: var(--background-color);
  color: var(--text-primary);
`;

const Container = styled.div`
  max-width: 1200px;
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

const SupportOptions = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const SupportCard = styled.div`
  background: var(--surface-color);
  border: 1px solid var(--border-color);
  border-radius: 15px;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }

  .icon {
    font-size: 3rem;
    margin-bottom: 1rem;
    color: var(--primary-color);
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: var(--text-primary);
  }

  p {
    color: var(--text-secondary);
    margin-bottom: 1.5rem;
    line-height: 1.6;
  }

  button {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 25px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(102, 126, 234, 0.3);
    }
  }
`;

const QuickHelp = styled.div`
  background: var(--surface-color);
  border: 1px solid var(--border-color);
  border-radius: 15px;
  padding: 2rem;
  margin-bottom: 3rem;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    color: var(--primary-color);
  }
`;

const HelpGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
`;

const HelpItem = styled.div`
  padding: 1rem;
  background: var(--background-color);
  border-radius: 10px;
  border: 1px solid var(--border-color);

  h4 {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
    color: var(--text-primary);
  }

  p {
    color: var(--text-secondary);
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  }

  a {
    color: var(--primary-color);
    text-decoration: none;
    font-weight: 500;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const ContactInfo = styled.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 15px;
  padding: 2rem;
  text-align: center;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  .contact-methods {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.5rem;
    margin-top: 1.5rem;
  }

  .contact-method {
    .icon {
      font-size: 2rem;
      margin-bottom: 0.5rem;
    }

    h4 {
      font-size: 1.1rem;
      margin-bottom: 0.5rem;
    }

    p {
      font-size: 0.9rem;
      opacity: 0.9;
    }
  }
`;

const SupportPage: React.FC = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();

  const handleLiveChat = () => {
    alert(language === 'ar' ? 'سيتم فتح نافذة الدردشة المباشرة قريباً' : 'Live chat window will open soon');
  };

  const handleTicket = () => {
    alert(language === 'ar' ? 'سيتم توجيهك لنموذج إنشاء تذكرة دعم' : 'You will be redirected to create a support ticket');
  };

  const handleRemoteSupport = () => {
    alert(language === 'ar' ? 'سيتم بدء جلسة الدعم عن بُعد' : 'Remote support session will start');
  };

  return (
    <SupportContainer>
      <Header />
      <Container>
        <PageHeader>
          <Title>
            {language === 'ar' ? 'الدعم التقني' : 'Technical Support'}
          </Title>
          <Subtitle>
            {language === 'ar' 
              ? 'نحن هنا لمساعدتك في حل أي مشكلة تقنية أو الإجابة على استفساراتك'
              : 'We are here to help you solve any technical issue or answer your questions'
            }
          </Subtitle>
        </PageHeader>

        <SupportOptions>
          <SupportCard>
            <div className="icon">💬</div>
            <h3>{language === 'ar' ? 'الدردشة المباشرة' : 'Live Chat'}</h3>
            <p>
              {language === 'ar' 
                ? 'تحدث مع فريق الدعم مباشرة واحصل على إجابات فورية لاستفساراتك'
                : 'Chat with our support team directly and get instant answers to your questions'
              }
            </p>
            <button onClick={handleLiveChat}>
              {language === 'ar' ? 'بدء الدردشة' : 'Start Chat'}
            </button>
          </SupportCard>

          <SupportCard>
            <div className="icon">🎫</div>
            <h3>{language === 'ar' ? 'تذكرة دعم' : 'Support Ticket'}</h3>
            <p>
              {language === 'ar' 
                ? 'أنشئ تذكرة دعم للمشاكل المعقدة وسنتواصل معك خلال 24 ساعة'
                : 'Create a support ticket for complex issues and we will contact you within 24 hours'
              }
            </p>
            <button onClick={handleTicket}>
              {language === 'ar' ? 'إنشاء تذكرة' : 'Create Ticket'}
            </button>
          </SupportCard>

          <SupportCard>
            <div className="icon">🖥️</div>
            <h3>{language === 'ar' ? 'الدعم عن بُعد' : 'Remote Support'}</h3>
            <p>
              {language === 'ar' 
                ? 'اسمح لفريقنا بالوصول لجهازك عن بُعد لحل المشاكل التقنية'
                : 'Allow our team to access your device remotely to solve technical problems'
              }
            </p>
            <button onClick={handleRemoteSupport}>
              {language === 'ar' ? 'بدء الجلسة' : 'Start Session'}
            </button>
          </SupportCard>
        </SupportOptions>

        <QuickHelp>
          <h3>{language === 'ar' ? 'مساعدة سريعة' : 'Quick Help'}</h3>
          <HelpGrid>
            <HelpItem>
              <h4>{language === 'ar' ? 'تتبع الطلب' : 'Track Order'}</h4>
              <p>{language === 'ar' ? 'تتبع حالة طلبك' : 'Track your order status'}</p>
              <a href="/profile">{language === 'ar' ? 'تتبع الآن' : 'Track Now'}</a>
            </HelpItem>

            <HelpItem>
              <h4>{language === 'ar' ? 'الإرجاع والاستبدال' : 'Returns & Exchanges'}</h4>
              <p>{language === 'ar' ? 'معلومات عن سياسة الإرجاع' : 'Information about return policy'}</p>
              <a href="/faq">{language === 'ar' ? 'اقرأ المزيد' : 'Read More'}</a>
            </HelpItem>

            <HelpItem>
              <h4>{language === 'ar' ? 'مشاكل الدفع' : 'Payment Issues'}</h4>
              <p>{language === 'ar' ? 'حل مشاكل الدفع والفوترة' : 'Solve payment and billing issues'}</p>
              <a href="/contact">{language === 'ar' ? 'تواصل معنا' : 'Contact Us'}</a>
            </HelpItem>

            <HelpItem>
              <h4>{language === 'ar' ? 'مشاكل الحساب' : 'Account Issues'}</h4>
              <p>{language === 'ar' ? 'مساعدة في إدارة حسابك' : 'Help managing your account'}</p>
              <a href="/profile">{language === 'ar' ? 'إدارة الحساب' : 'Manage Account'}</a>
            </HelpItem>

            <HelpItem>
              <h4>{language === 'ar' ? 'مشاكل تقنية' : 'Technical Issues'}</h4>
              <p>{language === 'ar' ? 'حل المشاكل التقنية في الموقع' : 'Solve technical issues on the website'}</p>
              <a href="#" onClick={handleLiveChat}>{language === 'ar' ? 'دردشة مباشرة' : 'Live Chat'}</a>
            </HelpItem>

            <HelpItem>
              <h4>{language === 'ar' ? 'استشارة المنتجات' : 'Product Consultation'}</h4>
              <p>{language === 'ar' ? 'احصل على نصائح لاختيار المنتج المناسب' : 'Get advice on choosing the right product'}</p>
              <a href="/contact">{language === 'ar' ? 'استشارة مجانية' : 'Free Consultation'}</a>
            </HelpItem>
          </HelpGrid>
        </QuickHelp>

        <ContactInfo>
          <h3>{language === 'ar' ? 'طرق التواصل الأخرى' : 'Other Contact Methods'}</h3>
          <div className="contact-methods">
            <div className="contact-method">
              <div className="icon">📞</div>
              <h4>{language === 'ar' ? 'الهاتف' : 'Phone'}</h4>
              <p>+966 11 123 4567</p>
              <p>{language === 'ar' ? 'متاح 24/7' : 'Available 24/7'}</p>
            </div>

            <div className="contact-method">
              <div className="icon">📧</div>
              <h4>{language === 'ar' ? 'البريد الإلكتروني' : 'Email'}</h4>
              <p>support@gametechstore.com</p>
              <p>{language === 'ar' ? 'رد خلال 4 ساعات' : 'Response within 4 hours'}</p>
            </div>

            <div className="contact-method">
              <div className="icon">💬</div>
              <h4>{language === 'ar' ? 'واتساب' : 'WhatsApp'}</h4>
              <p>+966 50 123 4567</p>
              <p>{language === 'ar' ? 'دعم سريع' : 'Quick Support'}</p>
            </div>
          </div>
        </ContactInfo>
      </Container>
      <Footer />
    </SupportContainer>
  );
};

export default SupportPage;
