import { memo } from "react";

type PropsType = {
  size: number;
};

const ProgressBar = memo(({ size }: PropsType) => (
  <div
    className="bg-secondary d-inline-block overflow-hidden position-relative px-3 rounded"
    style={{ height: "240px" }}
  >
    <div
      className="animate__animated animate__slideInBottom bg-danger bottom-0 position-absolute rounded start-0 w-100"
      style={{ height: `${size}%` }}
    />
  </div>
));

export default ProgressBar;
