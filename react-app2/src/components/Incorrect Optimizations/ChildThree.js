import React from "react";

export const ChildThree = ({children, name}) => {
  console.log("ChildTwo Renter");
  return <div>{children} {name}</div>;
};

export const MemoizedChildThree = React.memo(ChildTwo);
