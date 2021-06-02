import React from "react";
import { bool } from "prop-types";
import { StyledMenu } from "./menu-style";
import { Link } from "react-router-dom";

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <Link to="/about">
        <a>
          <span role="img" aria-label="about us">
            &#x1f481;&#x1f3fb;&#x200d;&#x2642;&#xfe0f;
          </span>
          About us
        </a>
      </Link>
      <Link to="/teams">
        <a>
          <span role="img" aria-label="price">
            &#x1f4b8;
          </span>
          Teams
        </a>
      </Link>
      <Link to="/rules">
        <a>
          <span role="img" aria-label="contact">
            &#128203;
          </span>
          Rules
        </a>
      </Link>
      <Link to="/login">
        {" "}
        <a>
          <span role="img" aria-label="contact">
            &#127944;
          </span>
          Login
        </a>
      </Link>
      <Link to="/contact">
        {" "}
        <a>
          <span role="img" aria-label="contact">
            &#x1f4e9;
          </span>
          Contact
        </a>
      </Link>
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired,
};
export default Menu;
