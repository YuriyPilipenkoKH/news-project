import { StyledButton, StyledButtonTransparent,  StyledLogButton, StyledRadioButton, StyledRegButton } from './Button.styled';

export const Button = ({ children, ...props }) => {
  return <StyledButton type='button' {...props}> {children}</StyledButton>;
};



export const ButtonTransparent = ({ children, ...props }) => {
  return <StyledButtonTransparent type='button' {...props}> {children}</StyledButtonTransparent>;
};

export const LogButton = ({ children, ...props }) => {
  return <StyledLogButton type='button' {...props}> {children}</StyledLogButton>;
};



export const RegButton = ({ children, ...props }) => {
  return <StyledRegButton type='button' {...props}> {children}</StyledRegButton>;
};

export const RadioButton = ({ children, ...props }) => {
  return <StyledRadioButton type='button' {...props}> {children}</StyledRadioButton>;
};

