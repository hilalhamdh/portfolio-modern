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
      <div className="md:px-25 p-4 bg-purple-50 fixed top-0 w-full z-50 shadow-md">
        {" "}
        {/* <--- Perubahan Kunci: fixed top-0 w-full z-50 */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="/logo.png"
              alt="Logo"
              className="w-10 h-10 rounded-full"
            />
            <h2 className="text-xl font-bold pl-3 text-purple-800">
              Creative Course
            </h2>
          </div>
          <div>
            <ul className="hidden md:flex items-center gap-6 cursor-pointer">
              <li className="text-purple-800 text-md font-semibold hover:text-purple-600">
                Product
              </li>
              <li className="text-purple-800 text-md font-semibold hover:text-purple-600">
                About
              </li>
            </ul>
          </div>

          <div className="flex items-center space-x-4">
            {/* Desktop Login Button */}
            <div className="relative text-purple-800">
              <Link to="cartpages">
                <SlBasketLoaded size={30} />
                {cartItems.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                    {cartItems.length}
                  </span>
                )}
              </Link>
            </div>

            <div className="hidden md:block">
              <Link
                to="/login"
                className="bg-purple-700 text-white px-6 py-2 rounded hover:bg-purple-500 transition-all"
              >
                Member
              </Link>
            </div>

            {/* Toggle Button */}
            <div className="md:hidden">
              {toggle ? (
                <TfiClose
                  onClick={() => setToggle(false)}
                  className="w-6 h-6 cursor-pointer text-purple-800"
                />
              ) : (
                <TfiAlignJustify
                  onClick={() => setToggle(true)}
                  className="w-6 h-6 cursor-pointer text-purple-800"
                />
              )}
            </div>
          </div>
        </div>
        {/* Toggle Menu Mobile */}
        {toggle && (
          <div className="flex flex-col bg-purple-100 p-4 mt-3 rounded shadow-md md:hidden">
            <Link
              to="/product"
              className="bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-500 transition mb-2"
            >
              Product
            </Link>
            <Link
              to="/about"
              className="bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-500 transition mb-2"
            >
              About
            </Link>
            <Link
              to="/login"
              className="bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-500 transition mb-2"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-500 transition mb-2"
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
