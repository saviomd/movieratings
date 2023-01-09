import { ReactNode } from "react";

import { AnchorTargetType } from "../../types";

type PropsType = {
  children: ReactNode;
  href: string;
  target?: AnchorTargetType;
};

function Anchor({ children, href, target }: PropsType) {
  return (
    <a
      className="text-danger text-decoration-none"
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
    >
      {children}
    </a>
  );
}

export default Anchor;
