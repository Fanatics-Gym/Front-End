import React from "react";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import cart from "../../imgs/cart.png";
import UserInfo from "../../Recoil/atom/userData";
import CheckoutSelector from "../../Recoil/selector/checkoutSelector";
import { useHistory } from "react-router-dom";

const NavBar = (props) => {
  const { listLength } = useRecoilValue(CheckoutSelector);
  const user = useRecoilValue(UserInfo);
  const { push } = useHistory();
  const adjust = () => {
    if (window.screen.width <= 500) {
      return <div></div>;
    }
  };
  const logout = () => {
    localStorage.removeItem("token");
    push("/login");
    window.location.reload();
  };
  const userDiv = () => {
    if (user.userInfo) {
      if (user.userInfo.userType === "Admin") {
        return (
          <div className="navLinks">
            <Link className="links" to="/">
              Home
            </Link>
            <Link className="links" to="/admin">
              Admin
            </Link>
            <Link className="links" onClick={logout}>
              Logout
            </Link>
          </div>
        );
      } else if (user.userInfo.userType === "Player") {
        return (
          <div className="navLinks">
            <Link className="links" to="/player-profile">
              Stats
            </Link>
            <Link className="links" to="/player">
              Player
            </Link>
            <Link className="links" onClick={logout}>
              Logout
            </Link>
          </div>
        );
      }
    } else {
      return (
        <div className="navLinks">
          <Link className="links" to="/">
            Home
          </Link>
          {/* <Link className="links" to="/shop">
      Shop
    </Link> */}
          <Link className="links" to="/football">
            Football
          </Link>
          {/* <Link className="links" to="/cart">
      <img src={cart} />
      {listLength !== 0 ? (
        <span class="badge">
          <h3 class="badgeNum">{listLength}</h3>
        </span>
      ) : (
        <span></span>
      )}
    </Link> */}
          <Link className="links" to="/login">
            Login
          </Link>
        </div>
      );
    }
  };
  return (
    <nav className="nav">
      <div className="navLogo">
        <Link className="linkHome" to="/">
          <h1>Fanatics Gym</h1>
        </Link>
      </div>
      {userDiv()}
    </nav>
  );
};

export default NavBar;
