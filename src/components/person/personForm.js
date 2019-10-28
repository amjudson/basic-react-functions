import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';
import DateTimePicker from '../common/DateTimePicker';
import { Container, Col, Form } from 'react-bootstrap';

class PersonForm extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const { person, personTypes, handleSave, errors, handleDateChange, onChange } = this.props;
    console.log('Person:', person);
    if (person.personTypeId === undefined || person.dateOfBirth === undefined) {
      return <div></div>;
    }

    return (
      <Container fluid={true}>
        <Form>
          <Form.Row className='row'>
            <TextInput
              name='firstName'
              label='First Name'
              value={person.firstName}
              onChange={onChange}
              addClass='medium-textbox'
              error={errors.firstName} />
            <TextInput
              name='lastName'
              label='Last Name'
              value={person.lastName}
              onChange={onChange}
              addClass='medium-textbox'
              error={errors.lastName} />
          </Form.Row>
          <Form.Row className='mt-3'>
            <SelectInput
              name='personTypeId'
              label='Person Type'
              value={person.personTypeId.toString()}
              defaultOption='Select Person Type'
              options={personTypes}
              onChange={onChange}
              error={errors.personTypeId} />
          </Form.Row>
          <Form.Row className='mt-3'>
            <DateTimePicker
              name='dateOfBirth'
              label='Birthday'
              onChange={onChange}
              startDate={new Date(person.dateOfBirth)}
              handleChange={handleDateChange}
            />
          </Form.Row>
          <Form.Row className='mt-3'>
            <Col lg={1} className='mr-2 mt-3'>
              <button type='submit' className='btn btn-primary btn-lg' onClick={handleSave}>Save</button>
            </Col>
            <Col lg={1} className=' mr-1'>
            </Col>
            <Col lg={10} />
          </Form.Row>
        </Form>
      </Container>
    );
  }
}

PersonForm.propTypes = {
  person: PropTypes.object.isRequired,
  personTypes: PropTypes.array.isRequired,
  handleSave: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

export default PersonForm;
