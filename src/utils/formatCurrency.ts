interface IParams {
  value?: number;
}

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const formatCurrency = ({ value }: IParams): string =>
  value ? `US${formatter.format(value)}` : "--";

export default formatCurrency;
