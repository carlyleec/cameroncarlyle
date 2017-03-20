import React from 'react';
import { IndexLink, Link } from 'react-router';

// import AuthControl from '../modules/auth/authControl';
const logoImg = require('../images/logo.png');

export default class Navbar extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      navbarCollapse: 'collapse',
      navbarDisplay: 'block',
    };

    this.toggleNavbarCollapse = this.toggleNavbarCollapse.bind(this);
    this.setNavbarDisplay = this.setNavbarDisplay.bind(this);
  }

  setNavbarDisplay() {
    if (window.location.pathname === '/search-results') {
      this.setState({ navbarDisplay: 'none' });
    } else {
      this.setState({ navbarDisplay: 'block' });
    }
  }

  toggleNavbarCollapse() {
    if (this.state.navbarCollapse === 'collapse') {
      this.setState({ navbarCollapse: 'collapsed' });
    } else {
      this.setState({ navbarCollapse: 'collapse' });
    }
  }


  render() {
    return (
      <div style={{ display: this.state.navbarDisplay }}>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" onClick={this.toggleNavbarCollapse} aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <IndexLink to="/" className="navbar-brand"> <img src={logoImg} style={{ height: '40px', width: '40px' }} alt="Logo"/></IndexLink>
            </div>
            <div className={[this.state.navbarCollapse, 'navbar-collapse'].join(' ')}>
              <ul className="nav navbar-nav navbar-right">
                <li><a href="">CONTACT</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

