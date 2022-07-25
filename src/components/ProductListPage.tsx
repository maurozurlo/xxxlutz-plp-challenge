import React from "react";
import './ProductListPage.scss'
import { Product } from "../types/Products";
import ProductCard from "./ProductCard";
import { useProductListContext } from "../context/ProductList";

export default function ProductListPage() {
  const {products} = useProductListContext()

  return (
    <div className="plp">
      <div className="header">
        <div className="column">{products.length} Products</div>
        <div className="column">Filter/Sort</div>
      </div>
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
    </div>
  );
}
