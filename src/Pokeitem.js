import React from 'react';

export default class PokeItem extends React.Component {
    render() {
        return (
            <>
                <p key={this.props.name}>{this.props.name}</p>
            </>
        )
    }
}