import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../hooks/useLanguage';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutContainer = styled.div`
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

const Section = styled.section`
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: var(--primary-color);
  text-align: center;
`;

const Content = styled.div`
  background: var(--surface-color);
  border: 1px solid var(--border-color);
  border-radius: 15px;
  padding: 2rem;
  line-height: 1.8;
  font-size: 1.1rem;
  color: var(--text-secondary);

  p {
    margin-bottom: 1.5rem;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
`;

const StatCard = styled.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 2rem;
  border-radius: 15px;
  text-align: center;

  .number {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  .label {
    font-size: 1rem;
    opacity: 0.9;
  }
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const ValueCard = styled.div`
  background: var(--surface-color);
  border: 1px solid var(--border-color);
  border-radius: 15px;
  padding: 2rem;
  text-align: center;

  .icon {
    font-size: 3rem;
    margin-bottom: 1rem;
    color: var(--primary-color);
  }

  h3 {
    font-size: 1.3rem;
    margin-bottom: 1rem;
    color: var(--text-primary);
  }

  p {
    color: var(--text-secondary);
    line-height: 1.6;
  }
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const TeamCard = styled.div`
  background: var(--surface-color);
  border: 1px solid var(--border-color);
  border-radius: 15px;
  padding: 2rem;
  text-align: center;

  .avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    margin: 0 auto 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    color: white;
  }

  h3 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    color: var(--text-primary);
  }

  .role {
    color: var(--primary-color);
    font-weight: 500;
    margin-bottom: 1rem;
  }

  p {
    color: var(--text-secondary);
    font-size: 0.9rem;
    line-height: 1.5;
  }
