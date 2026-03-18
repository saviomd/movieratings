import type { ComponentProps } from "react";
import { NavLink } from "react-router";

import { Grid, Nav } from "~/components/library";
import { routePaths } from "~/utils";

const navItems: ComponentProps<typeof Nav>["items"] = [
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

function Header() {
  return (
    <header className="bg-dark border-bottom border-secondary mb-3 py-2 sticky-top">
      <Grid alignItems="center">
        <Grid.Col width="equal">
          <h1 className="h5 mb-0">
            <NavLink
              className="text-decoration-none text-white"
              prefetch="intent"
              to="/"
            >
              Movie Ratings
            </NavLink>
          </h1>
        </Grid.Col>
        <Grid.Col width="auto">
          <Nav items={navItems} />
        </Grid.Col>
      </Grid>
    </header>
  );
}

export default Header;
