import React from 'react';
import {Link} from 'react-router-dom';

class LoginPage extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <form>
                <h1>Login</h1>
                <input name="email" placeholder="Email Address"/>
                <input name="password" placeholder="New Password"/>
                <input name="submit" value="login"/>
                <Link to="/forgetpassword">Forgot password</Link>
            </form> 
        );
    }

}
export default LoginPage;