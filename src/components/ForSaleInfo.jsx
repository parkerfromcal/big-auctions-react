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

const RenderForSale = ({ forsale }) => {
  return (
    <div className="row">
      <div className="col-md-5 ml-5 mb-5 mt-5">
        <Card>
          <CardImg top src={forsale.image} alt={forsale.name} />
        </Card>
      </div>
      <div className="col-md-5 ml-5 mb-5 mt-5">
        <Card>
          <CardBody>
            <CardTitle>{forsale.name}</CardTitle>
            <CardText className="pb-5">{forsale.description}</CardText>
            <CardTitle>Enter Info to Bid</CardTitle>
            <Label className="pl-2">Name</Label>
            <Input type="text" id="bidName"></Input>
            <Label className="pl-2">Bid Amount</Label>
            <Input type="number" id="bidAmount"></Input>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

const ForSaleInfo = (props) => {
  if (props.forsale) {
    return (
      <div className="row">
        <RenderForSale forSale={props.forsale} />
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default ForSaleInfo;
