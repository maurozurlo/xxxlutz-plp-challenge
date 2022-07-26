import { screen, render, fireEvent } from "@testing-library/react";
import { ProductListContentData } from "../context/ProductList";
import { ProductListContext } from "../../context/ProductList";
import Navbar from "../../components/Navbar";

describe("Navbar component", () => {
  const setup = () =>
    render(
      <ProductListContext.Provider value={{ ...ProductListContentData }}>
        <Navbar />
      </ProductListContext.Provider>
    );

  it("should send a search query after writing and tapping on the submit button", () => {
    setup();
    const searchInput = screen.getByRole("searchbox");
    fireEvent.change(searchInput, { target: { value: "Smith" } });
    const searchBtn = screen.getByTestId("submit-btn");
    fireEvent.click(searchBtn);
    expect(ProductListContentData.setSearchValue).toBeCalledWith("Smith");
  });
});
