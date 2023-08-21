
import { iconClock, iconFem, iconMap } from "../../images/icons";
import { ButtonTransparent } from "../Button/Button"
import { Tab } from "../Tab/Tab"
import { CardTitle, CardWrapper, ImgWrapper } from "./MainCard.styled"


export const MainCard = ( ) => {

return(
    <CardWrapper>
      <ImgWrapper>
        <div> {'In good hands'} </div>
        <button></button>

        <Tab text= {'Ivano'} icon = {iconMap}/>
        <Tab text= {'1 year'} icon = {iconClock}/>
        <Tab text= {'female'} icon = {iconFem}/>
    

      </ImgWrapper>

      <CardTitle>Сute kitty looking for a home</CardTitle>
      <ButtonTransparent>Learn more</ButtonTransparent>
    </CardWrapper>
)
}