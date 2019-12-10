import React, { Component } from "react";
import "./App.css";

import Persons from "./components/Persons";

class App extends Component {
  state = {
    persons: [
      { id: "1", name: "Francesco", age: 22 },
      { id: "2", name: "Lucrezia", age: 23 },
      { id: "3", name: "Rebecca", age: 21 }
      { id: "3", name: "Niccolò", age: 23 }
    ],
    showPersons: false,
    buttonValue: "Mostra"
  };

  // nameChangeHandler = (event, id) => {
  //   const personIndex = this.state.persons.findIndex(p => {
  //     return p.id === id;
  //   });

  // const person = {
  //   ...this.state.persons[personIndex]
  // };

  // person.name = event.target.value;

  // // const persons = [...this.state.persons];
  // // persons[personIndex] = person;

  //   // this.setState({ person: person });
  // };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  deletePersonsHandler = indexPerson => {
    const persons = this.state.persons.slice();
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
                key={person.id}
                changed={event => this.nameChangeHandler(event, person.id)}
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
