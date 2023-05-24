import React, {useState} from "react";
import { useParams } from "react-router-dom";
import { addToCart } from "../store/reducers/Products";
import { useDispatch, useSelector } from "react-redux";
import { getProductById } from "../store/reducers/Products";

const ProductDetails = () => {
  const { productId } = useParams();
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const product = useSelector((state) => getProductById(state, productId));

  const handleAddToCart = () => {

  const productToCart = {
    ...product,
    quantity: parseInt(quantity),
  };

  for (let i = 0; i < productToCart.quantity; i++) {
    dispatch(addToCart(productToCart));
  }
};

  if (!product) {
    return (
      <div className="flex items-center flex-col mx-auto w-screen max-w-[1080px]">
        <div className="mt-[8vh] text-center">Loading...</div>
      </div>
    );
  }

  const { id, title, price, image, category, description, rating } = product;

  return (
    <>
      <div className="w-full items-center grid grid-rows-3 grid-flow-col gap-4">
        <div class="row-span-3 w-[500px] mx-auto">
          <img src={image} alt={title} 
          className="max-h-[500px] mx-auto"/>
        </div>
        <div class="col-span-2">
         <h2 className="text-2xl font-semibold mb-10">
          {title}
          </h2> 
        </div>
        <div class="col-span-2 w-[900px] mx-auto text-justify">
          <p className="mt-4">
            {description}
          </p>
          <p className="text-gray-800 text-lg font-bold mt-4">
              ${price}
            </p>
          
          </div>
        <div class="row-span-2 col-span-2 w-[350] mx-auto">
          <button onClick={handleAddToCart}>

          </button>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
