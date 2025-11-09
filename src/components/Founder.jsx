const Founder = () => {
  return (
    <div className="bg-white py-5 ">
      <div className=" flex flex-col items-center justify-center gap-2 bg-gray-100 shadow-2xl mx-auto w-[300px] py-10 rounded-md">
        <img
          src="/hil.jpg"
          alt="founder-image"
          className="w-60 h-80 object-cover rounded-md shadow-2xl "
        />
        <div className="flex items-center justify-center text-center mt-10 text-md font-bold border-b-2 w-50 mx-auto">
          <h1>Hilal Hamdi Hafit S.Kom</h1>
        </div>
        <p>Co Founder</p>
      </div>
    </div>
  );
};
export default Founder;
