import React from "react";
import { Link } from "react-router-dom";

import CartItem from "../templates/CartItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div>
      <div>Header</div>
      <Link to={`/CartItem`} className="h-10 w-12">
      <FontAwesomeIcon icon={faBagShopping} size="lg" />
      </Link>
    </div>
  );
};

export default Header;
