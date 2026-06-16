import type { ReactNode } from "react";

import Heading from "./Heading";

interface Props {
  children: ReactNode;
  title: string;
}

function Card({ children, title }: Props) {
  return (
    <div className="border border-secondary mb-3 p-3 rounded">
      <Heading level={2}>{title}</Heading>
      {children}
    </div>
  );
}

export default Card;
