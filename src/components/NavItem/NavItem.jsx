import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import React from "react";
import { NavLink } from "react-router-dom";

const NavItem = ({ link }) => (
  <NavLink
    to={link.path}
    className={({ isActive }) =>
      `btn btn-danger btn-sm${isActive ? " active" : ""}`
    }
  >
    <FontAwesomeIcon icon={link.icon} />
    <span className="d-none d-sm-inline-block ms-1">{link.name}</span>
  </NavLink>
);

NavItem.propTypes = {
  link: PropTypes.shape({
    icon: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
  }).isRequired,
};

export default NavItem;
