import { CSSProperties, ReactNode } from "react";

type PropsType = {
  children: ReactNode;
};

function ScrollableHorizontalList({ children }: PropsType) {
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

export default ScrollableHorizontalList;
