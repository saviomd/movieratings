interface Params {
  value?: number;
}

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const formatCurrency = ({ value }: Params): string =>
  value ? `US${formatter.format(value)}` : "--";

export default formatCurrency;
