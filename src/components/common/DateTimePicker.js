import React from 'react';
import DatePicker from 'react-datepicker';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

class DateTimePicker extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const { startDate, handleChange, colClass, label, name } = this.props;
    return (
      <Col className={colClass}>
        <Form.Label>{label}</Form.Label>
        <div>
          <DatePicker
            className='form-control'
            calendarClassName='rasta-stripes'
            showYearDropdown
            showMonthDropdown
            name={name}
            onChange={handleChange}
            selected={startDate}
            todayButton={'Pick Today'}
          />
        </div>
      </Col>
    );
  }
}

DateTimePicker.propTypes = {
  startDate: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

export default DateTimePicker;
