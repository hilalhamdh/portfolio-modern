import { IoHomeOutline } from "react-icons/io5";
import { useState } from "react";
import {
  MdOutlineVideoSettings,
  MdOutlineContactMail,
  MdOutlineBookOnline,
} from "react-icons/md";
import { GrBook } from "react-icons/gr";
import { Link } from "react-router-dom";
import Hilal from "/logo.png";
import { BiLogOut } from "react-icons/bi";

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState(""); // Simpan item aktif

  const menuItems = [
    {
      id: "home",
      icon: <IoHomeOutline />,
      label: "Home",
      link: "/home",
      isLink: true,
    },
    {
      id: "materials",
      icon: <MdOutlineBookOnline />,
      label: "Learning Materials",
      link: "/materipage",
      isLink: false,
    },
    {
      id: "videos",
      icon: <MdOutlineVideoSettings />,
      label: "Learning Video",
      link: "/videopage",
      isLink: false,
    },
    {
      id: "contact",
      icon: <MdOutlineContactMail />,
      label: "Contact Us",
      link: "/contact",
      isLink: false,
    },
    {
      id: "logout",
      icon: <BiLogOut />,
      label: "Logout",
      link: "/",
      isLink: false,
    },
  ];

  return (
    <div className="hidden md:flex w-[250px] border-r-2 h-screen border-white shadow-xl fixed flex-col bg-gray-200">
      <div className="mt-7 border-b-2 border-gray-200 shadow-md h-30">
        <img
          src={Hilal}
          className="w-[100px] h-[100px] bg-gray-300 p-3 rounded-full ml-5"
          alt="Logo"
        />
      </div>

      <div className="mt-5">
        <h1 className="bg-purple-600 text-xl text-white px-3 h-10 mx-3 rounded-sm items-center flex gap-3">
          <GrBook size={26} />
          ALL Courses
        </h1>

        <ul className="flex flex-col mx-5 gap-4 text-sm mt-5 text-gray-700">
          {menuItems.map((item) => (
            <li
              key={item.id}
              onClick={() => setActiveItem(item.id)}
              className={`flex items-center gap-3 p-2 rounded-md cursor-pointer transition-all duration-300 border-b-2 border-gray-400 ${
                activeItem === item.id ? "bg-blue-300" : "bg-transparent"
              }`}
            >
              {item.icon}
              {item.isLink ? (
                <Link to={item.link}>{item.label}</Link>
              ) : (
                <a href={item.link}>{item.label}</a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
