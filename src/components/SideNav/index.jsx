import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import data from "./links";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../Logo";

const LinkWithIcon = ({ name, icon, link }) => {
  return (
    <div className="side-nav-link">
      <FontAwesomeIcon icon={icon} />
      <Link to={link}>{name}</Link>
    </div>
  );
};

const SideNav = () => {
  const links = data.map((i) => (
    <LinkWithIcon name={i.name} icon={i.icon} link={i.link} />
  ));

  return (
    <nav className="side-nav">
      <Logo size="2x" />
      {links}
    </nav>
  );
};

export default SideNav;
