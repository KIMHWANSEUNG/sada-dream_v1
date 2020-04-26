import React from 'react';
import './index.css';
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from './components/view/Footer.js';
import LinkAppBar from './components/Appbar/LinkAppbar.js';
import Home from './components/view/Home.js';
import Mypage from "./components/mypage/Mypage.js";
import Paymentdetails from "./components/Paymentdetails.js";
import Detail from "./components/productDetail/Detail.js";
import Traveler from "./components/trip/Traveler.js";
import Travelerlist from "./components/trip/Travelerlist.js";
import Travelerdetail from "./components/trip/Travelerdetail.js";

export default class App extends React.Component {

  render() {
    return (  
      <Router>
        <div>
          <LinkAppBar />
          <Switch>
            <Route exact path={"/"} component={Home}></Route>
            <Route exact path={"/Mypage"} component={Mypage}></Route>
            <Route exact path={"/Paymentdetails"} component={Paymentdetails}></Route>
            <Route exact path={"/Detail"} component={Detail}></Route>
            <Route exact path={"/Traveler"} component={Traveler}></Route>
            <Route exact path={"/Travelerlist"} component={Travelerlist}></Route>
            <Route exact path={"/Travelerdetail"} component={Travelerdetail}></Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

