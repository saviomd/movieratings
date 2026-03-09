import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";

import Button from "./Button";

interface Props {
  items: {
    icon: FontAwesomeIconProps["icon"];
    name: string;
    path: string;
  }[];
}

function Nav({ items }: Props) {
  return (
    <nav className="btn-group">
      {items.map(({ icon, name, path }) => (
        <Button as="NavLink" href={path} key={path} size="sm">
          <FontAwesomeIcon icon={icon} />
          <span className="d-none d-sm-inline-block ms-1">{name}</span>
        </Button>
      ))}
    </nav>
  );
}

export default Nav;
