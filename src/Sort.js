import React from 'react';

export default class Sort extends React.Component {
    render() {
        return (
            <>
                <select onChange={this.props.handleSortChange}>
                    <option value="pokemon" key="pokemon">Pokemon</option>
                    <option value="id" key="id">Id</option>
                    <option value="attack" key="attack">Attack</option>
                    <option value="defense" key="defense">Defense</option>
                </select> 
            </>
        )
    }
}