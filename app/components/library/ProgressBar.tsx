interface Props {
  label: string;
  total: number;
  value: number;
}

const ProgressBar = ({ label, total, value }: Props) => {
  const size = (value * 100) / total;
  return (
    <div className="bg-secondary d-inline-block overflow-hidden position-relative px-4 py-5 rounded">
      <div
        className="animate__animated animate__slideInUp bg-danger bottom-0 position-absolute rounded start-0 w-100"
        style={{ height: `${String(size)}%` }}
      />
      <div className="position-absolute start-0 text-center w-100">
        {label}
        <div className="fw-bold">{value}</div>
      </div>
    </div>
  );
};

export default ProgressBar;
