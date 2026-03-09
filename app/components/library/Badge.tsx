import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function Badge({ children }: Props) {
  return <span className="badge bg-secondary">{children}</span>;
}

export default Badge;
