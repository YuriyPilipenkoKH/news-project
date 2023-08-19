import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #0000007f;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.div`
  display: grid;
  place-items: center;
  gap: 40px;  
  background-color: white;
  padding: 60px 40px;
  border-radius: 16px;
  width: ${props => props.width};
  height: ${props => props.height};
`;

export const BtnContainer = styled.div`
    display: flex;
    gap: 20px;
`;

export const ModalTitle = styled.h2`
  font-size: 36px;
  font-weight: 500;
  margin: 0;
`;

export const ModalText = styled.p`
  font-size: 20px;
  line-height: 28px;
  font-weight: 500;
  text-align: center;
  margin: 0;
  border: none;
`;

export const ModalImage = styled.img`
  max-width: 100%;
  height: auto;
  
`;

export const ModalButton = styled.button`
  background-color: ${props => props.buttonColor};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;