import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person"

class App extends Component {
  render() {
    // 'class' cant be used since its a reserved word in JS
    return (
      <div className="App">
        <h1>My React App</h1>
        <p> This is working </p>
        <Person />
      </div>
      );
    // return React.createElement('div', {className: "App"}, React.createElement('h1', null, 'Does this work now?'))
  }
}


export default App;
