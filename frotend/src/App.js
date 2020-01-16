<<<<<<< HEAD
import React from "react";
import "./App.css";
import Login from "./components/Login";
import SignUp from "./components/Signup";

function App() {
  return (
    <div className="App">
      <Login />
    </div>
  );
=======
import React from 'react';
import './App.css';
import Login from './components/Login'
import HomeContainer from './components/HomeContainer'
import {Router, Route} from 'react-router-dom'
import { history } from './history';


export default class App extends React.Component {
  state = {
    selectedPage: 'login',
    loggedInUser: null,
}

componentDidMount() {
    fetch('http://localhost:3000/authorize', {
        headers: {
            Authorization: `Bearer ${localStorage.token}`
        }
    })
    .then(res => res.json())
    .then(profile => {
        if (!profile.failed) {
            history.push('/home')
            this.setState({
                loggedInUser: profile,
            })
        }
    })
    console.log(history)
>>>>>>> 7ca23903df8b1cd4408f2d7bf759632668f4d42e
}

selectPage = page => {
    this.setState({
        selectedPage: page
    })
}

  render(){
    return (
      <div className="App">
        <Router history={history}>
          <Route exact path={"/login"} component={Login} />
          <Route exact path={"/home"} component={HomeContainer} />
        </Router>
      </div>
    );
  }
}