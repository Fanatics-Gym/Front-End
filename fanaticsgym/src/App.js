import React, { useEffect } from "react";
import "./App.css";
import NavBar from "./Components/nav/NavBar";
import Header from "./Components/home/Header";
import Footer from "./Components/nav/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./Styles/styles.scss";
import LoginForm from "./Components/login";
import aboutUs from "./Components/about/aboutUs";
import PrivateRoute from "./Components/Auth/PrivateRoute";
import userPage from "./Components/user/userPage";
import ReactGa from "react-ga";

function App() {
  useEffect(() => {
    ReactGa.initialize("UA-159198142-1");

    ReactGa.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <div className="App">
      <Router>
        <NavBar />
        <PrivateRoute path="/user" component={userPage} />
        <Route path="/home" component={Header} />
        <Route path="/login" component={LoginForm} />
        <Route path="/about" component={aboutUs} />
        <Footer className="foot" />
      </Router>
    </div>
  );
}

export default App;
