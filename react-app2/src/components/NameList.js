import React from "react";
import Person from "./Person";

function NameList() {
  const persons = [
    {
      id: 1,
      name: "Divin",
      age: 20,
      skill: "React",
    },
    {
      id: 2,
      name: "Shijil",
      age: 21,
      skill: "Angular",
    },
    {
      id: 3,
      name: "Hrishi",
      age: 21,
      skill: "Figma",
    },
  ];
 const names = ["Divin", "Shijil", "Hrishi"];
  // const NameList = names.map((name) => <h2>{name}</h2>);
  // const personList = persons.map((person) => <Person key={person.id} person={person} />);
  const nameList = names.map((name, index) => <h2 key={index}>{index} {name}</h2>);
  // return <div>{personList}</div>;
  return <div>{nameList}</div>
}

export default NameList;