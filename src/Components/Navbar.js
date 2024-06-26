"use client"

import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-white p-4 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-black text-2xl font-bold">ChannelConnectPRO</div>
        <div className="hidden text-xl md:flex space-x-6">
          <Link href="/" className="text-black">
            Home
          </Link>
          <Link href="Service" className="text-black">
            Services
          </Link>
          <Link href="About" className="text-black">
            About
          </Link>
          <Link href="Contact" className="text-black">
            Contact Us
          </Link>
        </div>
        <a href="tel:+18008603891" className="hidden md:block bg-yellow-500 text-black py-2 px-4 rounded">
  Call Us
</a>

        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="focus:outline-none">
            <div className={`hamburger ${isOpen ? "open" : ""}`}>
              <span className="block w-6 h-0.5 bg-black mb-1"></span>
              <span className="block w-6 h-0.5 bg-black mb-1"></span>
              <span className="block w-6 h-0.5 bg-black"></span>
            </div>
          </button>
        </div>
      </div>
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden p-4`}
      >
        <Link href="/" className="block text-black py-2" onClick={closeMenu}>
          Home
        </Link>
        <Link href="Service" className="block text-black py-2" onClick={closeMenu}>
          Services
        </Link>
        <Link href="About" className="block text-black py-2" onClick={closeMenu}>
          About
        </Link>
        <Link href="Contact" className="block text-black py-2" onClick={closeMenu}>
          Contact Us
        </Link>
        <button className="w-full bg-yellow-500 text-black py-2 mt-2 rounded">
          Call Me
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
