<<<<<<< HEAD
import React from "react";
import Signup from "./Signup";
=======
import React from 'react';
import { history } from '../history';
>>>>>>> 7ca23903df8b1cd4408f2d7bf759632668f4d42e

export default class Login extends React.Component {
  state = {
    username: "",
    password: ""
  };

<<<<<<< HEAD
  handleLogin = e => {
    e.preventDefault();
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    })
      .then(res => res.json())
      .then(res => localStorage.setItem("token", res.token));
  };
=======
    handleLogin = (e) => {
        e.preventDefault()
        fetch('http://localhost:3000/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: this.state.username,
            password: this.state.password
          })
        })
        .then(res => res.json())
        .then(res => {
          history.push('/home')
          localStorage.setItem("token", res.token)
        })
>>>>>>> 7ca23903df8b1cd4408f2d7bf759632668f4d42e

  render() {
    return (
      <div className="ui centered grid container">
        <div className="nine wide column">
          <div className="ui icon warning message">
            <i className="lock icon"></i>
            <div className="content">
              <div className="header">Login failed!</div>
              <p>You might have misspelled your username or password!</p>
            </div>
          </div>
          <div className="ui fluid card">
            <div className="content">
              <form
                className="ui form"
                method="POST"
                onSubmit={e => {
                  this.handleLogin(e);
                }}
              >
                <div className="field">
                  <label>User</label>
                  <input
                    type="text"
                    name="user"
                    placeholder="User"
                    onChange={e => {
                      this.setState({ username: e.target.value });
                    }}
                  ></input>
                </div>
                <div className="field">
                  <label>Password</label>
                  <input
                    type="password"
                    name="pass"
                    placeholder="Password"
                    onChange={e => {
                      this.setState({ password: e.target.value });
                    }}
                  ></input>
                </div>
                <button
                  className="ui primary labeled icon button"
                  type="submit"
                >
                  <i className="unlock alternate icon"></i>
                  Login
                </button>
                <button
                  className="ui primary labeled icon button"
                  type="submit"
                >
                  <i className="address card icon"></i>
                  Signup
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}