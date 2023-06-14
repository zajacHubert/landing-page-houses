import styled from 'styled-components';

export const StyledTitle = styled.h3`
  font-weight: 600;
  font-size: 32px;
  text-transform: capitalize;
  color: #1b1c57;

  @media (max-width: 480px) {
    font-size: 28px;
    margin-bottom: 20px;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 500px;

  @media (max-width: 600px) {
    width: 90%;
  }
`;

export const StyledBoxLabelError = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 20px;
`;

export const StyledLabel = styled.label`
  font-size: 18px;
  font-weight: 600;

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const StyledPError = styled.p`
  font-size: 14px;
  color: #ba000d;

  &::first-letter {
    text-transform: capitalize;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const StyledInput = styled.input`
  border: none;
  border-bottom: 1px solid lightgray;
  outline: none;
  padding: 5px;
  font-size: 18px;

  &:-webkit-autofill {
    -webkit-background-clip: text;
  }
`;

export const StyledBtn = styled.button`
  width: 120px;
  height: 40px;
  margin: 0 auto;
  border-radius: 16px;
  background-color: #10b981;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
`;
