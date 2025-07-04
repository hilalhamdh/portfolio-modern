import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineVideoSettings, MdOutlineContactMail } from "react-icons/md";
import { GrBook } from "react-icons/gr";
import { Link } from "react-router-dom";
import Hilal from "/logo.png";
const Sidebar = () => {
  return (
    <div className="hidden md:flex w-[250px]  border-r-2 h-screen   border-white shadow-xl fixed  flex-col  bg-gray-200">
      <div className="mt-7  border-b-2 border-gray-200 shadow-md h-30">
        <img
          src={Hilal}
          className="w-[100px] h-[100px] bg-gray-300 p-3 rounded-full ml-5"
        />
      </div>

      <div className="mt-5">
        <h1 className="bg-purple-600 text-xl text-white px-3 h-12  mx-3 rounded-md  items-center  flex  gap-3">
          <GrBook size={30} />
          ALL Courses
        </h1>
        <ul className="flex flex-col mx-5  gap-4 font-semibold mt-5 text-gray-700">
          <li className="flex gap-3 mr-4 transition-all ease-in-out hover:scale-110 border-b-2  border-gray-400 ">
            <IoHomeOutline />
            <Link to="/">Home</Link>
          </li>

          <li className="flex gap-3 mr-4 transition-all ease-in-out hover:scale-110 border-b-2  border-gray-400">
            <MdOutlineVideoSettings />
            <a href="">Learning Video</a>
          </li>
          <li className="flex gap-3 mr-4 transition-all ease-in-out hover:scale-110  border-b-2 border-gray-400">
            <MdOutlineContactMail />
            <a href="contact">Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
