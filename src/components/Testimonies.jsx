import React, { Component } from "react";
import { Button } from "reactstrap";
import ReusableModal from "./ReusableModal";
import TestimoniesForm from "./TestimoniesForm";

class Testimonies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
    };
    this.toggleModal = this.toggleModal.bind(this);
  }
  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }
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
          <Button onClick={this.toggleModal} className="btn-blue btn-lg">
            tell us about your experience
          </Button>
          <ReusableModal header="Tell us about your BIC experience">
            <TestimoniesForm />
          </ReusableModal>
        </div>
      </div>
    );
  }
}

export default Testimonies;
