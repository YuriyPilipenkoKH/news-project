import styled from 'styled-components';

export const RadioWrapp = styled.div`
    display: flex;
    gap: 12px;
`

export const RadioInput = styled.div`
 display: none;

 &:checked + label {
  color: #48AC53
}

&:checked + label:after {
  left: 0;
  right: 0;
  color: #48AC53;
}

`
export const RadioLabel = styled.div`
  display: block;
  font-family: sans-serif;
  color: white;
  font-weight: bold;
  font-size: 2em;
  line-height: 1.5em;
  width: 2em;
  margin: .5em;
  height: 1.5em;
  padding: 0 1em;
  border-radius: .75em;
  position: relative;
  overflow: hidden;
  transition: color 500ms;
  cursor: pointer;

  &:before{
    content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #DDDCDF;
  z-index: -2;
  }

  &:after {
    content: "\f00c";
  text-align: right;
  padding-right: .5em;
  position: absolute;
  font-family: FontAwesome;
  top: 0;
  bottom: 0;
  left: -100%;
  right: 100%;
  border-radius: .75em;
  background-color: #98ECA3;
  color: #98ECA3;
  z-index: -1;
  transition-property: left, right, color;
  transition-duration: 500ms;
  }

`

