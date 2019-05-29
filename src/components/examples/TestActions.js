import React from 'react';
import { connect } from 'react-redux';
import * as startDateActions from '../../actions/startDateActions';
import DateTimePicker from '../common/DateTimePicker';
import Modal from 'react-bootstrap/Modal';
import spinnerGif from 'assets/JarSpinner.gif';
import 'localcss/style.css';
import Button from 'react-bootstrap/Button';
import MessageModal from '../modals/messageModal';
import Accordion from 'react-collapsy';
import Url from 'url-parse';
import 'react-collapsy/lib/index.css';

class TestActions extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.showSpinnerHandler = this.showSpinnerHandler.bind(this);
    this.goBack = this.goBack.bind(this);
    this.onHide = this.onHide.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleOk = this.handleOk.bind(this);
    this.messageOnHide = this.messageOnHide.bind(this);
    this.handleDisplayModal = this.handleDisplayModal.bind(this);
    this.setStartDatetime(new Date());
    this.state = {
      trigger: {
        isThisTestWorking: true,
        isOneWorking: true,
        isTwoWorking: false
      },
      showSpinner: false,
      okClicked: false,
      cancelClicked: false,
      messageShow: false
    };
  }

  handleChange() {
    let trigger = this.state.trigger;

    if (trigger.isThisTestWorking) {
      trigger.isThisTestWorking = false;
    } else {
      trigger.isThisTestWorking = true;
    }

    this.setState({ trigger: trigger });
  }

  goBack() {
    this.props.history.goBack();
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

  setStartDatetime(startDate) {
    const datetime = startDate;
    this.props.dispatch(startDateActions.setStartDate(datetime));
  }

  handleDateChange(date) {
    this.setStartDatetime(date);
  }

  onHide() {
    this.setState({ show: false });
  }

  messageOnHide() {
    this.setState({ messageShow: false });
  }

  render() {
    const { startDate } = this.props;

    const url = new Url('https://iris.auth0.com/oauth/ro');

    const modalMessage = 'This is a test of the Message modal';
    const messageOk = 'Ok button status';
    const messageCancel = 'Cancel button status';
    const messageModalOk = this.state.okClicked
      ? 'row alert alert-success'
      : 'row alert alert-danger';
    const messageModalCancel = this.state.cancelClicked
      ? 'row alert alert-success'
      : 'row alert alert-danger';

    let triggerEvent = 'The trigger is off';
    let eventClass = 'row alert alert-danger';
    let iconClass = <i className='fas fa-frown fa-3x' />;
    if (this.state.trigger.isThisTestWorking) {
      triggerEvent = 'The trigger is on';
      eventClass = 'row alert alert-primary';
      iconClass = <i className='fas fa-smile fa-3x' />;
    }

    if (this.state.showSpinner) {
      return (
        <div>
          <Modal
            show={true}
            onHide={this.onHide}
            dialogClassName='modal-60w'
            aria-labelledby='example-custom-modal-styling-title'>
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
          <h2>Testing Props and Actions Example</h2>
        </div>
        <div className={eventClass}>
          <h4>{triggerEvent}</h4>
        </div>
        <div className='row'>
          <button
            className='btn btn-primary col-md-1 mr-1'
            onClick={this.handleChange}>
            {iconClass}
          </button>
          <button
            className='btn btn-primary col-md-2 ml-1'
            onClick={this.goBack}>
            Go Back
          </button>
          <button
            className='btn btn-secondary col-md-2 ml-1'
            onClick={this.showSpinnerHandler}>
            Spinner
          </button>
        </div>
        <div className='row'>
          <div className='col-md-2 mt-2'>
            <DateTimePicker
              handleChange={this.handleDateChange}
              startDate={startDate}
              label='Date of Birth'
              name='dateOfBirth'
            />
          </div>
          <div className='col-xl-3 mt-2'>
            <h4 className='ml-3'>{startDate.toDateString()}</h4>
          </div>
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
          <Accordion title='Test number One'>
            <div className='row'>
              Row One
            </div>
            <div className='row'>
              Row Two
            </div>
            <div className='row'>
              Row Three
            </div>
          </Accordion>
          <Accordion title='Test number two'>
            <div className='row'>
              Test Two Row One
            </div>
            <div className='row'>
              Test Two Row Two
            </div>
            <div className='row'>
              Test Two Row Three
            </div>
          </Accordion>
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
  }
}

export default connect(mapStateToProps)(TestActions);
