import React, { useEffect, useState } from "react";
import "./Usage.css";

function Usage() {
  const [value, setValue] = useState(0);
  const [color, setColor] = useState("white");
  const [boom, setBoom] = useState(false);

  //   useEffect(() => {
  //     setBoom(false);
  //     const id = setTimeout(() => {
  //       setBoom(true);
  //     }, value * 1000);

  //     return () => {
  //       clearTimeout(id);
  //     };
  //   }, [value]);

  useEffect(() => {
    console.log("EFFECT");
    return () => {
      console.log("CLEAN UP");
    };
  }, []);

  return (
    <div>
      {" "}
      <div className="usage">
        <div className="usage-item" style={{ background: color }}>
          <button
            onClick={() => {
              setValue(value + 1);
            }}
          >
            Increment
          </button>
          <label>{value}</label>
          <button
            onClick={() => {
              setValue(value - 1);
            }}
          >
            Decrement
          </button>
        </div>
        <button
          onClick={() => {
            setColor("green");
          }}
        >
          Green
        </button>
        <button
          onClick={() => {
            setColor("blue");
          }}
        >
          Blue
        </button>
      </div>
      {/* {
      boom && value ? (
        <div className="boom">
          <span>BOOM</span>
        </div>
      ) : null
      } */}
    </div>
  );
}

export default Usage;

