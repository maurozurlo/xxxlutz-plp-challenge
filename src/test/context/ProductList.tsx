import { IProductListContext } from "../../context/ProductList";
import products from "../../api/fe.product-list.json";

const setSearchValue = jest.fn();
const setSort = jest.fn();

export const ProductListContentData: IProductListContext = {
  isLoading: false,
  hasErrors: false,
  products,
  searchValue: "",
  setSearchValue,
  setSort,
  sort: "none",
  LOCALE: "sv-SE",
  CURRENCY: "sek",
};
