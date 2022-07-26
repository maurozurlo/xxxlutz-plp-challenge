import { FormatCurrency } from "../../utils";

describe('Utils', () => {
  const price = 150
  it('should return the correct formatting for Sweden locale/currency', () => {
    expect(FormatCurrency('sv-SE', 'sek', price)).toEqual("150,00 kr")
  })
  it('should return the correct formatting for Germany locale/currency', () => {
    expect(FormatCurrency('de-DE', 'eur', price)).toEqual("150,00 €")
  })
})
