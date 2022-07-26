import products from '../../api/fe.product-list.json'
import { queryData, sortData } from "../../api/handler";

describe('API querying functions', () => {
  const result = queryData(products, "Transcof")

  it('should return a product when searching for "Transcof"', () => {
    expect(result).toContainEqual({
      "brand": "Lubowitz-Hayes",
      "eyecatcher": null,
      "id": 5,
      "image": "https://loremflickr.com/320/320/furniture,chair/all",
      "name": "Transcof",
      "price": 798,
      "priceSale": 402,
      "url": "https://csmonitor.com/velit/donec.js"
    })
  })

  it('should only contain five products after searching for "Transcof"', () => {
    expect(result.length).toBe(5)
  })
})

describe('API sorting functions', () => {
  const result = sortData(products, "high-price")

  it('should return the most expensive item in the first place', () => {
      expect(result[0].price).toEqual(983)
  })

  it('should return the least expensive product in the last place', () => {
    expect(result[result.length-1].priceSale).toEqual(301)
  })
})
