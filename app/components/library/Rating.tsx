import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  count: number;
}

function Rating({ count }: Props) {
  const stars = [...Array.from({ length: count }).keys()];

  return (
    <>
      {stars.map((item) => (
        <FontAwesomeIcon key={item} className="me-1 text-warning" icon="star" />
      ))}
    </>
  );
}

export default Rating;
