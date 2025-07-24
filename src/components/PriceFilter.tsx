import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

interface PriceFilterProps {
  minPrice: number;
  maxPrice: number;
  currentMin: number;
  currentMax: number;
  onPriceChange: (min: number, max: number) => void;
}

const FilterContainer = styled.div`
  background-color: var(--surface-color);
  border-radius: 8px;
  box-shadow: 0 2px 8px var(--shadow-color);
  padding: 1.5rem;
  margin-bottom: 1.5rem;
`;

const FilterTitle = styled.h3`
  margin: 0 0 1rem;
  color: var(--text-primary);
  font-size: 1.2rem;
`;

const RangeContainer = styled.div`
  margin-bottom: 1rem;
`;

const SliderContainer = styled.div`
  position: relative;
  height: 6px;
  background-color: var(--border-color);
  border-radius: 3px;
  margin: 1.5rem 0;
`;

const SliderRange = styled.div<{ left: number; width: number }>`
  position: absolute;
  height: 100%;
  background-color: var(--primary-color);
  border-radius: 3px;
  left: ${props => props.left}%;
  width: ${props => props.width}%;
`;

const SliderThumb = styled.div<{ position: number }>`
  position: absolute;
  width: 18px;
  height: 18px;
  background-color: var(--primary-color);
  border-radius: 50%;
  top: 50%;
  left: ${props => props.position}%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  z-index: 2;
`;

const PriceInputs = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PriceInput = styled.div`
  display: flex;
  align-items: center;
`;

const PriceLabel = styled.span`
  color: var(--text-secondary);
  margin-right: 0.5rem;
  font-size: 0.9rem;
`;

const Input = styled.input`
  width: 80px;
  padding: 0.5rem;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  background-color: var(--background-color);
  color: var(--text-primary);
  text-align: center;

  &:focus {
    outline: none;
    border-color: var(--primary-color);
  }
`;

const Separator = styled.span`
  margin: 0 0.5rem;
  color: var(--text-secondary);
`;

const ApplyButton = styled.button`
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  cursor: pointer;
  transition: opacity 0.3s ease;
  margin-top: 1rem;
  width: 100%;

  &:hover {
    opacity: 0.9;
  }
`;

const PriceFilter: React.FC<PriceFilterProps> = ({
  minPrice,
  maxPrice,
  currentMin,
  currentMax,
  onPriceChange,
}) => {
  const { t } = useTranslation();
  const [localMin, setLocalMin] = React.useState(currentMin);
  const [localMax, setLocalMax] = React.useState(currentMax);

  const range = maxPrice - minPrice;
  const leftPosition = ((localMin - minPrice) / range) * 100;
  const rightPosition = ((localMax - minPrice) / range) * 100;
  const rangeWidth = rightPosition - leftPosition;

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= minPrice && value <= localMax) {
      setLocalMin(value);
    }
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value <= maxPrice && value >= localMin) {
      setLocalMax(value);
    }
  };

  const handleApply = () => {
    onPriceChange(localMin, localMax);
  };

  return (
    <FilterContainer>
      <FilterTitle>{t('store.priceRange')}</FilterTitle>
      <RangeContainer>
        <SliderContainer>
          <SliderRange left={leftPosition} width={rangeWidth} />
          <SliderThumb position={leftPosition} />
          <SliderThumb position={rightPosition} />
        </SliderContainer>
        <PriceInputs>
          <PriceInput>
            <PriceLabel>{t('store.min')}</PriceLabel>
            <Input
              type="number"
              value={localMin}
              onChange={handleMinChange}
              min={minPrice}
              max={localMax}
            />
          </PriceInput>
          <Separator>-</Separator>
          <PriceInput>
            <PriceLabel>{t('store.max')}</PriceLabel>
            <Input
              type="number"
              value={localMax}
              onChange={handleMaxChange}
              min={localMin}
              max={maxPrice}
            />
          </PriceInput>
        </PriceInputs>
      </RangeContainer>
      <ApplyButton onClick={handleApply}>{t('store.applyFilter')}</ApplyButton>
    </FilterContainer>
  );
};

export default PriceFilter;
