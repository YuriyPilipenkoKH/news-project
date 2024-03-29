import { RadioInput, RadioLabel, RadioWrapp } from "./RadioContainer.styled"


const RadioContainer = () => {
  return (
    <RadioWrapp className="radio-container">

  <RadioInput type="radio" id="a" name="radio"/><RadioLabel for="a">Option A</RadioLabel>
  <RadioInput type="radio" id="b" name="radio" checked/><RadioLabel for="b">Option B</RadioLabel>
  <RadioInput type="radio" id="c" name="radio"/><RadioLabel for="c">Option C</RadioLabel>
  <RadioInput type="radio" id="d" name="radio"/><RadioLabel for="d">Option D</RadioLabel>
  <RadioInput type="radio" id="e" name="radio"/><RadioLabel for="e">Option E</RadioLabel>

    </RadioWrapp>
  )
}

export default RadioContainer


//  <input id="item-1" className="radio-inline__input" type="radio" name="accessible-radio" value="item-1" checked="checked"/>
// <label class="radio-inline__label" for="item-1">
//     Item 1
// </label>
// <input id="item-2" className="radio-inline__input" type="radio" name="accessible-radio" value="item-2"/>
// <label class="radio-inline__label" for="item-2">
//     Item 2
// </label>
// <input id="item-3" className="radio-inline__input" type="radio" name="accessible-radio" value="item-3"/>
// <label class="radio-inline__label" for="item-3">
//     Item 3
// </label> 