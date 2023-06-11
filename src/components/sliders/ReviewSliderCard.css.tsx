import styled from 'styled-components';

export const StyledBoxImg = styled.div`
  position: relative;
  border-radius: 8px;
  height: 400px;
  margin-bottom: 200px;

  img {
    border-radius: 8px;
  }

  @media (max-width: 1024px) {
    margin: 0 50px 200px;
  }

  @media (max-width: 600px) {
    height: 350px;
  }

  @media (max-width: 480px) {
    margin-bottom: 230px;
  }
`;

export const StyledBoxCard = styled.div`
  position: absolute;
  bottom: -30%;
  left: 15%;
  right: 15%;
  padding: 32px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  border-radius: 16px;

  @media (max-width: 1200px) {
    left: 5%;
    right: 5%;
  }

  @media (max-width: 768px) {
    padding: 24px;
  }

  @media (max-width: 480px) {
    bottom: -45%;
    padding: 18px;
    left: 3%;
    right: 3%;
  }
`;

export const StyledTitleCard = styled.h4`
  font-weight: 600;
  font-size: 20px;
  text-transform: capitalize;
  color: #1b1c57;
  margin-bottom: 16px;

  @media (max-width: 600px) {
    font-size: 18px;
    margin-bottom: 10px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    text-align: center;
  }
`;

export const StyledTextCard = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #626687;
  opacity: 0.75;
  margin-bottom: 24px;

  @media (max-width: 600px) {
    margin-bottom: 12px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const StyledRowUserRate = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledBoxUser = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;

  @media (max-width: 600px) {
    gap: 16px;
  }

  @media (max-width: 480px) {
    gap: 10px;
  }
`;

export const StyledBoxImgUser = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;

  img {
    border-radius: 50%;
  }
`;

export const StyledBoxTextUser = styled.div``;

export const StyledPName = styled.p`
  font-weight: 500;
  font-size: 14px;
  color: #0e1735;

  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

export const StyledPOccupation = styled.p`
  font-weight: 500;
  font-size: 14px;
  color: #888b97;

  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

export const StyledBullet = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: green !important;
  margin: 500px 8px;
  cursor: pointer;
`;

export const StyledBoxRate = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;

  @media (max-width: 600px) {
    gap: 6px;
  }
`;

export const StyledBoxIcon = styled.div`
  @media (max-width: 600px) {
    transform: scale(0.8);
  }
`;

export const StyledPRate = styled.p`
  font-weight: 600;
  font-size: 20px;
  color: #3c4563;

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;
