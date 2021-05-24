import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Label,
  Input,
} from "reactstrap";

class ForSaleInfo extends Component {
  renderForSale(forsale) {
    return (
      <div className="col-md-5 and m-1">
        <Card>
          <CardImg top src={forsale.image} alt={forsale.name} />
          <CardBody>
            <CardTitle>{forsale.name}</CardTitle>
            <CardText>{forsale.description}</CardText>
            <Label className="pl-2">Name</Label>
            <Input type="text" id="bidName"></Input>
            <Label className="pl-2">Bid Amount</Label>
            <Input type="number" id="bidAmount"></Input>
          </CardBody>
        </Card>
      </div>
    );
  }
  render() {
    if (this.props.forSale) {
      return (
        <div className="row">{this.renderForSale(this.props.forSale)}</div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default ForSaleInfo;
