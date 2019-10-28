import React from 'react';
import DatePicker from 'react-datepicker';
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

class DateTimePicker extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      startDate,
      handleChange,
      colClass,
      label,
      name,
      showYearDD,
      showMonthDD,
      dateFormat,
      timeFormat,
      showTime,
			placeholderText,
      popperPlacement,
      disabled,
      timeInterval,
      todayButton
		} = this.props;

		popperPlacement ? popperPlacement : 'auto';
    showMonthDD ? showMonthDD : false;
    showYearDD ? showYearDD : false;
    showTime ? showTime : false;
    disabled ? disabled : false;
    dateFormat ? dateFormat : 'MMMM d, yyyy';
    timeInterval ? timeInterval : 30;
    timeFormat ? timeFormat : 'HH:mm';
    todayButton ? todayButton : null;
    return (
      <Col className={colClass}>
        <div className='mb-2'>{label}</div>
        <DatePicker
          disabled={disabled}
					className='form-control'
					calendarClassName='rasta-stripes'
					showYearDropdown={showYearDD}
					showMonthDropdown={showMonthDD}
					showTimeSelect={showTime}
          timeIntervals={timeInterval}
          name={name}
					popperPlacement={popperPlacement}
					onChange={handleChange}
          selected={startDate}
          value={startDate}
					dateFormat={dateFormat}
					placeholderText={placeholderText}
					todayButton={todayButton}
				/>
      </Col>
    );
  }
}

DateTimePicker.propTypes = {
  startDate: PropTypes.object,
  handleChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

export default DateTimePicker;
