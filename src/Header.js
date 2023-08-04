import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="w-[100vw] h-[5vh] bg-slate-100 flex justify-center items-center p-10">
      <Link to="/">
        <h1 className="text-[30px] font-bold mr-10">Home</h1>
      </Link>
      <Link to="/signup">
        <h1 className="text-[30px] font-bold">Sign up</h1>
      </Link>
    </div>
  );
}

export default Header;
