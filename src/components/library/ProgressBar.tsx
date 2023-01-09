import { memo } from "react";

type PropsType = {
  width: number;
};

const ProgressBar = memo(({ width }: PropsType) => (
  <div className="bg-secondary overflow-hidden rounded">
    <div
      className="animate__animated animate__slideInLeft bg-danger pb-2 rounded"
      style={{ width: `${width}%` }}
    />
  </div>
));

export default ProgressBar;
