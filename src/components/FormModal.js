import React from 'react';
import Modal from 'react-modal';
import ThreadForm from "src/components/ThreadForm";

const FormModal = (props) => (
  <Modal
    isOpen={props.modalIsOpen}
    onRequestClose={props.handleClearModal}
    contentLabel="Thread Form"
    closeTimeoutMS={200}
    className="modal"
  >
    <ThreadForm
      handleClearModal={props.handleClearModal}
    />
  </Modal>
);

export default FormModal;