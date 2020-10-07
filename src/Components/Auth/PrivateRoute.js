import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useRecoilValue } from "recoil";
import UserInfo from "../../Recoil/atom/userData";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const token = useRecoilValue(UserInfo);
  return (
    <Route
      {...rest}
      render={(props) => {
        if (token.token) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

export default PrivateRoute;
