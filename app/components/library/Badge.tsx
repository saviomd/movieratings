import type { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

function Badge({ children }: IProps) {
  return <span className="badge bg-secondary">{children}</span>;
}

export default Badge;
