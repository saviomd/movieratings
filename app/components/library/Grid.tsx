import type { ReactNode } from "react";

interface GridProps {
  alignItems?: "start" | "end" | "center" | "baseline" | "stretch";
  as?: "div" | "ul";
  children: ReactNode;
  gutter?: 0 | 1 | 2 | 3 | 4 | 5;
  justifyContent?: "start" | "end" | "center" | "between" | "around" | "evenly";
}

type Width =
  | "auto"
  | "equal"
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12;

interface ColProps {
  as?: "div" | "li";
  children: ReactNode;
  width: Width;
  widthSm?: Width;
  widthMd?: Width;
  widthLg?: Width;
  widthXl?: Width;
  widthXXl?: Width;
}

function Grid({
  alignItems,
  as: Element = "div",
  children,
  gutter,
  justifyContent,
}: GridProps) {
  const className = [
    alignItems ? `align-items-${alignItems}` : "",
    Element === "ul" ? "list-unstyled" : "",
    gutter === undefined ? "" : `g-${gutter.toString()}`,
    justifyContent ? `justify-content-${justifyContent}` : "",
    "row",
  ]
    .filter(Boolean)
    .join(" ");
  return <Element className={className}>{children}</Element>;
}

const getColClass = (prefix: string, w?: Width) =>
  w ? (w === "equal" ? prefix : `${prefix}-${w.toString()}`) : undefined;

function Col({
  as: Element = "div",
  children,
  width,
  widthSm,
  widthMd,
  widthLg,
  widthXl,
  widthXXl,
}: ColProps) {
  const className = [
    getColClass("col", width),
    getColClass("col-sm", widthSm),
    getColClass("col-md", widthMd),
    getColClass("col-lg", widthLg),
    getColClass("col-xl", widthXl),
    getColClass("col-xxl", widthXXl),
  ]
    .filter(Boolean)
    .join(" ");
  return <Element className={className}>{children}</Element>;
}

Grid.Col = Col;

export default Grid;
