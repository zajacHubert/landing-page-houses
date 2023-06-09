import { FC } from 'react';
import {
  StyledBoxBtnIcon,
  StyledBoxIcon,
  StyledBoxImgChair,
  StyledBoxImgCouch,
  StyledBoxImgFurniture,
  StyledBoxImgPerson,
  StyledBoxInfo,
  StyledBoxItem,
  StyledBoxManager,
  StyledBoxPerson,
  StyledBoxSell,
  StyledBoxTextPerson,
  StyledBtn,
  StyledColImg,
  StyledColText,
  StyledContainer,
  StyledLine,
  StyledPName,
  StyledPOccupation,
  StyledSection,
  StyledText,
  StyledTextItem,
  StyledTextSell,
  StyledTitle,
  StyledTitleInfo,
} from './SellSections.css';
import BathIconSvg from '../icons/sell/BathIconSvg';
import BedroomIconSvg from '../icons/sell/BedroomIconSvg';
import CarIconSvg from '../icons/sell/CarIconSvg';
import StairsIconSvg from '../icons/sell/StairsIconSvg';
import PhoneIconSvg from '../icons/sell/PhoneIconSvg';
import Image from 'next/image';

const SellSection: FC = () => {
  return (
    <StyledSection>
      <StyledContainer>
        <StyledColText>
          <StyledBoxSell>
            <StyledLine />
            <StyledTextSell>Ready To Sell!</StyledTextSell>
          </StyledBoxSell>
          <StyledTitle>Let&#39;s Tour And See Our House!</StyledTitle>
          <StyledText>
            Houses recommended by our partners that have been curated to become
            the home of your dreams!
          </StyledText>
          <StyledTitleInfo>House Detail</StyledTitleInfo>
          <StyledBoxInfo>
            <StyledBoxItem>
              <StyledBoxIcon>
                <BedroomIconSvg />
              </StyledBoxIcon>
              <StyledTextItem>4 Bedrooms</StyledTextItem>
            </StyledBoxItem>
            <StyledBoxItem>
              <StyledBoxIcon>
                <BathIconSvg />
              </StyledBoxIcon>
              <StyledTextItem>2 Bathrooms</StyledTextItem>
            </StyledBoxItem>
            <StyledBoxItem>
              <StyledBoxIcon>
                <CarIconSvg />
              </StyledBoxIcon>
              <StyledTextItem>1 Carport</StyledTextItem>
            </StyledBoxItem>
            <StyledBoxItem>
              <StyledBoxIcon>
                <StairsIconSvg />
              </StyledBoxIcon>
              <StyledTextItem>2 floors</StyledTextItem>
            </StyledBoxItem>
          </StyledBoxInfo>
          <StyledBoxManager>
            <StyledBoxPerson>
              <StyledBoxImgPerson>
                <Image
                  src={'/images/sell/person.jpg'}
                  alt='person'
                  height={56}
                  width={56}
                />
              </StyledBoxImgPerson>
              <StyledBoxTextPerson>
                <StyledPName>Dianne Russel</StyledPName>
                <StyledPOccupation>Manage Director</StyledPOccupation>
              </StyledBoxTextPerson>
            </StyledBoxPerson>
            <StyledBtn>
              <StyledBoxBtnIcon>
                <PhoneIconSvg />
              </StyledBoxBtnIcon>
              Contact Now
            </StyledBtn>
          </StyledBoxManager>
        </StyledColText>
        <StyledColImg>
          <Image
            src={'/images/sell/house.jpg'}
            alt='house'
            width={600}
            height={450}
          />
          <StyledBoxImgCouch>
            <Image
              src={'/images/sell/couch.jpg'}
              alt='couch'
              width={300}
              height={170}
            />
          </StyledBoxImgCouch>
          <StyledBoxImgFurniture>
            <Image
              src={'/images/sell/furniture.jpg'}
              alt='furniture'
              height={80}
              width={100}
            />
          </StyledBoxImgFurniture>
          <StyledBoxImgChair>
            <Image
              src={'/images/sell/chair.jpg'}
              alt='chair'
              height={800}
              width={100}
            />
          </StyledBoxImgChair>
        </StyledColImg>
      </StyledContainer>
    </StyledSection>
  );
};

export default SellSection;
