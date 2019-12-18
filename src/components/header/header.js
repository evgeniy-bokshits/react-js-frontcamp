
import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import './header.scss';

class Header extends Component {
  render() {
    return (
      <>
        <header className="page-container">
          <section className="page">
            <span>netflix</span>
            <span>roulette</span>
          </section>
          <FontAwesomeIcon icon={faSearch} />
        </header>
        {this.props.children}
      </>
    );
  }
}
export default Header;