import React from 'react';
import PokeItem from './Pokeitem.js';
import { Link } from 'react-router-dom';

export default class PokeList extends React.Component {
    render() {
        return (
            <div className="pokemon-list">
                {this.props.data.map(pokemon => (<Link key={pokemon.id} to={`/pokemon/${pokemon._id}`}><PokeItem key={pokemon.pokemon} name={pokemon.pokemon} src={pokemon.url_image}/></Link>))}
            </div>
        )
    }
}