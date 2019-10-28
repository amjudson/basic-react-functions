import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Select from 'react-select';

class SearchDropdown extends PureComponent {
  render() {
    const { name, label, size, onChange, placeholder, options, selectedOption, error } = this.props;
    let wrapperClass = '';
    if (error && error.length > 0) {
      wrapperClass += ' has-error';
    }

    const searchStyles = {
      control: styles => ({ ...styles, height: '65%', backgroundColor: '#515b65', color: '#FFF' })
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
          isClearable={true}
          theme={(theme) => ({
            ...theme,
            borderRadius: 5,
            borderColor: 'transparent',
            colors: {
              ...theme.colors,
              neutral80: 'white',  // selection color
              neutral0: '#515b65', // select box background
              primary25: 'green'   // list hoover
            }
          })}
        />
        {error && <div className="alert alert-danger">{error}</div>}
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
