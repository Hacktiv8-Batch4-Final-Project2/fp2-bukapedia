import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { SidebarContext } from '../../context/SidebarContext';
import CartItem from '../templates/CartItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faHouse } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const location = useLocation();
  const user = JSON.parse(localStorage.getItem('user'));
  const { isSidebarOpen, setIsSidebarOpen } = useContext(SidebarContext);

  return (
    <header className="bg-primary py-4">
      <div className="container mx-auto flex items-center h-full">
        <Link to={'/'}>
          <FontAwesomeIcon
            icon={faHouse}
            size="2xl"
            style={{ color: '#ffffff' }}
          />
        </Link>
        <div className="text-white text-xl font-semibold ml-3">
          <Link to={'/'}>
              Product
          </Link>
        </div>
        {
          user?.token ? (
            <div className="text-white text-xl font-semibold ml-3">
              <Link to={'/login'}>
                Login
              </Link>
            </div>
          ) : (
            <div className="text-white text-xl font-semibold ml-3">
              <button onClick={() => {
                localStorage.removeItem('user')
                window.location.reload()
              }}>Logout</button>
            </div>
          )
        }

        {location.pathname === '/admin' ? null : (
          <div
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="cursor-pointer justify-end ml-auto w-8 h-8 flex items-center"
          >
            <FontAwesomeIcon
              icon={faBagShopping}
              size="2xl"
              style={{ color: '#ffffff' }}
            />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
