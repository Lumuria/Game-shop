import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Product } from '../contexts/CartContext';

interface ReviewsAndRatingsProps {
  product: Product;
}

// Mock reviews data
const mockReviews = [
  {
    id: 1,
    username: 'GamerPro123',
    rating: 5,
    date: '2025-04-15',
    title: 'Amazing product!',
    comment: 'This is exactly what I was looking for. The performance is incredible and it exceeded all my expectations. Highly recommended for any serious gamer.',
    helpful: 24,
    notHelpful: 2
  },
  {
    id: 2,
    username: 'TechEnthusiast',
    rating: 4,
    date: '2025-04-10',
    title: 'Great value for money',
    comment: 'Very good product for the price. The only reason I\'m not giving 5 stars is because the installation instructions could be clearer. Otherwise, it works perfectly.',
    helpful: 18,
    notHelpful: 3
  },
  {
    id: 3,
    username: 'PCBuilder2025',
    rating: 3,
    date: '2025-03-28',
    title: 'Decent but has some issues',
    comment: 'The product works as advertised most of the time, but I\'ve encountered some compatibility issues with my setup. Customer support was helpful in resolving them though.',
    helpful: 12,
    notHelpful: 5
  }
];

const ReviewsContainer = styled.div`
  margin-top: 2rem;
`;

const ReviewsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const ReviewsTitle = styled.h3`
  margin: 0;
  color: var(--text-primary);
`;

const WriteReviewButton = styled.button`
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: opacity 0.3s ease;
  
  &:hover {
    opacity: 0.9;
  }
`;

const RatingSummary = styled.div`
  display: flex;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const AverageRating = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  border-right: 1px solid var(--border-color);
  
  @media (max-width: 768px) {
    border-right: none;
    border-bottom: 1px solid var(--border-color);
    padding-bottom: 1.5rem;
    margin-bottom: 1.5rem;
  }
`;

const RatingValue = styled.div`
  font-size: 3rem;
  font-weight: bold;
  color: var(--text-primary);
`;

const RatingStars = styled.div`
  font-size: 1.5rem;
  color: gold;
  margin: 0.5rem 0;
`;

const RatingCount = styled.div`
  color: var(--text-secondary);
`;

const RatingDistribution = styled.div`
  flex: 2;
  padding: 1rem;
`;

const RatingBar = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const RatingLabel = styled.div`
  width: 30px;
  margin-right: 0.5rem;
  text-align: right;
`;

const ProgressBarContainer = styled.div`
  flex: 1;
  height: 12px;
  background-color: var(--background-color);
  border-radius: 6px;
  overflow: hidden;
  margin-right: 0.5rem;
`;

const ProgressBarFill = styled.div<{ percentage: number }>`
  height: 100%;
  width: ${props => props.percentage}%;
  background-color: var(--primary-color);
`;

const ProgressBarLabel = styled.div`
  width: 40px;
  color: var(--text-secondary);
  font-size: 0.9rem;
`;

const ReviewsList = styled.div`
  margin-top: 2rem;
`;

const ReviewItem = styled.div`
  padding: 1.5rem 0;
  border-bottom: 1px solid var(--border-color);
  
  &:last-child {
    border-bottom: none;
  }
`;

const ReviewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

const ReviewerInfo = styled.div``;

const ReviewerName = styled.div`
  font-weight: bold;
  color: var(--text-primary);
`;

const ReviewDate = styled.div`
  color: var(--text-secondary);
  font-size: 0.9rem;
`;

const ReviewRating = styled.div`
  color: gold;
`;

const ReviewTitle = styled.h4`
  margin: 0.5rem 0;
  color: var(--text-primary);
`;

const ReviewContent = styled.p`
  color: var(--text-primary);
  line-height: 1.6;
`;

const ReviewActions = styled.div`
  display: flex;
  margin-top: 1rem;
`;

const ReviewActionButton = styled.button`
  background: none;
  border: 1px solid var(--border-color);
  color: var(--text-secondary);
  padding: 0.3rem 0.8rem;
  border-radius: 4px;
  margin-right: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--background-color);
  }
`;

