import { FC } from 'react';
import {
  StyledBoxIconForm,
  StyledBoxTitle,
  StyledBtn,
  StyledForm,
  StyledInput,
  StyledSection,
  StyledTitle,
} from './SubscriptionSection.css';
import EnvelopeIconSvg from '../icons/subscription/EnvelopeIconSvg';

const SubscriptionSection: FC = () => {
  return (
    <StyledSection>
      <StyledBoxTitle>
        <StyledTitle>
          Subscribe For More Info and update from Hounter
        </StyledTitle>
      </StyledBoxTitle>
      <StyledForm>
        <StyledBoxIconForm>
          <EnvelopeIconSvg />
        </StyledBoxIconForm>
        <StyledInput placeholder='Email' />
        <StyledBtn>Subscribe</StyledBtn>
      </StyledForm>
    </StyledSection>
  );
};

export default SubscriptionSection;
