import React from 'react';

class BasicEvent extends React.Component {
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
            <h3>InputEvent</h3>
            <input
               type = "text"
               value = {this.props.inputTextDataProp} 
               onChange = {this.props.updateStateProp} />
            <h4>{this.props.inputTextDataProp}</h4>
         </div>
      );
   }
}
export default BasicEvent;
