import { Children, createContext, useState } from "react";
import PRODUCTS from "../shopdata.json";

export const ProductContext = createContext({
  prduct: [],
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS);
  const value = { products };
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
