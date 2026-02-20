import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router";

interface IProps {
  link: {
    icon: FontAwesomeIconProps["icon"];
    name: string;
    path: string;
  };
}

function NavItem({ link }: IProps) {
  return (
    <NavLink
      className={({ isActive }) =>
        `btn btn-danger btn-sm${isActive ? " active" : ""}`
      }
      prefetch="intent"
      to={link.path}
    >
      <FontAwesomeIcon icon={link.icon} />
      <span className="d-none d-sm-inline-block ms-1">{link.name}</span>
    </NavLink>
  );
}

export default NavItem;
