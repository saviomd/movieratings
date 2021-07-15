import PropTypes from "prop-types";
import React from "react";

import NavItem from "../NavItem";

const Nav = ({ navLinks }) => (
  <nav className="btn-group">
    {navLinks.map((link) => (
      <NavItem key={link.path} link={link} />
    ))}
  </nav>
);

Nav.propTypes = {
  navLinks: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Nav;
