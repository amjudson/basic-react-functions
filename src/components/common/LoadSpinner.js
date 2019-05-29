import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import spinnerGif from 'assets/fingerSpinner.gif';

class LoadSpinner extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { show, onHide } = this.props;
    return (
      <div className='background'>
        <div className='transbox'>
          <Modal
            show={show}
            onHide={onHide}
            dialogClassName='modal-no-background'>
            <img src={spinnerGif} />
          </Modal>
        </div>
      </div>
    );
   }
}

export default LoadSpinner;
