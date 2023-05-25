import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Product from "../components/templates/Product";
import { getProducts } from "../components/store/reducers/Products";
import { addToRekapPenjualan } from "../components/store/reducers/Products";

import { useSelector, useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { products, isLoading, rekapPenjualan } = useSelector((state) => state.products);
  const { user } = useSelector((state) => state.login);
  

  useEffect(() => {
  if (!localStorage.getItem('user')) {
    localStorage.setItem("user", JSON.stringify({admin: false, token: null, username: null, password: null}))
  }
  if(user?.admin === true) {
    navigate('/admin')
  }
  if(rekapPenjualan.length < 1) {
    if(!localStorage.getItem('rekapPenjualan')) {
      return
    }
    dispatch(addToRekapPenjualan(JSON.parse(localStorage.getItem('rekapPenjualan'))));
  }
  }, []);

  useEffect(() => {
    if(!localStorage.getItem('products')) {
      dispatch(getProducts());
    } else {
      const data = JSON.parse(localStorage.getItem('products'));
      dispatch(getProducts(data));
    }
  }, [dispatch]);

  console.log(products);

    return (
      <div>
        <section className="py-16">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
              {isLoading ? "loading" : products.map((product) => <Product key={product.id} product={product} />)}
            </div>
          </div>
        </section>
      </div>
    );
}

export default Home