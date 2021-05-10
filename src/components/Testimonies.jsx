import React, { Component } from "react";

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
    return <div>{testimonies}</div>;
  }
}

export default Testimonies;
