import React, { Component } from 'react'

export class AddPet extends Component {

    state = {
        name:'',
        age:'',
        type:''
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addPet(this.state.name , this.state.age , this.state.type);
        this.setState({name: '', age: '', type: ''});
    }

    render() {
        return (
          <div className="add_new">
            <h2>ADD PET</h2>
            <p>Use the form below to add a pet to the list!</p>
            <form onSubmit={this.onSubmit} className="add_new_form">
              <input 
                type="text" 
                name="name" 
                placeholder="Pet Name"
                value={this.state.name}
                onChange ={this.onChange}
              />
              <input 
                type="number" 
                name="age" 
                placeholder="Pet Age"
                value={this.state.age}
                onChange ={this.onChange}
              />
              <input 
                type="text" 
                name="type" 
                placeholder="Pet Type"
                value={this.state.type}
                onChange ={this.onChange}
              />
              <input 
                type="submit" 
                value="Add" 
                className="btn"
              />
            </form>


            </div>
        )
    }
}

export default AddPet
