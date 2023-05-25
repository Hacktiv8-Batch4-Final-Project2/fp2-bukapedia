// eslint-disable-next-line
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { addToCart } from "../store/reducers/Products";
import { setToken } from '../store/reducers/Login'

import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faEye } from "@fortawesome/free-solid-svg-icons";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = JSON.parse(localStorage.getItem("user"));
  const { user } = useSelector((state) => state.login);
  if(!user?.token) {
    dispatch(setToken(login))
  }
  const { id, title, price, image, category, description, rating } = product;
  if (product.qty > 0) {
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
            <button onClick={() => {
              if (!user?.token) {
                navigate("/login")
                return
              }
              dispatch(addToCart(product));
            }} >
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
        <div>
          <div className="text-sm capitalize text-gray-500 mb-1 ">{category}</div>
          <Link to={`/product/${id}`}>
            <h2 className="font-semibold mb-1">{title}</h2>
          </Link>
          <div className="font-semibold">$ {price}</div>
        </div>
      </div>
    );
  }
};

export default Product;
