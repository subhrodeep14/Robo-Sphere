import { useState } from "react";
import Link from "next/link";
import { FiShoppingCart, FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-900 bg-opacity-90 backdrop-blur-sm z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <a className="text-white text-2xl font-extrabold font-orbitron tracking-wide">
            🤖 RoboBuild
          </a>
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex space-x-8 text-gray-300 font-semibold">
          <li>
            <Link href="/">
              <a className="hover:text-blue-500 transition">Home</a>
            </Link>
          </li>
          <li>
            <Link href="/products">
              <a className="hover:text-blue-500 transition">Products</a>
            </Link>
          </li>
          <li>
            <Link href="/build">
              <a className="hover:text-blue-500 transition">Build Your Robot</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a className="hover:text-blue-500 transition">About</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a className="hover:text-blue-500 transition">Contact</a>
            </Link>
          </li>
        </ul>

        {/* Cart & Hamburger */}
        <div className="flex items-center space-x-4">
          {/* Cart Icon */}
          <button
            aria-label="Cart"
            className="relative text-gray-300 hover:text-blue-500 transition"
          >
            <FiShoppingCart size={24} />
            {/* Cart badge */}
            <span className="absolute -top-2 -right-2 bg-blue-500 text-white rounded-full text-xs px-1.5">
              3
            </span>
          </button>

          {/* Hamburger Menu Button for Mobile */}
          <button
            aria-label="Toggle Menu"
            className="md:hidden text-gray-300 hover:text-blue-500 transition"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-800 bg-opacity-95 backdrop-blur-sm px-6 py-4 space-y-4 font-semibold">
          <Link href="/">
            <a
              onClick={() => setMenuOpen(false)}
              className="block text-white hover:text-blue-500 transition"
            >
              Home
            </a>
          </Link>
          <Link href="/products">
            <a
              onClick={() => setMenuOpen(false)}
              className="block text-white hover:text-blue-500 transition"
            >
              Products
            </a>
          </Link>
          <Link href="/build">
            <a
              onClick={() => setMenuOpen(false)}
              className="block text-white hover:text-blue-500 transition"
            >
              Build Your Robot
            </a>
          </Link>
          <Link href="/about">
            <a
              onClick={() => setMenuOpen(false)}
              className="block text-white hover:text-blue-500 transition"
            >
              About
            </a>
          </Link>
          <Link href="/contact">
            <a
              onClick={() => setMenuOpen(false)}
              className="block text-white hover:text-blue-500 transition"
            >
              Contact
            </a>
          </Link>
        </div>
      )}
    </nav>
  );
}
