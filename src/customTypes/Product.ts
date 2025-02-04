export interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

export interface CartItem {
  id: number | null;
  quantity: number;
  product: Product;
  isChecked: boolean;
}

export type CartItems = Record<string, CartItem>;
