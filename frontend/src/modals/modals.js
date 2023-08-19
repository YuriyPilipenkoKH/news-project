import { Button, ButtonTransparent, LogButton, RegButton } from "../components/Button/Button";
import { iconPawprint } from "../images/icons";

export const modal1 = {     
        width: '608px',
        // height: '429px', 
        title: 'Attention',
        text: 'We would like to remind you that certain functionality is available only to authorized users.If you have an account, please log in with your credentials. If you do not already have an account, you must register to access these features.',
        image: '',
        buttonColor: '#13d', 
        buttonText: 'confirm',
        onClose: '' ,

        btn1: <LogButton>Log IN {iconPawprint}</LogButton>,
        btn2:  <RegButton>Registration </RegButton>,
}

export const modal2 = {     
        width: '608px',
        // height: '429px', 
        title: 'Delete adverstiment?',
        text: 'Are you sure you want to delete  “Cute dog looking for a home”? You can’t undo this action.',
        image: '',
        buttonColor: '#13d', 
        buttonText: 'confirm',
        onClose: '' ,

        btn1: <Button>Log IN {iconPawprint}</Button>,
        btn2:  <ButtonTransparent>Registration </ButtonTransparent>,
}