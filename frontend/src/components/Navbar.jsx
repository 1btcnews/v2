import { BiMenuAltRight } from "react-icons/bi";
import { RiCloseCircleLine } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { logout } from '../../src/redux/features/auth/authSlice.js';

const navlists = [
  { name: 'Bitcoin', link: "https://1btcnews.com/blog/Bitcoin-Exploration" },
  { name: 'Ethereum', link: "https://1btcnews.com/" },
  { name: 'Alcoin', link: "https://1btcnews.com/blog/The-2024-Report-of-the-People's-Bank-of-China-was-released!-Included-Are-Bitcoin-and-Other-Cryptocurrencies!" },
  { name: 'Contact Us', link: "/contact-us" },
  
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem('token');
  };

  return (
    <header className='py-3 bg-gray-800'>
    <div class="tradingview-widget-container__widget"></div>
      <nav className='container  mx-auto flex justify-between px-4'>
        <a href="/">
          <img src="/logo.png" alt="logo" className='h-20' />
        </a>
        <ul className='sm:flex hidden items-center gap-8'>
          {navlists.map((list, index) => (
            <li key={index} className='mx-4 navliste'>
              <a href={list.link} target="_blank" rel="noopener noreferrer">{list.name}</a>
            </li>
          ))}
          {user ? (
            <>
              {user.role === 'admin' && (
                <li className="navliste">
                  <NavLink to="/dashboard" className='text-white'><button className="text-white bg-[#ff4221] rounded-md px-4 py-2 hover:bg-[#ff4221]">Dashboard</button></NavLink>
                </li>
              )}
              {user.role === 'user' && (
                <li className="navliste">
                  <NavLink to="/profile" className='text-white'>
                    <FaUserCircle className="inline-block text-2xl" />
                  </NavLink>
                </li>
              )}
              <li className="navliste">
                <NavLink onClick={handleLogout} className='text-white'><button className="text-white bg-[#ff4221] rounded-md px-4 py-2 hover:bg-[#ff4221]">Logout</button></NavLink>
                
              </li>
            </>
          ) : (
            <li className="navliste">
              <NavLink to="/login" className='text-white'><button className="text-white bg-[#ff4221] rounded-md px-4 py-2 hover:bg-[#ff4221]">Login</button></NavLink>
            </li>
          )}
        </ul>

        <div className="flex items-center sm:hidden">
          <button
            onClick={toggleMenu}
            className='flex items-center px-3 py-4 rounded text-sm text-white'
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <RiCloseCircleLine className="size-6" /> : <BiMenuAltRight className="size-6" />}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <ul className='fixed top-[150px] left-0 w-full h-auto pb-8 border-b-gray-900 bg-gray-800 shadow-sm z-50'>
          <li className="text-[#ff4221] text-3xl font-bold m-6 mx-8">Menu</li>
          {navlists.map((list, index) => (
            <li key={index} className='mx-4 mt-5 px-4 navliste'>
              <a
                href={list.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
              >
                {list.name}
              </a>
            </li>
          ))}
          {user ? (
            <>
              {user.role === 'admin' && (
                <li className="mx-5 mt-7 px-5 navliste">
                  <NavLink to="/dashboard" onClick={() => setIsMenuOpen(false)} > <button className="text-white bg-[#ff4221] rounded-md px-4 py-2 hover:bg-[#ff5821] ">Dashboard</button></NavLink>
                </li>
              )}
              {user.role === 'user' && (
                <li className="mx-5 mt-7 px-5 navliste">
                  <NavLink to="/profile" onClick={() => setIsMenuOpen(false)} className='text-white'>
                    <FaUserCircle className="inline-block text-2xl" />
                  </NavLink>
                </li>
              )}
              <li className="mx-5 mt-7 px-5 navliste">
                <NavLink onClick={() => { handleLogout(); setIsMenuOpen(false); }} className='text-white'><button className="text-white bg-[#ff4221] rounded-md px-4 py-2 hover:bg-[#ff6e3e]">Logout</button></NavLink>
              </li>
            </>
          ) : (
            <li className="mx-5 mt-7 px-5 navliste">
              <NavLink to="/login" onClick={() => setIsMenuOpen(false)} className='text-white'><button className="text-white bg-[#ff4221] rounded-md px-4 py-2 hover:bg-[#ff8351]">Login</button></NavLink>
            </li>
          )}
        </ul>
      )}
    </header>
  );
};

export default Navbar;
