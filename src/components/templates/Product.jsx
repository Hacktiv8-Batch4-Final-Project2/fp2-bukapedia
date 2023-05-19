// eslint-disable-next-line
import React, { useContext } from "react";

import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faEye } from "@fortawesome/free-solid-svg-icons";

const Product = ({ product }) => {
  console.log(product);
  // eslint-disable-next-line
  const { id, title, price, image, category, description, rating } = product;
  return (
    <div>
      <div
        className="border border-[#e4e4e4] h-[300px] mb-4 relative 
    overflow-hidden group transition"
      >
        <div className="w-full h-full flex justify-center items-center">
          {/* image */}
          <div className="w-[200px] mx-auto flex justify-center items-center">
            <img
              className="max-h-[160px] group-hover:scale-110 transition duration-300"
              src={image}
              alt={title}
            />
          </div>
        </div>
        {/* buttons */}
        <div className="absolute top-2 right-2 group-hover:right-5 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all">
          <button>
            <div
              className="flex justify-center items-center
            text-white w-10 h-10 bg-green-500"
            >
              <FontAwesomeIcon icon={faPlus} />
            </div>
          </button>
          <Link
            to={`/product/${id}`}
            className="w-10 h-10 bg-white flex justify-center items-center text-primary drop-shadow-xl"
          >
            <FontAwesomeIcon icon={faEye} />
          </Link>
        </div>
      </div>
      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas rem distinctio, ipsum, voluptate tenetur a, laboriosam hic nam aut atque nemo pariatur neque! Sed, aliquam fugit eos beatae cumque nemo.</div>
    </div>
  );
};

export default Product;
