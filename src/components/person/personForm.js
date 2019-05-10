import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';
import DateTimePicker from '../common/DateTimePicker';

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
      <div className='container-fluid'>
        <form>
          <div className='row'>
            <div className='col-lg-3'>
              <TextInput
                name='firstName'
                label='First Name'
                value={person.firstName}
                onChange={onChange}
                addClass='medium-textbox'
                error={errors.firstName} />
            </div>
            <div className='col-lg-3 ml-2'>
              <TextInput
                name='lastName'
                label='Last Name'
                value={person.lastName}
                onChange={onChange}
                addClass='medium-textbox'
                error={errors.lastName} />
            </div>
          </div>
          <div className='row'>
            <div className='col-md-3'>
              <SelectInput
                name='personTypeId'
                label='Person Type'
                value={person.personTypeId.toString()}
                defaultOption='Select Person Type'
                options={personTypes}
                onChange={onChange}
                error={errors.personTypeId} />
            </div>
          </div>
          <div className='row'>
            <div className='col-md-3'>
              <DateTimePicker
                name='dateOfBirth'
                label='Birthday'
                onChange={onChange}
                startDate={new Date(person.dateOfBirth)}
                handleChange={handleDateChange}
              />
            </div>
          </div>
          <div className='row'>
            <div className='col-xs-1 mr-2 mt-3'>
              <button type='submit' className='btn btn-primary btn-lg' onClick={handleSave}>Save</button>
            </div>
            <div className='col-xs-1 mr-1'>
            </div>
            <div className='col-lg-10' />
          </div>
        </form>
      </div>
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
