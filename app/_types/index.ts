import { use } from 'react';

export interface Product {
  product: any;
  id: number ;
  attributes: Attributes;
}

export interface Banner {
  data: {
    attributes: {
      url: string;
      alt: string;
    };
  };
}
export interface Description {
  children: {
    type: string;
    text: string;
  }[];
}

export interface ProductListProps {
  products: Product[];
}

export interface CartContextType {
  cart?: Product[] | null;
  setCart: (cart: Product[]) => void;
}
export interface CartData {
  data: {
    username: string;
    email: string;
    products: number[];
  };
}
export interface CartItem {
  id: number;
  attributes: {
    username: string;
    email: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    products: {
      data: Product[];
    };
  };
}
type User = {
  id: number;
  attributes: {
    username: string;
    email: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    products: {
      data: Product[];
    };
  };
};
export interface Attributes {
    title: string;
    price: number;
    instantDelivery: boolean;
    description: Description[];
    banner: Banner;
    category: string;
    created_at: string;
    updated_at: string;
}