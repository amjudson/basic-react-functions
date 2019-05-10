import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import 'localcss/style.css';

class MessageModal extends React.Component {
  constructor(props) {
    super(props);
    if (props.displayCancel && !props.handleCancel) {
      throw new Error('Cancel handler required when Cancel enabled');
    }

    if (props.displayOk && !props.handleOk) {
      throw new Error('OK handler required when OK enabled');
    }
  }

  render() {
    const {
      title,
      onHide,
      show,
      message,
      handleOk,
      handleCancel,
      displayClose,
      displayOk,
      displayCancel,
      messageType
    } = this.props;

    let messageTypeClass = 'alert alert-light';
    switch (messageType) {
      case 'error':
        messageTypeClass = 'alert alert-danger';
        break;
      case 'success':
        messageTypeClass = 'alert alert-success';
        break;
      case 'warning':
        messageTypeClass = 'alert alert-warning';
        break;
      case 'primary':
        messageTypeClass = 'alert alert-primary';
        break;
      case 'dark':
        messageTypeClass = 'alert alert-dark';
        break;
      default:
        break;
    }

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
      <div>
        <Modal
          show={show}
          onHide={onHide}
          dialogClassName='modal-60w'
          aria-labelledby='example-custom-modal-styling-title'>
          <Modal.Header closeButton className={messageTypeClass}>
            <Modal.Title id='example-custom-modal-styling-title'>
              {title}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className='modal-body'>{message}</Modal.Body>
          <Modal.Footer>
            {okButton}
            {cancelButton}
            {closeButton}
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

MessageModal.propTypes = {
  onHide: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  displayCancel: PropTypes.bool,
  displayClose: PropTypes.bool,
  displayOk: PropTypes.bool,
  handleCancel: PropTypes.func,
  handleOk: PropTypes.func,
  messageType: PropTypes.string
};

export default MessageModal;
