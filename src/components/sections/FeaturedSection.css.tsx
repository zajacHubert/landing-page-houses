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

export const StyledBoxRecommendation = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 12px;
`;

export const StyledLine = styled.hr`
  height: 1px;
  width: 32px;
  background-color: #f59e0b;
  border: none;
`;

export const StyledTextRecommendation = styled.p`
  font-weight: 500;
  font-size: 14px;
  color: #f59e0b;
`;

export const StyledRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`;

export const StyledTitle = styled.h2`
  font-weight: 600;
  font-size: 32px;
  color: #1b1c57;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

export const StyledBoxArrows = styled.div`
  display: flex;
  gap: 16px;

  @media (max-width: 768px) {
    gap: 12px;
  }
`;

interface StyledBtnProps {
  bgColor: string;
}

export const StyledBtn = styled.button<StyledBtnProps>`
  padding: 12px 16px;
  width: 60px;
  height: 52px;
  border-radius: 32px;
  background-color: ${({ bgColor }) => bgColor};

  @media (max-width: 768px) {
    padding: 8px 12px;
    width: 50px;
    height: 44px;
  }
`;

export const StyledBoxArrowIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledBoxSlider = styled.div`
  margin-bottom: 100px;
`;
