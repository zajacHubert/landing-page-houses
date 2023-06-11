import { FC } from 'react';
import {
  StyledBoxCard,
  StyledBoxImg,
  StyledBoxImgUser,
  StyledBoxRate,
  StyledBoxUser,
  StyledPName,
  StyledPOccupation,
  StyledPRate,
  StyledRowUserRate,
  StyledTextCard,
  StyledTitleCard,
  StyledBoxIcon,
  StyledBoxTextUser,
} from './ReviewSliderCard.css';
import Image from 'next/image';
import StarRateIconSvg from '../icons/review/StarRateIconSvg';

interface ReviewSliderCardProps {
  title: string;
  imgHouse: string;
  imgPerson: string;
  text: string;
  rate: number;
  author: string;
  occupation: string;
}

const ReviewSliderCard: FC<ReviewSliderCardProps> = ({
  title,
  imgHouse,
  imgPerson,
  text,
  rate,
  author,
  occupation,
}) => {
  return (
    <StyledBoxImg>
      <Image src={imgHouse} alt='house' width={900} height={500} />
      <StyledBoxCard>
        <StyledTitleCard>{title}</StyledTitleCard>
        <StyledTextCard>{text}</StyledTextCard>
        <StyledRowUserRate>
          <StyledBoxUser>
            <StyledBoxImgUser>
              <Image src={imgPerson} alt='person' width={40} height={40} />
            </StyledBoxImgUser>
            <StyledBoxTextUser>
              <StyledPName>{author}</StyledPName>
              <StyledPOccupation>{occupation}</StyledPOccupation>
            </StyledBoxTextUser>
          </StyledBoxUser>
          <StyledBoxRate>
            <StyledBoxIcon>
              <StarRateIconSvg />
            </StyledBoxIcon>
            <StyledPRate>{rate}</StyledPRate>
          </StyledBoxRate>
        </StyledRowUserRate>
      </StyledBoxCard>
    </StyledBoxImg>
  );
};

export default ReviewSliderCard;
