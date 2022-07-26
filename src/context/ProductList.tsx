import React, {
  createContext,
  useContext,
  useEffect,
  useCallback,
  useState,
} from "react";
import { Product } from "../types/Products";
import { queryAPI } from "../api/handler";
import { Sort } from "../types/Products";

type IProductListContext = {
  isLoading: boolean;
  products: Product[];
  setSearchValue: (value: string) => void;
  searchValue: string;
  setSort: (value: Sort) => void;
  sort: Sort;
  LOCALE: string;
  CURRENCY: string;
};

export const ProductListContext = createContext<IProductListContext>(
  undefined as unknown as IProductListContext
);
export const useProductListContext = () => useContext(ProductListContext);

const ProductListContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");
  const [sort, setSort] = useState<Sort>("none");
  // The following variables are defined just mocks
  // They would be provided by the backend in a real life scenario
  const LOCALE = "de-DE";
  const CURRENCY = "eur";

  const fetchProducts = useCallback(
    async (query: string, sort: Sort) => {
      setIsLoading(true);
      //call api fetch(...)
      const result = await queryAPI(query, sort)
      setProducts(result);
      setIsLoading(false);
    },
    []
  );

  useEffect(() => {
    fetchProducts(
      searchValue,
      sort
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue, sort]);

  return (
    <ProductListContext.Provider
      value={{
        isLoading,
        products,
        setSearchValue,
        searchValue,
        sort,
        setSort,
        LOCALE,
        CURRENCY,
      }}
    >
      {children}
    </ProductListContext.Provider>
  );
};

export default ProductListContextProvider;
