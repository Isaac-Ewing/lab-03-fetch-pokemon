import React from 'react';

export default class PokeItem extends React.Component {
    render() {
        return (
            <div className="indiv-pokemon">
                <p className="indiv-pokemon-name" key={this.props.name}>{this.props.name}</p>
                <img src={this.props.src} alt="" height="200px" width="200px" />
            </div>
        )
    }
}