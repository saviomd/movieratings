import type { ElementType, ReactNode } from "react";

type HeadingLevelType = keyof typeof levels;

interface IProps {
  children: ReactNode;
  level: HeadingLevelType;
}

const levels = {
  1: 3,
  2: 4,
  3: 5,
  4: 6,
};
const levelKeys = Object.keys(levels).map((item) => Number.parseInt(item, 10));

function Heading({ children, level }: IProps) {
  const HeadingTag = `h${String(level)}` as ElementType;
  return (
    <HeadingTag className={`h${levels[level].toString()}`}>
      {children}
    </HeadingTag>
  );
}

export default Heading;
export { levelKeys };
export type { HeadingLevelType };
