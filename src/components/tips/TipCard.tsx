import { FC } from 'react';
import {
  StyledBoxIcon,
  StyledBoxImg,
  StyledBoxInfo,
  StyledBoxUser,
  StyledColImg,
  StyledColText,
  StyledContainerCard,
  StyledPInfo,
  StyledPName,
  StyledTitleCard,
} from './TipCard.css';
import Image from 'next/image';
import TimeIconSvg from '../icons/tips/TimeIconSvg';

interface TipCardProps {
  imgHouse: string;
  imgPerson: string;
  personName: string;
  title: string;
  date: string;
}

const TipCard: FC<TipCardProps> = ({
  imgHouse,
  imgPerson,
  personName,
  title,
  date,
}) => {
  return (
    <StyledContainerCard>
      <StyledColImg>
        <Image src={imgHouse} alt='house' width={250} height={160} />
      </StyledColImg>
      <StyledColText>
        <StyledBoxUser>
          <StyledBoxImg>
            <Image src={imgPerson} width={32} height={32} alt='person' />
          </StyledBoxImg>
          <StyledPName>{personName}</StyledPName>
        </StyledBoxUser>
        <StyledTitleCard>{title}</StyledTitleCard>
        <StyledBoxInfo>
          <StyledBoxIcon>
            <TimeIconSvg />
          </StyledBoxIcon>
          <StyledPInfo>{date}</StyledPInfo>
        </StyledBoxInfo>
      </StyledColText>
    </StyledContainerCard>
  );
};

export default TipCard;
