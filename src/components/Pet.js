import React, { Component } from 'react';


export class Pet extends Component {


    render() {
        const{name, age, type} = this.props.pet
        
        return (
            <tr>
                <td>{name}</td>
                <td>{age}</td>
                <td>{type}</td>
            </tr>
        )
    }
}



export default Pet;


