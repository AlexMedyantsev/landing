import React, {PureComponent} from 'react';
import {connect} from "react-redux";
import history from "../../history.js";
import {Switch, Route, Router} from "react-router-dom";
import Main from "../main/main.jsx";
import moment from 'moment'

class App extends PureComponent {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Main} />
        </Switch>
      </Router>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
};

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
