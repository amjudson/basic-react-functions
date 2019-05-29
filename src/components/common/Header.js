import React, { PureComponent } from 'react';

class Header extends PureComponent {
  render() {
    return (
      <header className='app-header navbar'>
        <h3 className='ml-3'><strong>IRIS Support Tools</strong></h3>
      </header>
    );
  }
}

export default Header;
