import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import ApiService from './api/service';
import { Home, Beers } from './pages';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      beers: []
    };
  }

  componentDidMount = async () => {
    const beers = await ApiService.listAllBeers();
    this.setState({ beers });
  };

  render() {
    const { beers } = this.state;
    return (
      <Switch>
        <Route exact path="/" render={props => <Home {...props} />} />
        <Route
          exact
          path="/beers"
          render={props => <Beers {...props} beers={beers} />}
        />
      </Switch>
    );
  }
}

export default App;
