import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const Navbar = (props) => {
  return (
    <nav className="navbar bg-primary">
      <h5><Link to="/">{ props.title }</Link></h5>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  )
}

Navbar.defaultProps = {
  title: 'Github finder'
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired
}

export default Navbar;