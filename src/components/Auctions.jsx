import React, { Component } from "react";
import { Button } from "reactstrap";
import AuctionInfo from "./AuctionInfo";

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

  render() {
    const auctions = this.props.auctions.map((auction) => {
      return (
        <div className="row justify-content-center">
          <div key={auction.id} className="col-md-5 mt-4 mb-3 mr-4">
            <img src={auction.image} alt={auction.name} />
          </div>
          <div className="col-md-5 mt-4 mb-3">
            <h3>{auction.name}</h3>
            <p>
              {auction.date} <br />
              {auction.description}
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
        <div className="row">{auctions}</div>
        <div>
          <AuctionInfo auctions={this.state.selectedAuction} />
        </div>
      </div>
    );
  }
}

export default Auctions;
