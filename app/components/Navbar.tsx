'use client';
import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/logo.png";

type Props = {
  text: string; 
  href: string;
  onClick?: () => void;
}

const NavItem = ({ href, text, onClick }: Props) => {
  return (
    <li className="relative">
      <Link 
        href={href}
        onClick={onClick}
        className="text-white inline-block transition-all duration-300 hover:text-blue-300"
      >
        <span className="relative">
          {text}
          <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-300 transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
        </span>
      </Link>
    </li>
  );
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="z-50 mx-auto w-full absolute top-0 left-0 right-0 bg-white bg-opacity-5">
      {/* Main bar */}
      <div className="flex justify-between items-center h-[80px] md:h-[100px] px-5 md:px-[50px]">
        {/* Logo */}
        <div className="flex items-center z-10">
          <a href="/">
            <Image src={Logo} alt="logo" width={110} height={55} />
          </a>
          <span className="text-white text-3xl ml-2 font-bold">
            <span className="font-light">Z</span>
            <span className="text-lg text-white font-normal">- Supercars</span>
          </span>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex justify-center flex-1">
          <ul className="flex gap-6 items-center">
            <NavItem href="/" text="Home" />
            <NavItem href="/technology/" text="Technology" />
            <NavItem href="/allCars" text="All Cars" />
            <NavItem href="/ai" text="AI to Reduce" />
          </ul>
        </nav>

        {/* Desktop buttons */}
        <div className="hidden md:flex justify-end gap-4 items-center flex-1">
          <a href="/register" className="rounded-full text-white p-2 hover:text-blue-300 transition-colors duration-300">Register</a>
          <a href="/login" className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300">Login</a>
        </div>

        {/* Hamburger button */}
        <button
          className="md:hidden flex flex-col justify-center items-center gap-1.5 p-2 z-10"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-900 bg-opacity-95 px-6 pb-6">
          <ul className="flex flex-col gap-4 pt-4">
            <NavItem href="/" text="Home" onClick={() => setMenuOpen(false)} />
            <NavItem href="/technology/" text="Technology" onClick={() => setMenuOpen(false)} />
            <NavItem href="/allCars" text="All Cars" onClick={() => setMenuOpen(false)} />
            <NavItem href="/ai" text="AI to Reduce" onClick={() => setMenuOpen(false)} />
          </ul>
          <div className="flex gap-4 mt-6">
            <a href="/register" className="text-white hover:text-blue-300 transition-colors duration-300">Register</a>
            <a href="/login" className="bg-blue-500 text-white px-5 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300">Login</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;