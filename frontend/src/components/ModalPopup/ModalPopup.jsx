import React from 'react';
import PropTypes from 'prop-types'; //GiCrossedSabres
import { RxCross2 } from "react-icons/rx";

import { BtnContainer,  ModalContainer, ModalImage, ModalOverlay, ModalText, ModalTitle, OnCloseButton } from './ModalPopup.styled';
import { LogButton, RegButton } from '../Button/Button';
import { iconPawprint } from '../../images/icons';

export const ModalPopup = ({ width, height, title, text, image, buttonColor, buttonText, onClose }) => {
    return (
      <ModalOverlay>
        <ModalContainer width={width} height={height}>
          <ModalTitle>{title}</ModalTitle>
          {image && <ModalImage src={image} alt="Modal Image" />}
          <ModalText>{text}</ModalText>
          {/* <ModalButton buttonColor={buttonColor} onClick={onClose}>
            {buttonText}
          </ModalButton> */}
          <BtnContainer>
              <LogButton>Log IN {iconPawprint}</LogButton>
               <RegButton >Registration </RegButton>
          </BtnContainer>
          <OnCloseButton><RxCross2/></OnCloseButton>
        </ModalContainer>
      </ModalOverlay>
    );
  };
  
  ModalPopup.propTypes = {
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    image: PropTypes.string,
    buttonColor: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,
    onClose: PropTypes.func,
  };
  
