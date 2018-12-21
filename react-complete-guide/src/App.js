import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person"

class App extends Component {
  state = { persons: [ {name: "Zoe", age: 1}, 
  {name: "Teddy", "age": 0}, 
{name: "Lucy", "age": 9}
    ]

  }
  render() {
    // 'class' cant be used since its a reserved word in JS
    // 'state' is set and managed inside, but can only be done where class extends from component
    // 'state' is not available in funciton compoenents
    // used to manage function internal data
    // state can be changed and if it changes, it will lead react to rerender the DOM or update the DOM
    return (
      <div className="App">
        <h1>My React App</h1>
        <p> This is working </p>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>My Hobbie: Running</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
      );
    // return React.createElement('div', {className: "App"}, React.createElement('h1', null, 'Does this work now?'))
  }
}


export default App;
