import './App.css';
import request from 'superagent';
import React from 'react';
import PokeList from './Pokelist.js';
import Spinner from './Spinner';
import Sort from './Sort.js';
import Search from './Search.js';

export default class All extends React.Component {
    state = {
      keyword: '',
      loading: false,
      sortOrder: 'asc',
      data: [],
      sortBy: 'pokemon',
      page: 1,
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

    nextPage = async (e) => {
        await this.setState({ page: this.state.page + 1 });
        this.fetchPokemon();
    }
    
    prevPage = async (e) => {
        await this.setState({ page: this.state.page - 1 });
        this.fetchPokemon();
    }
  
    fetchPokemon = async () => {
        this.setState({ loading: true });
        const params = new URLSearchParams({
            sort: 'pokemon',
            direction: this.state.sortOrder,
            page: this.state.page,
        });

        if (this.state.keyword) {
            params.set('pokemon', this.state.keyword);
        }
        const {
            body: { results: data },
        } = await request.get(
            `https://pokedex-alchemy.herokuapp.com/api/pokedex?${params.toString()}`
        );
        const location = {
            pathname: this.props.location.pathname,
            search: params.toString(),
        };
        this.props.history.push(location);
        this.setState({ data: data })
        this.setState({ loading: false });
    }
  
    render() {
      return (
        <>
          <form id="form">
            <Search handleKeyChange={this.handleKeyChange}/>
            <select onChange={this.handleOrderChange}>
              <option value="asc" key="asc">A-Z (Lowest First)</option>
              <option value="desc" key="desc">Z-A (Highest First)</option>
            </select>
            <Sort handleSortChange={this.handleSortChange}/>
            <button type="button" onClick={this.handleClick}>Search!</button>
          </form>
          {this.state.loading ? <Spinner/> : <PokeList data={this.state.data}/>}
          <div className="nav">
            {this.state.page - 1 > 0 && (<button className="button" onClick={this.prevPage}>Prev</button>)}
            <button className="button" onClick={this.nextPage}>Next</button>
            </div>
        </>
      );
    }
  }