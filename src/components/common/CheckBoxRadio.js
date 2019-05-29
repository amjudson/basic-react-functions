import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Form, Col, FormCheck } from 'react-bootstrap';

class CheckBoxRadio extends PureComponent {
  render() {
    const {
      label,
      onChange,
      isChecked,
      type,
      inline,
      custom,
      name,
      ariaLabel,
      margin,
      classin
    } = this.props;
    const isInline = inline ? inline : false;
    const isCustom = custom ? custom : false;
    const inAriaLabel = ariaLabel ? ariaLabel : null;

    return (
        <Form.Check
          className={margin}
          aria-label={inAriaLabel}
          name={name}
          id={name}
          inline={isInline}
          custom={isCustom}
          label={label}
          type={type}
          checked={isChecked}
          onChange={onChange}
          onClick={onChange}
        />
    );
  }
}

CheckBoxRadio.propTypes = {
  type: PropTypes.string.isRequired,
  isChecked: PropTypes.bool.isRequired,
  inline: PropTypes.bool,
  custom: PropTypes.bool,
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string
};

export default CheckBoxRadio;
