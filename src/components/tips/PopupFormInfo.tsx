import { Dispatch, FC, SetStateAction, useEffect, useRef } from 'react';
import {
  StyledBoxOverlay,
  StyledBoxPopup,
  StyledBtn,
  StyledPInfo,
  StyledTitle,
} from './PopupFormInfo.css';

interface PopupFormInfoProps {
  name: string;
  email: string;
  phone: string;
  message: string;
  setIsPopupOpen: Dispatch<SetStateAction<Boolean>>;
}

const PopupFormInfo: FC<PopupFormInfoProps> = ({
  name,
  email,
  phone,
  message,
  setIsPopupOpen,
}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        elementRef.current &&
        !elementRef.current.contains(event.target as Node)
      ) {
        setIsPopupOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);
  return (
    <StyledBoxOverlay>
      <StyledBoxPopup ref={elementRef}>
        <StyledTitle>Sended message!</StyledTitle>
        <StyledPInfo>Name: {name}</StyledPInfo>
        <StyledPInfo>Email: {email}</StyledPInfo>
        <StyledPInfo>Phone: {phone}</StyledPInfo>
        <StyledPInfo>Message: {message}</StyledPInfo>
        <StyledBtn onClick={() => setIsPopupOpen(false)}>OK</StyledBtn>
      </StyledBoxPopup>
    </StyledBoxOverlay>
  );
};

export default PopupFormInfo;
