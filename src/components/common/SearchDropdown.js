import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Select from 'react-select';
import 'localcss/style.css';

class SearchDropdown extends PureComponent {
  render() {
    const { name, label, size, onChange, placeholder, options, selectedOption, error } = this.props;
    let wrapperClass = '';
    if (error && error.length > 0) {
      wrapperClass += " " + 'has-error';
    }

    return (
      <Col sm={size} className={wrapperClass}>
        <Form.Label>{label}</Form.Label>
        <Select
          name={name}
          value={selectedOption}
          onChange={onChange}
          options={options}
          placeholder={placeholder}
          className='select-text-color'
          isClearable={true}
          theme={(theme) => ({
            ...theme,
            borderRadius: 5,
            colors: {
              ...theme.colors
            }
          })}
        />
        {error && <div className='alert alert-danger'>{error}</div>}
      </Col>
    );
  }
}

SearchDropdown.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  addClass: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string
};

export default SearchDropdown;
