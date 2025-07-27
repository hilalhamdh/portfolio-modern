const Newsletter = () => {
  return (
    <div className="mx-3 flex items-center justify-center mt-10 h-[300px] bg-gray-200">
      <div className="text-center ">
        <h2 className="text-md md:text-xl font-bold text-purple-600 p-4">
          NEWSLETTER
        </h2>
        <h1 className="text-xl md:text-3xl font-bold text-black pb-4">
          Biar gak ketinggalan update..
        </h1>
        <p className="text-sm md:text-md font-semibold text-gray-500">
          Subscribe Newsletter Petani Kode agar kamu bisa dapat info dan tips
          belajar coding langsung dikirim ke emailmu?
        </p>
        <button className="btn bg-purple-600 text-white mt-8 w-[300px] md:w-[350px]">
          Beli Paket
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
