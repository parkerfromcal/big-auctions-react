import React, { Component } from "react";
import { Button } from "reactstrap";
import ReusableModal from "./ReusableModal";
import NewsletterForm from "./NewsletterForm";

class Footer extends Component {
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
    return (
      <div>
        <footer className="site-footer">
          <div className="container">
            <div className="row">
              <div className="col-12 mr-5 mb-5 mt-2">
                <div className="d-flex">
                  <a href="/about" className="mr-5">
                    about
                  </a>
                  <a href="/buy" className="mr-5">
                    buy
                  </a>
                  <a href="/sell" className="mr-5">
                    sell
                  </a>
                  <a href="/login" className="mr-5">
                    login
                  </a>
                  <Button
                    type="button"
                    onClick={this.toggleModal}
                    className="btn-orange btn-lg ml-auto"
                  >
                    sign up for newsletter
                  </Button>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 d-flex justify-content-end">
                <a href="http://instagram.com/" className="ml-3">
                  <i className="fa fa-instagram" />
                </a>{" "}
                <a href="http://www.facebook.com/" className="ml-3">
                  <i className="fa fa-facebook" />
                </a>{" "}
                <a href="http://twitter.com/" className="ml-3">
                  <i className="fa fa-twitter" />
                </a>{" "}
              </div>
            </div>
          </div>
        </footer>
        <ReusableModal
          header="Login"
          isModalOpen={this.state.isModalOpen}
          toggleModal={this.toggleModal}
        >
          <NewsletterForm />
        </ReusableModal>
      </div>
    );
  }
}

export default Footer;
