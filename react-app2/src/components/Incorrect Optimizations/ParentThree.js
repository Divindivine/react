import React, { useState } from "react";
import { MemoizedChildThree } from "./ChildThree";

export const ParentThree = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Divin");

  console.log("Parent Render");

  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>Count - {count}</button>
      <button onClick={() => setName("Codevolution")}>change name</button>
      <MemoizedChildThree name={name} />
    </div>
  );
};


