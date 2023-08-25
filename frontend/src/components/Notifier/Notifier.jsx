import { ModalOverlay, ModalText, ModalTitle } from "../ModalPopup/ModalPopup.styled"
import { NotificationContainer } from "./Notifier.styled"

export const Notifier =({title, text})=> {
    return (
        <ModalOverlay>
            <NotificationContainer>
            <ModalTitle>{title}</ModalTitle>
            <ModalText>{text}</ModalText>

            </NotificationContainer>

        </ModalOverlay>
    )
}