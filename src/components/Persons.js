import React from "react";
import "./Persons.css";

const Persons = props => {
  return (
    <div className="box" onClick={props.click}>
      <label>Nome: </label>
      {props.name}
      <label> Eta': </label>
      {props.age}
    </div>
  );
};

export default Persons;
