import React from "react";
import { Link, Router } from "react-router-dom";
import "../../scss/nav.scss";

const NavBar = () => {
  return (
    <nav className="nav">
      <div className="navLogo">
        {/* <img src={label}></img> */}
        <h1>Fanatics Gym</h1>
      </div>
      <div className="navLinks">
        {/* <div className="linksInNav"> */}
        <Link className="links" to="/">
          Home
        </Link>
        <Link className="links" to="/about">
          About
        </Link>
        <Link className="links" to="/login">
          Login
        </Link>
        {/* <Link className="links" to="/user">
          User
        </Link> */}
        {/* </div> */}
      </div>
    </nav>
  );
};

export default NavBar;