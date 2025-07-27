import { card } from "../../data";

const Kategori = () => {
  return (
    <div className="mt-16 bg-gray-white bg-white text-black mx-2  md:mx-25 pb-3">
      <div className="">
        <h3 className="text-md font-bold text-purple-600 pb-3">KATEGORI</h3>
        <h1 className="text-3xl font-bold">Mau Belajar Apa Hari Ini?</h1>
        <p className="mt-3 text-md text-gray-500">
          Temukan Tutorial Berdasarkan Minatmu
        </p>
      </div>
      <div>
        <div className="grid items-center grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-center gap-4 mt-4">
          {card.map((item) => (
            <div
              key={item.id}
              className="  bg-white shadow-sm border-gray-200 border-2  rounded-xl   transition-all ease-in-out hover:scale-110 "
            >
              <div className="p-4  ">
                <img
                  src={item.image}
                  className="w-full h-45 object-cover rounded-sm"
                />
                <h2 className="text-md pt-2 font-semibold">{item.title}</h2>
                <p className="text-sm pt-2 text-gray-500">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Kategori;
