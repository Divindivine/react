import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/`">Home</Link>
      <Link>About</Link>
    </nav>
  );
}

export default Navbar;
