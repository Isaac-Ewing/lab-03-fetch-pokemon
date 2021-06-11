import './App.css';
import request from 'superagent';
import React from 'react';
import PokeList from './Pokelist.js';
import Spinner from './Spinner';
import Sort from './Sort.js';
import Search from './Search.js';

export default class App extends React.Component {
  state = {
    keyword: '',
    loading: false,
    sortOrder: 'asc',
    data: [],
    sortBy: 'pokemon',
  }

  componentDidMount = async () => {
    await this.fetchPokemon();
  } 

  handleClick = async () => {
    await this.fetchPokemon();
  }

  handleKeyChange = (e) => {
    this.setState({ keyword: e.target.value });
  }

  handleOrderChange = (e) => {
    this.setState({ sortOrder: e.target.value});
  }

  handleSortChange = (e) => {
    this.setState({ sortBy: e.target.value});
  }


  fetchPokemon = async () => {
    this.setState({ loading: true });
    let url = this.state.keyword ? `https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.state.keyword}&sort=${this.state.sortBy}&direction=${this.state.sortOrder}` : `https://pokedex-alchemy.herokuapp.com/api/pokedex?sort=${this.state.sortBy}&direction=${this.state.sortOrder}`;
    const pokemon = await request.get(url);
    this.setState({ loading: false });
    this.setState({ data: pokemon.body.results });
  }

  render() {
    return (
      <>
        <form>
          <Search handleKeyChange={this.handleKeyChange}/>
          <select onChange={this.handleOrderChange}>
            <option value="asc" key="asc">A-Z (Lowest First)</option>
            <option value="desc" key="desc">Z-A (Highest First)</option>
          </select>
          <Sort handleSortChange={this.handleSortChange}/>
          <button type="button" onClick={this.handleClick}>Search!</button>
        </form>
        {this.state.loading ? <Spinner/> : <PokeList data={this.state.data}/>}
      </>
    );
  }
}