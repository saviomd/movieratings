interface IParams {
  date: string;
}

const formatDate = ({ date }: IParams) =>
  new Date(date).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

export default formatDate;
