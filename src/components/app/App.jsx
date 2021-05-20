import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from '../ui/Header';
import ListComponent from '../../containers/BreakingBadList';
import DetailsComponent from '../../containers/BreakingBadDetail';
import './App.css';
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
              render={(routerProps) => <ListComponent {...routerProps} />}
            />
            <Route
              path="/:id"
              exact
              render={(routerProps) => <DetailsComponent {...routerProps} />}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}
