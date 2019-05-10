import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/personActions';
import * as errorActions from '../../actions/errorsActions';
import * as personTypeActions from '../../actions/personTypeActions';
import * as startDateActions from '../../actions/startDateActions';
import PersonForm from '../../components/person/personForm';
import * as personActions from '../../actions/personActions';

class PersonFormManager extends React.Component {
  constructor(props) {
    super(props);

    this.savePerson = this.savePerson.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.personOnChange = this.personOnChange.bind(this);
    //this.props.dispatch(actions.getPersonById(this.props.match.params.id));
    this.props.dispatch(personTypeActions.loadPersonTypes());
    console.log('Persons read:', p);
    this.state = { person: {} };
  };

  componentDidMount() {
    this.props.dispatch(personActions.getPersonById(this.props.match.params.id));
    // this.setState({ person: this.props.person });
    // console.log('Did Mount:', this.state.person);
  }

  componentWillReceiveProps(nextProps) {
    if (Object.keys(this.props.person) === 0) {
      this.setState({ person: nextProps.person });
    } else {
      this.setState({ person: this.props.person });
    }
  }

  setStartDatetime(startDate) {
    this.props.dispatch(startDateActions.setStartDate(startDate));
  }

  goBack() {
    this.props.history.goBack();
  }

  personOnChange(event) {
    const field = event.target.name;
    let person = this.props.person;
    person[field] = event.target.value;
    return this.setState({ person: person });
  }

  handleDateChange(date) {
    this.setStartDatetime(date);
  }

  handleError(error) {
    this.props.dispatch(errorActions.addError(error));
  }

  personFormIsValid() {
    let formIsValid = true;
    let errors = {};

    if (this.state.person.lastName.length < 3) {
      errors.lastName = 'Last name must be at least 3 characters.';
      formIsValid = false;
    }

    if (this.state.person.firstName.length < 3) {
      errors.firstName = 'First name must be at least 3 characters.';
      formIsValid = false;
    }

    this.props.dispatch(errorActions.addError(errors))
    return formIsValid;
  }

  savePerson(event) {
    event.preventDefault();
    if (!this.personFormIsValid()) {
      return;
    }

    this.setState({ saving: true });
    this.props.actions.savePerson(this.state.person)
      .then(() => this.redirect())
      .catch(error => {
        this.setState({ saving: false });
        toastr.error(error);
      });
  }

  render() {
    const { person, personTypes, errors } = this.props;
    return (
      <div>
        <PersonForm
          person={person}
          personTypes={personTypes}
          handleSave={this.savePerson}
          errors={errors}
          onChange={this.personOnChange}
          handleDateChange={this.handleDateChange}
          goBack={this.goBack}
        />
      </div>
    )
  }
}

function mapStateToProps(state, props) {
  const selectPersonTypes = state.personTypes.map((personType) => {
    return {
      value: personType.personTypeId,
      text: personType.description
    }
  })

  console.log('p fromPersons:', state.persons.find(p => p.personId == "2"))
  return {
    person: state.person,
    personTypes: selectPersonTypes,
    errors: {}
  }
}

function mapDispatchToProps(dispatch) {
  return {
    personById: dispatch(actions.getPersonById(this.props.match.params.id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonFormManager);
