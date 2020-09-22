import React from 'react';
import logo, { ReactComponent } from './logo.svg';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom';
import './App.css';
import { render } from '@testing-library/react';
import Home from "./components/Home";
import Signupage from "./components/Signup";
import LoginPage from "./components/Login";
import ErrorPage from "./components/Error"; 
import DashboardPage from "./components/Dashboard";

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/
function App(){
    const auth = false;
  return(
    <div>
        <header>
          <h3 id="ims-name-long"><a href="/">Internet Management System</a></h3>
          <h3 id="ims-name-short"><a href="/">IMS</a></h3>
          <nav>
            <ul>
              <li><Link to="/login">login</Link></li>
              <li><Link to="/signup">Signup</Link></li>
            </ul> 
          </nav> 
        </header>

        <main>
          <Router>
            <Switch>
              {/*<Route path="/signup" exact>
                <Redirect to="/" />
              </Route>*/}
              <Route path="/" component={Home} exact />
              <Route path="/signup" component={Signupage} />
              <Route path="/login" componet={LoginPage} />
              <Route path="/dashboard" component={DashboardPage}/>
              <Route component={ErrorPage} /> 
            </Switch>
          </Router>  
        </main>
        
        <footer>
          <p><a href="" id="contact">contact</a></p>
          <p>@Copyright  ims  2020</p>
         </footer>   
    </div>
  );
}


export default App;
