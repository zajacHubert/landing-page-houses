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

export const StyledRowTips = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 422px;
  margin: 0 auto 54px;
`;

export const StyledLine = styled.hr`
  background-color: #f59e0b;
  height: 1px;
  border: none;
  width: 32px;
  margin-bottom: 8px;
`;

export const StyledPTips = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  text-transform: capitalize;
  color: #f59e0b;
  margin-bottom: 12px;
`;

export const StyledTitle = styled.h2`
  font-weight: 600;
  font-size: 32px;
  line-height: 40px;
  text-align: center;
  text-transform: capitalize;
  color: #1b1c57;
  margin-bottom: 24px;
`;

export const StyledBtn = styled.button`
  font-size: 14px;
  font-weight: 600;
  color: #fff;
  width: 118px;
  height: 46px;
  left: 661px;
  background-color: #10b981;
  border-radius: 32px;
`;

export const StyledContainerContent = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 1024px) {
    flex-direction: column-reverse;
    align-items: center;
    gap: 30px;
  }
`;

export const StyledColCards = styled.div`
  width: 50%;

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

export const StyledColArticle = styled.div`
  width: 45%;

  @media (max-width: 1024px) {
    width: 70%;
    text-align: center;
  }

  @media (max-width: 600px) {
    width: 90%;
  }
`;

export const StyledBoxImgArticle = styled.div`
  height: 300px;
  border-radius: 16px;
  margin-bottom: 30px;

  img {
    border-radius: 16px;
  }
`;

export const StyledBoxTextArticle = styled.div``;

export const StyledBoxUser = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 17px;

  @media (max-width: 1024px) {
    justify-content: center;
  }
`;

export const StyledBoxImgPerson = styled.div`
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
`;

export const StyledTitleArticle = styled.h4`
  font-weight: 600;
  font-size: 24px;
  text-transform: capitalize;
  color: #1b1c57;
  margin-bottom: 12px;

  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

export const StyledTextArticle = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #626687;
  opacity: 0.75;
  margin-bottom: 16px;
`;

export const StyledBoxInfo = styled.div`
  display: flex;
  gap: 14px;

  @media (max-width: 1024px) {
    justify-content: center;
  }
`;

export const StyledBoxIcon = styled.div``;

export const StyledPInfo = styled.p`
  font-weight: 400;
  font-size: 14px;
  color: #888b97;
`;

export const StyledBoxForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  margin-bottom: 80px;
`;
