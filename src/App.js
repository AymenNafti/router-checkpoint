import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Profile from "./Components/Profile";
import ListUsers from "./Components/ListUsers";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import "./App.css";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const toggleIsLogin = () => {
    setIsLogin(!isLogin);
  };
  return (
    <Router>
      <NavBar isLogin={isLogin} toggleIsLogin={toggleIsLogin} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/profile/:userId">
          <Profile isLogin={isLogin} />
        </Route>
        <Route path="/listUsers">
          <ListUsers isLogin={isLogin} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
