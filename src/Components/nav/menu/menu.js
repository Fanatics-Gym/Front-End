import React from "react";
import { bool } from "prop-types";
import { StyledMenu } from "./menu-style";
import { Link } from "react-router-dom";

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <Link to="/about">
        <a>About us</a>
      </Link>
      <Link to="/teams">
        <a>Teams</a>
      </Link>
      <Link to="/rules">
        <a>Rules</a>
      </Link>
      <Link to="/login">
        {" "}
        <a>Login</a>
      </Link>
      <Link to="/contact">
        {" "}
        <a>Contact</a>
      </Link>
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
};
export default Menu;
