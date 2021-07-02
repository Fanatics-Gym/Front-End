import React from "react";
import { bool } from "prop-types";
import { StyledMenu } from "./menu-style";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import UserInfo from "../../../Recoil/atom/userData";

const Menu = ({ open }) => {
  const user = useRecoilValue(UserInfo);
  return (
    <StyledMenu open={open}>
      <Link to="/">
        <a>Home</a>
      </Link>
      <Link to="/about">
        <a>About us</a>
      </Link>
      <Link to="/teams">
        <a>Teams</a>
      </Link>
      <Link to="/rules">
        <a>Rules</a>
      </Link>
      {user.userInfo ? (
        <div>
          {" "}
          <Link to="/login">
            {" "}
            <a>Dash board</a>
          </Link>{" "}
          <Link to="/login">
            {" "}
            <a>Logout</a>
          </Link>
        </div>
      ) : (
        <div>
          <Link to="/login">
            {" "}
            <a>Login</a>
          </Link>
        </div>
      )}
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
