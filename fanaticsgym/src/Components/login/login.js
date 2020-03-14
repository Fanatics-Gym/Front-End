import React, { useState, useEffect } from "react";
import axios from "axios";
import { PageView } from "../../analyicts";

const LoginForm = props => {
  const [userCredentials, setUserCredentials] = useState({
    username: "",
    password: ""
  });
  useEffect(() => {
    PageView();
  }, []);

  const handleChange = e => {
    setUserCredentials({
      ...userCredentials,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    axios
      .post("https://fanatics-gym-be.herokuapp.com/user/login", userCredentials)
      .then(res => {
        localStorage.setItem("token", res.data.payload);
        props.history.push("/user");
      })
      .catch(err => console.error(err));
  };

  return (
    <div className="loginForm" onSubmit={onSubmit}>
      <h2>Login</h2>
      <form>
        <h3>Username/Email</h3>
        <input
          type="text"
          placeholder="Insert Username or Email"
          name="username"
          value={userCredentials.username}
          onChange={handleChange}
        />
        <h3>Password</h3>
        <input
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
