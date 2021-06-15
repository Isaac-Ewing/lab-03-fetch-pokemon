import React from 'react';
import request from 'superagent';
import Spinner from './Spinner';
import PokeDets from './Detailspage';

export default class PokemonDetails extends React.Component {
    state = {
        data: {},
        loading: false,
    };

    componentDidMount = async () => {
        await this.fetchPokemon();
    }

    fetchPokemon = async () => {
        this.setState({ loading: true });
        const iD = this.props.match.params.pokeId;
        const pokemon = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex/${iD}`);
        this.setState({ data: pokemon.body });
        this.setState({ loading: false });
    }
    render() {
        return (
            <div>
                {this.state.loading ? <Spinner/> : <PokeDets data={this.state.data}/>}
            </div>
        );
    }
}