interface IParams {
  date: string;
}

const formatDate = ({ date }: IParams): string =>
  new Date(date).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

export default formatDate;
