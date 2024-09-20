import React from "react";

export const ChildTwo = () => {
  console.log("ChildTwo Renter");
  return <div>ChildTwo Component</div>;
};

export const MemoizedChildTwo = React.memo(ChildTwo);
