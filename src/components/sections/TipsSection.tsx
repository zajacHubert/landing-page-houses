import { FC } from 'react';
import Image from 'next/image';
import TipCard from '../tips/TipCard';
import TimeIconSvg from '../icons/tips/TimeIconSvg';
import ContactForm from '../tips/ContactForm';
import { tipsList } from '@/data/tipsList';
import {
  StyledBoxForm,
  StyledBoxIcon,
  StyledBoxImgArticle,
  StyledBoxImgPerson,
  StyledBoxInfo,
  StyledBoxTextArticle,
  StyledBoxUser,
  StyledBtn,
  StyledColArticle,
  StyledColCards,
  StyledContainerContent,
  StyledLine,
  StyledPInfo,
  StyledPName,
  StyledPTips,
  StyledRowTips,
  StyledSection,
  StyledTextArticle,
  StyledTitle,
  StyledTitleArticle,
} from './TipsSection.css';

const TipsSection: FC = () => {
  return (
    <StyledSection>
      <StyledRowTips>
        <StyledLine />
        <StyledPTips>See tips and trick from our partnership</StyledPTips>
        <StyledTitle>Find out more about selling and buying homes</StyledTitle>
        <StyledBtn>More Articles</StyledBtn>
      </StyledRowTips>
      <StyledContainerContent>
        <StyledColCards>
          {tipsList.map((tip) => (
            <TipCard
              key={tip.id}
              date={tip.date}
              imgHouse={tip.imgHouse}
              imgPerson={tip.imgPerson}
              personName={tip.personName}
              title={tip.title}
            />
          ))}
        </StyledColCards>
        <StyledColArticle>
          <StyledBoxImgArticle>
            <Image
              src='https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1475&q=80'
              alt='house'
              width={600}
              height={300}
            />
          </StyledBoxImgArticle>
          <StyledBoxTextArticle>
            <StyledBoxUser>
              <StyledBoxImgPerson>
                <Image
                  src='https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
                  alt='person'
                  width={32}
                  height={32}
                />
              </StyledBoxImgPerson>
              <StyledPName>Cameron Williamson</StyledPName>
            </StyledBoxUser>
            <StyledTitleArticle>
              12 Things to know before buying a house
            </StyledTitleArticle>
            <StyledTextArticle>
              Want to buy a house but are unsure about what we should know, here
              I will try to explain what we should know and check when we want
              to buy a house
            </StyledTextArticle>
          </StyledBoxTextArticle>
          <StyledBoxInfo>
            <StyledBoxIcon>
              <TimeIconSvg />
            </StyledBoxIcon>
            <StyledPInfo>8 min read | 25 Apr 2021</StyledPInfo>
          </StyledBoxInfo>
        </StyledColArticle>
      </StyledContainerContent>
      <StyledBoxForm>
        <ContactForm />
      </StyledBoxForm>
    </StyledSection>
  );
};

export default TipsSection;
