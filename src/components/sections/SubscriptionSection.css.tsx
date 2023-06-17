import styled from 'styled-components';

export const StyledSection = styled.section`
  max-width: 1500px;
  margin: 0 auto 80px;
  background-image: url('/images/subscription/bg-subscription.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 32px;
  padding-bottom: 65px;

  @media (max-width: 1600px) {
    margin: 0 50px 80px;
  }

  @media (max-width: 1200px) {
    margin: 0 30px 80px;
  }

  @media (max-width: 768px) {
    margin: 0 10px 40px;
  }

  @media (max-width: 480px) {
    padding-bottom: 40px;
  }
`;

export const StyledBoxTitle = styled.div`
  max-width: 370px;
  margin: 0 auto 32px;
  padding-top: 65px;

  @media (max-width: 768px) {
    max-width: 320px;
  }

  @media (max-width: 480px) {
    padding-top: 40px;
    max-width: 280px;
  }
`;

export const StyledTitle = styled.h2`
  font-weight: 600;
  font-size: 32px;
  line-height: 48px;
  text-align: center;
  text-transform: capitalize;
  color: #1b1c57;

  @media (max-width: 768px) {
    font-size: 28px;
    line-height: 44px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
    line-height: 38px;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  align-items: center;
  padding: 4px;
  width: 500px;
  height: 56px;
  border: 1px solid #e0e3eb;
  border-radius: 32px;
  margin: 0 auto;
  background-color: #fff;

  @media (max-width: 768px) {
    width: 95%;
  }
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
