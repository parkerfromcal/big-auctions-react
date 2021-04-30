import React, { Component } from "react";
import { Button } from "reactstrap";

class Auctions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedAuction: null,
    };
  }

  onSelectedAuction(auctions) {
    this.setState({ selectedAuction: auctions });
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
            <Button onClick={() => this.onSelectedAuctions(auctions)}>
              Register now
            </Button>
          </div>
        </div>
      );
    });
    return (
      <div>
        <div>{auctions}</div>
      </div>
    );
  }
}

export default Auctions;
