import type { ComponentProps } from "react";

import NavItem from "./NavItem";

const navLinks: ComponentProps<typeof NavItem>["link"][] = [
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
    icon: "chart-simple",
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
