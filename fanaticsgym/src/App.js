import React, { useEffect } from "react";
import "./App.css";
import NavBar from "./Components/nav/NavBar";
import Header from "./Components/home/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./Styles/styles.scss";
import "./Styles/app-styles.scss";
import LoginForm from "./Components/login/login";
import aboutUs from "./Components/about/about";
import PrivateRoute from "./Components/Auth/PrivateRoute";
import userPage from "./Components/user/userPage";
import { initGA, PageView } from "./analyicts";

function App() {
  useEffect(() => {
    initGA("UA-159198142-1");
    PageView();
  }, []);

  return (
    <div className="App">
      <Router>
        <NavBar />
        <div className="spacing">
          <PrivateRoute exact path="/user" component={userPage} />
          <Route exact path="/" component={Header} />
          <Route path="/login" component={LoginForm} />
          <Route path="/about" component={aboutUs} />
          {/* <Footer className="foot" /> */}
        </div>
      </Router>
    </div>
  );
}

export default App;
