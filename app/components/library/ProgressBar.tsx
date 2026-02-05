interface IProps {
  size: number;
}

const ProgressBar = ({ size }: IProps) => (
  <div
    className="bg-secondary d-inline-block overflow-hidden position-relative px-3 rounded"
    style={{ height: "160px" }}
  >
    <div
      className="animate__animated animate__slideInUp bg-danger bottom-0 position-absolute rounded start-0 w-100"
      style={{ height: `${String(size)}%` }}
    />
  </div>
);

export default ProgressBar;
