import { IoMdMail } from "react-icons/io";
const Navbar = () => {
  const menu = [
    {
      id: 1,
      name: "HOME",
    },
    {
      id: 2,
      name: "Video Pembelajaran",
    },
    {
      id: 3,
      name: "PROJECT",
    },
    {
      id: 4,
      name: "CONTACT",
    },
  ];
  return (
    <div className="flex flex-row items-center justify-between fixed bg-white border-b-1 shadow-2xl border-white w-screen">
      <div className="w-[90px] h-[90px] bg-black">
        <h1 className=" text-purple-600 font-bold text-6xl p-2">HL</h1>
      </div>
      <div className=" hidden md:flex gap-14 items-center  ">
        {menu.map((men) => (
          <div
            key={men.id}
            className="cursor-pointer hover:underline font-medium transition-all ease-in-out hover:scale-110"
          >
            <h2>{men.name}</h2>
          </div>
        ))}
      </div>
      <div
        className="w-[90px] h-[90px]
        bg-red-500 flex justify-center items-center px-auto"
      >
        <IoMdMail className="text-white h-10 w-10" />
      </div>
    </div>
  );
};

export default Navbar;
