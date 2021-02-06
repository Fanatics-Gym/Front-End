import React, { useEffect } from "react";
import "./scss/app.scss";
import NavBar from "./Components/nav/NavBar";
import HomePage from "./Components/home/home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginForm from "./Components/login/login";
import aboutUs from "./Components/about/about";
import PrivateRoute from "./Components/Auth/PrivateRoute";
import userPage from "./Components/user/userPage";
import { initGA, PageView } from "./analyicts";
import Shop from "./Components/Shop/Shop";
import Cart from "./Components/Shop/Cart";
import UserAddItem from "./Components/user/userAddItem";
import ItemPage from "./Components/Shop/itemPage";
import Checkout from "./Components/Shop/checkout";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import FootballPage from "./Components/application/FootballPage";
import ApplicationForm from "./Components/application/applicationForm/applicationForm";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
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
          <Route exact path="/" component={HomePage} />
          <Route path="/login" component={LoginForm} />
          <Route path="/about" component={aboutUs} />
          <Route path="/shop" component={Shop} />
          <PrivateRoute exact path="/add" component={UserAddItem} />
          <Route path="/cart" component={Cart} />
          <Route path="/item" component={ItemPage} />
          <Route path="/football" component={FootballPage} />
          <Route path="/footballapply" component={ApplicationForm} />
          <Elements stripe={stripePromise}>
            <Route path="/checkout" component={Checkout} />
          </Elements>
        </div>
      </Router>
    </div>
  );
}

export default App;
