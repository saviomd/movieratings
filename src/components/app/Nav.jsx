import React from "react";

import NavItem from "./NavItem";

const navLinks = [
  {
    icon: "star",
    name: "Ratings",
    path: "/",
  },
  {
    icon: "calendar-alt",
    name: "Diary",
    path: "/diary",
  },
  {
    icon: "chart-bar",
    name: "Stats",
    path: "/stats",
  },
];

function Nav() {
  return (
    <nav className="btn-group">
      {navLinks.map((link) => (
        <NavItem key={link.path} link={link} />
      ))}
    </nav>
  );
}

export default Nav;
