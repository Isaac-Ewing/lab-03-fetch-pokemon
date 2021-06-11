import React from 'react';
import PokeItem from './Pokeitem.js';

export default class PokeList extends React.Component {
    render() {
        return (
            <>
                {this.props.data.map(pokemon => <PokeItem key={pokemon.pokemon} name={pokemon.pokemon}/>)}
            </>
        )
    }
}