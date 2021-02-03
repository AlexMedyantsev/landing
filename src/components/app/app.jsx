import React from 'react';
import history from "../../history.js";
import {Switch, Route, Router} from "react-router-dom";
import Main from "../main/main.jsx";

export default function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Main} />
      </Switch>
    </Router>
  )
}
