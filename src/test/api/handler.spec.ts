import products from "../../api/fe.product-list.json";
import { queryData, sortData } from "../../api/handler";

describe("API querying functions", () => {
  const result = queryData(products, "Transcof");

  it('should return products matching when searching for "Transcof"', () => {
    expect(result.every((product) => product.name === "Transcof")).toBeTruthy();
  });

  it('should only contain at least one product after searching for "Transcof"', () => {
    expect(result.length).toBeGreaterThan(1);
  });
});

describe("API high price sorting function", () => {
  const result = sortData([...products], "high-price");

  it("should return the most expensive item in the first place", () => {
    const first = result[0];
    expect(first.price).toEqual(983);
    expect(first.eyecatcher).toBeNull();
  });

  it("should return the least expensive product in the last place", () => {
    const last = result[result.length - 1];
    expect(result[result.length - 1].priceSale).toEqual(301);
    expect(last.eyecatcher).toEqual("sale");
  });
});

describe("API low price sorting function", () => {
  const result = sortData([...products], "low-price");

  it("should return the least expensive item in the first place", () => {
    const first = result[0];
    expect(first.eyecatcher).toBe("sale");
    expect(first.priceSale).toEqual(301);
  });

  it("should return the most expensive product in the last place", () => {
    const last = result[result.length - 1];
    expect(last.eyecatcher).toBeNull();
    expect(last.price).toEqual(983);
  });
});

describe("API alphabetical sorting function", () => {
  const result = sortData([...products], "name");

  it("should return a product name starting with a in the first place", () => {
    const first = result[0];
    expect(first.name[0].toLowerCase()).toBe("a");
  });

  it("should return a product name starting with z in the last place", () => {
    const last = result[result.length - 1];
    expect(last.name[0].toLowerCase()).toBe("z");
  });
});

describe("API eyecatcher sorting function", () => {
  const result = sortData([...products], "eyecatcher");

  it("should return a product with an eyecatcher in the first place", () => {
    const first = result[0];
    expect(first.eyecatcher).toBe("sale");
  });

  it("should return a product without an eyecatcher in the last place", () => {
    const last = result[result.length - 1];
    expect(last.eyecatcher).toBeNull();
  });
});
