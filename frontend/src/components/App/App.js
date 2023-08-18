import { iconLogo, iconPawprint } from "../../images/icons";
import { Button,  ButtonTransparent,  LogButton,  RegButton  } from "../Button/Button";
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


  </Container>
  );  
}

export default App;
