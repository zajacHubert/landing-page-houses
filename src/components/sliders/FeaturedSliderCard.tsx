import { FC, useState, useEffect } from 'react';
import { Status } from '@/types/status';
import {
  StyledBoxCategory,
  StyledBoxIcon,
  StyledBoxImg,
  StyledBoxImgOwner,
  StyledBoxOwner,
  StyledBoxSliderCard,
  StyledBoxTextOwner,
  StyledPAddress,
  StyledPOwnerName,
  StyledPPrice,
  StyledTextCategory,
  StyledTitleCard,
} from './FeaturedSliderCard.css';
import FireStatusIconSvg from '../icons/featured/FireStatusIconSvg';
import HouseStatusIconSvg from '../icons/featured/HouseStatusIconSvg';
import BookStatusIconSvg from '../icons/featured/BookStatusIconSvg';
import Image from 'next/image';

interface FeaturedSliderCardProps {
  title: string;
  imgHouse: string;
  imgOwner: string;
  price: number;
  city: string;
  owner: string;
  status: string;
}

const FeaturedSliderCard: FC<FeaturedSliderCardProps> = ({
  title,
  status,
  imgOwner,
  imgHouse,
  owner,
  city,
  price,
}) => {
  const [statusProperties, setStatusProperties] = useState<Status>(
    {} as Status
  );

  useEffect(() => {
    if (status === 'popular') {
      setStatusProperties({
        icon: <FireStatusIconSvg />,
        bgColor: '#FEE2E2',
        color: '#EF4444',
        text: 'Popular',
      });
    }
    if (status === 'newHouse') {
      setStatusProperties({
        icon: <HouseStatusIconSvg />,
        bgColor: '#DBEAFE',
        color: '#1D4ED8',
        text: 'New House',
      });
    }

    if (status === 'bestDeals') {
      setStatusProperties({
        icon: <BookStatusIconSvg />,
        bgColor: '#D1FAE5',
        color: '#047857',
        text: 'Best Deals',
      });
    }
  }, [status]);
  return (
    <StyledBoxSliderCard>
      <StyledBoxImg>
        <Image src={imgHouse} alt='house' height={400} width={400} />
        <StyledBoxCategory bgColor={statusProperties.bgColor}>
          <StyledBoxIcon>{statusProperties.icon}</StyledBoxIcon>
          <StyledTextCategory color={statusProperties.color}>
            {statusProperties.text}
          </StyledTextCategory>
        </StyledBoxCategory>
      </StyledBoxImg>
      <StyledTitleCard>{title}</StyledTitleCard>
      <StyledPPrice>{price} $</StyledPPrice>
      <StyledBoxOwner>
        <StyledBoxImgOwner>
          <Image src={imgOwner} alt='person' height={40} width={40} />
        </StyledBoxImgOwner>
        <StyledBoxTextOwner>
          <StyledPOwnerName>{owner}</StyledPOwnerName>
          <StyledPAddress>{city}</StyledPAddress>
        </StyledBoxTextOwner>
      </StyledBoxOwner>
    </StyledBoxSliderCard>
  );
};

export default FeaturedSliderCard;
