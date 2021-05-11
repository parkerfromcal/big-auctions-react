import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Label,
  Input,
  Form,
  FormGroup,
} from "reactstrap";

class Testimonies extends Component {
  render() {
    const testimonies = this.props.testimonies.map((testimonies) => {
      return (
        <div>
          <div className="row mt-5">
            <div
              key={testimonies.id}
              className="col-12 d-flex justify-content-center"
            >
              <img src={testimonies.image} alt={testimonies.name} />
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col-md-6 text-center">
              <h3>{testimonies.name}</h3>
              <p>{testimonies.testimonial}</p>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div>
        <div>{testimonies}</div>
        <div className="d-flex flex justify-content-center mt-5">
          <AddTestimony />
        </div>
      </div>
    );
  }
}

class AddTestimony extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }
  handleSubmit(values) {
    console.log("Thank you for your testimonial: " + JSON.stingify(values));
    alert("Thank you for your testimonial: " + JSON.stingify(values));
  }
  render() {
    return (
      <React.Fragment>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>
            Tell us about your experience with BIC
          </ModalHeader>
          <ModalBody>
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
          </ModalBody>
        </Modal>
        <Button onClick={this.toggleModal} className="btn-blue btn-lg">
          tell us about your experience
        </Button>
      </React.Fragment>
    );
  }
}

export default Testimonies;
