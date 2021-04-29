import React, { Component } from "react";
import Auctions from "./Auctions";
import ForSale from "./ForSale";
import { FORSALE } from "../shared/forSale";
import { AUCTIONS } from "../shared/auctions";

class Buy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      forsale: FORSALE,
      auctions: AUCTIONS,
    };
  }
  render() {
    return (
      <div>
        <Auctions auctions={this.state.auctions} />
        <ForSale forsale={this.state.forsale} />
      </div>
    );
  }
}

export default Buy;
