import styled from 'styled-components';

export const StyledFooter = styled.footer`
  max-width: 1500px;
  margin: 0 auto 127px;

  @media (max-width: 1600px) {
    margin: 0 50px;
  }

  @media (max-width: 1200px) {
    margin: 0 30px;
  }

  @media (max-width: 768px) {
    margin: 0 10px;
  }
`;

export const StyledContainer = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledColText = styled.div`
  width: 50%;

  @media (max-width: 768px) {
    width: fit-content;
    text-align: center;
    margin-bottom: 30px;
  }
`;

export const StyledBoxLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 22px;
`;

export const StyledBoxShapes = styled.div`
  position: relative;
`;

export const StyledBoxShape = styled.div`
  position: absolute;
  top: 4px;
  left: 4px;
`;

export const StyledTitleLogo = styled.h3`
  font-weight: 700;
  font-size: 16px;
  color: #1b1c57;
`;

export const StyledBoxParagraph = styled.div`
  max-width: 320px;
  margin-bottom: 30px;
`;

export const StyledText = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #626687;
  opacity: 0.75;
`;

export const StyledBoxIcons = styled.div`
  display: flex;
  gap: 34px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const StyledBoxIcon = styled.div``;

export const StyledColInfo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;

  @media (max-width: 768px) {
    text-align: center;
    width: 100%;
  }
`;

export const StyledBoxInfo = styled.div``;

export const StyledTitleInfo = styled.h4`
  font-weight: 600;
  font-size: 18px;
  color: #0e1735;
  margin-bottom: 24px;
`;

export const StyledPInfo = styled.p`
  font-weight: 400;
  font-size: 14px;
  text-transform: capitalize;
  color: #888b97;
  margin-bottom: 18px;
`;
