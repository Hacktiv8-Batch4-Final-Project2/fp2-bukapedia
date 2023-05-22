import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import {CartItem} from "../templates/CartItem";
import { SidebarContext } from "../../context/SidebarContext";


const Sidebar = () => {
  const { isSidebarOpen, handleCloseSidebar  } = useContext(SidebarContext);

  return (
    <div
      className={`${
        isSidebarOpen ? "right-0" : "-right-full"
      } w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}
    >
      <div className="flex items-center justify-between py-6 border-b">
        <div className="uppercase text-sm font-semibold">
          Shoping Bag(0)
        </div>
        <div onClick={handleCloseSidebar} className="cursor-pointer w-8 h-8 flex justify-center items-center">
        <FontAwesomeIcon icon={faArrowRight} size="lg" />
        </div>
        </div>
    </div>
  );
};

export default Sidebar;
