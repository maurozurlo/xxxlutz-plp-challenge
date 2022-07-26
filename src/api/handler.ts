import { Product, Sort } from "../types/Products";
import mockData from "../api/fe.product-list.json";

const delay = (time: number) => new Promise((res) => setTimeout(res, time));

export async function queryAPI(
  query: string,
  sort: Sort
): Promise<Product[]> {
  const res = mockData;
  const isSorted = sort !== 'none'
  const hasQuery = query !== ''

  await delay(500);

  if(!isSorted && !hasQuery) return res;

  if(isSorted && !hasQuery) return sortData(res, sort)

  if(!isSorted && hasQuery) return queryData(res, query)

  return sortData(queryData(res, query), sort);
}

function queryData(res: Product[], query: string){
  const regEx = new RegExp(query,'gi')
  return res.filter((product: Product) => regEx.test(product.name))
}

function sortData(res: Product[], sort: Sort) {
  const getPrice = (product: Product) => product.eyecatcher === 'sale' ? product.priceSale : product.price

  switch (sort) {
    case "name":
      return res.sort((a, b) => a.name.localeCompare(b.name));
    case "eyecatcher":
      return res.sort((a) => (a.eyecatcher ? -1 : 1));
    case "low-price":
      return res.sort((a, b) => getPrice(a) - getPrice(b));
    case "high-price":
      return res.sort((a, b) => getPrice(b) - getPrice(a));
    default:
      return res;
  }
}
