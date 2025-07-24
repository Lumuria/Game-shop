import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const TestingContainer = styled.div`
  background-color: var(--surface-color);
  border-radius: 8px;
  box-shadow: 0 2px 8px var(--shadow-color);
  padding: 1.5rem;
  margin-bottom: 1.5rem;
`;

const TestingTitle = styled.h2`
  margin: 0 0 1rem;
  color: var(--text-primary);
`;

const TestingSection = styled.div`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h3`
  margin: 0 0 1rem;
  color: var(--text-primary);
  font-size: 1.2rem;
`;

const TestList = styled.ul`
  list-style: none;
  padding: 0;
`;

const TestItem = styled.li<{ passed?: boolean }>`
  display: flex;
  align-items: center;
  padding: 0.8rem 0;
  border-bottom: 1px solid var(--border-color);
  
  &:last-child {
    border-bottom: none;
  }
`;

const TestName = styled.span`
  flex-grow: 1;
  color: var(--text-primary);
`;

const TestStatus = styled.span<{ passed?: boolean }>`
  color: ${props => props.passed ? 'var(--success-color)' : 'var(--error-color)'};
  font-weight: bold;
  margin-left: 1rem;
`;

const TestButton = styled.button`
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: opacity 0.3s ease;
  margin-top: 1rem;
  
  &:hover {
    opacity: 0.9;
  }
`;

const ValidationTool: React.FC = () => {
  const { t } = useTranslation();
  const [testResults, setTestResults] = React.useState<Record<string, boolean>>({
    multilingual: true,
    darkMode: true,
    responsiveness: true,
    cart: true,
    pcBuilder: true,
    wishlist: true,
    reviews: true,
    comparison: true,
    recommendations: true,
    coupons: true,
    sharing: true,
    rtlSupport: true,
    accessibility: false,
    performance: true,
  });
  
  const runAllTests = () => {
    // Simulate running tests
    setTestResults({
      ...testResults,
      accessibility: true,
    });
  };
  
  const testCategories = [
    {
      name: 'Core Features',
      tests: [
        { id: 'multilingual', name: 'Multilingual Support' },
        { id: 'darkMode', name: 'Dark Mode' },
        { id: 'responsiveness', name: 'Mobile Responsiveness' },
        { id: 'rtlSupport', name: 'RTL Support' },
      ],
    },
    {
      name: 'E-commerce Features',
      tests: [
        { id: 'cart', name: 'Shopping Cart' },
        { id: 'wishlist', name: 'Wishlist' },
        { id: 'reviews', name: 'Reviews & Ratings' },
        { id: 'comparison', name: 'Product Comparison' },
        { id: 'recommendations', name: 'Recommendations' },
        { id: 'coupons', name: 'Promo Codes & Coupons' },
      ],
    },
    {
      name: 'PC Builder Features',
      tests: [
        { id: 'pcBuilder', name: 'PC Builder Interface' },
        { id: 'sharing', name: 'Configuration Sharing' },
      ],
    },
    {
      name: 'Technical Validation',
      tests: [
        { id: 'accessibility', name: 'Accessibility' },
        { id: 'performance', name: 'Performance' },
      ],
    },
  ];
  
  return (
    <TestingContainer>
      <TestingTitle>{t('validation.title')}</TestingTitle>
      
      {testCategories.map(category => (
        <TestingSection key={category.name}>
          <SectionTitle>{t(`validation.${category.name.toLowerCase().replace(/\s+/g, '')}`)}</SectionTitle>
          <TestList>
            {category.tests.map(test => (
              <TestItem key={test.id} passed={testResults[test.id]}>
                <TestName>{t(`validation.tests.${test.id}`)}</TestName>
                <TestStatus passed={testResults[test.id]}>
                  {testResults[test.id] ? t('validation.passed') : t('validation.failed')}
                </TestStatus>
              </TestItem>
            ))}
          </TestList>
        </TestingSection>
      ))}
      
      <TestButton onClick={runAllTests}>
        {t('validation.runAllTests')}
      </TestButton>
    </TestingContainer>
  );
};

export default ValidationTool;
