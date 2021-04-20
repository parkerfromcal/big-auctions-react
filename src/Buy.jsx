import React, { Component } from "react";

class Buy extends Component {
  render() {
    return (
      <div>
        <div className="col-md-6">
          <img src={auction.image} alt={auction.item} />
        </div>
        <div className="col-md-6">
          <h3>{auction.item}</h3>
          <p>{auction.description}</p>
        </div>
      </div>
    );
  }
}

return (
  <div className="container">
    <div className="row">{Buy}</div>
  </div>
);

export default Buy;
