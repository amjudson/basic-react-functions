import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

class SelectInput extends PureComponent {
  render() {
    const {
      name,
      label,
      onChange,
      defaultOption,
      value,
      error,
      options,
      colClass
    } = this.props;

    let icolClass = colClass;
    if (!colClass) {
      icolClass = 'col-sm-1';
    }

    return (
      <Col className={icolClass}>
        <Form.Label htmlFor={name}>{label}</Form.Label>
        <Form.Control
          as='select'
          name={name}
          value={value}
          onChange={onChange}
        >
          <option key='0'>{defaultOption}</option>
          {options.map(option => {
            return (
              <option key={option.value} value={option.value}>
                {option.text}
              </option>
            );
          })}
        </Form.Control>
        {error && <div className='alert alert-danger'>{error}</div>}
      </Col>
    );
  }
}

SelectInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  defaultOption: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object)
};

export default SelectInput;
