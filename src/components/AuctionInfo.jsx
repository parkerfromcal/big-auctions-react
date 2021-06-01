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

class AuctionInfo extends Component {
  renderAuction(auctions) {
    return (
      <div className="col-md-5 and m-1">
        <Card>
          <CardImg top src={auctions.image} alt={auctions.name} />
          <CardBody>
            <CardTitle>{auctions.name}</CardTitle>
            <CardText className="pb-5">{auctions.description}</CardText>
            <CardTitle>Enter Info to Register</CardTitle>
            <Label className="pl-2">Name</Label>
            <Input type="text" id="registerName"></Input>
            <Label className="pl-2">Email</Label>
            <Input type="number" id="registerEmail"></Input>
          </CardBody>
        </Card>
      </div>
    );
  }
  render() {
    if (this.props.auctions) {
      return (
        <div className="row">{this.renderAuction(this.props.auctions)}</div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default AuctionInfo;
