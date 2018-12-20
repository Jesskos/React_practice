import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person"

class App extends Component {
  render() {
    // 'class' cant be used since its a reserved word in JS
    // 'state' is set and managed inside, but can only be done where class extends from component
    // 'state' is not available in funciton compoenents
    return (
      <div className="App">
        <h1>My React App</h1>
        <p> This is working </p>
        <Person name="Zoe" age="1">My Hobbie: Running</Person>
        <Person name="Teddy" age="10"/>
        <Person name="Lucy" age="9" />
      </div>
      );
    // return React.createElement('div', {className: "App"}, React.createElement('h1', null, 'Does this work now?'))
  }
}


export default App;
