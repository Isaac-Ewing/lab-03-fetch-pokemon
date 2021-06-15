import React from 'react';

export default class Dropdown extends React.Component {
    render() {
        return (
            <label>
                <select onChange={this.props.handleTypeChange}>
                    <option value="">--select--</option>
                    {this.props.options.map((pokemon) => <option value={pokemon} key={pokemon}>{pokemon}</option>)}
                </select>
            </label>
        )
    }
}