import React, { useState, useEffect } from "react";
import { BaseUrl } from "../Auth/axios";
import { PageView } from "../../analyicts";
import "../../scss/loginPage.scss";

const LoginForm = (props) => {
  const [userCredentials, setUserCredentials] = useState({
    username: "",
    password: "",
  });
  useEffect(() => {
    PageView();
  }, []);

  const handleChange = (e) => {
    setUserCredentials({
      ...userCredentials,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    BaseUrl()
      .post(`http://localhost:7000/user/login`, userCredentials)
      .then((res) => {
        localStorage.setItem("token", res.data.payload);
        props.history.push("/user");
        window.location.reload();
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="loginForm" onSubmit={onSubmit}>
      <h2>Login</h2>
      <form>
        <h3>Username/Email</h3>
        <input
          className="loginInputs"
          type="text"
          placeholder="Insert Username or Email"
          name="username"
          value={userCredentials.username}
          onChange={handleChange}
        />
        <h3>Password</h3>
        <input
          className="loginInputs"
          type="password"
          name="password"
          placeholder="Insert Password"
          value={userCredentials.password}
          onChange={handleChange}
        />
        <button>Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
