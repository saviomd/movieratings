import { NavLink } from "react-router";

import Nav from "./Nav";

function Header() {
  return (
    <header className="border-bottom border-secondary mb-3">
      <div className="align-items-center my-2 row">
        <h1 className="col h5 mb-0">
          <NavLink
            className="text-decoration-none text-white"
            prefetch="intent"
            to="/"
          >
            Movie Ratings
          </NavLink>
        </h1>
        <div className="col-auto">
          <Nav />
        </div>
      </div>
    </header>
  );
}

export default Header;
