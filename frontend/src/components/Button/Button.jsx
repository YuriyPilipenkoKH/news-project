import {  StyleAddToButton, StyledButton, StyledButtonTransparent,  StyledFilterButton,  StyledLogButton, StyledOutButton, StyledRadioButton, StyledRegButton } from './Button.styled';

export const Button = ({ children, ...props }) => {
  return <StyledButton type='button' {...props}> {children}</StyledButton>;
};


export const ButtonTransparent = ({ children, ...props }) => {
  return <StyledButtonTransparent type='button' {...props}> {children}</StyledButtonTransparent>;
};

export const LogButton = ({ children, ...props }) => {
  return <StyledLogButton type='submit' {...props}> {children}</StyledLogButton>;
};


export const RegButton = ({ children, ...props }) => {
  return <StyledRegButton type='submit' {...props}> {children}</StyledRegButton>;
};

export const OutButton = ({ children, ...props }) => {
  return <StyledOutButton type='submit' {...props}> {children}</StyledOutButton>;
};

export const FilterButton = ({ children, ...props }) => {
  return <StyledFilterButton type='button' {...props}> {children}</StyledFilterButton>;
};

export const AddToButton = ({ children, ...props }) => {
  return <StyleAddToButton type='button' {...props}> {children}</StyleAddToButton>;
};





export const RadioButton = ({ children, ...props }) => {
  return <StyledRadioButton type='button' {...props}> {children}</StyledRadioButton>;
};

