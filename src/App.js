import React, { useEffect } from "react";
import "./scss/app.scss";
import NavBar from "./Components/nav/NavBar";
import HomePage from "./Components/home/home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginForm from "./Components/login/login";
import aboutUs from "./Components/about/about";
import PrivateRoute from "./Components/Auth/PrivateRoute";
import AdminPage from "./Components/admin/adminPage";
import { initGA, PageView } from "./analyicts";
import Shop from "./Components/Shop/Shop";
import Cart from "./Components/Shop/Cart";
import UserAddItem from "./Components/admin/userAddItem";
import ItemPage from "./Components/Shop/itemPage";
import Checkout from "./Components/Shop/checkout";
import FootballPage from "./Components/application/FootballPage";
import ApplicationForm from "./Components/application/applicationForm/applicationForm";
import ConfirmationPage from "./Components/application/applicationForm/ConfirmationForm";
import ViewApplications from "./Components/admin/userViewApplications";
import NewHome from "./Components/newHome/newHome";
import PlayerProfile from "./Components/player/playerProfile";
import PickGear from "./Components/player/playerPickGear";
import SignUp from "./Components/login/signUp";
import PlayerPage from "./Components/player/playerPage";
import Roster from "./Components/player/playerRoster";
import PickGearDate from "./Components/admin/adminPickUpGear";
import PickUpDisplay from "./Components/admin/pickUpTable/pickUpTableDisplay";

// const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
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
          <PrivateRoute exact path="/admin" component={AdminPage} />
          <Route exact path="/" component={NewHome} />
          <Route path="/login" component={LoginForm} />
          <Route path="/about" component={aboutUs} />
          <Route path="/shop" component={Shop} />
          <PrivateRoute exact path="/add" component={UserAddItem} />
          <Route path="/cart" component={Cart} />
          <Route path="/item" component={ItemPage} />
          <Route path="/football" component={FootballPage} />
          <Route path="/footballapply" component={ApplicationForm} />
          <Route path="/confirmation" component={ConfirmationPage} />
          {/* <Elements stripe={stripePromise}> */}
          <Route path="/checkout" component={Checkout} />
          <Route path="/view-applications" component={ViewApplications} />
          <Route path="/represent" component={HomePage} />
          {/* </Elements> */}
          <Route path="/player-profile" component={PlayerProfile} />
          <Route path="/pick-gear" component={PickGear} />
          <Route path="/new-p-signUp/:id" component={SignUp} />
          <Route path="/player" component={PlayerPage} />
          <Route path="/playerRoster" component={Roster} />
          <Route path="/pickUpDate" component={PickGearDate} />
          <Route path="/pickUpTable" component={PickUpDisplay} />
        </div>
      </Router>
    </div>
  );
}

export default App;
