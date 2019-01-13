import React from 'react';
import { Link, NavLink, withRouter } from "react-router-dom";

const Navbar = (props) => {
  // now can use push
  // console.log(props);

  return (
    <nav className="nav-wrapper blue darken-3">
      <div className="container">
        <Link className="brand-logo left" to="/">Poke's Times</Link>
        <ul className="right">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}

export default withRouter(Navbar);
