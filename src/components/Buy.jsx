import React, { Component } from "react";
import Auctions from "./Auctions";
import ForSale from "./ForSale";
import { FORSALE } from "../shared/forSale";
import { AUCTIONS } from "../shared/auctions";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

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
        <div class="row d-flex pt-5 justify-content-center text-center">
          <div class="col-12 col-sm-6">
            <h1 class="display-4">Buy</h1>
          </div>
        </div>
        <div class="row d-flex justify-content-center">
          <div class="col-12 col-md-6 pb-7">
            <p>
              Big Auctions has decades of experience in hosting auctions and
              selling concrete construction equipment. Search upcoming auctions,
              view past events, or find equipment for sale and bid now.
            </p>
          </div>
        </div>
        <Tabs defaultActiveKey="auctions" id="buyTabs">
          <Tab eventKey="auctions" title="auctions">
            <Auctions auctions={this.state.auctions} />
          </Tab>
          <Tab eventKey="forSale" title="forSale">
            <ForSale forsale={this.state.forsale} />
          </Tab>
        </Tabs>
        <div class="row d-flex justify-content-center">
          <div class="col-12 col-md-6 mt-5 mb-5">
            <h3>Frequently Asked Questions</h3>
            <p>Accordions coming soon.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Buy;
