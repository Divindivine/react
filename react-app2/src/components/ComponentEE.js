import React, { useContext } from "react";
import ComponentFF from "./ComponentFF";
import { UserContext, ChannelContext } from "../App";
function ComponentEE() {
  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);

  return (
    <div>
      {user} - {channel}
    </div>
  );
}

export default ComponentEE;
