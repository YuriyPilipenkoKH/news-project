import { iconFilter, iconLogo, iconPawprint } from "../../images/icons";
import {  AddToButton, Button,  ButtonTransparent,  ContactButton,  FilterButton,  LearnButton,  LogButton,  OutButton,  RegButton  } from "../Button/Button";
import { MdOutlineLogout} from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";

import { StyledLogo } from "../Button/Button.styled";
import { Container } from "../Container/Container";



const App =() => {
  return (
  <Container>
    <StyledLogo>{iconLogo}</StyledLogo>
    
 
     <Button>Learn more {iconPawprint}</Button>
    <ButtonTransparent >Learn more {iconPawprint}</ButtonTransparent>
    <LogButton>Log IN {iconPawprint}</LogButton>
    <RegButton >Registration </RegButton>
    {/* <OutButton >  Logout<MdOutlineLogout/></OutButton>
    <FilterButton>Filter{iconFilter} </FilterButton>
    <AddToButton>Add to <FaRegHeart/> </AddToButton>
    <ContactButton>Contact</ContactButton>
    <LearnButton>Contact</LearnButton>  */}


  </Container>
  );  
}

export default App;
