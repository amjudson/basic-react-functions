import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class PersonListRow extends PureComponent {
  constructor(props) {
    super(props);
  }

  getPersonTypeDesc(personTypeId) {
    const filteredPersonTypes = this.props.personTypes.filter(r => r.personTypeId === personTypeId);
    if (filteredPersonTypes.length > 0) {
      return filteredPersonTypes[0].description;
    }

    return 'Person Type Not Found';
  }

  render() {
    const { person } = this.props;
    return (
      <Link className="row row-detail" to={'/person/' + person.personId} style={{ textDecoration: 'none' }}>
        <div className="col-sm-1 item-detail">{person.personId}</div>
        <div className="col-sm-2 item-detail">{person.lastName}</div>
        <div className="col-sm-2 item-detail">{person.firstName}</div>
        <div className="col-sm-2 item-detail">{this.getPersonTypeDesc(person.personTypeId)}</div>
      </Link>
    );
  }
}

PersonListRow.propTypes = {
  person: PropTypes.object.isRequired,
  personTypes: PropTypes.array.isRequired
};

export default PersonListRow;
