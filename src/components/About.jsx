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
import { TESTIMONIES } from "../shared/testimonies";
import Testimonies from "./Testimonies";

class About extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      message: "",
      testimonies: TESTIMONIES,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    console.log("Current state is: " + JSON.stringify(this.state));
    alert(
      "Thank you for submitting your information: " + JSON.stringify(this.state)
    );
    event.preventDefault();
  }

  componentDidMount() {
    window.scrollTo(0, 0);
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
                <BreadcrumbItem active>about</BreadcrumbItem>
              </Breadcrumb>
            </div>
          </div>
          <div className="row d-flex justify-content-center text-center pt-5">
            <div className="col-12 col-sm-6">
              <h1 className="display-4">About</h1>
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col-12 col-md-6 pb-7">
              <p>
                Big Auctions is a family owned business with over 35 years of
                experience in the auction industry. We are a full service
                auction company specializing in concrete construction. We help
                owners at all stages of their business, including those looking
                to retire, sell their business or market excess equipment.
              </p>
              <p>
                Our extensive experience in the field and vast knowledge of the
                industry, allow us to get the highest recovery value for our
                customers’ assets. From thorough preparation of assets to
                detailed cataloging, you’ll see how our expertise makes a
                difference long before the day of the sale.
              </p>
            </div>
          </div>
        </div>
        <div className="full-width-div">
          <div className="row">
            <div className="col-12 col-sm-4 p-1">
              <img
                src="/assets/images/fons-heijnsbroek-vBfEZdpEr-E-unsplash.jpg"
                className="img-three"
                alt="concrete truck"
              />
            </div>
            <div className="col-12 col-sm-4 p-1">
              <img
                src="/assets/images/anne-nygard-fWqzoThfnpA-unsplash.jpg"
                className="img-three"
                alt="conrete form"
              />
            </div>
            <div className="col-12 col-sm-4 p-1">
              <img
                src="/assets/images/ade-adebowale-DKr6BEdI2sE-unsplash.jpg"
                className="img-three"
                alt="two concrete trucks working on new road"
              />
            </div>
          </div>
        </div>
        <div className="container pt-7 pb-7">
          <div className="row d-flex justify-content-center" id="getInTouch">
            <div className="col-md-8 text-center mb-3">
              <h1>Get in touch</h1>
              <p>
                301 East Henry Street | PO Box 866 | Mt. Pleasant, IA 52641
                <br /> (319) 385-3399
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
                    <Label htmlFor="message">message</Label>
                    <Input
                      type="textarea"
                      id="message"
                      name="message"
                      rows="12"
                      value={this.state.message}
                      onChange={this.handleInputChange}
                    ></Input>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md={10}>
                    <Button type="submit" className="btn-blue btn-lg mb-5">
                      submit
                    </Button>
                  </Col>
                </FormGroup>
              </Form>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-12">
              <Testimonies testimonies={this.state.testimonies} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
