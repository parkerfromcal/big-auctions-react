import React, { Component } from "react";

class Auctions extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    const auctions = this.props.auctions.map((auctions) => {
      return (
        <div className="row justify-content-center">
          <div key={auctions.id} className="col-md-4 mb-5 mr-5">
            <img src={auctions.image} alt={auctions.name} />
          </div>
          <div className="col-md-5 mb-5">
            <h3>{auctions.name}</h3>
            <p>
              {auctions.date} <br />
              {auctions.description}
            </p>
          </div>
        </div>
      );
    });
    return (
      <div className="contsainer">
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
        <div>{auctions}</div>
      </div>
    );
  }
}

export default Auctions;
