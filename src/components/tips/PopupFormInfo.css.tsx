import styled from 'styled-components';

export const StyledBoxOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 99;
`;

export const StyledBoxPopup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  width: 600px;
  padding: 30px;
  position: fixed;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  border: 2px solid black;
  background-color: #f3f3fb;

  @media (max-width: 768px) {
    width: 80%;
  }

  @media (max-width: 600px) {
    width: 80%;
    padding: 15px;
  }
`;

export const StyledTitle = styled.h3`
  text-align: center;
  font-size: 28px;

  @media (max-width: 768px) {
    font-size: 24px;
  }

  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

export const StyledPInfo = styled.p`
  font-size: 18px;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

export const StyledBtn = styled.button`
  font-weight: 600;
  font-size: 14px;
  line-height: 22px;
  width: 118px;
  height: 46px;
  background: #10b981;
  border-radius: 32px;
  color: #fff;
  margin: 0 auto;

  @media (max-width: 768px) {
    height: 32px;
    font-size: 12px;
    width: 90px;
  }
`;
