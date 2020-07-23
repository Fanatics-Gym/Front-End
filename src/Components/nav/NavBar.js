import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../../scss/nav.scss";
import cart from "../../imgs/cart.png";

const NavBar = () => {
  return (
    <nav className="nav">
      <div className="navLogo">
        {/* <img src={label}></img> */}
        <h1>Fanatics Gym</h1>
      </div>
      <div className="navLinks">
        <Link className="links" to="/">
          Home
        </Link>
        <Link className="links" to="/about">
          About
        </Link>
        {localStorage.getItem("token") ? (
          <Link className="links" to="/user">
            User
          </Link>
        ) : (
          <Link className="links" to="/login">
            Login
          </Link>
        )}
        <Link className="links" to="/shop">
          Shop
        </Link>
        <Link className="links" to="/checkout">
          <img src={cart} />
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
