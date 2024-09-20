import React, { useState } from "react";
import useCounterOne from "../hooks/useCounterOne";

function CounterOneOne() {
  const [count, increment, decrement, reset] = useCounterOne(0, 1);
  return <div>
    <h2>Count = {count}</h2>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
    <button onClick={reset}>Reset</button>
  </div>;
}

export default CounterOneOne;
