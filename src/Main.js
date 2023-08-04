import React from "react";
import { Link } from "react-router-dom";

function Main() {
  return (
    <div>
      <Link to="/welcome">Home</Link>
      <Link to="/signup">sign up</Link>
    </div>
  );
}

export default Main;
