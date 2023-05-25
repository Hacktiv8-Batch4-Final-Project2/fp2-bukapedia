import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/reducers/Products";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const cart = useSelector((state) => state.products.cart);

  const handleChange = (e) => {
    const newCart = cart.map((product) => {
      if (product.id === item.id) {
        
        console.log(item.title, Number(e.target.value));
      }
      return product;
    })
    // dispatch(addToCart(newCart));
  };
  
  return (
    <div className="flex" key={item.id}>
      <div className="w-full min-h-[150px] flex items-center gap-x-4">
        <img
          src={item.image}
          alt={item.title}
          className="max-h-[80px] max-w-[80px] mt-4 mr-10"
        />
        <div className="w-full flex flex-col">
          <div className="flex justify-between mb-2">
          <p className="text-sm uppercase font-medium max-w-[240px] tetx-primary hover:underline">
            {item.title}
          </p>
          </div>
          <div>$ {item.price}</div>
          <div>{item.quantity}</div>
          <div><input placeholder={item.quantity} onChange={(e) => {
            handleChange(e)
          }} /></div>
        </div>
        </div>
      </div>

  );
};

export default CartItem;
