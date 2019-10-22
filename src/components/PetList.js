import React, { Component } from 'react';
import Pets from './Pet';


class PetList extends Component {

    render() {
        console.log(this.props.petList)

        return (
            <div className="list-wrap">
                <table>
                    <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Type</th>
                    </tr> 
                    {this.props.petList.map(pet =>
                        
                        <Pets key={pet.id} pet={pet}  />                       
                    
                    )}   
                    </tbody>
                </table>

            </div>
        )
    }
}


export default PetList;