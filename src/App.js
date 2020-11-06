import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css";
import "./Content.css";

// pages 
import Login from "./Login";
import Register from "./Register";
import HomeHeader from './HomeHeader.js';
import { auth } from './firebase.js';
import Content from "./Content";
import Ins from "./Ins";

function App() {

  const [user, setUser] = useState([]);

  auth.onAuthStateChanged((authUser) => {
    if (authUser) {
      setUser(authUser)
    } else {
      setUser(false);
    }
  })
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/Register">
            <Register />
          </Route>
          <Route path="/">
            <HomeHeader user={user} />
            <Content />
          </Route>
          <Route path="/Ins">
            <Ins />
          </Route>
          

        </Switch>
      </Router>

    </div>
  )
}

export default App;