import { iconFilter, iconLogo, iconPawprint } from "../../images/icons";
import {  AddToButton, Button,  ButtonTransparent,  FilterButton,  LogButton,  OutButton,  RegButton  } from "../Button/Button";
import { StyledLogo } from "../Button/Button.styled";
import { MdOutlineLogout} from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";

import { Container } from "../Container/Container";



const App =() => {
  return (
  <Container>
    <StyledLogo>{iconLogo}</StyledLogo>
    
 
    <Button>Learn more {iconPawprint}</Button>
    <ButtonTransparent >Learn more {iconPawprint}</ButtonTransparent>
    <LogButton>Log IN {iconPawprint}</LogButton>
    <RegButton >Registration </RegButton>
    <OutButton >  Logout<MdOutlineLogout/></OutButton>
    <FilterButton>Filter{iconFilter} </FilterButton>
    <AddToButton>Add to <FaRegHeart/> </AddToButton>


  </Container>
  );  
}

export default App;
