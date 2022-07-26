import React from "react";
import "./ProductListPage.scss";
import { Product, Sort } from "../types/Products";
import ProductCard from "./ProductCard";
import { useProductListContext } from "../context/ProductList";

const SORT_OPTIONS = [
  {
    id: "none",
    label: "None",
  },
  {
    id: "low-price",
    label: "Lowest Price",
  },
  {
    id: "high-price",
    label: "Highest Price",
  },
  {
    id: "name",
    label: "Name",
  },
  {
    id: "eyecatcher",
    label: "Sale",
  },
];

export default function ProductListPage() {
  const { isLoading, products, setSort, sort } = useProductListContext();

  return (
    <div className="plp">
      <div className="header">
        <div className="column">
          {isLoading ? null : `${products.length} Products`}
        </div>
        <div className="column">
          <label>Sort by</label>
          <select
            name="sort"
            defaultValue={sort}
            disabled={isLoading}
            onChange={(ev) => setSort(ev.target.value as unknown as Sort)}
          >
            {SORT_OPTIONS.map(({ id, label }) => (
              <option key={id} value={id}>
                {label}
              </option>
            ))}
          </select>
        </div>
      </div>
      {isLoading ? (
        <div className="info">
          <div className="spinner" />
          <div>Loading results, please wait...</div>
        </div>
      ) : products.length === 0 ? (
        <div className="info">Sorry, no matches where found for your query.</div>
      ) : (
        <div className="grid">
          {products.map(
            ({
              brand,
              eyecatcher,
              id,
              image,
              name,
              price,
              priceSale,
              url,
            }: Product) => (
              <ProductCard
                key={id}
                price={price}
                priceSale={priceSale}
                image={image}
                name={name}
                url={url}
                brand={brand}
                eyecatcher={eyecatcher}
              />
            )
          )}
        </div>
      )}
    </div>
  );
}
