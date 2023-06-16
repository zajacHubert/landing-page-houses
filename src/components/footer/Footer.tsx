import { FC } from 'react';
import LogoIconSvg from '../icons/hero/LogoIconSvg';
import FacebookIconSvg from '../icons/footer/FacebookIconSvg';
import TwitterIconSvg from '../icons/footer/TwitterIconSvg';
import InstagramIconSvg from '../icons/footer/InstagramIconSvg';
import {
  StyledBoxIcon,
  StyledBoxIcons,
  StyledBoxInfo,
  StyledBoxLogo,
  StyledBoxParagraph,
  StyledBoxShape,
  StyledBoxShapes,
  StyledColInfo,
  StyledColText,
  StyledContainer,
  StyledFooter,
  StyledPInfo,
  StyledText,
  StyledTitleInfo,
  StyledTitleLogo,
} from './Footer.css';

const Footer: FC = () => {
  return (
    <StyledFooter>
      <StyledContainer>
        <StyledColText>
          <StyledBoxLogo>
            <StyledBoxShapes>
              <LogoIconSvg color='#F59E0B' />
              <StyledBoxShape>
                <LogoIconSvg color='#4BE4C9' />
              </StyledBoxShape>
            </StyledBoxShapes>
            <StyledTitleLogo>Hounter</StyledTitleLogo>
          </StyledBoxLogo>
          <StyledBoxParagraph>
            <StyledText>
              We provide information about properties such as houses, villas and
              apartments to help people find their dream home
            </StyledText>
          </StyledBoxParagraph>
          <StyledBoxIcons>
            <StyledBoxIcon>
              <FacebookIconSvg />
            </StyledBoxIcon>
            <StyledBoxIcon>
              <TwitterIconSvg />
            </StyledBoxIcon>
            <StyledBoxIcon>
              <InstagramIconSvg />
            </StyledBoxIcon>
          </StyledBoxIcons>
        </StyledColText>
        <StyledColInfo>
          <StyledBoxInfo>
            <StyledTitleInfo>Property</StyledTitleInfo>
            <StyledPInfo>House</StyledPInfo>
            <StyledPInfo>Apartment</StyledPInfo>
            <StyledPInfo>Villa</StyledPInfo>
          </StyledBoxInfo>
          <StyledBoxInfo>
            <StyledTitleInfo>Article</StyledTitleInfo>
            <StyledPInfo>New Article</StyledPInfo>
            <StyledPInfo>Popular Article</StyledPInfo>
            <StyledPInfo>Most Read</StyledPInfo>
            <StyledPInfo>Tips & Tricks</StyledPInfo>
          </StyledBoxInfo>
          <StyledBoxInfo>
            <StyledTitleInfo>Contact</StyledTitleInfo>
            <StyledPInfo>2464 Royal Mesa, New Jersey</StyledPInfo>
            <StyledPInfo>(671) 555-0110</StyledPInfo>
            <StyledPInfo>info@hounter.com</StyledPInfo>
          </StyledBoxInfo>
        </StyledColInfo>
      </StyledContainer>
    </StyledFooter>
  );
};

export default Footer;
