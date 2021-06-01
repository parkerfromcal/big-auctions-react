import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Label,
  Input,
} from "reactstrap";

const RenderAuction = ({ auctions }) => {
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
};

const AuctionInfo = (props) => {
  if (props.auctions) {
    return (
      <div className="row">
        <RenderAuction auctions={props.auctions} />
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default AuctionInfo;
