import { FC } from 'react';
import {
  StyledBoxArrowIcon,
  StyledBoxArrows,
  StyledBoxRecommendation,
  StyledBoxSlider,
  StyledBtn,
  StyledLine,
  StyledRow,
  StyledSection,
  StyledTextRecommendation,
  StyledTitle,
} from './FeaturedSection.css';
import ArrowLeftIconSvg from '../icons/featured/ArrowLeftIcon.Svg';
import ArrowRightIconSvg from '../icons/featured/ArrowRightIconSvg';
import FeaturedSlider from '../sliders/FeaturedSlider';

const FeaturedSection: FC = () => {
  return (
    <StyledSection>
      <StyledBoxRecommendation>
        <StyledLine />
        <StyledTextRecommendation>Our Recommendation</StyledTextRecommendation>
      </StyledBoxRecommendation>
      <StyledRow>
        <StyledTitle>Featured House</StyledTitle>
        <StyledBoxArrows>
          <StyledBtn bgColor='#E0E3EB' id='swiper-prev'>
            <StyledBoxArrowIcon>
              <ArrowLeftIconSvg />
            </StyledBoxArrowIcon>
          </StyledBtn>
          <StyledBtn bgColor='#10B981' id='swiper-next'>
            <StyledBoxArrowIcon>
              <ArrowRightIconSvg />
            </StyledBoxArrowIcon>
          </StyledBtn>
        </StyledBoxArrows>
      </StyledRow>
      <StyledBoxSlider>
        <FeaturedSlider />
      </StyledBoxSlider>
    </StyledSection>
  );
};

export default FeaturedSection;
