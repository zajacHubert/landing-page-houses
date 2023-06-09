import styled from 'styled-components';

export const StyledBoxSliderCard = styled.div``;

export const StyledBoxImg = styled.div`
  position: relative;
  height: 350px;
  border-radius: 24px;
  margin-bottom: 24px;

  img {
    border-radius: 24px;
  }
`;

interface StyledBoxCategoryProps {
  bgColor: string;
}

export const StyledBoxCategory = styled.div<StyledBoxCategoryProps>`
  display: flex;
  align-items: center;
  gap: 11px;
  position: absolute;
  left: 16px;
  bottom: 16px;
  background-color: ${({ bgColor }) => bgColor};
  border-radius: 32px;
  width: 120px;
  padding: 8px 16px;
`;

export const StyledBoxIcon = styled.div``;

interface StyledTextCategoryProps {
  color: string;
}

export const StyledTextCategory = styled.p<StyledTextCategoryProps>`
  font-weight: 500;
  font-size: 14px;
  color: ${({ color }) => color};
`;

export const StyledTitleCard = styled.h3`
  font-weight: 500;
  font-size: 24px;
  color: #0e1735;
  margin-bottom: 8px;

  @media (max-width: 600px) {
    text-align: center;
  }
`;

export const StyledPPrice = styled.p`
  font-weight: 500;
  font-size: 20px;
  color: #3c4563;
  margin-bottom: 24px;

  @media (max-width: 600px) {
    text-align: center;
  }
`;

export const StyledBoxOwner = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  @media (max-width: 600px) {
    justify-content: center;
  }
`;

export const StyledBoxImgOwner = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50px;

  img {
    border-radius: 50%;
  }
`;

export const StyledBoxTextOwner = styled.div``;

export const StyledPOwnerName = styled.p`
  font-weight: 500;
  font-size: 18px;
  color: #0e1735;
  margin-bottom: 4px;
`;

export const StyledPAddress = styled.p`
  font-weight: 500;
  font-size: 14px;
  color: #888b97;
`;
