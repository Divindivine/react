// import React from "react";

// function Tooltip(props) {
//   const {} = props;
//   return (
//     <label
//       ref={refObj}
//       className={`tooltip ${showTooltip ? "show-tooltip" : "hide-tooltip"}`}
//     >
//       This is {props.isActive ? "Active" : "Non Active"}tooltop
//     </label>
//   );
// }

// export default Tooltip;

import React from "react";

function Tooltip(props, ref) {
  const { showTooltip } = props;

  if (!showTooltip) {
    return null;
  }

  return (
    <label className="tooltip" ref={ref}>
      This is {props.isActive ? "Active" : "Non Active"} tooltip
    </label>
  );
}

export default React.forwardRef(Tooltip);

