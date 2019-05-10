import React, { PureComponent } from 'react';
import Button from 'react-bootstrap/Button';
import AuthClass from '../../authorization/authClass';

class Header extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className='app-header navbar'>
        <h3>
          <strong>Component Testing Application</strong>
        </h3>
      </header>
    );
  }
}

export default Header;
