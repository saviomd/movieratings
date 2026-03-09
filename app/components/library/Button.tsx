import type { ReactNode } from "react";
import { Link, NavLink } from "react-router";

interface Props {
  as?: keyof typeof components;
  children: ReactNode;
  href?: string;
  isBlock?: boolean;
  onClick?: () => void;
  size?: keyof typeof sizes;
  variant?: keyof typeof variants;
}

const components = {
  Link,
  NavLink,
};

const sizes = {
  sm: "btn-sm",
  md: "",
  lg: "btn-lg",
};

const variants = {
  primary: "btn-danger",
  secondary: "btn-secondary",
};

function Button({
  as = "Link",
  children,
  href,
  isBlock,
  onClick,
  size = "md",
  variant = "primary",
}: Props) {
  if (!href && !onClick) {
    throw new Error("Button must have either href or onClick");
  }
  const className = `btn ${isBlock ? "d-block" : ""} ${sizes[size]} ${variants[variant]}`;
  if (onClick) {
    return (
      <button className={className} onClick={onClick} type="button">
        {children}
      </button>
    );
  }
  if (href?.startsWith("http")) {
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

  const ButtonComponent = components[as];
  return (
    <ButtonComponent className={className} prefetch="intent" to={href ?? ""}>
      {children}
    </ButtonComponent>
  );
}

export default Button;
