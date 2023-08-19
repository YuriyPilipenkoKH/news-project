import { iconFilter, iconLogo, iconMenuHamburger, iconPawprint } from "../../images/icons";
import {  AddToButton, Button,  ButtonTransparent,  ContactButton,  FilterButton,  LearnButton,  LogButton,  OutButton,  RadioButton,  RegButton  } from "../Button/Button";
import { MdOutlineLogout} from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";

import { StyledLogo } from "../Button/Button.styled";
import { Container } from "../Container/Container";
// import LoginForm from "../Forms/LoginForm/LoginForm";
// import RegisterForm from "../Forms/RegisterForm/RegisterForm";
import RadioContainer from "../RadioContainer/RadioContainer";
import UniversalButton from "../UniversalButton/UniversalButton";
import { ModalPopup } from "../ModalPopup/ModalPopup";
import { modal1, modal2 } from "../../modals/modals";
import { useState } from "react";

const App =() => {
  const [showModal, setShowModal] = useState(false);
  const [modals, setModals] = useState(modal1)

  const onModalOpen = () => {
    setShowModal(true);
    console.log(showModal)

  };

  const onModalClose = () => {
    console.log('onModalClose')
    setShowModal(false);
    
  };

  return (
  <Container>
    <StyledLogo>{iconLogo}</StyledLogo>
    
 
    <Button onClick={() => {
  setModals(modal1);
  onModalOpen(); 
  }}>   
  Learn more {iconMenuHamburger}</Button>

    <ButtonTransparent onClick={() => {
  setModals(modal2);
  onModalOpen(); 
  }}>Learn more {iconFilter}</ButtonTransparent>
    <LogButton>Log IN {iconPawprint}</LogButton>
    <RegButton >Registration </RegButton>
    <OutButton >  Logout<MdOutlineLogout/></OutButton>
    <FilterButton>Filter{iconFilter} </FilterButton>
    <AddToButton>Add to <FaRegHeart/> </AddToButton>
    <ContactButton>Contact</ContactButton>
    <LearnButton>Learn more</LearnButton> 
    <RadioButton>Learn more</RadioButton> 
    <UniversalButton svg={iconPawprint}>read more</UniversalButton> 
    <RadioContainer></RadioContainer> 
   
    {/* <ModalPopup {...modal1}></ModalPopup> */}
    {showModal && (
        <ModalPopup {...modals} onClose ={onModalClose}  /> //  onClose ={onModalClose}   {...modal1} 
    )}
  </Container>
  );  
}

export default App;
