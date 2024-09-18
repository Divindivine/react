import React from "react";

const userContext = React.createContext("Codevolution");

const userProvider = userContext.Provider;
const userConsumer = userContext.Consumer;

export { userProvider, userConsumer };
export default userContext;
