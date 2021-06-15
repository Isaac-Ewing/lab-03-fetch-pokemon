import './App.css';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PokemonDetails from './PokemonDetails.js';
import All from './Pokemon.js';
import Home from './Home.js';
import Header from './Header.js';
export default class App extends React.Component {
  render() {
      return (
          <BrowserRouter>
              <div className="app">
                <Header />
                <Switch>
                    <Route path="/pokemon" exact component={All} />
                    <Route path="/pokemon/:pokeId" component={PokemonDetails} />
                    <Route path="/" exact component={Home} />
                </Switch>
              </div>
          </BrowserRouter>
      );
  }
}