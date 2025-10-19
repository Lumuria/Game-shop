import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../hooks/useLanguage';

const FooterContainer = styled.footer`
  background-color: var(--surface-color);
  color: var(--text-primary);
  padding: 2rem 0;
  margin-top: 3rem;
  border-top: 1px solid var(--border-color);
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const FooterSection = styled.div`
  h3 {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    color: var(--primary-color);
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-bottom: 0.5rem;
  }

  a {
    color: var(--text-secondary);
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: var(--primary-color);
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background-color: var(--background-color);
    color: var(--text-primary);
    transition: all 0.3s ease;

    &:hover {
      background-color: var(--primary-color);
      color: white;
    }
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid var(--border-color);
  color: var(--text-secondary);
  font-size: 0.9rem;
`;

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const { isRTL } = useLanguage();

  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h3>{t('Game-Shop')}</h3>
          <p>{t('Game-Shop')}</p>
          <SocialLinks>
            <a href="#" aria-label="Facebook">📱</a>
            <a href="#" aria-label="Twitter">🐦</a>
            <a href="#" aria-label="Instagram">📷</a>
            <a href="#" aria-label="YouTube">📺</a>
          </SocialLinks>
        </FooterSection>
        
        <FooterSection>
          <h3>{t('Store')}</h3>
          <ul>
            <li><a href="/store">{t('Store')}</a></li>
            <li><a href="/games">{t('Categories.Games')}</a></li>
            <li><a href="/accessories">{t('Categories.Accessories')}</a></li>
            <li><a href="/components">{t('Categories.Components')}</a></li>
            <li><a href="/peripherals">{t('Categories.Peripherals')}</a></li>
          </ul>
        </FooterSection>
        
        <FooterSection>
          <h3>{t('Support')}</h3>
          <ul>
            <li><a href="/contact">{t('Contact')}</a></li>
            <li><a href="/faq">{t('Faq')}</a></li>
            <li><a href="/support">{t('Support')}</a></li>
            <li><a href="/about">{t('About')}</a></li>
          </ul>
        </FooterSection>
        
        <FooterSection>
          <h3>{t('Account')}</h3>
          <ul>
            <li><a href="/login">{t('Login')}</a></li>
            <li><a href="/register">{t('Register')}</a></li>
            <li><a href="/profile">{t('Orders')}</a></li>
            <li><a href="/wishlist">{t('Wishlist')}</a></li>
          </ul>
        </FooterSection>
      </FooterContent>
      
      <Copyright>
        <div className="container">
          {t('footer.copyright')}
        </div>
        <div className="container mt-1">
          <a href="/terms">{t('Terms')}</a> | <a href="/privacy">{t('Privacy')}</a>
        </div>
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
