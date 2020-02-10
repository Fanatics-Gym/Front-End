import React from 'react';
import './App.css';
import NavBar from './Components/nav/NavBar';
import Header from './Components/home/Header';
import Footer from './Components/nav/Footer';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import './Styles/styles.scss'
import LoginForm from './Components/login';
import aboutUs from './Components/about/aboutUs';

function App() {
  return (
    <div className='App' >
      <Router>
        <NavBar/>
        <Route path='/home' component={Header}/>
        <Route path='/login' component={LoginForm} />
        <Route path='/about' component={aboutUs} />
        <Footer className='foot'/>
      </Router>
    </div>
   
  );
}

export default App;
