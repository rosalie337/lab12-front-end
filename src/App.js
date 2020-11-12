import React, { Component } from 'react'
import {
    BrowserRouter as Router, 
    Route, 
    Switch,
    Link,
} from "react-router-dom";
import Login from './Login.js'
import SignUp from './SignUp.js'
import Home from './Home.js'
import './App.css'

export default class App extends Component {
  state = { token: localStorage.getItem('TOKEN') }

  handleTokenChange = (myToken) => {
    this.setState({ token: myToken });
    localStorage.setItem('TOKEN', myToken);
  }

  render() {
    return (
      <div>
        <Router>
          <ul>
            <Link to="/login"><div>log in</div></Link>
            <Link to="/signup"><div>sign up</div></Link>
          </ul>
          <Switch>
            <Route exact path='/' render={(routerProps) => <Home handleTokenChange={this.handleTokenChange} {...routerProps} />} />
            <Route exact path='/login' render={(routerProps) => <Login handleTokenChange={this.handleTokenChange} {...routerProps} />} />
            <Route exact path='/signup' render={(routerProps) => <SignUp handleTokenChange={this.handleTokenChange} {...routerProps}/>} />
          </Switch>
        </Router>
      </div>
    )
  }
}
