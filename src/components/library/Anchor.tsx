import type { ReactNode } from "react";
import { Link } from "react-router";

type PropsType = {
  children: ReactNode;
  href: string;
};

function Anchor({ children, href }: PropsType) {
  const className = "text-danger text-decoration-none";
  if (href.startsWith("http")) {
    return (
      <a
        className={className}
        href={href}
        rel="noopener noreferrer"
        target="_blank"
      >
        {children}
      </a>
    );
  }
  return (
    <Link className={className} to={href}>
      {children}
    </Link>
  );
}

export default Anchor;
