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

  deletePersonsHandler = indexPerson => {
    const persons = this.state.persons;
    persons.splice(indexPerson, 1);
    this.setState({ persons: persons });
  };

  render() {
    let person = null;
    if (this.state.showPersons) {
      person = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Persons
                name={person.name}
                age={person.age}
                click={() => this.deletePersonsHandler(index)}
              />
            );
          })}
          {/* chiusura map() */}
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
