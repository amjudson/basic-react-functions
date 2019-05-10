import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PersonListRow from './personListRow';

class PersonList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { persons, personTypes } = this.props;
    return (
      <div className="container-fluid">
        <div className="row row-title">
          <div className="col-sm-1">ID</div>
          <div className="col-sm-2">Last Name</div>
          <div className="col-sm-2">First Name</div>
        </div>
        {persons.map(person =>
          <PersonListRow key={person.personId} person={person} personTypes={personTypes} />
        )}
      </div>
    );
  }
}

PersonList.propTypes = {
  persons: PropTypes.array.isRequired
}

function mapStateToProps(state, props) {
  return {
    personTypes: state.personTypes,
  }
}

export default connect(mapStateToProps)(PersonList);
