import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, CardImg, CardBody, CardTitle, Button } from "reactstrap";

class ForSale extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedForSale: null,
    };
  }

  onForSaleSelect(forSale) {
    this.setState({ selectedForSale: forSale });
  }

  renderForSale(forSale) {
    if (forSale) {
      return (
        <Card>
          <Link to={`/buy/${forSale.name}`}>
            <CardImg width="100%" src={forSale.image} />
          </Link>
          <CardBody>
            <CardTitle>{forSale.name}</CardTitle>
            <CardBody>{forSale.description}</CardBody>
          </CardBody>
        </Card>
      );
    }
    return <div />;
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
            <Button onClick={() => this.onForSaleSelect(forSale)}>
              Bid now
            </Button>
          </div>
        </div>
      );
    });
    return (
      <div>
        <div className="row">{forSale}</div>
        <div className="row">
          {this.renderForSale(this.state.selectedForSale)}
        </div>
      </div>
    );
  }
}

export default ForSale;
