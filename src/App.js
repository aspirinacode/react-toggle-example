import React, { Component } from "react";
import "./App.css";

import Persons from "./components/Persons";

class App extends Component {
  state = {
    persons: [
      { name: "Francesco", age: 22 },
      { name: "Lucrezia", age: 23 },
      { name: "Kirby", age: 1 }
    ],
    showPersons: false,
    buttonValue: "Mostra"
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    let person = null;
    if (this.state.showPersons) {
      person = (
        <div>
          <Persons
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
          />
          <Persons
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
          />
          <Persons
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
          />
        </div>
      );
    }

    return (
      <div className="App">
        <button onClick={this.togglePersonsHandler} className="button">
          {this.state.buttonValue}
        </button>
        {person}
      </div>
    );
  }
}

export default App;
