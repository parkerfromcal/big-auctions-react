import React from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import props from "prop-types";

const ReusableModal = () => {
  return (
    <Modal>
      <ModalHeader isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
        {props.header}
      </ModalHeader>
      <ModalBody toggle={this.toggleModal}>{props.children}</ModalBody>
    </Modal>
  );
};

export default ReusableModal;
