import React, { useEffect } from "react";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import Checkout from "./Checkout";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("The User is ", authUser);
      if (authUser) {
        // the user just logged in / the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    return () => {};
  }, []);

  return (
    // BEM 컨벤션
    <Router>
      <div className="app">
        <Header></Header>
        <Switch>
          <Route path="/login">
            <Login></Login>
          </Route>
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
