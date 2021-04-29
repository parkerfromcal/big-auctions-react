import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
import Buy from "./Buy";
import Sell from "./Sell";
import { Switch, Route } from "react-router-dom";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const Homepage = () => {
      return <Home />;
    };
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/about" component={About} />
          <Route exact path="/buy" component={Buy} />
          <Route exact path="/sell" component={Sell} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