`;

const AboutPage: React.FC = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();

  return (
    <AboutContainer>
      <Header />
      <Container>
        <PageHeader>
          <Title>
            {language === 'ar' ? 'من نحن' : 'About Us'}
          </Title>
          <Subtitle>
            {language === 'ar' 
              ? 'تعرف على قصتنا ورؤيتنا في عالم التكنولوجيا والألعاب'
              : 'Learn about our story and vision in the world of technology and gaming'
            }
          </Subtitle>
        </PageHeader>

        <Section>
          <SectionTitle>
            {language === 'ar' ? 'قصتنا' : 'Our Story'}
          </SectionTitle>
          <Content>
            <p>
              {language === 'ar' 
                ? 'تأسس متجر جيم تك في عام 2020 بهدف توفير أحدث التقنيات والألعاب للاعبين في المنطقة العربية. بدأنا كمتجر صغير بحلم كبير: أن نصبح الوجهة الأولى لكل محبي الألعاب والتكنولوجيا.'
                : 'Game Tech Store was founded in 2020 with the goal of providing the latest technology and games for gamers in the Arab region. We started as a small store with a big dream: to become the first destination for all gaming and technology enthusiasts.'
              }
            </p>
            <p>
              {language === 'ar' 
                ? 'منذ البداية، ركزنا على تقديم منتجات عالية الجودة بأسعار تنافسية، مع خدمة عملاء استثنائية. نؤمن بأن كل لاعب يستحق الحصول على أفضل تجربة ممكنة، سواء كان مبتدئاً أو محترفاً.'
                : 'From the beginning, we focused on providing high-quality products at competitive prices, with exceptional customer service. We believe that every gamer deserves the best possible experience, whether they are a beginner or a professional.'
              }
            </p>
            <p>
              {language === 'ar' 
                ? 'اليوم، نفخر بخدمة آلاف العملاء في جميع أنحاء المملكة العربية السعودية ودول الخليج، ونستمر في النمو والتطور لنلبي احتياجات مجتمع الألعاب المتزايدة.'
                : 'Today, we are proud to serve thousands of customers throughout Saudi Arabia and the Gulf countries, and we continue to grow and develop to meet the increasing needs of the gaming community.'
              }
            </p>
          </Content>
        </Section>

        <Section>
          <SectionTitle>
            {language === 'ar' ? 'إنجازاتنا بالأرقام' : 'Our Achievements in Numbers'}
          </SectionTitle>
          <StatsGrid>
            <StatCard>
              <div className="number">50,000+</div>
              <div className="label">
                {language === 'ar' ? 'عميل راضٍ' : 'Happy Customers'}
              </div>
            </StatCard>
            <StatCard>
              <div className="number">10,000+</div>
              <div className="label">
                {language === 'ar' ? 'منتج متاح' : 'Products Available'}
              </div>
            </StatCard>
            <StatCard>
              <div className="number">99%</div>
              <div className="label">
                {language === 'ar' ? 'معدل الرضا' : 'Satisfaction Rate'}
              </div>
            </StatCard>
            <StatCard>
              <div className="number">24/7</div>
              <div className="label">
                {language === 'ar' ? 'دعم العملاء' : 'Customer Support'}
              </div>
            </StatCard>
          </StatsGrid>
        </Section>

        <Section>
          <SectionTitle>
            {language === 'ar' ? 'قيمنا' : 'Our Values'}
          </SectionTitle>
          <ValuesGrid>
            <ValueCard>
              <div className="icon">🎯</div>
              <h3>{language === 'ar' ? 'الجودة' : 'Quality'}</h3>
              <p>
                {language === 'ar' 
                  ? 'نلتزم بتقديم منتجات عالية الجودة من أفضل العلامات التجارية العالمية'
                  : 'We are committed to providing high-quality products from the best global brands'
                }
              </p>
            </ValueCard>

            <ValueCard>
              <div className="icon">⚡</div>
              <h3>{language === 'ar' ? 'السرعة' : 'Speed'}</h3>
              <p>
                {language === 'ar' 
                  ? 'نوفر خدمة سريعة في التوصيل والدعم التقني لضمان رضا عملائنا'
                  : 'We provide fast service in delivery and technical support to ensure customer satisfaction'
                }
              </p>
            </ValueCard>

            <ValueCard>
              <div className="icon">🤝</div>
              <h3>{language === 'ar' ? 'الثقة' : 'Trust'}</h3>
              <p>
                {language === 'ar' 
                  ? 'نبني علاقات طويلة الأمد مع عملائنا قائمة على الثقة والشفافية'
                  : 'We build long-term relationships with our customers based on trust and transparency'
                }
              </p>
            </ValueCard>

            <ValueCard>
              <div className="icon">🚀</div>
              <h3>{language === 'ar' ? 'الابتكار' : 'Innovation'}</h3>
              <p>
                {language === 'ar' 
                  ? 'نسعى دائماً لتقديم أحدث التقنيات والحلول المبتكرة لعملائنا'
                  : 'We always strive to provide the latest technologies and innovative solutions for our customers'
                }
              </p>
            </ValueCard>
          </ValuesGrid>
        </Section>

        <Section>
          <SectionTitle>
            {language === 'ar' ? 'فريقنا' : 'Our Team'}
          </SectionTitle>
          <TeamGrid>
            <TeamCard>
              <div className="avatar">👨‍💼</div>
              <h3>{language === 'ar' ? 'أحمد محمد' : 'Ahmed Mohammed'}</h3>
              <div className="role">
                {language === 'ar' ? 'المدير التنفيذي' : 'CEO'}
              </div>
              <p>
                {language === 'ar' 
                  ? 'خبرة 15 عاماً في مجال التكنولوجيا والألعاب، يقود الشركة نحو النجاح والتميز'
                  : '15 years of experience in technology and gaming, leading the company towards success and excellence'
                }
              </p>
            </TeamCard>

            <TeamCard>
              <div className="avatar">👩‍💻</div>
              <h3>{language === 'ar' ? 'فاطمة أحمد' : 'Fatima Ahmed'}</h3>
              <div className="role">
                {language === 'ar' ? 'مديرة التقنية' : 'CTO'}
              </div>
              <p>
                {language === 'ar' 
                  ? 'متخصصة في تطوير المنصات الرقمية وتحسين تجربة المستخدم'
                  : 'Specialized in developing digital platforms and improving user experience'
                }
              </p>
            </TeamCard>

            <TeamCard>
              <div className="avatar">👨‍🔧</div>
              <h3>{language === 'ar' ? 'خالد سعد' : 'Khalid Saad'}</h3>
              <div className="role">
                {language === 'ar' ? 'مدير الدعم التقني' : 'Technical Support Manager'}
              </div>
              <p>
                {language === 'ar' 
                  ? 'خبير في حل المشاكل التقنية وتقديم الدعم الفني للعملاء'
                  : 'Expert in solving technical problems and providing technical support to customers'
                }
              </p>
            </TeamCard>

            <TeamCard>
              <div className="avatar">👩‍📈</div>
              <h3>{language === 'ar' ? 'نورا علي' : 'Nora Ali'}</h3>
              <div className="role">
                {language === 'ar' ? 'مديرة التسويق' : 'Marketing Manager'}
              </div>
              <p>
                {language === 'ar' 
                  ? 'متخصصة في التسويق الرقمي وبناء العلاقات مع العملاء'
                  : 'Specialized in digital marketing and building customer relationships'
                }
              </p>
            </TeamCard>
          </TeamGrid>
        </Section>

        <Section>
          <SectionTitle>
            {language === 'ar' ? 'رؤيتنا للمستقبل' : 'Our Vision for the Future'}
          </SectionTitle>
          <Content>
            <p>
              {language === 'ar' 
                ? 'نسعى لأن نصبح الشركة الرائدة في مجال التكنولوجيا والألعاب في المنطقة العربية. نخطط لتوسيع خدماتنا لتشمل المزيد من الدول، وتطوير منصات جديدة تلبي احتياجات اللاعبين المتطورة.'
                : 'We strive to become the leading company in technology and gaming in the Arab region. We plan to expand our services to include more countries and develop new platforms that meet the evolving needs of gamers.'
              }
            </p>
            <p>
              {language === 'ar' 
                ? 'كما نهدف إلى دعم المجتمع المحلي من خلال تنظيم فعاليات الألعاب، ودعم اللاعبين المحترفين، والمساهمة في نمو صناعة الألعاب في المنطقة.'
                : 'We also aim to support the local community by organizing gaming events, supporting professional gamers, and contributing to the growth of the gaming industry in the region.'
              }
            </p>
          </Content>
        </Section>
      </Container>
      <Footer />
    </AboutContainer>
  );
};

export default AboutPage;
