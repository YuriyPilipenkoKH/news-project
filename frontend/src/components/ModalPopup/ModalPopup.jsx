import React from 'react';
import { createPortal } from 'react-dom';
import { RxCross2 } from "react-icons/rx";


import { BtnContainer,  ModalContainer, ModalImage, ModalOverlay, ModalText, ModalTitle, OnCloseButton, PetList } from './ModalPopup.styled';

const modalRoot = document.querySelector('#modal-root');


export const ModalPopup = ({ type, title, text, image, buttonColor, buttonText, btn1, btn2 , onClose } ) => {



if (type === 1){
  return  createPortal(
    <ModalOverlay>
      <ModalContainer >
        {/* {image && <ModalImage src={image.doggy} alt="Modal Image" />} */}
        <ModalTitle>{title}</ModalTitle>
        <ModalText>{text}</ModalText>
        <BtnContainer>
          {btn1}
          {btn2}
        </BtnContainer>
        <OnCloseButton onClick={onClose} ><RxCross2/></OnCloseButton>
      </ModalContainer>
    </ModalOverlay>,
      modalRoot
  );
}
if (type === 3){
  return  createPortal(
    <ModalOverlay>
      <ModalContainer style={{padding: "40px 20px 10px", height: '800px', display: 'flex', flexDirection: 'column'}} >
        {image && <ModalImage src={image.doggy} alt="Modal Image" />}
        <ModalTitle>{title}</ModalTitle>

        <PetList>
          <p>Name:</p> {'Rich'}
          <p>Birthday:</p> {'21.09.2020'}
          <p>Type:</p>  {'Pomeranian'}
          <p>Place:</p>  {'Lviv'}
          <p>The sex:</p>  {'male'}
          <p>Email:</p>  {'user@mail.com'}
          <p>Phone:</p> {'+380971234567'}
          <p>Comments:<span>{' Rich would be the perfect addition to an active family that loves to play and go on walks. I bet he would love having a doggy playmate too! '}</span> </p> 

        </PetList>

        <BtnContainer style={{marginTop: 'auto'}}>
          {btn1}
          {btn2}
        </BtnContainer>
        <OnCloseButton onClick={onClose} ><RxCross2/></OnCloseButton>
      </ModalContainer>
    </ModalOverlay>,
      modalRoot
  );
}


  };
  
  // ModalPopup.propTypes = {
  //   // width: PropTypes.string.isRequired,
  //   // height: PropTypes.string.isRequired,
  //   // title: PropTypes.string.isRequired,
  //   // text: PropTypes.string.isRequired,
  //   // image: PropTypes.string,

  //   onClose: PropTypes.func,
  // };
  
