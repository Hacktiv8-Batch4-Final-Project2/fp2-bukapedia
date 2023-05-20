import React, { useEffect } from "react";
import Product from "../components/templates/Product";
import { getProducts } from "../components/store/reducers/Products";

import { useSelector, useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const { products, isLoading } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
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