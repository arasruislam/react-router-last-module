import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="bg-indigo-900 py-4 mx-auto w-3/4 text-center font-bold text-white">
      <Link className="mx-4 text-lg" to="/">
        Home
      </Link>
      <Link className="mx-4 text-lg" to="/review">
        Order Review
      </Link>
      <Link className="mx-4 text-lg" to="/about">
        About
      </Link>
      <Link className="mx-4 text-lg" to="/contact">
        Contact
      </Link>
    </nav>
  );
};

export default Header;
