import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row d-flex justify-content-center text-center pt-7 pb-7">
            <div className="col-12 col-md-6">
              <h1 className="display-4">
                35 years experience. Specializing in concrete construction
                equipment.
              </h1>
            </div>
          </div>
        </div>

        <div className="full-width-div">
          <div className="row">
            <img
              src="/assets/images/homepage_main.jpg"
              className="img-fluid img-main"
              alt="concrete forms added to create building"
            />
          </div>
        </div>

        <div className="container pt-7">
          <div className="row rounded-top bg-orange pt-5 pb-5">
            <div className="col text-center">
              <h2>
                We offer the best service in a niche market of the construction
                industry.
              </h2>
            </div>
          </div>

          <div className="row rounded-bottom bg-orange pb-5">
            <div className="col-md-4 col-12 d-flex flex-column align-items-center">
              <i className="fa fa-truck fa-3x"></i>
              <h3 className="text-center">Concrete equipment expertise</h3>
              <p className="text-center">
                Best selection of concrete forms, pumps, mixers, Boom trucks,
                and more.
              </p>
            </div>
            <div className="col-md-4 col-12 d-flex flex-column align-items-center">
              <i className="fa fa-gavel fa-3x"></i>
              <h3 className="text-center">Virtual auction events</h3>
              <p className="text-center">
                Decades of experience hosting auction events nationally.
                Currently, hosting full-scale auctions virtually.
              </p>
            </div>
            <div className="col-md-4 col-12 d-flex flex-column align-items-center">
              <i className="fa fa-handshake-o fa-3x"></i>
              <h3 className="text-center">For sale now</h3>
              <p className="text-center">
                Hub for ready-to-sell concrete equipment. Interested in selling
                with us?
                <a className="link text-light" href="about.html">
                  {" "}
                  Get in touch today.
                </a>
              </p>
            </div>
          </div>

          <div className="row pt-9 pb-9 d-flex justify-content-between">
            <div className="col-12 col-md-5 shadow p-3 mb-5 bg-white rounded">
              <h2>Buy with Big Auctions</h2>
              <p>
                Interested in selling with us? Get in touch and we'll post your
                equipment.
              </p>
              <a className="btn-blue btn-pill btn-lg" href="/buy" role="button">
                BUY
              </a>
            </div>
            <div className="col-12 col-md-5 shadow p-3 mb-5 bg-white rounded">
              <h2>Sell with Big Auctions</h2>
              <p>
                Interested in selling with us? Get in touch and we'll post your
                equipment.
              </p>
              <a
                className="btn-orange btn-pill btn-lg"
                href="/sell"
                role="button"
              >
                SELL
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
