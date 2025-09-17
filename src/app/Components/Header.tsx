"use client";
import { FaHeart, FaShoppingCart, FaSearch, FaCommentDots } from "react-icons/fa";

export default function Header() {
  return (
    <>
      <div className="bg-navy text-ivory text-sm text-center py-2 tracking-wide">
        Free Shipping on Orders Over $100 | Luxury Experience with <span className="font-semibold text-gold">Royal Threads</span>
      </div>

      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="flex justify-between items-center px-6 py-4">
          <select className="border border-gold px-2 py-1 rounded text-sm focus:outline-none text-navy">
            <option>Ship to: Canada</option><option>Ship to: USA</option><option>Ship to: India</option>
          </select>

          <a href="/" className="text-3xl font-serif font-bold tracking-wide">
            <span className="text-gold">Royal</span><span className="text-navy">Threads</span>
          </a>

          <div className="flex items-center gap-5">
            <FaSearch className="text-gray-600 hover:text-gold transition" size={18}/>
            <FaHeart className="text-gray-600 hover:text-gold transition" size={18}/>
            <FaShoppingCart className="text-gray-600 hover:text-gold transition" size={18}/>
            <FaCommentDots className="text-gray-600 hover:text-gold transition" size={18}/>
          </div>
        </div>

        <nav className="bg-navy text-ivory text-sm font-medium shadow-inner">
          <ul className="flex justify-center gap-6 py-2">
            <li><a href="/women" className="hover:text-gold transition">Women</a></li>
            <li><a href="/men" className="hover:text-gold transition">Men</a></li>
            <li><a href="/wedding" className="hover:text-gold transition">Wedding</a></li>
            <li><a href="/jewelry" className="hover:text-gold transition">Jewelry</a></li>
            <li><a href="/accessories" className="hover:text-gold transition">Accessories</a></li>
            <li><a href="/signature" className="hover:text-gold transition">Signature Series</a></li>
            <li><a href="/discover" className="hover:text-gold transition">Discover</a></li>
            <li><a href="/sale" className="hover:text-gold transition">Sale</a></li>
          </ul>
        </nav>
      </header>
    </>
  );
}
