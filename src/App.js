import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Blog from "./Blog";

import "./App.css";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/blog">
          <Blog />
        </Route>
      </Switch>
    </Router>
  );
}

const Home = () => {
  return <div>Home</div>;
};

const About = () => {
  return <div>About</div>;
};

export default App;
