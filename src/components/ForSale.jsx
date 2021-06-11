import React, { Component } from "react";
import { Button } from "reactstrap";
import ForSaleInfo from "./ForSaleInfo";
import { Link } from "react-router-dom";

class ForSale extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedForSale: null,
    };
  }

  onForSaleSelect(forSaleId) {
    this.setState({ selectedForSale: forSaleId });
  }

  render() {
    const forSale = this.props.forsale.map((forSale) => {
      return (
        <div className="row justify-content-center">
          <div key={forSale.id} className="col-md-5 mt-4 mb-3 mr-4">
            <img src={forSale.image} alt={forSale.name} />
          </div>
          <div className="col-md-5 mt-4 mb-3">
            <h3>{forSale.name}</h3>
            <p>
              {forSale.date} <br />
              {forSale.description}
            </p>
            <Link to={`/buy/for-sale/${forSale.name}`}>
              <Button onClick={() => this.onForSaleSelect(forSale)}>
                Bid now
              </Button>
            </Link>
          </div>
        </div>
      );
    });
    return (
      <div>
        <div className="row">{forSale}</div>
        <div>
          <ForSaleInfo forsale={this.state.selectedForSale} />
        </div>
      </div>
    );
  }
}

export default ForSale;
