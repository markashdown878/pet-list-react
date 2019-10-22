import React from 'react';

import './App.css';
import PetList from './components/PetList';


class App extends React.Component {
  
  state = {
    pets: [
      {
          "id": 1,
          "name": "Leanne",
          "age": "34",
          "type": "dog"
      },
      {
          "id": 2,
          "name": "Ervin",
          "age": "64",
          "type": "dog"
      },
      {
          "id": 3,
          "name": "Clementine",
          "age": "74",
          "type": "cat"
      },
      {
          "id": 4,
          "name": "Patricia",
          "age": "24",
          "type": "cat"
      },
      {
          "id": 5,
          "name": "Chelsey",
          "age": "18",
          "type": "dog"
      }

    ],
  }

   //Delete Pet function
   delPet=(id) => {
    this.setState({ pets: [...this.state.pets.filter(pet => pet.id !== id)] });
  }


  render() {
    return (
      <div className="App">

        <div className="App-header">

          <div className="main-content">
          <h1>OUR PET LIST</h1>
          <p>Below are a list of pets with their name, age and type.</p>
            <PetList petList={this.state.pets} delPet={this.delPet}/>
          </div>
        </div>
      </div>
    );
  };

}

export default App;
