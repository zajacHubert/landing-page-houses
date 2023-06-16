import styled from 'styled-components';

export const StyledSection = styled.section`
  margin-bottom: 80px;
`;

export const StyledRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledLine = styled.hr`
  background-color: #f59e0b;
  border: none;
  height: 1px;
  width: 32px;
  margin-bottom: 8px;
`;

export const StyledPReview = styled.p`
  font-weight: 500;
  font-size: 14px;
  color: #f59e0b;
  margin-bottom: 12px;
`;

export const StyledTitle = styled.h2`
  font-weight: 600;
  font-size: 32px;
  color: #1b1c57;
  margin-bottom: 40px;

  @media (max-width: 480px) {
    text-align: center;
    max-width: 300px;
  }
`;

export const StyledBoxSlider = styled.div``;
