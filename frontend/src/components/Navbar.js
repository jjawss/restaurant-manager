import React from "react";
import { Link } from "react-router-dom";
import { Router } from "react-router-dom";
import { history } from "../history";
export default class App extends React.Component {
  logout() {
        localStorage.clear();
        window.location.href = '/';
    }
  render() {
    return (

      <div className="ui stackable menu">
        <Router history={history}>
          <div className="item">
            <img src="/images/logo.png" alt="logo"></img>
          </div>
          <Link className="item" to="/home">Home</Link>
          <Link className="item" to="/employees">Employees</Link>
          <Link className="item" to="/settings">My Information</Link>
          <Link className="item" onClick={e => this.logout()} to="/login">LogOut</Link>
        </Router>
      </div>

      // {/* <div className="ui three item menu">
      //   <Router history={history}>
      //     <div className="active item">
            
      //     </div>
      //     <div className="item">
      //       {/* <Link className="item"> */}
      //       {/* Manage
      //       {/* </Link> */}
      //     {/* </div> */}
      //     {/* <div className="item"> */} 
      //       {/* <Link className="item">Settings</Link> */}
      //     {/* </div>
      //   </Router> */}
      // // </div> */}
    );
  }
}