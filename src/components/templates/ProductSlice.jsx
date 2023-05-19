import React, {createContext, useState, useEffect}  from 'react';

export const ProductSlice = createContext();

const ProductProvider = ({children}) => {

   const [products, setProducts] = useState([]);

   useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data); 
    }
    fetchProducts();
  }, []);
  return <ProductSlice.Provider value={{products}}>{children}</ProductSlice.Provider>;
};


export default ProductProvider;
