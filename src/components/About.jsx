import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div>
        <div className="container">
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
                src="assets/images/anne-nygard-fWqzoThfnpA-unsplash.jpg"
                className="img-three"
                alt="conrete form"
              />
            </div>
            <div className="col-12 col-sm-4 p-1">
              <img
                src="assets/images/ade-adebowale-DKr6BEdI2sE-unsplash.jpg"
                className="img-three"
                alt="two concrete trucks working on new road"
              />
            </div>
          </div>
        </div>
        <div className="container pt-7 pb-7">
          <div className="row justify-content-center" id="getInTouch">
            <div className="col-12 text-center">
              <h1>Get in touch</h1>
              <p>
                301 East Henry Street | PO Box 866 | Mt. Pleasant, IA 52641
                <br /> (319) 385-3399
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
