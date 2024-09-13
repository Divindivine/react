import React from "react";

function Person({ person }) {
  return (
    <div>
      <h2>
        {person.id}. I am {person.name}. I am {person.age} years old. I am{" "}
        {person.skill} expert
      </h2>
    </div>
  );
}

export default Person;
