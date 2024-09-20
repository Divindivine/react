import React, { useState } from "react";
import { MemoizedChildFive } from "../ImmutabelState/ChildFive";

export const ParentFour = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Divin");

  const person = {
    fname: "Briuce",
    lname: "Wayne",
  };

  const handleClick = () => {}


  console.log("Parent Render");

  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Count - {count}</button>
      <button onClick={() => setName("Codevolution")}>change name</button>
      <MemoizedChildFive name={name} handleClick = {handleClick} />
    </div>
  );
};

