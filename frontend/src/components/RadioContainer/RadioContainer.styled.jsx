import styled from 'styled-components';

export const RadioWrapp = styled.div`
    display: flex;
    gap: 12px;
`

export const RadioInput = styled.div`
  background-color: var(--green);
  color: white;
  border-color: var(--red);

  &:checked + label {
  background-color: var(--selected-bg-color);
  color: var(--selected-text-color);
  }
`
export const RadioLabel = styled.div`
  display: inline-block;
  padding: 10px 20px;
  background-color: var(--button-bg-color);
  color: var(--button-text-color);
  border: none;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
`

