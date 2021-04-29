import React, { Component } from "react";
/*import { Link } from "react-router-dom";

function RenderForSale({ forSale }) {
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
}*/

class ForSale extends Component {
  constructor(props) {
    super(props);

    this.state = {
      forSale: [],
    };
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
          </div>
        </div>
      );
    });
    return (
      <div className="contsainer">
        <div className="row">{forSale}</div>
      </div>
    );
  }
}

export default ForSale;
