import { useState } from "react";
import { Link } from "react-router-dom";
import { TfiAlignJustify, TfiClose } from "react-icons/tfi";
import { RiSearchLine } from "react-icons/ri";
import Hilal from "/hil.jpg";
import { GrBook } from "react-icons/gr";
import { BiBell } from "react-icons/bi";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [query, setQuery] = useState("");
  return (
    <div className="">
      <div className="flex  justify-between items-center border-b-1 h-20 border-b-white  bg-gray-200">
        {/* <div className="flex">
          <ul className="flex items-center flex-row gap-4 font-semibold">
            <li className="mr-4 transition-all ease-in-out hover:scale-110">
              <Link to="/home">Home</Link>
            </li>
            <li className="mr-4 transition-all ease-in-out hover:scale-110">
              <Link to="about">About Me</Link>
            </li>

            <li className="mr-4 transition-all ease-in-out hover:scale-110">
              <a href="">Materi Video</a>
            </li>
            <li className="mr-4 transition-all ease-in-out hover:scale-110">
              <a href="contact">Contact Me</a>
            </li>
          </ul>
        </div> */}
        {/* 
        <div className="md:hidden absolute right-4 top-4 z-50">
          {!toggle ? (
            <TfiAlignJustify
              onClick={() => setToggle(true)}
              className="w-6 h-6 cursor-pointer float-right"
            />
          ) : (
            <TfiClose
              onClick={() => setToggle(false)}
              className="w-6 h-6 cursor-pointer float-right"
            />
          )}
            

          {toggle && (
            <ul className="flex flex-col bg-gray-300 mt-8 p-2 rounded-sm shadow-lg">
              <li className="p-3 transition-all ease-in-out hover:scale-110">
                <a href="#home" onClick={() => setToggle(false)}>
                  Home
                </a>
              </li>
              <li className="p-3 transition-all ease-in-out hover:scale-110">
                <a href="#about" onClick={() => setToggle(false)}>
                  About Me
                </a>
              </li>
              <li className="p-3 transition-all ease-in-out hover:scale-110">
                <a href="#skills" onClick={() => setToggle(false)}>
                  Skills
                </a>
              </li>
              <li className="p-3 transition-all ease-in-out hover:scale-110">
                <a href="#portfolio" onClick={() => setToggle(false)}>
                  Portfolio
                </a>
              </li>
              <li className="p-3 transition-all ease-in-out hover:scale-110">
                <a href="#contact" onClick={() => setToggle(false)}>
                  Contact Me
                </a>
              </li>
              <li className="p-3 transition-all ease-in-out hover:scale-110">
                <a href="/" onClick={() => setToggle(false)}>
                  Logout
                </a>
              </li>
            </ul>
          )}
        </div> */}
        <div className="md:hidden absolute  top-7  mx-2 ">
          {!toggle ? (
            <TfiAlignJustify
              onClick={() => setToggle(true)}
              className="w-6 h-6 cursor-pointer float-left r"
            />
          ) : (
            <TfiClose
              onClick={() => setToggle(false)}
              className="hidden w-6 h-6 cursor-pointer float-left"
            />
          )}

          {toggle && (
            <div className="flex flex-col bg-gray-300 p-2 rounded-sm shadow-lg fixed">
              <div className=" border-b-2 border-gray-200 shadow-md h-30">
                <img
                  src={Hilal}
                  className="w-[80px] h-[80px] bg-gray-300 p-3 rounded-full ml-5"
                />
              </div>

              <div className="mt-5 h-screen">
                <h1 className="bg-purple-600 text-xl text-white px-6 h-14  mx-3 rounded-md  items-center  flex  gap-3">
                  <GrBook size={30} />
                  ALL Courses
                </h1>
                <ul className="flex flex-col mx-5  gap-4 font-semibold mt-5">
                  <li className="mr-4 transition-all ease-in-out hover:scale-110">
                    <a href="/">Home</a>
                  </li>
                  <li className="mr-4 transition-all ease-in-out hover:scale-110">
                    <Link to="/about">About Me</Link>
                  </li>

                  <li className="mr-4 transition-all ease-in-out hover:scale-110">
                    <a href="">Materi Video</a>
                  </li>
                  <li className="mr-4 transition-all ease-in-out hover:scale-110">
                    <a href="contact">Contact Me</a>
                  </li>
                </ul>
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
        <div className="flex items-center mr-2 gap-1">
          <BiBell size={30} className="text-gray-500" />
          <button
            type="submit"
            className="w-23 bg-purple-600 text-sm rounded-sm text-white h-8"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
