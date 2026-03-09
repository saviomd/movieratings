interface Params {
  date: string;
}

const formatDate = ({ date }: Params): string =>
  new Date(date.replaceAll("-", "/")).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

export default formatDate;
