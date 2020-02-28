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
import { initGA, PageView } from "./analyicts";
import { createBrowserHistory } from "history";

function App() {
  const history = createBrowserHistory();

  // Initialize google analytics page view tracking
  history.listen(location => {
    ReactGA.set({ page: location.pathname }); // Update the user's current page
    ReactGA.pageview(location.pathname); // Record a pageview for the given page
  });

  return (
    <div className="App">
      <Router history={history}>
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
