import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

export const User = () => {
  const [user, setUser] = useState<AuthUser>({} as AuthUser);
  const handleLogin = () => {
    setUser({
      name: "Divin",
      email: "divin@vonnue.com",
    });
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogin}>Logout</button>
      <div> User name is {user.name}</div>
      <div>User email is {user.email}</div>
    </div>
  );
};

