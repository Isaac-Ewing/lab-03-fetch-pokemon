import React from 'react';

export default class PokeDets extends React.Component {
    render() {
        let type = this.props.data.type_1;
        if (this.props.data.type_2 !== "NA")
            type = type + `/${this.props.data.type_2}`
        return (
            <div className="indiv-pokemon">
                <p className="indiv-pokemon-name" key={this.props.data.name}>{this.props.data.name}</p>
                <img src={this.props.data.url_image} alt="" height="200px" width="200px" />
                <p>Attack: {this.props.data.attack}</p>
                <p>Defense: {this.props.data.defense}</p>
                <p>Type: {type}</p>
            </div>
        )
    }
}