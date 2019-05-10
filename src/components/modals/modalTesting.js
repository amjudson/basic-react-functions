import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import spinnerGif from 'assets/JarSpinner.gif';
import 'localcss/style.css';
import Button from 'react-bootstrap/Button';
import MessageModal from './messageModal';

class ModalTesting extends React.Component {
  constructor(props) {
    super(props);

    this.showSpinnerHandler = this.showSpinnerHandler.bind(this);
    this.onHide = this.onHide.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleOk = this.handleOk.bind(this);
    this.messageOnHide = this.messageOnHide.bind(this);
    this.handleDisplayModal = this.handleDisplayModal.bind(this);
    this.state = {
      showSpinner: false,
      okClicked: false,
      cancelClicked: false,
      messageShow: false
    };
  }

  handleOk() {
    const isOk = !this.state.okClicked;
    const show = !this.state.messageShow;
    this.setState({ okClicked: isOk, messageShow: show });
  }

  handleCancel() {
    const isCancel = !this.state.cancelClicked;
    const show = !this.state.messageShow;
    this.setState({ cancelClicked: isCancel, messageShow: show });
  }

  handleDisplayModal() {
    const dm = !this.state.messageShow;
    this.setState({ messageShow: dm });
  }

  showSpinnerHandler() {
    this.setState({ showSpinner: true });
    setTimeout(() => {
      this.setState({ showSpinner: false });
    }, 4000);
  }

  onHide() {
    this.setState({ show: false });
  }

  messageOnHide() {
    this.setState({ messageShow: false });
  }

  render() {
    const { startDate } = this.props;
    const modalMessage = 'This is a test of the Message modal';
    const messageOk = 'Ok button status';
    const messageCancel = 'Cancel button status';
    const messageModalOk = this.state.okClicked
      ? 'row alert alert-success'
      : 'row alert alert-danger';
    const messageModalCancel = this.state.cancelClicked
      ? 'row alert alert-success'
      : 'row alert alert-danger';

    if (this.state.showSpinner) {
      return (
        <div className='container-fluid'>
          <Modal
            show={true}
            onHide={this.onHide}
            dialogClassName='modal-60w'
            aria-labelledby='example-custom-modal-styling-title'
            className='img-fluid'
          >
            <Modal.Body>
              <img src={spinnerGif} className='img-fluid' />
            </Modal.Body>
          </Modal>
        </div>
      );
    }

    return (
      <div className='container'>
        <div className='row'>
          <h2>Testing Modals Example</h2>
        </div>
        <div className='row'>
          <button
            className='btn btn-secondary col-md-2 ml-1'
            onClick={this.showSpinnerHandler}>
            Spinner
          </button>
        </div>
        <div className='row'>
          <div className='col-xl-3 mt2'>
            <Button
              className='mt-2'
              variant='success'
              type='button'
              onClick={this.handleDisplayModal}>
              Display Message Modal
            </Button>
          </div>
        </div>
        <div className='row'>
          <MessageModal
            onHide={this.messageOnHide}
            show={this.state.messageShow}
            title='Message Testing'
            message={modalMessage}
            handleOk={this.handleOk}
            handleCancel={this.handleCancel}
            displayClose={false}
            displayCancel={true}
            displayOk={true}
            messageType='error'
          />
          <div className='col-lg-2 mt-3'>
            <span className={messageModalOk}>{messageOk}</span>
            <br />
            <span className={messageModalCancel}>{messageCancel}</span>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    rtrigger: state.trigger,
    startDate: state.startDate
  };
}

export default connect(mapStateToProps)(ModalTesting);
