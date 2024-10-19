import React from 'react';
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/logo.png";

type Props = {
  text: string; 
  href: string;
}

const NavItem = ({ href, text }: Props) => {
  return (
    <li className="relative">
      <Link 
        href={href} 
        className="
          text-white 
          inline-block 
          transition-all
          duration-300
          hover:text-blue-300
        "
      >
        <span className="relative">
          {text}
          <span className="
            absolute 
            left-0 
            bottom-0 
            w-full 
            h-0.5 
            bg-blue-300
            transform
            scale-x-0
            transition-transform
            duration-300
            origin-left
            group-hover:scale-x-100
          "></span>
        </span>
      </Link>
    </li>
  );
};

const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-[100px] z-50 mx-auto w-full absolute top-0 left-0 right-0 px-[50px] bg-white bg-opacity-5 ">
      <div className="flex-1 justify-start items-center flex z-10 ">
        <a href="/"> <Image src={Logo} alt="logo" width={130} height={60} className="" /></a> 
        <span className="text-white text-4xl ml-3 font-bold"><span className='font-light'>Z</span><span className="text-xl text-white font-normal">- Supercars</span></span>
      </div>
      <nav className="flex justify-center align-middle w-full flex-1 hidden">
        <ul className="flex justify-start gap-4 items-center h-full">
          <NavItem href="/" text="Home" />
          <NavItem href="/technology/" text="Technology" />
          <NavItem href="/allCars" text="All Cars" />
          <NavItem href="/" text="AI to Reduce" />
        </ul>
      </nav>
      <div className="header-buttons flex justify-end gap-4 items-center flex-1">
        <a href='/register' className="rounded-full text-white p-2 hover:text-blue-300 transition-colors duration-300">Register</a>
        <a href='/login' className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300">Login</a>
      </div>
    </div>
  );
};

export default Navbar;