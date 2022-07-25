import React from "react";
import "./ProductCard.scss";
import { Product } from "../types/Products";

export default function ProductCard({
  brand,
  eyecatcher,
  image,
  name,
  price,
  priceSale,
  url,
}: Omit<Product, "id">) {
  return (
    <div className="product-card">
      <div className="image-container">
        {eyecatcher === "sale" && (
          <div className="eyecatcher">{eyecatcher}</div>
        )}
        <a href={url}>
          <img src={image} alt={name} />
        </a>
      </div>
      <div className="drawer">
        <div className="column">
          <div className="brand">{brand}</div>
          <div className="name">{name}</div>
        </div>
        <div className="column">
          {eyecatcher === "sale" ? (
            <>
              <div className="price">{priceSale}</div>
              <div className="sale-price">{price}</div>
            </>
          ) : (
            <div className="price">{price}</div>
          )}
        </div>
      </div>
    </div>
  );
}
