import React, { Component } from 'react';


export class Pet extends Component {


    render() {
        const{id, name, age, type} = this.props.pet
        
        return (
            <tr>
                <td>{name}</td>
                <td>{age}</td>
                <td>{type}</td>
                <td>
                    <button onClick={this.props.delPet.bind(this, id)} className="remove">Delete</button>

                </td>
            </tr>
        )
    }
}



export default Pet;


