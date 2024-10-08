import React from "react";
import { Login } from "./Login";
import { ProfileProps } from "./Profile";

type PrivateProps = {
  isLoggedIn: boolean;
  component: React.ComponentType<ProfileProps>;
};

export const Private = ({ isLoggedIn, component: component }: PrivateProps) => {
  if (isLoggedIn) {
    // return <Component name="Divin" />;
  } else {
    return <Login />;
  }
};

