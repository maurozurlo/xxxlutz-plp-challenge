import React, { createContext, useContext, useEffect, useCallback, useState } from 'react'
import mockData from '../api/fe.product-list.json'
import { Product } from '../types/Products';

type Sort = "price" | "name" | "eyecatcher" | null

type IProductListContext = {
  isLoading: boolean;
  products: Product[];
  setSearchValue: (value: string) => void;
  searchValue: string;
  setSort: (value: Sort) => void;
  sort: Sort
};

export const ProductListContext = createContext<IProductListContext>(
  undefined as unknown as IProductListContext
);
export const useProductListContext = () => useContext(ProductListContext);

const ProductListContextProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [products, setProducts] = useState<Product[]>([])
  const [searchValue, setSearchValue] = useState<string>("")
  const [sort, setSort] = useState<Sort>(null)

  const fetchProducts = useCallback(
    async (params: {
      query: string | null | undefined;
      sort?: Sort;
    }) => {
      setIsLoading(true);
      //call api fetch(...)
      setProducts((productData) => {
        return mockData
      });

      setIsLoading(false);
    },
    []
  );

  useEffect(() => {
    fetchProducts({
      query: searchValue,
      sort
    });
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
      setSort
    }}
  >
    {children}
  </ProductListContext.Provider>
  )
}

export default ProductListContextProvider