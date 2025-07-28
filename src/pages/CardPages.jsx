import Robo from "/robo.png";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

const CardPages = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (paket) => {
    dispatch(addToCart(paket));
    alert(`${paket.name} ditambahkan ke keranjang`);
  };

  const dataPaket = [
    {
      id: 1,
      name: "Paket Pemula",
      harga: "25.000",
      laris: true,
      fitur: [
        "Belajar logika dasar pemrograman",
        "Pengenalan HTML & CSS",
        "Belajar Dasar JavaScript",
        "Belajar Github",
        "Proyek akhir: Website statis sederhana",
        "Cocok untuk pelajar & pemula tanpa pengalaman",
      ],
      nonFitur: [
        "Belajar Dasar Tailwindcss",
        "Belajar Dasar Bootstrap 5",
        "Belajar Dasar ReactJs",
      ],
    },
    {
      id: 2,
      name: "Paket Menengah",
      harga: "50.000",
      laris: false,
      fitur: [
        "Belajar logika dasar pemrograman",
        "Pengenalan HTML & CSS",
        "Belajar Dasar JavaScript",
        "Belajar Github",
        "Belajar Tailwindcss",
        "Belajar Bootstrap 5",
        "Proyek akhir: Website statis sederhana",
        "Cocok untuk pelajar & pemula tanpa pengalaman",
      ],
      nonFitur: ["Belajar Dasar ReactJs"],
    },
    {
      id: 3,
      name: "Paket Profesional",
      harga: "75.000",
      laris: false,
      fitur: [
        "Belajar logika dasar pemrograman",
        "Pengenalan HTML & CSS",
        "Dasar JavaScript untuk pemula",
        "Belajar Github",
        "Belajar Tailwindcss",
        "Belajar Bootstrap",
        "Belajar Dasar ReactJs",
        "Proyek akhir: Website statis sederhana",
        "Cocok untuk pelajar & pemula tanpa pengalaman",
      ],
      nonFitur: [],
    },
  ];

  return (
    <div className="mx-auto mt-16 mb-10 bg-white text-black">
      <div className="flex items-center justify-center">
        <div className="flex flex-row px-6 md:px-0 items-center justify-center">
          <h1 className="text-3xl font-bold text-center mb-5 pt-6 border-b-3 border-purple-400">
            Paket <span className="text-purple-600">Belajar</span>
          </h1>
          <img src={Robo} className="w-[70px] ml-5 animate-bounce" />
        </div>
      </div>

      <div className="md:flex items-center justify-center gap-4 grid grid-cols-1 md:grid-cols-3">
        {dataPaket.map((paket) => (
          <div
            key={paket.id}
            className="mx-2 card max-w-sm bg-white shadow-sm border-gray-200 border-2 rounded-xl"
          >
            <div className="card-body">
              {paket.laris && (
                <span className="badge badge-xs badge-warning">
                  Most Popular
                </span>
              )}
              <div className="flex justify-between">
                <h2 className="text-xl font-bold">{paket.name}</h2>
                <span className="text-md">Rp.{paket.harga}</span>
              </div>
              <ul className="mt-6 flex flex-col gap-2 text-xs">
                {paket.fitur.map((fitur, index) => (
                  <li key={index}>
                    ✅ <span>{fitur}</span>
                  </li>
                ))}
                {paket.nonFitur.map((fitur, index) => (
                  <li key={index} className="opacity-50">
                    ❌ <span className="line-through">{fitur}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <button
                  className="btn bg-purple-600 text-white btn-block"
                  onClick={() => handleAddToCart(paket)}
                >
                  Beli Paket
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardPages;