const ActionIcon = styled.span`
  margin-right: 0.3rem;
`;

const ActionCount = styled.span``;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

const PaginationButton = styled.button<{ active?: boolean }>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: 0 0.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 1px solid var(--border-color);
  background-color: ${props => props.active ? 'var(--primary-color)' : 'transparent'};
  color: ${props => props.active ? 'white' : 'var(--text-primary)'};
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => props.active ? 'var(--primary-color)' : 'var(--background-color)'};
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const ReviewsAndRatings: React.FC<ReviewsAndRatingsProps> = ({ product }) => {
  const { t } = useTranslation();
  const [currentPage, setCurrentPage] = React.useState(1);
  
  // Calculate average rating
  const averageRating = mockReviews.reduce((acc, review) => acc + review.rating, 0) / mockReviews.length;
  
  // Calculate rating distribution
  const ratingDistribution = [5, 4, 3, 2, 1].map(rating => {
    const count = mockReviews.filter(review => review.rating === rating).length;
    const percentage = (count / mockReviews.length) * 100;
    return { rating, count, percentage };
  });
  
  // Render stars based on rating
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push('★');
      } else if (i - 0.5 <= rating) {
        stars.push('★½');
      } else {
        stars.push('☆');
      }
    }
    return stars.join('');
  };
  
  return (
    <ReviewsContainer>
      <ReviewsHeader>
        <ReviewsTitle>{t('product.reviews')}</ReviewsTitle>
        <WriteReviewButton>{t('product.writeReview')}</WriteReviewButton>
      </ReviewsHeader>
      
      <RatingSummary>
        <AverageRating>
          <RatingValue>{averageRating.toFixed(1)}</RatingValue>
          <RatingStars>{renderStars(averageRating)}</RatingStars>
          <RatingCount>
            {mockReviews.length} {t('product.reviews')}
          </RatingCount>
        </AverageRating>
        
        <RatingDistribution>
          {ratingDistribution.map(({ rating, count, percentage }) => (
            <RatingBar key={rating}>
              <RatingLabel>{rating}</RatingLabel>
              <ProgressBarContainer>
                <ProgressBarFill percentage={percentage} />
              </ProgressBarContainer>
              <ProgressBarLabel>{count}</ProgressBarLabel>
            </RatingBar>
          ))}
        </RatingDistribution>
      </RatingSummary>
      
      <ReviewsList>
        {mockReviews.map(review => (
          <ReviewItem key={review.id}>
            <ReviewHeader>
              <ReviewerInfo>
                <ReviewerName>{review.username}</ReviewerName>
                <ReviewDate>{new Date(review.date).toLocaleDateString()}</ReviewDate>
              </ReviewerInfo>
              <ReviewRating>{renderStars(review.rating)}</ReviewRating>
            </ReviewHeader>
            <ReviewTitle>{review.title}</ReviewTitle>
            <ReviewContent>{review.comment}</ReviewContent>
            <ReviewActions>
              <ReviewActionButton>
                <ActionIcon>👍</ActionIcon>
                <ActionCount>{review.helpful}</ActionCount>
              </ReviewActionButton>
              <ReviewActionButton>
                <ActionIcon>👎</ActionIcon>
                <ActionCount>{review.notHelpful}</ActionCount>
              </ReviewActionButton>
            </ReviewActions>
          </ReviewItem>
        ))}
      </ReviewsList>
      
      <PaginationContainer>
        <PaginationButton disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>
          &lt;
        </PaginationButton>
        <PaginationButton active={currentPage === 1} onClick={() => setCurrentPage(1)}>
          1
        </PaginationButton>
        <PaginationButton onClick={() => setCurrentPage(2)}>
          2
        </PaginationButton>
        <PaginationButton onClick={() => setCurrentPage(3)}>
          3
        </PaginationButton>
        <PaginationButton disabled={currentPage === 3} onClick={() => setCurrentPage(currentPage + 1)}>
          &gt;
        </PaginationButton>
      </PaginationContainer>
    </ReviewsContainer>
  );
};

export default ReviewsAndRatings;
