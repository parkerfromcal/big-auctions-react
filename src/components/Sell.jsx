import React, { Component } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  Button,
} from "reactstrap";
import { Link } from "react-router-dom";

class Sell extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      sell: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    console.log("Current state is: " + JSON.stringify(this.state));
    alert(
      "We will contact you soon about selling with Big Auctions " +
        JSON.stringify(this.state)
    );
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col">
              <Breadcrumb>
                <BreadcrumbItem>
                  <Link to="/">home</Link>
                </BreadcrumbItem>
                <BreadcrumbItem active>sell</BreadcrumbItem>
              </Breadcrumb>
            </div>
          </div>
          <div className="row d-flex justify-content-center text-center pt-5">
            <div className="col-12 col-sm-6">
              <h1 className="display-4">Sell</h1>
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col-12 col-md-6 pb-7">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
        <div className="full-width-div">
          <div className="row">
            <div className="col-12 col-sm-4 p-1">
              <img
                src="assets/images/construction_truck_sell.jpg"
                className="img-three"
                alt="concrete truck"
              />
            </div>
            <div className="col-12 col-sm-4 p-1">
              <img
                src="assets/images/concrete_sell.jpg"
                className="img-three"
                alt="conrete form"
              />
            </div>
            <div className="col-12 col-sm-4 p-1">
              <img
                src="assets/images/trucks_sell.jpg"
                className="img-three"
                alt="two concrete trucks working on new road"
              />
            </div>
          </div>
        </div>
        <div className="container pt-7 pb-7">
          <div className="row d-flex justify-content-center" id="getInTouch">
            <div className="col-md-8 text-center mb-3">
              <h1>Interested in selling with Big Auctions?</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col-md-8">
              <Form onSubmit={this.handleSubmit}>
                <FormGroup row>
                  <Col>
                    <Label htmlFor="name">name</Label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      value={this.state.name}
                      onChange={this.handleInputChange}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col>
                    <Label htmlFor="email">email</Label>
                    <Input
                      type="text"
                      id="email"
                      name="email"
                      value={this.state.email}
                      onChange={this.handleInputChange}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col>
                    <Label htmlFor="message">
                      tell us about the equipment or materials you'd like to
                      sell
                    </Label>
                    <Input
                      type="textarea"
                      id="sell"
                      name="sell"
                      rows="12"
                      value={this.state.sell}
                      onChange={this.handleInputChange}
                    ></Input>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md={10}>
                    <Button type="submit" className="btn-blue btn-lg">
                      submit
                    </Button>
                  </Col>
                </FormGroup>
              </Form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Sell;
