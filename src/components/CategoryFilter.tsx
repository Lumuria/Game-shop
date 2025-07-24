import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
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

const CategoryList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const CategoryItem = styled.li`
  margin-bottom: 0.5rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const CategoryButton = styled.button<{ active: boolean }>`
  background: none;
  border: none;
  text-align: left;
  padding: 0.5rem 0;
  width: 100%;
  cursor: pointer;
  color: ${({ active }) => active ? 'var(--primary-color)' : 'var(--text-primary)'};
  font-weight: ${({ active }) => active ? 'bold' : 'normal'};
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--primary-color);
  }
`;

const CategoryCount = styled.span`
  background-color: var(--background-color);
  color: var(--text-secondary);
  border-radius: 12px;
  padding: 0.1rem 0.5rem;
  font-size: 0.8rem;
  margin-left: 0.5rem;
`;

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
}) => {
  const { t } = useTranslation();
  
  return (
    <FilterContainer>
      <FilterTitle>{t('store.categories')}</FilterTitle>
      <CategoryList>
        <CategoryItem>
          <CategoryButton 
            active={selectedCategory === null}
            onClick={() => onSelectCategory(null)}
          >
            {t('store.allCategories')}
            <CategoryCount>{categories.length}</CategoryCount>
          </CategoryButton>
        </CategoryItem>
        {categories.map((category) => (
          <CategoryItem key={category}>
            <CategoryButton 
              active={selectedCategory === category}
              onClick={() => onSelectCategory(category)}
            >
              {t(`categories.${category.toLowerCase()}`)}
              <CategoryCount>10</CategoryCount> {/* This would be dynamic in a real app */}
            </CategoryButton>
          </CategoryItem>
        ))}
      </CategoryList>
    </FilterContainer>
  );
};

export default CategoryFilter;
