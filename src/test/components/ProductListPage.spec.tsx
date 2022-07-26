import { screen, render, fireEvent } from "@testing-library/react";
import { IntersectionObserverMock } from "../mock";
import { ProductListContentData } from "../context/ProductList";
import { ProductListContext } from "../../context/ProductList";
import ProductListPage from "../../components/ProductListPage";

describe("PLP component", () => {
  const setup = () => {
    render(
      <ProductListContext.Provider value={{ ...ProductListContentData }}>
        <ProductListPage />
      </ProductListContext.Provider>
    );
  };

  it("should change the sorting after using the select", () => {
    setup();
    global.IntersectionObserver = IntersectionObserverMock as any;
    const selectSort = screen.getByTestId("select-sort");
    fireEvent.change(selectSort, { target: { value: "low-price" } });
    expect(ProductListContentData.setSort).toBeCalledWith("low-price");
  });
});
