import React from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";

const ReusableModal = (props) => {
  const { isModalOpen, toggleModal, children, header } = props;
  return (
    <Modal isOpen={isModalOpen} toggle={toggleModal}>
      <ModalHeader toggle={toggleModal}>{header}</ModalHeader>
      <ModalBody>{children}</ModalBody>
    </Modal>
  );
};

export default ReusableModal;
