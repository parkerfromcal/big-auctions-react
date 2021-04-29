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

  onSelectedForSale(forSale) {
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
          <div key={forSale.id} className="col-md-4 mb-5 mr-5">
            <img src={forSale.image} alt={forSale.name} />
          </div>
          <div className="col-md-5 mb-5">
            <h3>{forSale.name}</h3>
            <p>
              {forSale.date} <br />
              {forSale.description}
            </p>
            <Button onClick={() => this.onSelectedForSale(forSale)}>
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
