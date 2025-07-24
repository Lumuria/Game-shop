import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const MobileResponsiveContainer = styled.div`
  /* Base styles for all devices */
  width: 100%;
  padding: 1rem;
  
  /* Responsive breakpoints */
  @media (max-width: 1200px) {
    /* Large tablets and small desktops */
    padding: 0.8rem;
  }
  
  @media (max-width: 992px) {
    /* Tablets */
    padding: 0.6rem;
  }
  
  @media (max-width: 768px) {
    /* Large phones and small tablets */
    padding: 0.5rem;
  }
  
  @media (max-width: 576px) {
    /* Phones */
    padding: 0.4rem;
  }
`;

const ResponsiveGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  
  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.8rem;
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    gap: 0.6rem;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const ResponsiveText = styled.p`
  font-size: 1rem;
  
  @media (max-width: 992px) {
    font-size: 0.95rem;
  }
  
  @media (max-width: 576px) {
    font-size: 0.9rem;
  }
`;

const ResponsiveHeading = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  
  @media (max-width: 992px) {
    font-size: 1.6rem;
    margin-bottom: 1.2rem;
  }
  
  @media (max-width: 576px) {
    font-size: 1.4rem;
    margin-bottom: 1rem;
  }
`;

const TouchFriendlyButton = styled.button`
  padding: 0.8rem 1.5rem;
  min-height: 44px; /* Minimum touch target size */
  min-width: 44px;
  
  @media (max-width: 576px) {
    padding: 0.8rem 1rem;
  }
`;

const RTLAwareContainer = styled.div<{ isRTL: boolean }>`
  display: flex;
  flex-direction: row;
  text-align: ${props => props.isRTL ? 'right' : 'left'};
  
  /* RTL-specific styles */
  ${props => props.isRTL && `
    flex-direction: row-reverse;
  `}
`;

const MobileMenu = styled.div`
  display: none;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const DesktopMenu = styled.div`
  display: block;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileResponsiveUtils: React.FC = () => {
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  
  return (
    <MobileResponsiveContainer>
      <ResponsiveHeading>
        {t('mobileResponsive.title')}
      </ResponsiveHeading>
      
      <ResponsiveText>
        {t('mobileResponsive.description')}
      </ResponsiveText>
      
      <ResponsiveGrid>
        <div>Grid Item 1</div>
        <div>Grid Item 2</div>
        <div>Grid Item 3</div>
        <div>Grid Item 4</div>
      </ResponsiveGrid>
      
      <FlexContainer>
        <div>Flex Item 1</div>
        <div>Flex Item 2</div>
      </FlexContainer>
      
      <RTLAwareContainer isRTL={isRTL}>
        <div>RTL Aware Item 1</div>
        <div>RTL Aware Item 2</div>
      </RTLAwareContainer>
      
      <TouchFriendlyButton>
        {t('mobileResponsive.touchFriendly')}
      </TouchFriendlyButton>
      
      <DesktopMenu>
        {t('mobileResponsive.desktopOnly')}
      </DesktopMenu>
      
      <MobileMenu>
        {t('mobileResponsive.mobileOnly')}
      </MobileMenu>
    </MobileResponsiveContainer>
  );
};

export default MobileResponsiveUtils;
