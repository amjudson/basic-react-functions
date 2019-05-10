import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/personActions';
import PersonList from '../../components/person/personList';
import * as personActions from '../../actions/personActions';

class PersonManager extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.getPersonData = this.getPersonData.bind(this);
  };

  componentWillMount() {
    this.props.dispatch(actions.loadPersons());
  }

  getPersonData(personId) {
    this.props.dispatch(personActions.getPersonById(personId));
  }

  render() {
    const { persons } = this.props;
    return (
      <div>
        <PersonList persons={persons} />
      </div>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    persons: state.persons
  }
}

export default connect(mapStateToProps)(PersonManager);
