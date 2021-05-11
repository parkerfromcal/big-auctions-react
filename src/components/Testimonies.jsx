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
  state = {
    isModalOpen: false,
  };
  toggleModal = () => {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  };
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
        <div className="d-flex justify-content-center mt-5">
          <Button onClick={this.toggleModal} className="btn-blue btn-lg">
            tell us about your experience
          </Button>
        </div>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal} closeButton>
            tell us about your experience with BIC
          </ModalHeader>
          <ModalBody>
            <Form onSubmit={(values) => this.handleSubmit(values)}>
              <FormGroup>
                <Label htmlFor="name">name</Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  innerRef={(input) => (this.name = input)}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="testimonial">testimonial</Label>
                <Input
                  type="textarea"
                  id="testimonial"
                  name="testimonial"
                  innerRef={(input) => (this.testimonial = input)}
                />
              </FormGroup>
              <Button type="submit" className="btn-blue">
                submit
              </Button>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}
export default Testimonies;
