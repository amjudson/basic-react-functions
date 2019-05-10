import React, { PureComponent} from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

class TextInput extends PureComponent {
  render() {
    const {name, label, colClass, onChange, placeholder, value, textAlign, error} = this.props;
    let wrapperClass = colClass;
    if (error && error.length > 0) {
      wrapperClass += " " + 'has-error';
    }

    return (
      <Col className={wrapperClass}>
        <Form.Label>{label}</Form.Label>
        <Form.Control
            className={textAlign}
            as='input'
            type='text'
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange} />
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
