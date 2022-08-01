const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const formatCurrency = ({ value }) =>
  value ? `US${formatter.format(value)}` : "--";

export default formatCurrency;
