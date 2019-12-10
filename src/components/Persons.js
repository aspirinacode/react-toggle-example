import React from "react";
import "./Persons.css";

const Persons = props => {
  return (
    <div className="box">
      <label>Nome: </label>
      {props.name}
      <b onClick={props.click}> X</b>
      <br />
      <input type="text" OneChange={props.changed} />
      <br />
      <label> Eta': </label>
      {props.age}
    </div>
  );
};

export default Persons;
