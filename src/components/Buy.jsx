import React, { Component } from "react";
import Auctions from "./Auctions";
import ForSale from './ForSale';

class Buy extends Component {
  render() {
return (
  <div>
    <Tabs defaultActiveKey="auctions" id="buyTabs">
  <Tab eventKey="auctions" title="auctions">
    <Auctions />
  </Tab>
  <Tab eventKey="forSale" title="forSale">
    <ForSale />
  </Tab>
</Tabs>
  </div>
);

export default Buy;
