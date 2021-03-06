import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import TestActions from '../examples/TestActions';

class TextInput extends PureComponent {
  render() {
    const { name,
      label,
      colClass,
      onChange,
      onBlur,
      placeholder,
      value,
      textAlign,
      error,
      inputType,
      noSpinner,
      disabled
    } = this.props;
    let wrapperClass = colClass;
    if (error && error.length > 0) {
      wrapperClass += ' has-error';
    }

    let controlClass = textAlign;
    if (noSpinner) {
      controlClass = `${textAlign} no-spinner`
    }

    const isdisabled = disabled ? disabled : false;
    const localType = inputType ? inputType : 'text';
    return (
      <Col className={wrapperClass}>
        <Form.Label>{label}</Form.Label>
        <Form.Control
          className={controlClass}
          as='input'
          disabled={isdisabled}
          type={localType}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}/>
        {error && <div className="alert alert-danger">{error}</div>}
      </Col>
    );
  }
}

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  addClass: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string
};

export default TextInput;
