import styled from 'styled-components';

export const StyledButton = styled.button`

font-family: inherit;
font-weight: 600;
height: 40px;

display: flex;
align-items: center;
justify-content: center;
gap: 8px;
background-color: var(--blue);
color: var(--fone-color);
border: none;
border-radius: 20px;
padding: 8px 20px ;
font-size: 16px;
cursor: pointer;
outline: none;

transition: all 0.4s ease; 

& >svg {
  fill: var(--fone-color);
  }

  &:hover  {
  transition: all 0.4s ease; 
  background: linear-gradient(to right, #88c7fc, #4da5f3);

 }

`;