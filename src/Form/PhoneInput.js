import React,{Component} from 'react';
import { FormControl, Input, InputLabel} from 'material-ui';

 export class InputComponent extends Component {
   handleChange = (evt) => {
     const {number, onUserInput} = this.props;
     const value  = evt.target.value.replace(/-/g, "");
     let unmasked = '';
     for(let i = 0; i < value.length; i++) {
       if(value[i] === "*") {
         unmasked += number[i];
       }else {
         unmasked += value[i];
       }
     }
     onUserInput(unmasked);
   };

   maskValue = () => {
     const {number} = this.props;
     let masked = '';
     for(let i = 0; i < number.length; i++) {
       if(i < 5) {
         masked += "*";
         continue;
       }
       masked += number[i];
     }
     return this.formatInput(masked);
   };

   formatInput = (value) => {
     let formated = '';
     for(let i = 0; i < value.length; i++) {
       if(i === 3 || i === 5) {
         formated += "-";
       }
       formated += value[i];
     }
     return formated
   };

   render() {
     const {isError, validate} = this.props;

     return (
       <FormControl error={isError}>
         <InputLabel htmlFor="name-simple">Number</InputLabel>
         <Input id="name-error" value={this.maskValue()} onChange={this.handleChange} onBlur={validate}/>
       </FormControl>
     );
  }
}

