'use client'

import { createContext ,useState } from 'react';
import { Product } from '../_types';

export type CartContextType = {
  cart: Product[];
  setCart: (value: Product[] | ((prev: Product[]) => Product[])) => void
}

// export const CartContext = createContext<CartContextType>({
//   cart: [],
//   setCart: (value: Product[] | ((prev: Product[]) => Product[])) => {}
// });

export const CartContext = createContext<CartContextType>({
  cart: [],
  setCart: () => {}
}
)


export const CartProvider = ({children}: {children: React.ReactNode}) => {
  const [cart, setCart] = useState<Product[]>([]);
  return (
    <CartContext.Provider value={{cart,setCart}} >
      {children}
    </CartContext.Provider>
  );
}
