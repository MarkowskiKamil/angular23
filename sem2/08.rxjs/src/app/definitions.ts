export interface Product {
  name: string;
  price: number;
  category: number;
}

export interface Category {
  name: string;
  products: Array<Product>;
}
