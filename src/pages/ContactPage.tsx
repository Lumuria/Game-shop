import React, { useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../hooks/useLanguage';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ContactContainer = styled.div`
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

const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ContactInfo = styled.div`
  h3 {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    color: var(--primary-color);
  }
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: var(--surface-color);
  border-radius: 10px;
  border: 1px solid var(--border-color);

  .icon {
    font-size: 1.5rem;
    margin-right: 1rem;
    color: var(--primary-color);
  }

  .content {
    h4 {
      margin: 0 0 0.5rem 0;
      font-size: 1.1rem;
      color: var(--text-primary);
    }

    p {
      margin: 0;
      color: var(--text-secondary);
    }
  }
`;

const ContactForm = styled.form`
  background: var(--surface-color);
  padding: 2rem;
  border-radius: 15px;
  border: 1px solid var(--border-color);

  h3 {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    color: var(--primary-color);
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;

  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
    color: var(--text-primary);
  }

  input, textarea, select {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid var(--border-color);
    border-radius: 8px;
    background: var(--background-color);
    color: var(--text-primary);
    font-size: 1rem;
    transition: border-color 0.3s ease;

    &:focus {
      outline: none;
      border-color: var(--primary-color);
    }
  }

  textarea {
    min-height: 120px;
    resize: vertical;
  }
`;

const SubmitButton = styled.button`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  padding: 0.75rem 2rem;
  border-radius: 25px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(102, 126, 234, 0.3);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

const ContactPage: React.FC = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // محاكاة إرسال النموذج
    setTimeout(() => {
      alert(language === 'ar' ? 'تم إرسال رسالتك بنجاح!' : 'Your message has been sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <ContactContainer>
      <Header />
      <Container>
        <PageHeader>
          <Title>
            {language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
          </Title>
          <Subtitle>
            {language === 'ar' 
              ? 'نحن هنا لمساعدتك. تواصل معنا في أي وقت وسنكون سعداء للرد على استفساراتك'
              : 'We are here to help you. Contact us anytime and we will be happy to answer your questions'
            }
          </Subtitle>
        </PageHeader>

        <ContactContent>
          <ContactInfo>
            <h3>{language === 'ar' ? 'معلومات التواصل' : 'Contact Information'}</h3>
            
            <InfoItem>
              <div className="icon">📍</div>
              <div className="content">
                <h4>{language === 'ar' ? 'العنوان' : 'Address'}</h4>
                <p>{language === 'ar' ? 'شارع التقنية، مدينة الألعاب، المملكة العربية السعودية' : 'Tech Street, Gaming City, Saudi Arabia'}</p>
              </div>
            </InfoItem>

            <InfoItem>
              <div className="icon">📞</div>
              <div className="content">
                <h4>{language === 'ar' ? 'الهاتف' : 'Phone'}</h4>
                <p>+966 11 123 4567</p>
              </div>
            </InfoItem>

            <InfoItem>
              <div className="icon">📧</div>
              <div className="content">
                <h4>{language === 'ar' ? 'البريد الإلكتروني' : 'Email'}</h4>
                <p>info@gametechstore.com</p>
              </div>
            </InfoItem>

            <InfoItem>
              <div className="icon">🕒</div>
              <div className="content">
                <h4>{language === 'ar' ? 'ساعات العمل' : 'Working Hours'}</h4>
                <p>{language === 'ar' ? 'الأحد - الخميس: 9:00 ص - 10:00 م' : 'Sunday - Thursday: 9:00 AM - 10:00 PM'}</p>
                <p>{language === 'ar' ? 'الجمعة - السبت: 2:00 م - 11:00 م' : 'Friday - Saturday: 2:00 PM - 11:00 PM'}</p>
              </div>
            </InfoItem>
          </ContactInfo>

          <ContactForm onSubmit={handleSubmit}>
            <h3>{language === 'ar' ? 'أرسل لنا رسالة' : 'Send us a Message'}</h3>
            
            <FormGroup>
              <label htmlFor="name">
                {language === 'ar' ? 'الاسم الكامل' : 'Full Name'}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                placeholder={language === 'ar' ? 'أدخل اسمك الكامل' : 'Enter your full name'}
              />
            </FormGroup>

            <FormGroup>
              <label htmlFor="email">
                {language === 'ar' ? 'البريد الإلكتروني' : 'Email Address'}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder={language === 'ar' ? 'أدخل بريدك الإلكتروني' : 'Enter your email address'}
              />
            </FormGroup>

            <FormGroup>
              <label htmlFor="subject">
                {language === 'ar' ? 'الموضوع' : 'Subject'}
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
              >
                <option value="">
                  {language === 'ar' ? 'اختر الموضوع' : 'Select Subject'}
                </option>
                <option value="general">
                  {language === 'ar' ? 'استفسار عام' : 'General Inquiry'}
                </option>
                <option value="support">
                  {language === 'ar' ? 'الدعم التقني' : 'Technical Support'}
                </option>
                <option value="order">
                  {language === 'ar' ? 'استفسار عن الطلب' : 'Order Inquiry'}
                </option>
                <option value="complaint">
                  {language === 'ar' ? 'شكوى' : 'Complaint'}
                </option>
                <option value="suggestion">
                  {language === 'ar' ? 'اقتراح' : 'Suggestion'}
                </option>
              </select>
            </FormGroup>

            <FormGroup>
              <label htmlFor="message">
                {language === 'ar' ? 'الرسالة' : 'Message'}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                placeholder={language === 'ar' ? 'اكتب رسالتك هنا...' : 'Write your message here...'}
              />
            </FormGroup>

            <SubmitButton type="submit" disabled={isSubmitting}>
              {isSubmitting 
                ? (language === 'ar' ? 'جاري الإرسال...' : 'Sending...') 
                : (language === 'ar' ? 'إرسال الرسالة' : 'Send Message')
              }
            </SubmitButton>
          </ContactForm>
        </ContactContent>
      </Container>
      <Footer />
    </ContactContainer>
  );
};

export default ContactPage;
