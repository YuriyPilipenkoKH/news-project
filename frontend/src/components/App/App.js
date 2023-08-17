import { iconLogo, iconPawprint } from "../../images/icons";
import { Button, ButtonTransparent } from "../Button/Button";

import { Container } from "../Container/Container";



const App =() => {
  return (
<Container>
<h1> {iconLogo}</h1>
<Button>Learn more {iconPawprint}</Button>
<ButtonTransparent >Learn more {iconPawprint}</ButtonTransparent>
</Container>
  );
}

export default App;
