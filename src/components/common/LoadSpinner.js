import React, { PureComponent } from 'react';
import Modal from 'react-bootstrap/Modal';
import ModalBody from 'react-bootstrap/ModalBody';
import spinnerGif from 'assets/CircleInCircleSmall.gif';

class LoadSpinner extends PureComponent {
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
            dialogClassName='transbox modal-no-background'>
            <img className='transimg' src={spinnerGif} />
          </Modal>
        </div>
      </div>
    );
   }
}

export default LoadSpinner;
