import { useState } from "react";

import { TfiAlignJustify, TfiClose } from "react-icons/tfi";
import { RiSearchLine } from "react-icons/ri";
import Hilal from "/logo.png";
import { GrBook } from "react-icons/gr";
import { BiBell } from "react-icons/bi";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineVideoSettings, MdOutlineContactMail } from "react-icons/md";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [query, setQuery] = useState("");

  return (
    <div className="">
      <div className="flex  justify-between items-center border-b-1 h-20 border-b-white shadow-lg  bg-gray-200">
        <div className="md:hidden absolute  top-7  mx-2 ">
          {!toggle ? (
            <TfiAlignJustify
              onClick={() => setToggle(true)}
              className="w-6 h-6 cursor-pointer float-left text-black "
            />
          ) : (
            <TfiClose
              onClick={() => setToggle(false)}
              className="hidden  w-6 h-6 cursor-pointer float-right text-black "
            />
          )}

          {toggle && (
            <div className="flex flex-col bg-gray-300 p-2 rounded-sm shadow-lg fixed">
              <div className="flex justify-between border-b-2 border-gray-200 shadow-md h-30">
                <img
                  src={Hilal}
                  className="w-[80px] h-[80px] bg-gray-300 p-3 rounded-full ml-5"
                />
                <TfiClose
                  onClick={() => setToggle(false)}
                  className="flex  w-4 h-4 cursor-pointer text-black   "
                />
              </div>

              <div className="mt-5 h-screen">
                <h1 className="bg-purple-600 text-xl text-white px-3 h-12  mx-3 rounded-md  items-center  flex  gap-3">
                  <GrBook size={30} />
                  ALL Courses
                </h1>
                <ul className="flex flex-col mx-5  gap-4 font-semibold mt-5 ">
                  <li className="flex px-2 items-center rounded-md gap-3 mr-2 transition-all ease-in-out hover:scale-110 border-b-2 border-gray-400 hover:bg-purple-600 text-gray-700 hover:text-white">
                    <IoHomeOutline />
                    <a href="/home">Home</a>
                  </li>

                  <li className="flex gap-3 mr-2 rounded-md px-2 items-center transition-all ease-in-out hover:scale-110 border-b-2 border-gray-400 text-gray-700 hover:bg-purple-600 hover:text-white ">
                    <MdOutlineVideoSettings />
                    <Link to="/videopage">Learning Video</Link>
                  </li>
                  <li className="flex gap-3 mr-2 rounded-md px-2 items-center transition-all ease-in-out hover:scale-110 border-b-2 border-gray-400 text-gray-700 hover:bg-purple-600 hover:text-white">
                    <MdOutlineContactMail />
                    <a href="contact">Contact Us</a>
                  </li>
                </ul>
                <div className="flex items-center mt-[300px] border-b-2 border-gray-200">
                  <button
                    type="submit"
                    className="w-50 h-8 bg-gray-600 text-white rounded-md text-center "
                  >
                    <Link to="/utama">Logout</Link>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="w-full max-w-md pl-10  md:px-4 ">
          <div className="flex items-center border border-gray-300 rounded-md bg-white shadow-sm">
            <input
              type="search"
              placeholder="Search..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full px-4 py-2 outline-none"
            />
            <button className="p-2 text-gray-500 hover:text-gray-700">
              <RiSearchLine size={20} />
            </button>
          </div>
        </div>
        <div className="flex items-center mr-2 md:gap-3 gap-1">
          <BiBell size={30} className="text-gray-500 cursor-pointer" />
          <button
            type="submit"
            className="w-23 md:w-30 bg-purple-600 text-sm rounded-sm text-white h-8 cursor-pointer hover:bg-purple-500"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
