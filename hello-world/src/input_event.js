import React from 'react';

class InputEventComp extends React.Component {
   constructor() {
      super();

      this.state = {
         inputTextData: 'Initial data...'
      }
      this.updateInputTextState = this.updateInputTextState.bind(this);
   };
   updateInputTextState(e) {
      this.setState({inputTextData: e.target.value});
   }
   render() {
      return (
         <div>
            <InputEvent
               inputTextDataProp = {this.state.inputTextData} 
               updateStateProp = {this.updateInputTextState}>
            </InputEvent>
         </div>
      );
   }
}
class InputEvent extends React.Component {
   render() {
      return (
         <div>
            <input
               type = "text"
               value = {this.props.inputTextDataProp} 
               onChange = {this.props.updateStateProp} />
            <h3>{this.props.inputTextDataProp}</h3>
         </div>
      );
   }
}
export default InputEventComp;