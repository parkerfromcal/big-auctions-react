import React, { Component } from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Input,
  Label,
  Button,
} from "reactstrap";

class Footer extends Component {
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

  handleSubmit(event) {
    alert(
      `Thank you for signing up. We'll send our monthly newsletter to: ${this.newsEmail.value}`
    );
    this.toggleModal();
    event.preventDefault();
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

        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>
            sign up for big auctions newsletter
          </ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label htmlFor="email">email</Label>
                <Input
                  type="text"
                  id="newsEmail"
                  name="newsEmail"
                  innerRef={(input) => (this.newsEmail = input)}
                />
              </FormGroup>
              <FormGroup>
                <Button type="submit" value="submit" className="btn-blue">
                  submit
                </Button>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default Footer;
