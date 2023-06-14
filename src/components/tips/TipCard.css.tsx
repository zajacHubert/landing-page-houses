import styled from 'styled-components';

export const StyledContainerCard = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  margin-bottom: 40px;

  @media (max-width: 600px) {
    gap: 12px;
  }
`;

export const StyledColImg = styled.div`
  width: 40%;
  height: 150px;
  border-radius: 16px;

  img {
    border-radius: 16px;
  }

  @media (max-width: 480px) {
    height: 130px;
  }
`;

export const StyledColText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 60%;
`;

export const StyledBoxUser = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 12px;

  @media (max-width: 480px) {
    margin-bottom: 8px;
  }
`;

export const StyledBoxImg = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;

  img {
    border-radius: 50%;
  }
`;

export const StyledPName = styled.p`
  font-weight: 400;
  font-size: 14px;
  color: #3c4563;

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const StyledTitleCard = styled.h4`
  font-weight: 600;
  font-size: 18px;
  line-height: 32px;
  text-transform: capitalize;
  color: #1b1c57;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const StyledBoxInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;

  @media (max-width: 480px) {
    gap: 10px;
  }
`;

export const StyledBoxIcon = styled.div``;

export const StyledPInfo = styled.p`
  font-weight: 400;
  font-size: 14px;
  color: #888b97;

  @media (max-width: 480px) {
    font-size: 12px;
    transform: translateY(-2px);
  }
`;
