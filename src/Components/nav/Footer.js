import React from "react";
import { Link } from "react-router-dom";
import "../../scss/footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footLinks">
        <Link className="footerLinks" to="/home">
          Home
        </Link>
        <Link className="footerLinks" to="about">
          About us
        </Link>
        <Link className="footerLinks" to="/login">
          Login
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
