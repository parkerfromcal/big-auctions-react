import React, { Component } from "react";
import Auctions from "./Auctions";
import ForSale from "./ForSale";
import { FORSALE } from "../shared/forSale";
import { AUCTIONS } from "../shared/auctions";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

class Buy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      forsale: FORSALE,
      auctions: AUCTIONS,
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
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
          <div className="col-10 shadow mb-5">
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
            <div className="col-12 mt-5 mb-8">
              <h2 className="text-center mb-5">Frequently Asked Questions</h2>
              <Accordion defaultActiveKey="0">
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="0">
                    Why do I need a Big Auctions account?
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      Creating an account with Big Auctions lets you register
                      for upcoming auctions and bid for items online. You can
                      create a profile and keep track of your Big Auctions
                      activities. And if you're interested in selling, you can
                      easily connect with us and get your items online.
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="1">
                    I am interested in selling. How can I get in touch?
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="1">
                    <Card.Body>
                      Fill out our <a href="/sell">Interested in Selling</a>{" "}
                      form and someone will contact you soon.
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Accordion.Toggle as={Card.Header} eventKey="2">
                    Do you host auctions in person or only online?
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="2">
                    <Card.Body>
                      Big Auctions hosts auctions across the country. Since
                      March 2020, we have moved all our auctions online. We are
                      proud of our virtual auction experience and hope to be
                      back in person in the next 6 months.
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Buy;
