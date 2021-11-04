import React from 'react';
import Modal from 'react-modal';

const FormModal = (props) => (
  <Modal
    isOpen={props.modalIsOpen}
    onRequestClose={props.handleClearModal}
    contentLabel="Thread Form"
    closeTimeoutMS={200}
    className="modal"
  >
    <p>modal</p>
  </Modal>
);

export default FormModal;