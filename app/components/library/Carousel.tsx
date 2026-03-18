import type { CSSProperties, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function Carousel({ children }: Props) {
  const listStyle = {
    overflowX: "scroll",
    WebkitOverflowScrolling: "touch",
  } as CSSProperties;
  return (
    <div className="overflow-hidden">
      <ul className="flex-nowrap g-3 list-unstyled row" style={listStyle}>
        {children}
      </ul>
    </div>
  );
}

export default Carousel;
