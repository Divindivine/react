import React, { useContext, useLayoutEffect, useRef, useState } from "react";
import "./Label.css";
import { MyContext } from "../Page/HomePage";
import Tooltip from "./Tooltip";

function Label(props) {
  const val = useContext(MyContext);
  const [showTooltip, setShowTooltip] = useState(false);

  const labelRef = useRef();
  const refObj = useRef;

  useLayoutEffect(() => {
    if (showTooltip) {
      console.log(labelRef.current);
      const width1 = labelRef.current.getBoundingClientReact().width;
      const width2 = refObj.current.getBoundingClientRect().width;

      refObj.current.style.left = `${-(width2 - width1) / 2}px`;
    }
  }, [showTooltip]);

  const syle = props.isActive
    ? { background: "green" }
    : { background: "orange" };

  if (val === false) {
    return null;
  }

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  const text = props.isActive ? 'Active' : 'Non Active';

  return (
    <div className="list-label-item-container">
      <span ref={labelRef}
      onClick={() => {
        props.onAction(props.isActive ? 'active': 'non-active')
      }}
      >

      </span>
    </div>
  )

  // const refCallback = useCall((domItem) => {
  //   console.log(domItem);
  // }, []);

  const style = props.isActive
    ? { background: "green" }
    : { background: "orange" };
  if (val === false) {
    return null;
  }
  return (
    <span
      onClick={() => {
        props.onAction(props.isActive ? "active" : "non-active");
      }}
      className="list-label-item"
      style={style}
    >
      {props.isActive ? "Active" : "Non Active"}
    </span>
  );
}

export default Label;

// import React, { useContext, useEffect, useRef, useState } from "rect";
// import "./Label.css";
// import { MyContext } from "../Page/HomePage";
// import Tooltip from "./Tooltip";

// useLayoutEffect(() => {
//   function Label(props) {
//     const val = useContext(MyContext);
//     const width1 = labelRef.current.getBoundingClientRect().width;
//     const width2 = refObj.current.getBoundingClientRect().width;

//     refObj.current.style.left = `${-(width2 - width1) / 2}px`;
//   }
// }, [showTooltip]);

// const style = props.isActive
//   ? { background: "green" }
//   : { background: "orange" };
// if (val === false) {
//   return null;
// }

// const handleMouseEnter = () => {
//   ssetShowToolTip(true);
// };

