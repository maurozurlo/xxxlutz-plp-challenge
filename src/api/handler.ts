import { Product, Sort } from '../types/Products'
import productsMock from './fe.product-list.json'

const MOCK = process.env.REACT_APP_MODE === 'MOCK'
console.log('using', MOCK ? 'mock' : 'api')

const getData = async () => {
  if(MOCK) {
    await new Promise(r => setTimeout(r, 500));
    return productsMock
  }

  const response = await fetch(process.env.REACT_APP_PRODUCT_API || '')
  if (!response.ok || response.status !== 200)
    return { error: response.statusText }

  const data = await response.json()
  return data 
}

export async function queryAPI(
  query: string,
  sort: Sort,
): Promise<{ error?: string; products?: Product[] }> {
  const isSorted = sort !== 'none'
  const hasQuery = query !== ''
  try {
    const data = await getData()

    if (!isSorted && !hasQuery) return { products: data }

    if (isSorted && !hasQuery) return { products: sortData(data, sort) }

    if (!isSorted && hasQuery) return { products: queryData(data, query) }

    return { products: sortData(queryData(data, query), sort) }
  } catch (err) {
    return { error: JSON.stringify(err) }
  }
}

export function queryData(res: Product[], query: string) {
  const regEx = new RegExp(query, 'gi')
  return res.filter((product: Product) => regEx.test(product.name))
}

export function sortData(res: Product[], sort: Sort) {
  const getPrice = (product: Product) =>
    product.eyecatcher === 'sale' ? product.priceSale : product.price

  switch (sort) {
    case 'name':
      return res.sort((a, b) => a.name.localeCompare(b.name))
    case 'eyecatcher':
      return res.sort((a) => (a.eyecatcher ? -1 : 1))
    case 'low-price':
      return res.sort((a, b) => getPrice(a) - getPrice(b))
    case 'high-price':
      return res.sort((a, b) => getPrice(b) - getPrice(a))
    default:
      return res
  }
}
