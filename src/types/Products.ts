export interface Product {
  brand: string;
  eyecatcher: string | null;
  id: number;
  image: string;
  name: string;
  price: number;
  priceSale: number;
  url: string;
}

export type Sort = "low-price" | "high-price" | "name" | "eyecatcher" | "none";
