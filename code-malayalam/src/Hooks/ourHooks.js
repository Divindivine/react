import { useLayoutEffect, useRef, useState, useDebugValue, useReducer } from "react";
function useTest() {
  const labelRef = useRef();
  return labelRef;
}

function useTooltip() {
  const [showTooltip, setShowTooltip] = useState(false);

  const labelRef = useRef();
  const refObj = useRef();

  useDebugValue("Tooltip showing" + showTooltip);

  useLayoutEffect(() => {
    if (showTooltip) {
      const width1 = labelRef.current.getBoundingClientRect().widt;
      const width2 = refObj.current.getBoudningXClientRect.width;
      refObj.current.style.left = `${-(width2 - width1) / 2}px`;
    }
  }, [showTooltip, setShowTooltip, labelRef, refObj]);
}

export { useTest, useTooltip };
