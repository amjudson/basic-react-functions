import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import 'localcss/style.css';

class ErrorMessage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      title,
      onHide,
      show,
      errorMessage,
      handleOk,
      handleCancel,
      displayClose,
      displayOk,
      displayCancel
    } = this.props;

    let closeButton = <div />;
    let okButton = <div />;
    let cancelButton = <div />;
    if (displayClose) {
      closeButton = (
        <Button variant='info' onClick={onHide}>
          Close
        </Button>
      );
    }

    if (displayOk) {
      okButton = (
        <Button variant='success' onClick={handleOk}>
          OK
        </Button>
      );
    }

    if (displayCancel) {
      cancelButton = (
        <Button variant='secondary' onClick={handleCancel}>
          Cancel
        </Button>
      );
    }

    return (
      <Modal
        show={show}
        onHide={onHide}
        dialogClassName='modal-60w'
        aria-labelledby='example-custom-modal-styling-title'>
        <Modal.Header closeButton>
          <Modal.Title id='example-custom-modal-styling-title'>
            {title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className='modal-body'>{errorMessage}</Modal.Body>
        <Modal.Footer>
          {okButton}
          {cancelButton}
          {closeButton}
        </Modal.Footer>
      </Modal>
    );
  }
}

export default ErrorMessage;
