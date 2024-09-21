import { useState } from "react";

export const loggedIn = () => {
  const [isLoggedIn, setIsLoggedin] = useState(false);

  const handleLogin = () => {
    setIsLoggedin(true);
  };
  const handleLogout = () => {
    setIsLoggedin(false);
  };

  return (
    <div>
      <button onClick={handleLogin}></button>
      <button onClick={handleLogout}></button>
      <div>User is {isLoggedIn ? "Logged in" : "Logged out"}</div>
    </div>
  );
}
