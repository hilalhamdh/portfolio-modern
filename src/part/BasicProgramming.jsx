import { useState } from "react";
import { TfiAlignJustify, TfiClose } from "react-icons/tfi";
import { Link, useNavigate } from "react-router-dom";
import { basic } from "../../data";
import { useSelector } from "react-redux";
import { SlBasketLoaded } from "react-icons/sl";
import Footer from "../components/Footer";
import Newsletter from "../pages/Newsletter";

function BasicProgramming() {
  const [toggle, setToggle] = useState(false);
  const cartItems = useSelector((state) => state.cart.items);
  const navigate = useNavigate();

  const handleItemClick = (slug) => navigate(`/materi/${slug}`);
  const handleItemClik = () => navigate("/");

  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* Navbar */}
      <div className="p-4 bg-gray-200 shadow-sm fixed top-0 left-0 w-full z-50">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/logo.png"
              alt="Logo"
              className="w-10 h-10 rounded-full"
            />
            <h2
              onClick={handleItemClik}
              className="text-xl font-bold pl-3 text-sky-950 cursor-pointer"
            >
              Creative Course
            </h2>
          </div>

          {/* Menu Desktop */}
          <ul className="hidden md:flex items-center gap-6 cursor-pointer">
            <li className="text-sky-950 text-md font-semibold hover:text-sky-700">
              Product
            </li>
            <li className="text-sky-950 text-md font-semibold hover:text-sky-700">
              About
            </li>
          </ul>

          {/* Aksi kanan */}
          <div className="flex items-center space-x-4">
            {/* Cart */}
            <div className="relative">
              <Link to="cartpages">
                <SlBasketLoaded size={30} />
                {cartItems.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                    {cartItems.length}
                  </span>
                )}
              </Link>
            </div>

            {/* Member Button */}
            <div className="hidden md:block">
              <Link
                to="/login"
                className="bg-sky-950 text-white px-6 py-2 rounded hover:bg-sky-700 transition-all"
              >
                Member
              </Link>
            </div>

            {/* Toggle Mobile */}
            <div className="md:hidden">
              {toggle ? (
                <TfiClose
                  onClick={() => setToggle(false)}
                  className="w-6 h-6 cursor-pointer"
                />
              ) : (
                <TfiAlignJustify
                  onClick={() => setToggle(true)}
                  className="w-6 h-6 cursor-pointer"
                />
              )}
            </div>
          </div>
        </div>

        {/* Menu Mobile */}
        {toggle && (
          <div className="flex flex-col bg-gray-300 p-4 mt-3 rounded shadow-md md:hidden space-y-2">
            <Link
              to="/product"
              className="bg-sky-950 text-white px-4 py-2 rounded hover:bg-sky-700 transition"
            >
              Product
            </Link>
            <Link
              to="/about"
              className="bg-sky-950 text-white px-4 py-2 rounded hover:bg-sky-700 transition"
            >
              About
            </Link>
            <Link
              to="/login"
              className="bg-sky-950 text-white px-4 py-2 rounded hover:bg-sky-700 transition"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition"
            >
              Register
            </Link>
          </div>
        )}
      </div>

      {/* Main Content */}
      <main className="flex-1 px-4 sm:px-8 md:px-12 py-6 mt-20">
        {/* Header Info */}
        <div className="mb-6">
          <h1 className="text-sm sm:text-md font-bold text-purple-700">
            <span className="border-b-2 border-purple-700">Kategori</span>
            <span className="text-md font-semibold"> &gt; </span>
            <span className="text-purple-700">Pemrograman</span>
          </h1>

          <p className="mt-2 text-2xl sm:text-3xl font-bold text-gray-900">
            Ini dia yang kamu cari 💻
          </p>
          <p className="text-sm text-gray-400 mt-2">
            Ada 10 artikel dalam kategori Pemrograman.
          </p>
        </div>

        {/* Grid Artikel */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {basic.map((item) => (
            <div
              key={item.id}
              onClick={() => handleItemClick(item.slug)}
              className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition cursor-pointer"
            >
              <div className="p-4">
                {/* Gambar responsif */}
                <div className="w-full aspect-[16/9] overflow-hidden rounded-md">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <h2 className="text-base sm:text-lg pt-3 font-semibold text-gray-800 line-clamp-2">
                  {item.title}
                </h2>
                <p className="text-sm text-gray-500 mt-2 line-clamp-3">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Newsletter & Footer */}
      <Newsletter />
      <Footer />
    </div>
  );
}

export default BasicProgramming;
