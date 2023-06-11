import styled from 'styled-components';

export const StyledSection = styled.section`
  max-width: 1500px;
  margin: 0 auto;
  padding-top: 50px;

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
  justify-content: space-between;
  margin-bottom: 30px;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledBoxText = styled.div`
  width: 35%;

  @media (max-width: 1024px) {
    width: 60%;
  }

  @media (max-width: 768px) {
    width: 70%;
  }

  @media (max-width: 600px) {
    width: 90%;
  }
`;

export const StyledBoxLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 107px;

  @media (max-width: 1024px) {
    margin-bottom: 30px;
  }
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

export const StyledBoxTitle = styled.div`
  margin-bottom: 24px;
  max-width: 300px;

  @media (max-width: 1024px) {
    max-width: 100%;
  }
`;

export const StyledTitle = styled.h1`
  color: #1b1c57;
  font-size: 40px;
  font-weight: 700;
  text-transform: capitalize;

  @media (max-width: 1024px) {
    text-align: center;
  }

  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

export const StyledSpanTransparent = styled.span`
  color: transparent;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #1b1c57;
`;

export const StyledText = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  color: #626687;
  opacity: 0.75;
  margin-bottom: 32px;
`;

export const StyledForm = styled.form`
  display: flex;
  align-items: center;
  padding: 4px;
  width: 100%;
  height: 56px;
  border: 1px solid #e0e3eb;
  border-radius: 32px;
  margin-bottom: 32px;
`;

export const StyledBoxIconForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
`;

export const StyledInput = styled.input`
  flex-grow: 1;

  &::placeholder {
    color: #888b97;
    font-weight: 500;
    font-size: 14px;

    @media (max-width: 480px) {
      color: transparent;
    }
  }
`;

export const StyledBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 12px 16px;
  background: #10b981;
  border-radius: 32px;
  color: white;
  font-size: 14px;
  font-weight: 600;
`;

export const StyledBoxArrow = styled.div`
  transform: translateY(3px) scale(0.9);
`;

export const StyledBoxLogos = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  transform: translateY(-40px);

  @media (max-width: 480px) {
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
`;

export const StyledBoxLogoPartnership = styled.div`
  @media (max-width: 480px) {
    width: 40%;
  }
`;

export const StyledColImg = styled.div`
  position: relative;
  max-height: 800px;
  width: 50%;
  border-radius: 20px;

  img {
    border-radius: 20px;
  }

  @media (max-width: 1200px) {
    width: 55%;
    max-width: 600px;
  }

  @media (max-width: 1024px) {
    width: 90%;
  }
`;

export const StyledBoxCards = styled.div`
  display: flex;
  gap: 30px;
  position: absolute;
  bottom: 48px;
  left: 50%;
  transform: translateX(-50%);

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    bottom: 20px;
    gap: 16px;
  }

  @media (max-width: 480px) {
    position: static;
    transform: none;
    margin-top: 24px;
  }
`;

export const StyledBoxCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  position: relative;
  height: 104px;
  background: #ffffff;
  box-shadow: 0px 11px 48px rgba(51, 51, 51, 0.06);
  border-radius: 32px;
  padding: 0 30px;
  white-space: nowrap;

  @media (max-width: 768px) {
    height: 80px;

    &:nth-child(2) {
      width: 200px;
      margin: 0 auto;
    }
  }

  @media (max-width: 480px) {
    &:nth-child(2) {
      width: 250px;
    }
  }

  @media (max-width: 480px) {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
`;

export const StyledBoxImages = styled.div`
  display: flex;
  min-width: 80px;
`;

export const StyledBoxPersonFirst = styled.div`
  position: absolute;
  top: 24px;
  left: 12px;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: 2px solid #fff;

  img {
    border-radius: 50%;
  }

  @media (max-width: 768px) {
    top: 12px;
  }
`;

export const StyledBoxPersonSecond = styled.div`
  position: absolute;
  top: 24px;
  left: 30px;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: 2px solid #fff;

  img {
    border-radius: 50%;
  }

  @media (max-width: 768px) {
    top: 12px;
  }
`;

export const StyledBoxPersonThird = styled.div`
  position: absolute;
  top: 24px;
  left: 48px;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: 2px solid #fff;

  img {
    border-radius: 50%;
  }

  @media (max-width: 768px) {
    top: 12px;
  }
`;

export const StyledBoxTextCard = styled.div`
  font-weight: 400;
  font-size: 12px;
  color: #68799f;
`;

export const StyledTitleCard = styled.h4`
  font-weight: 600;
  font-size: 16px;
  color: #1b1c57;
  margin-bottom: 4px;
`;

export const StyledTextCard = styled.p``;

export const StyledBoxImgBuilding = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 24px;
  border: 2px solid #fff;

  img {
    border-radius: 24px;
  }
`;
