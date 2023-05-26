import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProducts } from "../store/reducers/Products";
import { addToCart } from "../store/reducers/Products";
import { useDispatch, useSelector } from "react-redux";
import { getProductById } from "../store/reducers/Products";

const ProductDetails = () => {
  const { productId } = useParams();
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const product = useSelector((state) => getProductById(state, productId));
  // console.log("ini get byid",product);

  const user = JSON.parse(localStorage.getItem("user"));

  const handleAddToCart = () => {
    const productToCart = {
      ...product,
      quantity: parseInt(quantity),
    };

    for (let i = 0; i < productToCart.quantity; i++) {
      dispatch(addToCart(productToCart));
    }
  };

  useEffect(() => {
    if(!localStorage.getItem('products')) {
    dispatch(getProducts());
    } else {
    const data = JSON.parse(localStorage.getItem('products'));
    dispatch(getProducts(data));
    }
}, [dispatch]);

  if (!product) {
    return (
      <div className="flex items-center flex-col mx-auto w-screen max-w-[1080px]">
        <div className="mt-[8vh] text-center">Loading...</div>
      </div>
    );
  }

  const { id, title, price, image, category, description, rating, qty } = product;

  return (
    <>
      <div className="w-full items-center grid grid-rows-3 grid-flow-col gap-4">
        <div class="row-span-3 w-[500px] mx-auto">
          <img src={image} alt={title} className="max-h-[500px] mx-auto" />
        </div>
        <div class="col-span-2">
          <p className="text-sm font-semibold mb-2 ">{category}</p>
          <h2 className="text-2xl font-semibold mb-10">{title}</h2>
        </div>
        <div class="col-span-2 w-[900px] mx-auto text-justify">
          <p className="mt-4">{description}</p>
          <p className="text-gray-800 text-lg font-semibold">Stock: {qty}</p>
          <p className="text-gray-800 text-lg font-bold mt-1">${price}</p>
          <button
            className="col-span-2 w-[350] mx-auto mt-4 bg-primary text-white py-2 px-4 rounded-md"
            onClick={() => {
              if (!user.token) {
                navigate("/login");
              }
              handleAddToCart(addToCart(product));
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
