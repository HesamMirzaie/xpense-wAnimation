import React, { useState, useEffect } from 'react';

import { header } from '../data';

import { HiMenuAlt4, HiOutlineX } from 'react-icons/hi';

import MobileNav from './MobileNav';

import Nav from '../components/Nav';

const Header = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const { logo, btnText } = header;

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });

  return (
    <header
      className={`${
        isActive ? ' bg-white shadow-2xl' : 'lg:top-[60px]'
      } py-6 lg:py-4 fixed w-full z-10`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="/" data-aos="fade-down" data-aos-delay="1000">
          <img src={logo} alt="" />
        </a>
        {/* nav - inittialy hidden - show on desktop mode */}
        <div
          className=" hidden lg:flex"
          data-aos="fade-down"
          data-aos-delay="1200"
        >
          <Nav />
        </div>
        {/* ctn button - itittially hidden - show on desktop mode */}
        <button
          className=" btn btn-sm btn-outline hidden lg:flex"
          data-aos="fade-down"
          data-aos-delay="1400"
        >
          {btnText}
        </button>
        {/* mobile nav trigger btn - hidden on desktop mode  */}
        <button className=" lg:hidden" onClick={() => setMobileNav(!mobileNav)}>
          {mobileNav ? (
            <HiOutlineX className=" text-3xl text-accent" />
          ) : (
            <HiMenuAlt4 className=" text-3xl text-accent" />
          )}
        </button>
        {/* mobile nav - hidden on desktop */}
        <div
          className={`${
            mobileNav ? 'left-0' : '-left-full'
          } fixed top-0 bottom-0 w-[60vw] lg:hidden transition-all `}
        >
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
