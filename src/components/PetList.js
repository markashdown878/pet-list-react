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
                        <th>Action</th>
                    </tr>    
                    {this.props.petList.map(pet =>
                        
                        <Pets key={pet.id} pet={pet} delPet={this.props.delPet} />                       
                    
                    )}
                    </tbody>
                </table>
                <button className="sort_name" onClick={this.props.sortPetAsc}>Sort Asc</button>
                <button className="sort_name" onClick={this.props.sortPetDsc}>Sort Dsc</button>
            </div>
        )
    }
}


export default PetList;