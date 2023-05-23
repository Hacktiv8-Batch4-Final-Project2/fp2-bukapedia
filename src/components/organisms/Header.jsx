import React, {useContext} from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

import { SidebarContext } from "../../context/SidebarContext";
import CartItem from "../templates/CartItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faHouse } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const location = useLocation();
  const {isSidebarOpen, setIsSidebarOpen} = useContext(SidebarContext); 

  return (
    <header className="bg-primary py-4">
      <div className="container mx-auto flex items-center justify-between h-full">
      <Link to={'/'}>
        <FontAwesomeIcon icon={faHouse} size="2xl" style={{color: "#ffffff",}} />
      </Link>
      <Link to={'/'} >
        <div className="text-white text-2xl font-semibold">Product</div>
      </Link>
      <Link to={'/login'} >
        <div className="text-white text-2xl font-semibold">Login</div>
      </Link>
      
        {location.pathname === "/admin" ? null : (
          <div onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="cursor-pointer relative">
            <FontAwesomeIcon icon={faBagShopping} size="2xl" style={{color: "#ffffff",}} />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
