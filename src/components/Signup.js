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
       if(event.terget.value == ""){
            this.setState = {name: event.name.value};
       }     
    }
  
      render(){
        return(
          <form>
            <input type="text" name="name" placeholder="Full Name" onChange={this.handleForm}/>
            <input type="text" name="email" placeholder="Email Address"/>
            <input type="text" name="password1" placeholder="New Password"/>
            <input type="text" name="password2" placeholder="Repeat Password"/>
            <input type="submit" name="submit" id="submit" value="submit"/>
          </form> 
        ); 
      }
    
  
  
  }

  export default SignupPage;