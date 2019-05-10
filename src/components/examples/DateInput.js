import React from 'react';
import DatePicker from 'react-datepicker';
import { connect } from 'react-redux';
import dateTime from 'objects/dateTime';
import { Row, Col, Button } from 'react-bootstrap';
import { boundMethod } from 'autobind-decorator';
//import DateTimePicker from 'react-datetime-picker';
import 'react-datepicker/dist/react-datepicker.css';
import { ToastContainer, toast } from 'react-toastify';

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

class DateInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dateTime: dateTime,
      date: new Date()
    }

    //this.handleChange = this.handleChange.bind(this);
    this.handleChangeDTP = this.handleChangeDTP.bind(this);
    console.log('DateTime:', this.state.dateTime.startDatetime);
  }

  @boundMethod
  handleChange(date) {
    console.log('date...', date);
    let dateTime = this.state.dateTime;
    if (date) {
      dateTime.startDatetime = date;
    }

    return this.setState({ dateTime: dateTime });
  }

  @boundMethod
  displayToast() {
    toast.error('TESTING toastify...', {
      autoClose: 15000,
      position: toast.POSITION.TOP_CENTER
    });
  }

  handleChangeDTP(date) {
    console.log('datetime...', date);
    let datetime = this.state.date;
    if (date) {
      datetime = date;
    }

    return this.setState({ date: dateTime });
  }

  render() {
    const { dateTime } = this.props;
    console.log('DATETIME:', this.state.dateTime.startDatetime);
    return (
      <div>
        <ToastContainer containerId='main' position={toast.POSITION.BOTTOM_RIGHT} />
        <Row>
          <Col sm={1} className='mr-1'>
            <DatePicker className='form-control'
              selected={this.state.dateTime.startDatetime}
              onChange={this.handleChange}
              todayButton={'Pick Today'}
            />
          </Col>
          <Col sm={2}>
            <h4>{this.state.dateTime.startDatetime.toDateString()}</h4>
          </Col>
        </Row>
        <Row className='mt-2'>
          <Col sm={2}>
            <Button type='button' variant='primary' onClick={this.displayToast}>GO!</Button>
          </Col>
        </Row>
        {/* <Row>
          <Col sm={3} className='mr-1'>
            <DateTimePicker
              className='form-control'
              value={this.state.date}
              onChange={this.handleChangeDTP}
            />
          </Col>
          <Col sm={2}>
            <h4>{this.state.date.toDateString()}</h4>
          </Col>
        </Row>
        <Row className='mt-2'>
          <Col sm={2}>
            <Button type='button' variant='primary'>GO!</Button>
          </Col>
        </Row> */}
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    dateTime: state.dateTime
  }
}

export default connect(mapStateToProps)(DateInput);
