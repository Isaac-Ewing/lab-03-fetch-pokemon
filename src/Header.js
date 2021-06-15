import { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class PokeList extends Component {
    render() {
        return (
            <div className="header">
                <div id="pokedex">Pokedex</div>
                <div className="links">
                    <NavLink className="nav-link" exact to="/">Home</NavLink>
                    <NavLink className="nav-link" to="/pokemon">Pokemon</NavLink>
                </div>
            </div>
        );
    }
}