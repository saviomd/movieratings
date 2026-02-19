import type { ComponentProps } from "react";

import { routePaths } from "~/utils";

import NavItem from "./NavItem";

const navLinks: ComponentProps<typeof NavItem>["link"][] = [
  {
    icon: "star",
    name: "Ratings",
    path: routePaths.ratings(),
  },
  {
    icon: "calendar-alt",
    name: "Diary",
    path: routePaths.diary(),
  },
  {
    icon: "chart-simple",
    name: "Stats",
    path: routePaths.stats(),
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
