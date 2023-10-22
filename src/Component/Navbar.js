import React, { Component } from 'react';
import '../Styles/Navbar.css';
import '../App.css';
import { Link } from 'react-router-dom';
import { Menuitems } from './Menuitems';

class Navbar extends Component {
  state = {
    clicked: false
  };

  handleclick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <>
        <nav className='navbar-item'>
          <h1 className='navbar-logo'>Trippy</h1>
          <div className="menu-icons" onClick={this.handleclick}>
            <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
          <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
            {Menuitems.map((item, index) => {
              return (
                <li key={index}>
                  <Link to={item.url} className={item.cName}>
                    <i className={item.icon}></i>
                    {item.title}
                  </Link>
                </li>
              );
            })}
            <button className='signup'>Signup</button>
          </ul>
        </nav>
      </>
    );
  }
}

export default Navbar;
