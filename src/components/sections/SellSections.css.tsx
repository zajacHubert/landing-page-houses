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
  align-items: center;
  margin-bottom: 100px;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 60px;
  }
`;

export const StyledColText = styled.div`
  width: 45%;

  @media (max-width: 1024px) {
    width: 70%;
  }

  @media (max-width: 768px) {
    width: 100%;
    overflow: hidden;
  }
`;

export const StyledBoxSell = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;

  @media (max-width: 1024px) {
    justify-content: center;
  }
`;

export const StyledLine = styled.hr`
  background-color: #f59e0b;
  border: none;
  height: 1px;
  width: 32px;
`;

export const StyledTextSell = styled.p`
  font-weight: 500;
  font-size: 14px;
  color: #f59e0b;
`;

export const StyledTitle = styled.h2`
  font-weight: 600;
  font-size: 32px;
  color: #1b1c57;
  margin-bottom: 16px;

  @media (max-width: 1024px) {
    text-align: center;
  }

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

export const StyledText = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  color: #626687;
  opacity: 0.75;
  max-width: 415px;
  margin-bottom: 16px;

  @media (max-width: 1024px) {
    text-align: center;
    margin: 0 auto 16px;
  }
`;

export const StyledTitleInfo = styled.h4`
  font-weight: 600;
  font-size: 16px;
  color: #1b1c57;
  opacity: 0.75;
  margin-bottom: 22px;

  @media (max-width: 1024px) {
    text-align: center;
  }
`;

export const StyledBoxInfo = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 34px;

  @media (max-width: 1024px) {
    justify-content: center;
  }

  @media (max-width: 480px) {
    margin-bottom: 12px;
  }
`;

export const StyledBoxItem = styled.div`
  display: flex;
  gap: 20px;
  width: 40%;
  margin-bottom: 28px;

  @media (max-width: 1024px) {
    width: 50%;
    align-self: center;
    transform: translateX(30%);
  }

  @media (max-width: 600px) {
    transform: translateX(20%);
    width: 40%;
  }

  @media (max-width: 480px) {
    transform: translateX(10%);
    width: 50%;
  }
`;

export const StyledBoxIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledTextItem = styled.p`
  font-weight: 500;
  font-size: 16px;
  color: #3c4563;
`;

export const StyledBoxManager = styled.div`
  display: flex;
  align-items: center;
  gap: 60px;

  @media (max-width: 1024px) {
    justify-content: center;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const StyledBoxPerson = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

export const StyledBoxImgPerson = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 50%;

  img {
    border-radius: 50%;
  }
`;

export const StyledBoxTextPerson = styled.div``;

export const StyledPName = styled.p`
  font-weight: 500;
  font-size: 18px;
  color: #0e1735;
  margin-bottom: 4px;
`;

export const StyledPOccupation = styled.p`
  font-weight: 500;
  font-size: 16px;
  color: #888b97;
`;

export const StyledBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 20px;
  background: #10b981;
  border-radius: 32px;
  color: #fff;
  font-size: 14px;
  padding: 14px 20px;
`;

export const StyledBoxBtnIcon = styled.div``;

export const StyledColImg = styled.div`
  position: relative;
  height: 450px;
  width: 50%;
  border-radius: 4px;

  img {
    border-radius: 4px;
  }

  @media (max-width: 1200px) {
    width: 53%;
  }

  @media (max-width: 1024px) {
    width: 80%;
  }

  @media (max-width: 600px) {
    height: 300px;
    width: 90%;
  }
`;

export const StyledBoxImgCouch = styled.div`
  position: absolute;
  bottom: -10%;
  left: -5%;
  width: 300px;
  height: 170px;
  border-radius: 4px;

  img {
    border-radius: 4px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const StyledBoxImgFurniture = styled.div`
  position: absolute;
  right: calc(3% + 104px);
  bottom: -10%;
  width: 100px;
  height: 80px;
  border-radius: 4px;

  img {
    border-radius: 4px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const StyledBoxImgChair = styled.div`
  position: absolute;
  right: 3%;
  bottom: -10%;
  border-radius: 4px;
  width: 100px;
  height: 80px;

  img {
    border-radius: 4px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
