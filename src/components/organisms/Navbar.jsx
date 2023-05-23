import { Link } from 'react-router-dom';
import React from 'react';

const Navbar = () => {
  return (
    <div className="mx-auto fixed inset-x-0 z-50 font-semibold font-balto">
      <div className="bg-[#f1f3f2] w-full flex items-center justify-center mx-auto">
        <div className="max-w-[1080px] mx-5 flex flex-row items-center  h-[5vh]"></div>
        <nav className="flex flex-row items-center justify-between font-balto">
          <div className="mx-4">Home</div>
          <div className="mx-4">Login</div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
