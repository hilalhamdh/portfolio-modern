import { IoLogoGithub, IoLogoInstagram, IoLogoLinkedin } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io5";

const Sidebar = () => {
  return (
    <div className="w-[90px]  border-r-2 h-screen border-white shadow-xl mt-[90px] fixed flex flex-col justify-around items-center dark:bg-slate-800">
      <h2 className="-rotate-90 text-2xl font-bold tracking-widest  ">
        HOMEPAGE
      </h2>
      <div className="flex flex-col gap-7 mb-10 text-[20px] ">
        <IoLogoInstagram className="cursor-pointer transition-all ease-in-out hover:scale-110" />
        <IoLogoWhatsapp className="cursor-pointer transition-all ease-in-out hover:scale-110" />
        <IoLogoGithub className="cursor-pointer transition-all ease-in-out hover:scale-110" />
        <IoLogoLinkedin className="cursor-pointer transition-all ease-in-out hover:scale-110" />
      </div>
    </div>
  );
};

export default Sidebar;
