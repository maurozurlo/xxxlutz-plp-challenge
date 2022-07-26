import "./ProductCard.scss";
import { useInView } from "react-intersection-observer";
import { Product } from "../types/Products";
import { FormatCurrency } from "../utils";
import { useProductListContext } from "../context/ProductList";

export default function ProductCard({
  brand,
  eyecatcher,
  image,
  name,
  price,
  priceSale,
  url,
}: Omit<Product, "id">) {
  const { CURRENCY, LOCALE } = useProductListContext();
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "200px 0px",
  });

  return (
    <div className="product-card" ref={ref}>
      <div className="image-container">
        {eyecatcher === "sale" && (
          <div className="eyecatcher">{eyecatcher}</div>
        )}
        {inView ? (
          <a href={url}>
            <img src={image} alt={name} />
          </a>
        ) : null}
      </div>
      <div className="drawer">
        <div className="column">
          <a className="brand" href={url}>
            {brand}
          </a>
          <a className="name" href={url}>
            {name}
          </a>
        </div>
        <div className="column">
          {eyecatcher === "sale" ? (
            <>
              <div className="price line-through">
                {FormatCurrency(LOCALE, CURRENCY, price)}
              </div>
              <div className="price">
                {FormatCurrency(LOCALE, CURRENCY, priceSale)}
              </div>
            </>
          ) : (
            <div className="price">
              {FormatCurrency(LOCALE, CURRENCY, price)}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
