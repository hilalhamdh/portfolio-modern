import { IoArrowForwardCircle } from "react-icons/io5";
import String from "../shared/String";

const Service = () => {
  const servicesList = [
    {
      id: 1,
      title: String.FRONTED,
      desc: String.FRONTED_DESC,
      logo: "/design.png",
    },
    {
      id: 1,
      title: String.BACKEND,
      desc: String.BACKEND_DESC,
      logo: "/backend.png",
    },
    {
      id: 1,
      title: String.ONLINE,
      desc: String.ONLINE_DESC,
      logo: "/teaching.png",
    },
  ];
  return (
    <div className=" md:px-12 mt-12">
      <div className="flex items-center mx-4">
        <div className="w-[20px] h-[7px] bg-green-600 rounded-full "></div>
        <div className="px-3 w-full border-[1px] mx-2 md:mx-4 mt-[-2px]"></div>
        <h2 className="text-bold text-2xl">{String.SERVICES}</h2>
        <div className="px-3 w-full border-[1px] mx-2 mt-[-2px]"></div>
        <div className="w-[20px] h-[7px] bg-green-600 rounded-full "></div>
      </div>
      <div className="flex flex-col mt-16 ">
        {servicesList.map((str) => (
          <div key={str.id} className="text-center   place-items-center gap-6">
            <div className="bg-gray-200 rounded-full w-[90px] h-[90px]">
              <img
                src={str.logo}
                alt="image"
                className="h-[90px] w-[90px] p-5 hover:scale-110 transition-all ease-in-out cursor-pointer"
              />
            </div>
            <h2 className="font-bold mt-5">{str.title}</h2>
            <h2 className="text-gray-500 mx-3 md:mx-1">{str.desc}</h2>
            <IoArrowForwardCircle className="text-2xl text-green-500 hover:scale-110 ease-in-out transition-all my-3" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
