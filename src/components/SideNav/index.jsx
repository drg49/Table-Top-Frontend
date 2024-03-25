import React from "react";
import { Link } from "react-router-dom";
import './index.scss'

const SideNav = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/my-account">Account</Link>
    </nav>
  )
};

export default SideNav;
