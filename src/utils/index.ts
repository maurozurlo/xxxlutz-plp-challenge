export function FormatCurrency(locale: string, currency: string, number: number) {
  return new Intl.NumberFormat(locale, { style: 'currency', currency }).format(number);
}