import { screen, render, fireEvent } from "@testing-library/react";
import { ProductListContentData } from "../context/ProductList";
import { ProductListContext } from "../../context/ProductList";
import ProductListPage from "../../components/ProductListPage";

class IntersectionObserver {
  observe = jest.fn();
  disconnect = jest.fn();
  unobserve = jest.fn();
}

Object.defineProperty(window, "IntersectionObserver", {
  writable: true,
  configurable: true,
  value: IntersectionObserver,
});

Object.defineProperty(global, "IntersectionObserver", {
  writable: true,
  configurable: true,
  value: IntersectionObserver,
});

describe("PLP component", () => {
  const setup = () =>
    render(
      <ProductListContext.Provider value={{ ...ProductListContentData }}>
        <ProductListPage />
      </ProductListContext.Provider>
    );

  it("should change the sorting after using the select", () => {
    setup();
    const selectSort = screen.getByTestId("select-sort");
    fireEvent.change(selectSort, { target: { value: "low-price" } });
    expect(ProductListContentData.setSort).toBeCalledWith("low-price");
  });
});
