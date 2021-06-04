import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import About from "./About";
import Buy from "./Buy";
import Sell from "./Sell";
import AuctionInfo from "./AuctionInfo";
import ForSaleInfo from "./ForSaleInfo";
import { Switch, Route, Redirect } from "react-router-dom";
import { AUCTIONS } from "../shared/auctions";
import { FORSALE } from "../shared/forSale";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auctions: AUCTIONS,
      forsale: FORSALE,
    };
  }

  render() {
    const Homepage = () => {
      return <Home />;
    };

    const AuctionWithName = ({ match }) => {
      return (
        <AuctionInfo
          auctions={
            this.state.auctions.filter(
              (auctions) => auctions.name === match.params.auctionName
            )[0]
          }
        />
      );
    };

    const ForSaleWithName = ({ match }) => {
      return (
        <ForSaleInfo
          forsale={
            this.state.forsale.filter(
              (forsale) => forsale.name === match.params.forsaleName
            )[0]
          }
        />
      );
    };

    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/about" component={About} />
          <Route exact path="/buy" component={Buy} />
          <Route path="/buy/:auctionName" component={AuctionWithName} />
          <Route path="/buy/:forsaleName" component={ForSaleWithName} />
          <Route exact path="/sell" component={Sell} />
          <Redirect to="/" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
