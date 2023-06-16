import { FC } from 'react';
import ReviewSlider from '../sliders/ReviewSlider';
import {
  StyledPReview,
  StyledSection,
  StyledLine,
  StyledRow,
  StyledTitle,
  StyledBoxSlider,
} from './ReviewSection.css';

const ReviewSection: FC = () => {
  return (
    <StyledSection>
      <StyledRow>
        <StyledLine />
        <StyledPReview>See Our Review</StyledPReview>
        <StyledTitle>What Our User Say About Us</StyledTitle>
      </StyledRow>
      <StyledBoxSlider>
        <ReviewSlider />
      </StyledBoxSlider>
    </StyledSection>
  );
};

export default ReviewSection;
