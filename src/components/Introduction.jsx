import Hilal from "/hil.jpg";
const Introduction = () => {
  return (
    <div className="flex items-center flex-col ">
      <div className="border-r-1 border-gray-300 shadow-2xl h-[120px] mt-[-2px]" />
      <div className="w-[10px] h-[10px] bg-green-400 rounded-full"></div>
      <h1 className="mt-5 text-black  tracking-widest font-semibold text-xl">
        HELLO!, MY NAME IS
      </h1>
      <h2 className="font-bold mt-5 text-[25px] md:text-[50px] text-center tracking-widest ">
        HILAL <br />
        HAMDI{" "}
      </h2>
      <img
        src={Hilal}
        className="w-[160px] h-[160px] bg-gray-300 p-7 rounded-full mt-5"
      />
    </div>
  );
};

export default Introduction;
