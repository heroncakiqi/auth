import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div>
        <Link to='/'>Redux Auth</Link>
        <Link to='/signup'>Sign Up</Link>
        <Link to='/login'>Log In</Link>
        <Link to='logout'>Log out</Link>
        <Link to='feature'>Feature</Link>
      </div>
    )
  }
}

export default Header