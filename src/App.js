import React from "react";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    // BEM 컨벤션
    <Router>
      <div className="app">
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/checkout">
            <Checkout></Checkout>
          </Route>
        </Switch>
        {/* Home */}
      </div>
    </Router>
  );
}

export default App;
