import type { ReactNode } from "react";
import { Link } from "react-router";

interface Props {
  children: ReactNode;
  href: string;
  title?: string;
}

function Anchor({ children, href, title }: Props) {
  const className = "text-danger text-decoration-none";
  if (href.startsWith("http")) {
    return (
      <a
        className={className}
        href={href}
        rel="noopener noreferrer"
        target="_blank"
        title={title}
      >
        {children}
      </a>
    );
  }
  return (
    <Link className={className} prefetch="intent" title={title} to={href}>
      {children}
    </Link>
  );
}

export default Anchor;
