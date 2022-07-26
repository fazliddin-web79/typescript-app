const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
  currency: "USz",
  style: "currency",
});

export function formatCurrency(number: number) {
  return CURRENCY_FORMATTER.format(number);
}
