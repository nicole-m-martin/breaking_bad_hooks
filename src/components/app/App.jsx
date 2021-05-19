import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from '../ui/Header';
import BreakingBadList from '../../containers/BreakingBadList';
import BreakingBadDetail from '../../containers/BreakingBadDetail';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Header />
          <Switch>
            <Route
              path="/"
              exact
              render={(routerProps) => <BreakingBadList {...routerProps} />}
            />
            <Route
              path="/:id"
              exact
              render={(routerProps) => <BreakingBadDetail {...routerProps} />}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}
