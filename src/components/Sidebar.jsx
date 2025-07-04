import { IoLogoGithub, IoLogoInstagram, IoLogoLinkedin } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io5";
import { RiLogoutCircleLine } from "react-icons/ri";
import { FaBookOpenReader } from "react-icons/fa6";
import { GrBook } from "react-icons/gr";
import { Link } from "react-router-dom";
import Hilal from "/hil.jpg";
const Sidebar = () => {
  return (
    <div className="hidden md:flex w-[250px]  border-r-2 h-screen   border-white shadow-xl fixed  flex-col  bg-gray-200">
      <div className="mt-7  border-b-2 border-gray-200 shadow-md h-30">
        <img
          src={Hilal}
          className="w-[80px] h-[80px] bg-gray-300 p-3 rounded-full ml-5"
        />
      </div>

      <div className="mt-5">
        <h1 className="bg-purple-600 text-xl text-white px-6 h-14  mx-3 rounded-md  items-center  flex  gap-3">
          <GrBook size={30} />
          ALL Courses
        </h1>
        <ul className="flex flex-col mx-5  gap-4 font-semibold mt-5">
          <li className="mr-4 transition-all ease-in-out hover:scale-110">
            <Link to="/">Home</Link>
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
      </div>
      {/* <div className="flex flex-col gap-7 mb-10 text-[20px] ">
        <IoLogoInstagram className="cursor-pointer transition-all ease-in-out hover:scale-110" />
        <IoLogoWhatsapp className="cursor-pointer transition-all ease-in-out hover:scale-110" />
        <IoLogoGithub className="cursor-pointer transition-all ease-in-out hover:scale-110" />
        <IoLogoLinkedin className="cursor-pointer transition-all ease-in-out hover:scale-110" />
        <Link
          to="/"
          className="flex flex-col items-center  cursor-pointer transition-all hover:scale-110"
        >
          <RiLogoutCircleLine />
          <span className="text-[5px]">logout</span>
        </Link>
      </div> */}
    </div>
  );
};

export default Sidebar;
