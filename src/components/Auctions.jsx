import React, { Component } from "react";
import { Button, Card, CardTitle, CardText, Input, Label } from "reactstrap";

class Auctions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedAuction: null,
    };
  }

  onAuctionSelect(auction) {
    this.setState({ selectedAuction: auction });
  }

  renderSelectedAuction(auction) {
    if (auction) {
      return (
        <Card className="p-3">
          <CardTitle>Register Now</CardTitle>
          <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </CardText>
          <Label className="pl-2">Name</Label>
          <Input type="text" id="registerName"></Input>
          <Label className="pl-2">Email</Label>
          <Input type="email" id="registerEmail"></Input>
        </Card>
      );
    }
    return <div></div>;
  }

  render() {
    const auctions = this.props.auctions.map((auctions) => {
      return (
        <div className="row justify-content-center">
          <div key={auctions.id} className="col-md-5 mt-4 mb-3 mr-4">
            <img src={auctions.image} alt={auctions.name} />
          </div>
          <div className="col-md-5 mt-4 mb-3">
            <h3>{auctions.name}</h3>
            <p>
              {auctions.date} <br />
              {auctions.description}
            </p>
            <Button onClick={(auction) => this.onAuctionSelect(auction)}>
              Register now
            </Button>
          </div>
        </div>
      );
    });
    return (
      <div>
        <div>{auctions}</div>
        <div className="row d-flex justify-content-center">
          <div className="col-md-5 p-1">
            {this.renderSelectedAuction(this.state.selectedAuction)}
          </div>
        </div>
      </div>
    );
  }
}

export default Auctions;
