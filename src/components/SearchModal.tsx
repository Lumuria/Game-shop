import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Product } from '../contexts/CartContext';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
}

const Overlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  justify-content: center;
  align-items: flex-start;
  padding-top: 10vh;
  z-index: 1000;
`;

const Modal = styled.div`
  background-color: var(--surface-color);
  border-radius: 12px;
  padding: 1.5rem;
  max-width: 600px;
  width: 90%;
  max-height: 70vh;
  overflow-y: auto;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 1rem;
  border: 2px solid var(--border-color);
  border-radius: 8px;
  font-size: 1rem;
  background-color: var(--background-color);
  color: var(--text-primary);
  margin-bottom: 1rem;
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
  }
`;

const ResultsContainer = styled.div`
  max-height: 400px;
  overflow-y: auto;
`;

const ResultItem = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid var(--border-color);
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: var(--background-color);
  }
  
  &:last-child {
    border-bottom: none;
  }
`;

const ResultImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 1rem;
`;

const ResultDetails = styled.div`
  flex: 1;
`;

const ResultName = styled.h4`
  margin: 0 0 0.5rem;
  color: var(--text-primary);
  font-size: 0.9rem;
`;

const ResultCategory = styled.span`
  color: var(--text-secondary);
  font-size: 0.8rem;
`;

const ResultPrice = styled.span`
  color: var(--primary-color);
  font-weight: bold;
  margin-left: 1rem;
`;

const NoResults = styled.div`
  text-align: center;
  padding: 2rem;
  color: var(--text-secondary);
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--text-secondary);
  padding: 0.5rem;
  border-radius: 50%;
  
  &:hover {
    background-color: var(--background-color);
  }
`;

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, products }) => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredProducts([]);
      return;
    }

    const normalizedSearchTerm = searchTerm.toLowerCase();

    const filtered = products.filter(product =>
      // البحث في اسم المنتج
      product.name.toLowerCase().includes(normalizedSearchTerm) ||
      // البحث في فئة المنتج
      product.category.toLowerCase().includes(normalizedSearchTerm) ||
      // البحث في وصف المنتج
      product.description.toLowerCase().includes(normalizedSearchTerm) ||
      // إضافة دعم للبحث باللغة العربية (افتراض أن الترجمة متاحة)
      t(`product.${product.id}.name`, { defaultValue: '' }).toLowerCase().includes(normalizedSearchTerm) ||
      t(`product.${product.id}.description`, { defaultValue: '' }).toLowerCase().includes(normalizedSearchTerm)
    );

    setFilteredProducts(filtered);
  }, [searchTerm, products]);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleClose = () => {
    setSearchTerm('');
    setFilteredProducts([]);
    onClose();
  };

  return (
    <Overlay isOpen={isOpen} onClick={handleOverlayClick}>
      <Modal style={{ position: 'relative' }}>
        <CloseButton onClick={handleClose}>×</CloseButton>
        
        <SearchInput
          type="text"
          placeholder={t('search.placeholder')}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          autoFocus
        />
        
        <ResultsContainer>
          {searchTerm.trim() !== '' && filteredProducts.length === 0 && (
            <NoResults>
              <p>{t('search.noResults')}</p>
            </NoResults>
          )}
          
          {filteredProducts.map((product) => (
            <ResultItem key={product.id} onClick={handleClose}>
              <ResultImage src={product.image} alt={product.name} />
              <ResultDetails>
                <ResultName>{product.name}</ResultName>
                <ResultCategory>{t(`categories.${product.category.toLowerCase()}`)}</ResultCategory>
              </ResultDetails>
              <ResultPrice>
                ${product.discountPrice || product.price}
              </ResultPrice>
            </ResultItem>
          ))}
        </ResultsContainer>
      </Modal>
    </Overlay>
  );
};

export default SearchModal;

