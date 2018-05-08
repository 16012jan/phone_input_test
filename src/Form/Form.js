import React,{Component} from 'react';
import {Grid, Card, Typography} from 'material-ui';

import {InputComponent} from './'

import './index.css'

 export class FormComponent extends Component {
   state = {
     number: '',
     isError: false
   };
   handleUserInput = (number) => {
     const reg = /^\d{1,9}$/;
     if (number === '' || reg.test(number)) {
       this.setState({number:number});
     }
   };

   validate = () => {
      const {number} = this.state;
      const reg = /^\d{9}$/;
      if (!reg.test(number)) {
        this.setState({isError:true});
        return
      }
      this.setState({isError:false});
   };

   render() {
     const {number, isError} = this.state;
     return (
       <div>
         <Grid container justify='center'>
             <Card className="form_card">
               <InputComponent
                 number={number}
                 isError={isError}
                 validate={this.validate}
                 onUserInput={this.handleUserInput}
               />
             </Card>
         </Grid>
         <Grid container justify='center'>
             <Typography type="body1">
               Updated value: {number}
             </Typography>
         </Grid>
       </div>
     );
  }
}

