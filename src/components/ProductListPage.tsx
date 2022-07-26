import ProductCard from "./ProductCard";
import { Product, Sort } from "../types/Products";
import { useProductListContext } from "../context/ProductList";
import SORT_OPTIONS from "../api/sort-options.json";
import "./ProductListPage.scss";

function ProductGrid({ products }: { products: Product[] }) {
  return products.length === 0 ? (
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
  );
}

export default function ProductListPage() {
  const { isLoading, hasErrors, products, setSort, sort } =
    useProductListContext();

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
            data-testid="select-sort"
            disabled={isLoading || hasErrors}
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
      {hasErrors ? (
        <div className="info">
          Sorry, we were unable to perform your request.
        </div>
      ) : isLoading ? (
        <div className="info">
          <div className="spinner" />
          <div>Loading results, please wait...</div>
        </div>
      ) : (
        <ProductGrid products={products} />
      )}
    </div>
  );
}
