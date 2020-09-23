import React from 'react';

/* Signup Page */
class SignupPage extends React.Component{
  
    constructor(props){
      super(props);
      this.state = {
        name: "",
        email: "",
        password1: "",
        password2: "",
        error: ""
      };
      
    }

    handleForm = (event) => {
      let field = event.terget.value;
       if(fiel === 1){
            this.setState({error: "this is empty"}); 
       }else{
         this.stState({name: event.terget.value});
       }     
    }
    submitForm = (event) =>{
      if()
    }
  
      render(){
        return(
          <form onSubmit={this.submitForm}>
            <input type="text" value={this.state.name} name="name" placeholder="Full Name" onChange={this.handleForm}/>
            <input type="text" name="email" placeholder="Email Address"/>
            <input type="text" name="password1" placeholder="New Password"/>
            <input type="text" name="password2" placeholder="Repeat Password"/>
            <input type="submit" name="submit" id="submit" value="submit"/>
          </form> 
        ); 
      }
    
  
  
  }

  export default SignupPage;