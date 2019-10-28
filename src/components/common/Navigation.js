import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'localcss/style.css';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdown: false
    }
  }

  handleDropdown() {
    const isDropdown = !this.state.dropdown;
    this.setState({ dropdown: isDropdown });
  }

  render() {
    return (
      <div className='sidebar'>
        <nav className='scrollbar-container sidebar-nav ps ps-container ps--active-y'>
          <ul className='nav'>
            <li className='nav-title nav-title-font'>
              Component Testing App
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/'>
                <i className='fas fa-home nav-icon' /> Home
              </Link>
            </li>
            <li className='nav-item nav-dropdown'>
              <Link className='nav-link nav-dropdown-toggle' to='/person'>
                <i className='fas fa-user nav-icon' /> People
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/datepicker'>
                <i className='nav-icon far fa-calendar-alt' />
                Date Picker
                <span className='badge badge-primary'>NEW</span>
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/trigger'>
                <i className='nav-icon far fa-calendar-alt' />
                Trigger
                <span className='badge badge-primary'>old</span>
              </Link>
            </li>
            <li className='dropdown-item'>
              <Link className='nav-link' to='/triggers'>
                <i className='nav-icon fal fa-smile' />Test Trigger
              </Link>
            </li>
            <li className='dropdown-item'>
              <Link className='nav-link' to='/controlexample'>
                <i className='nav-icon fal fa-gamepad' />Control Examples
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/modals'>
                <i className='nav-icon fal fa-brain' />
                Modal Test Set
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/imagezoom'>
                <i className='nav-icon fal fa-brain' />
                Image Zoom
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/about'>
                <i className='nav-icon cui-cloud-download' /> About
              </Link>
            </li>
            <li className='nav-item mt-auto'>
              <Link className='nav-link nav-link-danger' to='/credits'>
                <i className='nav-icon cui-layers' /> Credits
              </Link>
            </li>
          </ul>
        </nav>
        <button
          className='sidebar-minimizer brand-minimizer'
          type='button'
        />
      </div>
    );
  }
}

export default Navigation;
