'use client';

import React from 'react';
import {
  StyledBoxLogo,
  StyledBoxIconForm,
  StyledBoxShape,
  StyledBoxText,
  StyledBoxTitle,
  StyledContainer,
  StyledForm,
  StyledSection,
  StyledSpanTransparent,
  StyledText,
  StyledTitle,
  StyledTitleLogo,
  StyledInput,
  StyledBtn,
  StyledBoxArrow,
  StyledBoxLogos,
  StyledBoxLogoPartnership,
  StyledColImg,
  StyledBoxCards,
  StyledBoxCard,
  StyledBoxImages,
  StyledBoxPersonFirst,
  StyledBoxPersonSecond,
  StyledBoxPersonThird,
  StyledBoxTextCard,
  StyledTitleCard,
  StyledTextCard,
  StyledBoxImgBuilding,
  StyledBoxShapes,
} from './HeroSection.css';
import LogoIconSvg from '../icons/hero/LogoIconSvg';
import PlaceIconSvg from '../icons/hero/PlaceIconSvg';
import RightArrowIconSvg from '../icons/hero/RightArrowIconSvg';
import TravelokaLogoSvg from '../icons/hero/TravelokaLogoSvg';
import TicketLogoSvg from '../icons/hero/TicketLogoSvg';
import Image from 'next/image';
import AirLogoSvg from '../icons/hero/AirLogoSvg';
import TripLogoSvg from '../icons/hero/TripLogoSvg';

const HeroSection = () => {
  return (
    <StyledSection>
      <StyledContainer>
        <StyledBoxText>
          <StyledBoxLogo>
            <StyledBoxShapes>
              <LogoIconSvg color='#F59E0B' />
              <StyledBoxShape>
                <LogoIconSvg color='#4BE4C9' />
              </StyledBoxShape>
            </StyledBoxShapes>
            <StyledTitleLogo>Hounter</StyledTitleLogo>
          </StyledBoxLogo>
          <StyledBoxTitle>
            <StyledTitle>
              Find the place to live
              <StyledSpanTransparent> your dreams</StyledSpanTransparent> easily
              here
            </StyledTitle>
          </StyledBoxTitle>
          <StyledText>
            Everything you need about finding your place to live will be here,
            where it will be easier for you
          </StyledText>
          <StyledForm>
            <StyledBoxIconForm>
              <PlaceIconSvg />
            </StyledBoxIconForm>
            <StyledInput placeholder='Search for the location you want' />
            <StyledBtn>
              Search
              <StyledBoxArrow>
                <RightArrowIconSvg />
              </StyledBoxArrow>
            </StyledBtn>
          </StyledForm>
          <StyledText>Our Partnership </StyledText>
          <StyledBoxLogos>
            <StyledBoxLogoPartnership>
              <TravelokaLogoSvg />
            </StyledBoxLogoPartnership>
            <StyledBoxLogoPartnership>
              <TicketLogoSvg />
            </StyledBoxLogoPartnership>
            <StyledBoxLogoPartnership>
              <AirLogoSvg />
            </StyledBoxLogoPartnership>
            <StyledBoxLogoPartnership>
              <TripLogoSvg />
            </StyledBoxLogoPartnership>
          </StyledBoxLogos>
        </StyledBoxText>
        <StyledColImg>
          <Image
            src={'/images/hero/bg.jpg'}
            alt='house'
            width={800}
            height={800}
          />
          <StyledBoxCards>
            <StyledBoxCard>
              <StyledBoxImages>
                <StyledBoxPersonFirst>
                  <Image
                    src='/images/hero/person1.jpg'
                    alt='person'
                    width={56}
                    height={56}
                  />
                </StyledBoxPersonFirst>
                <StyledBoxPersonSecond>
                  <Image
                    src='/images/hero/person2.jpg'
                    alt='person'
                    width={56}
                    height={56}
                  />
                </StyledBoxPersonSecond>
                <StyledBoxPersonThird>
                  <Image
                    src='/images/hero/person3.jpg'
                    alt='person'
                    width={56}
                    height={56}
                  />
                </StyledBoxPersonThird>
              </StyledBoxImages>
              <StyledBoxTextCard>
                <StyledTitleCard>1K+ People</StyledTitleCard>
                <StyledTextCard>Successfully Getting Home</StyledTextCard>
              </StyledBoxTextCard>
            </StyledBoxCard>
            <StyledBoxCard>
              <StyledBoxImgBuilding>
                <Image
                  src={'/images/hero/house.jpg'}
                  height={56}
                  width={56}
                  alt='house'
                />
              </StyledBoxImgBuilding>
              <StyledBoxTextCard>
                <StyledTitleCard>56 Houses</StyledTitleCard>
                <StyledTextCard>Sold Monthly</StyledTextCard>
              </StyledBoxTextCard>
            </StyledBoxCard>
          </StyledBoxCards>
        </StyledColImg>
      </StyledContainer>
    </StyledSection>
  );
};

export default HeroSection;
