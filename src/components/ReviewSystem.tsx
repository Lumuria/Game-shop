import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../hooks/useLanguage';
import { useToast } from '../contexts/ToastContext';
import { useTranslation } from 'react-i18next';

const ReviewContainer = styled.div`
  margin-top: 2rem;
`;


const ReviewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const ReviewTitle = styled.h3`
  color: ${props => props.theme.colors.text};
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
`;

const ReviewStats = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const RatingDisplay = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const StarRating = styled.div`
  display: flex;
  gap: 0.25rem;
`;

const Star = styled.span<{ filled: boolean }>`
  color: ${props => props.filled ? '#ffd700' : '#ddd'};
  font-size: 1.2rem;
`;

const RatingText = styled.span`
  color: ${props => props.theme.colors.text};
  font-weight: 600;
`;

const ReviewCount = styled.span`
  color: ${props => props.theme.colors.textSecondary};
  font-size: 0.9rem;
`;

const WriteReviewButton = styled.button`
  background: ${props => props.theme.colors.primary};
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: ${props => props.theme.colors.primaryHover};
    transform: translateY(-1px);
  }
`;

const ReviewForm = styled.div<{ isOpen: boolean }>`
  background: ${props => props.theme.colors.surface};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  display: ${props => props.isOpen ? 'block' : 'none'};
`;

const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: block;
  color: ${props => props.theme.colors.text};
  font-weight: 500;
  margin-bottom: 0.5rem;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 8px;
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  min-height: 100px;
  resize: vertical;
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 0 0 0 3px ${props => props.theme.colors.primary}20;
  }

  &::placeholder {
    color: ${props => props.theme.colors.textSecondary};
  }
`;

const InteractiveStarRating = styled.div`
  display: flex;
  gap: 0.25rem;
  margin-bottom: 1rem;
`;

const InteractiveStar = styled.button<{ filled: boolean; hovered: boolean }>`
  background: none;
  border: none;
  color: ${props => props.filled || props.hovered ? '#ffd700' : '#ddd'};
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.25rem;
  transition: all 0.2s;

  &:hover {
    transform: scale(1.1);
  }
`;

const FormButtons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
`;

const Button = styled.button<{ variant?: 'primary' | 'secondary' }>`
  padding: 0.75rem 1.5rem;
  border: 1px solid ${props => props.variant === 'primary' ? props.theme.colors.primary : props.theme.colors.border};
  background: ${props => props.variant === 'primary' ? props.theme.colors.primary : props.theme.colors.surface};
  color: ${props => props.variant === 'primary' ? 'white' : props.theme.colors.text};
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: ${props => props.variant === 'primary' ? props.theme.colors.primaryHover : props.theme.colors.hover};
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

const ReviewList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ReviewItem = styled.div`
  background: ${props => props.theme.colors.surface};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 12px;
  padding: 1.5rem;
`;

const ReviewItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
`;

const ReviewerInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const ReviewerAvatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${props => props.theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  font-size: 0.9rem;
`;

const ReviewerDetails = styled.div``;

const ReviewerName = styled.div`
  color: ${props => props.theme.colors.text};
  font-weight: 600;
  font-size: 0.9rem;
`;

const ReviewDate = styled.div`
  color: ${props => props.theme.colors.textSecondary};
  font-size: 0.8rem;
`;

const ReviewRating = styled.div`
  display: flex;
  gap: 0.25rem;
`;

const ReviewText = styled.p`
  color: ${props => props.theme.colors.text};
  line-height: 1.6;
  margin: 0;
`;

const ReviewActions = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid ${props => props.theme.colors.border};
`;

const ActionButton = styled.button`
  background: none;
  border: none;
  color: ${props => props.theme.colors.textSecondary};
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  padding: 0.5rem;
  border-radius: 6px;
  transition: all 0.2s;

  &:hover {
    background: ${props => props.theme.colors.hover};
    color: ${props => props.theme.colors.text};
  }

  &.liked {
    color: ${props => props.theme.colors.primary};
  }
`;

const FilterBar = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
`;

const FilterButton = styled.button<{ active: boolean }>`
  padding: 0.5rem 1rem;
  border: 1px solid ${props => props.active ? props.theme.colors.primary : props.theme.colors.border};
  background: ${props => props.active ? props.theme.colors.primary : props.theme.colors.surface};
  color: ${props => props.active ? 'white' : props.theme.colors.text};
  border-radius: 20px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.2s;

  &:hover {
    border-color: ${props => props.theme.colors.primary};
    background: ${props => props.active ? props.theme.colors.primaryHover : props.theme.colors.hover};
  }
`;

interface Review {
  id: string;
  userId: string;
  userName: string;
  userAvatar?: string;
  rating: number;
  comment: string;
  date: string;
  likes: number;
  isLiked: boolean;
}

interface ReviewSystemProps {
  productId: string;
  productName: string;
}

const ReviewSystem: React.FC<ReviewSystemProps> = ({ productId, productName }) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [newReview, setNewReview] = useState({ rating: 0, comment: '' });
  const [hoveredStar, setHoveredStar] = useState(0);
  const [filterRating, setFilterRating] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { user } = useAuth();
  const { isRTL } = useLanguage();
  const { t } = useTranslation();
  const { showToast } = useToast();

  // بيانات تجريبية للمراجعات
  const mockReviews: Review[] = [
    {
      id: '1',
      userId: '1',
      userName: 'أحمد محمد',
      rating: 5,
      comment: 'منتج ممتاز جداً، أنصح به بشدة. سهل الاستخدام ومليء بالمميزات المفيدة.',
      date: '2024-01-15',
      likes: 12,
      isLiked: false
    },
    {
      id: '2',
      userId: '2',
      userName: 'فاطمة أحمد',
      rating: 4,
      comment: 'جيد جداً ولكن يحتاج لبعض التحسينات في الواجهة.',
      date: '2024-01-10',
      likes: 8,
      isLiked: true
    },
    {
      id: '3',
      userId: '3',
      userName: 'محمد علي',
      rating: 5,
      comment: 'أفضل برنامج استخدمته في هذا المجال. يستحق كل قرش دفعته فيه.',
      date: '2024-01-05',
      likes: 15,
      isLiked: false
    }
  ];

  useEffect(() => {
    setReviews(mockReviews);
  }, [productId]);

  const averageRating = reviews.length > 0 
    ? reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length 
    : 0;

  const filteredReviews = filterRating > 0 
    ? reviews.filter(review => review.rating === filterRating)
    : reviews;

  const handleSubmitReview = async () => {
    if (!user) {
  showToast(t('loginRequired') || 'يرجى تسجيل الدخول أولاً', 'info');
  return;
}
if (newReview.rating === 0) {
  showToast(t('ratingRequired') || 'يرجى تحديد تقييم', 'info');
  return;
}
if (!newReview.comment.trim()) {
  showToast(t('commentRequired') || 'يرجى كتابة تعليق', 'info');
  return;
}


    setIsSubmitting(true);

    try {
      // محاكاة API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      const review: Review = {
        id: Date.now().toString(),
        userId: user.id,
        userName: user.username,
        userAvatar: user.avatar,
        rating: newReview.rating,
        comment: newReview.comment,
        date: new Date().toISOString().split('T')[0],
        likes: 0,
        isLiked: false
      };

      setReviews(prev => [review, ...prev]);
      setNewReview({ rating: 0, comment: '' });
      setIsFormOpen(false);
      showToast(t('reviewSubmitted') || 'تم إرسال التقييم بنجاح', 'success');
    } catch (error) {
      showToast(t('reviewError') || 'حدث خطأ في إرسال التقييم', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleLikeReview = (reviewId: string) => {
    if (!user) {
      showToast(t('loginRequired') || 'يرجى تسجيل الدخول أولاً', 'info');

    }

    setReviews(prev =>
      prev.map(review =>
        review.id === reviewId
          ? {
              ...review,
              isLiked: !review.isLiked,
              likes: review.isLiked ? review.likes - 1 : review.likes + 1
            }
          : review
      )
    );
  };

  const renderStars = (rating: number, size: 'small' | 'medium' | 'large' = 'medium') => {
    const fontSize = size === 'small' ? '1rem' : size === 'large' ? '1.5rem' : '1.2rem';
    
    return (
      <StarRating>
        {[1, 2, 3, 4, 5].map(star => (
          <Star key={star} filled={star <= rating} style={{ fontSize }}>
            ★
          </Star>
        ))}
      </StarRating>
    );
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
  };

  return (
    <ReviewContainer dir={isRTL ? 'rtl' : 'ltr'}>
      <ReviewHeader>
        <div>
          <ReviewTitle>{t('reviews') || 'التقييمات والمراجعات'}</ReviewTitle>
          <ReviewStats>
            <RatingDisplay>
              {renderStars(Math.round(averageRating))}
              <RatingText>{averageRating.toFixed(1)}</RatingText>
              <ReviewCount>({reviews.length} {t('reviews') || 'تقييم'})</ReviewCount>
            </RatingDisplay>
          </ReviewStats>
        </div>
        
        {user && (
          <WriteReviewButton onClick={() => setIsFormOpen(!isFormOpen)}>
            {t('writeReview') || 'كتابة تقييم'}
          </WriteReviewButton>
        )}
      </ReviewHeader>

      <ReviewForm isOpen={isFormOpen}>
        <FormGroup>
          <Label>{t('rating') || 'التقييم'}</Label>
          <InteractiveStarRating>
            {[1, 2, 3, 4, 5].map(star => (
              <InteractiveStar
                key={star}
                filled={star <= newReview.rating}
                hovered={star <= hoveredStar}
                onMouseEnter={() => setHoveredStar(star)}
                onMouseLeave={() => setHoveredStar(0)}
                onClick={() => setNewReview(prev => ({ ...prev, rating: star }))}
              >
                ★
              </InteractiveStar>
            ))}
          </InteractiveStarRating>
        </FormGroup>

        <FormGroup>
          <Label>{t('comment') || 'التعليق'}</Label>
          <TextArea
            value={newReview.comment}
            onChange={(e) => setNewReview(prev => ({ ...prev, comment: e.target.value }))}
            placeholder={t('writeYourReview') || 'اكتب تقييمك هنا...'}
          />
        </FormGroup>

        <FormButtons>
          <Button variant="secondary" onClick={() => setIsFormOpen(false)}>
            {t('cancel') || 'إلغاء'}
          </Button>
          <Button 
            variant="primary" 
            onClick={handleSubmitReview}
            disabled={isSubmitting}
          >
            {isSubmitting ? (t('submitting') || 'جاري الإرسال...') : (t('submit') || 'إرسال')}
          </Button>
        </FormButtons>
      </ReviewForm>

      <FilterBar>
        <FilterButton 
          active={filterRating === 0}
          onClick={() => setFilterRating(0)}
        >
          {t('allReviews') || 'جميع التقييمات'}
        </FilterButton>
        {[5, 4, 3, 2, 1].map(rating => (
          <FilterButton
            key={rating}
            active={filterRating === rating}
            onClick={() => setFilterRating(rating)}
          >
            {rating} ⭐
          </FilterButton>
        ))}
      </FilterBar>

      <ReviewList>
        {filteredReviews.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '2rem', color: '#666' }}>
            {t('noReviews') || 'لا توجد تقييمات بعد'}
          </div>
        ) : (
          filteredReviews.map(review => (
            <ReviewItem key={review.id}>
              <ReviewItemHeader>
                <ReviewerInfo>
                  <ReviewerAvatar>
                    {review.userAvatar ? (
                      <img 
                        src={review.userAvatar} 
                        alt={review.userName}
                        style={{ width: '100%', height: '100%', borderRadius: '50%' }}
                      />
                    ) : (
                      getInitials(review.userName)
                    )}
                  </ReviewerAvatar>
                  <ReviewerDetails>
                    <ReviewerName>{review.userName}</ReviewerName>
                    <ReviewDate>{review.date}</ReviewDate>
                  </ReviewerDetails>
                </ReviewerInfo>
                <ReviewRating>
                  {renderStars(review.rating, 'small')}
                </ReviewRating>
              </ReviewItemHeader>

              <ReviewText>{review.comment}</ReviewText>

              <ReviewActions>
                <ActionButton 
                  className={review.isLiked ? 'liked' : ''}
                  onClick={() => handleLikeReview(review.id)}
                >
                  👍 {review.likes}
                </ActionButton>
                <ActionButton>
                  💬 {t('reply') || 'رد'}
                </ActionButton>
                <ActionButton>
                  🚩 {t('report') || 'إبلاغ'}
                </ActionButton>
              </ReviewActions>
            </ReviewItem>
          ))
        )}
      </ReviewList>
    </ReviewContainer>
  );
};

export default ReviewSystem;

