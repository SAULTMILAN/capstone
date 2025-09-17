"use client";

import { motion } from "framer-motion";
import Header from "./Components/Header";

export default function WomenLandingPage() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* 🔹 Global Header */}
      <Header />

      {/* 🔹 Hero Section */}
      <section
        className="relative h-[80vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
      >
        <div className="bg-black/40 absolute inset-0"></div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center text-white px-4"
        >
          <motion.h1
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-lg"
          >
            Discover Your Style
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-lg md:text-xl mb-6"
          >
            Trendy collections crafted just for you.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-2xl px-8 py-3 text-lg shadow-lg transition"
          >
            Shop Now
          </motion.button>
        </motion.div>
      </section>

      {/* 🔹 Collections Section */}
      <section className="py-20 px-6 md:px-20 bg-gradient-to-b from-gray-50 to-white">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-14"
        >
          Our Collections
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
             { title: "Men", image: "/images/Men.jpg" },
              { title: "Women", image: "/images/Women.jpg" },
               { title: "Wedding", image: "/images/Wedding.jpg" },
            { title: "Footwear", image: "/images/footwear.jpg" },
            { title: "Party Wear", image: "/images/party.jpg" },
            { title: "Accessories", image: "/images/accessories.jpg" },
            { title: "Signature Series", image: "/images/Signature.jpg" },
            { title: "Jewelry", image: "/images/Jewelry.jpg" },
            { title: "Bridal", image: "/images/Bridal.jpg" },
          
          ].map((collection, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: idx * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="overflow-hidden shadow-lg rounded-2xl bg-white hover:shadow-2xl transition"
            >
              <img
                src={collection.image}
                alt={collection.title}
                className="w-full h-80 object-cover transform hover:scale-110 transition duration-500"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-3">{collection.title}</h3>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="border border-gray-400 text-gray-700 hover:bg-gray-100 rounded-lg px-5 py-2 transition"
                >
                  Explore
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🔹 CTA Banner */}
      <section className="bg-gradient-to-r from-pink-500 to-red-500 py-20 text-center text-white">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Exclusive Discounts for New Arrivals
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-6 text-lg"
        >
          Sign up and get <span className="font-bold">20% off</span> your first order
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.1, backgroundColor: "#e60073" }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-pink-600 hover:text-white hover:bg-pink-700 font-semibold rounded-2xl px-8 py-3 text-lg shadow-lg transition"
        >
          Sign Up
        </motion.button>
      </section>

      {/* 🔹 Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 px-8 md:px-20">
          {/* Customer Care */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">CUSTOMER CARE</h4>
            <ul className="space-y-2 text-sm">
              <li>Orders & Shipment</li>
              <li>Returns & Exchange</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* About Us */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">ABOUT US</h4>
            <ul className="space-y-2 text-sm">
              <li>Our Story</li>
              <li>Careers</li>
              <li>Blog</li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">CATEGORIES</h4>
            <ul className="space-y-2 text-sm">
              <li>Women</li>
              <li>Men</li>
              <li>Wedding</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">LEGAL</h4>
            <ul className="space-y-2 text-sm">
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Cookie Policy</li>
              <li>Shipping Policy</li>
            </ul>
          </div>
        </div>

        {/* Need Help Section */}
        <div className="mt-10 text-center text-sm space-y-2">
          <p>📍 <a href="https://maps.google.com" target="_blank" className="underline">Store Locator</a></p>
          <p>✉️ <a href="mailto:rahimkhan231205@gmail.com" className="underline">Email Us</a></p>
          <p>💬 <a href="https://wa.me/14378796445?text=Hi%20KC" target="_blank" className="underline">WhatsApp / Call</a></p>
          <p>📅 <a href="/book-appointment" className="underline">Book Appointment</a></p>
        </div>

        <div className="text-center mt-8 text-gray-500 text-xs">
          © 2025 MyClothing. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
