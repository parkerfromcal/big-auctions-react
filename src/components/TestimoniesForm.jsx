import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

class TestimoniesForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(values) {
    console.log("Thank you for your testimonial: " + JSON.stingify(values));
    alert("Thank you for your testimonial: " + JSON.stingify(values));
  }
  render() {
    return (
      <div>
        <Form onSubmit={(values) => this.handleSubmit(values)}>
          <FormGroup>
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              id="name"
              name="name"
              innerRef={(input) => (this.name = input)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="testimonial">Testimonial</Label>
            <Input
              type="textarea"
              id="testimonial"
              name="testimonial"
              innerRef={(input) => (this.testimonial = input)}
            />
          </FormGroup>
          <Button type="submit" className="btn-blue">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default TestimoniesForm;
