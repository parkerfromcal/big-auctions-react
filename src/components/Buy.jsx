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
        <div className="container">
          <div class="row pt-5 d-flex justify-content-center">
            <div class="col-12 col-sm-6">
              <h1 class="display-4 text-center">Buy</h1>
            </div>
          </div>
          <div class="row d-flex justify-content-center">
            <div class="col-12 col-md-6 pb-7">
              <p>
                Big Auctions has decades of experience in hosting auctions and
                selling concrete construction equipment. Search upcoming
                auctions, view past events, or find equipment for sale and bid
                now.
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-10 shadow">
            <Tabs defaultActiveKey="auctions" id="buyTabs">
              <Tab eventKey="auctions" title="auctions">
                <Auctions auctions={this.state.auctions} />
              </Tab>
              <Tab eventKey="forSale" title="for sale">
                <ForSale forsale={this.state.forsale} />
              </Tab>
            </Tabs>
          </div>
        </div>
        <div className="container">
          <div className="row flex justify-content-center">
            <div className="col-12 col-md-6 mt-5 mb-5">
              <h3>Frequently Asked Questions - Coming Soon</h3>
              <p>Accordions go here</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Buy;
