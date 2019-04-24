import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

export default withRouter(function NavBar(props) {
  // setTimeout(() => {
  //   props.history.push('/About');
  // }, 2000)
  return (
    <nav className="nav-wrapper red darken-3">
      <div className="container">
        <a className="brand-logo">Net Ninja Practice</a>
        <ul className="right">
          <li><Link to="/">Home</Link></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </div>
    </nav>
  )
})
