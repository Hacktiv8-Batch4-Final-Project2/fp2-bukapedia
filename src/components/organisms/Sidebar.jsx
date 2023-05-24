import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch ,useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import CartItem from "../templates/CartItem";
import { SidebarContext } from "../../context/SidebarContext";
import { addToRekapPenjualan, clearCart } from "../store/reducers/Products";
import { getProducts } from "../store/reducers/Products";


const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [products, setProducts] = useState(() => JSON.parse(localStorage.getItem('products')))
  const { isSidebarOpen, handleCloseSidebar  } = useContext(SidebarContext);
  const cart = useSelector((state) => state.products.cart);

  const handleCheckout = () => {
    navigate('/')
    dispatch(addToRekapPenjualan(cart))
    addToRekapPenjualan(cart)
    dispatch(clearCart())
    const newProduct = products.map((item) => {
        cart?.map((cartItem) => {
          if (item.id === cartItem.id) {
            item.qty = item.qty - cartItem.quantity
          }
        })
        return item
    })
    setProducts(newProduct)
    localStorage.setItem('products', JSON.stringify(newProduct));
    dispatch(getProducts(newProduct))
    
  }

  return (
    <div
      className={`${
        isSidebarOpen ? "right-0" : "-right-full"
      } w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}
    >
      <div className="flex items-center justify-between py-6 border-b mb-6">
        <div className="uppercase text-sm font-semibold">
          Shoping Bag(0)
        </div>
        <div onClick={handleCloseSidebar} className="cursor-pointer w-8 h-8 flex justify-center items-center">
          <FontAwesomeIcon icon={faArrowRight} size="lg" />
        </div>
      </div>
      <div className="overflow-x-auto">
        {cart.length === 0 ? (
          <div className="flex justify-center items-center h-[300px]">
            <div className="text-center">
              <div className="text-2xl font-semibold mb-2">Your cart is empty</div>
              <div className="text-sm text-gray-500">
                Looks like you haven't added any items to the cart yet.
              </div>
            </div>
          </div>
        ) : (
          cart.map((item) => <CartItem key={item.id} item={item} />)
        )}
      </div>
      <div className="fixed bottom-0 border-t border-b mt-6">
        <div className="flex py-4 border-t justify-end">
          <button className="rounded px-10 py-2 bg-blue-700 text-white right-0" onClick={() => {
            handleCheckout()
            handleCloseSidebar()
          }} >Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
