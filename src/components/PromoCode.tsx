import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

interface PromoCodeProps {
  onApply: (code: string) => void;
}

const PromoContainer = styled.div`
  background-color: var(--surface-color);
  border-radius: 8px;
  box-shadow: 0 2px 8px var(--shadow-color);
  padding: 1.5rem;
  margin-bottom: 1.5rem;
`;

const PromoTitle = styled.h3`
  margin: 0 0 1rem;
  color: var(--text-primary);
`;

const PromoForm = styled.form`
  display: flex;
`;

const PromoInput = styled.input`
  flex-grow: 1;
  padding: 0.8rem;
  border: 1px solid var(--border-color);
  border-radius: 4px 0 0 4px;
  background-color: var(--background-color);
  color: var(--text-primary);

  &:focus {
    outline: none;
    border-color: var(--primary-color);
  }
`;

const ApplyButton = styled.button`
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 0 4px 4px 0;
  padding: 0 1.5rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    opacity: 0.9;
  }
`;

const AvailablePromos = styled.div`
  margin-top: 1.5rem;
`;

const PromoSubtitle = styled.h4`
  margin: 0 0 0.8rem;
  color: var(--text-primary);
  font-size: 1rem;
`;

const PromoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const PromoCard = styled.div`
  border: 1px dashed var(--border-color);
  border-radius: 4px;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--background-color);
`;

const PromoInfo = styled.div``;

const PromoCodeText = styled.div`
  font-weight: bold;
  color: var(--primary-color);
  margin-bottom: 0.3rem;
`;

const PromoDescription = styled.div`
  font-size: 0.9rem;
  color: var(--text-secondary);
`;

const PromoUseButton = styled.button`
  background: none;
  border: none;
  color: var(--primary-color);
  cursor: pointer;
  font-weight: bold;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
`;

// Mock promo codes
const mockPromoCodes = [
  {
    code: 'WELCOME25',
    description: '25% off your first order',
  },
  {
    code: 'SUMMER2025',
    description: '10% off all gaming accessories',
  },
  {
    code: 'PCBUILD50',
    description: '$50 off when you spend $500+ on PC components',
  },
];

const PromoCodeSection: React.FC<PromoCodeProps> = ({ onApply }) => {
  const { t } = useTranslation();
  const [promoCode, setPromoCode] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.trim()) {
      onApply(promoCode);
      setPromoCode('');
    }
  };

  const handleUseCode = (code: string) => {
    onApply(code);
  };

  return (
    <PromoContainer>
      <PromoTitle>{t('cart.promoCode')}</PromoTitle>
      <PromoForm onSubmit={handleSubmit}>
        <PromoInput
          type="text"
          value={promoCode}
          onChange={(e) => setPromoCode(e.target.value)}
          placeholder={t('cart.enterPromoCode')}
        />
        <ApplyButton type="submit">{t('cart.apply')}</ApplyButton>
      </PromoForm>

      <AvailablePromos>
        <PromoSubtitle>{t('cart.availablePromoCodes')}</PromoSubtitle>
        <PromoList>
          {mockPromoCodes.map((promo) => (
            <PromoCard key={promo.code}>
              <PromoInfo>
                <PromoCodeText>{promo.code}</PromoCodeText>
                <PromoDescription>{promo.description}</PromoDescription>
              </PromoInfo>
              <PromoUseButton onClick={() => handleUseCode(promo.code)}>
                {t('cart.useCode')}
              </PromoUseButton>
            </PromoCard>
          ))}
        </PromoList>
      </AvailablePromos>
    </PromoContainer>
  );
};

export default PromoCodeSection;