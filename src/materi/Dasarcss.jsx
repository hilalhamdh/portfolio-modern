import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import { SlBasketLoaded } from "react-icons/sl";
import { useState } from "react";
import { TfiAlignJustify, TfiClose } from "react-icons/tfi";
import { useSelector } from "react-redux";
import { basic } from "../../data";

function Dasarcss() {
  const [toggle, setToggle] = useState(false);
  const cartItems = useSelector((state) => state.cart.items);
  const navigate = useNavigate();

  const handleItemClik = () => {
    navigate("/");
  };

  const handleItemClick = (slug) => {
    navigate(`/materi/${slug}`);
  };

  return (
    <>
      {/* Navbar */}
      <div className="p-4 bg-gray-200 shadow-sm">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/logo.png"
              alt="Logo"
              className="w-10 h-10 rounded-full"
            />
            <h2
              onClick={handleItemClik}
              className="text-xl font-bold pl-3 text-sky-950 cursor-pointer"
            >
              Creative Course
            </h2>
          </div>

          {/* Menu Desktop */}
          <ul className="hidden md:flex items-center gap-6 cursor-pointer">
            <li className="text-sky-950 text-md font-semibold hover:text-sky-700">
              Product
            </li>
            <li className="text-sky-950 text-md font-semibold hover:text-sky-700">
              About
            </li>
          </ul>

          {/* Aksi kanan */}
          <div className="flex items-center space-x-4">
            {/* Cart */}
            <div className="relative">
              <Link to="cartpages">
                <SlBasketLoaded size={30} className="text-gray-700" />
                {cartItems.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                    {cartItems.length}
                  </span>
                )}
              </Link>
            </div>

            {/* Member Button */}
            <div className="hidden md:block">
              <Link
                to="/login"
                className="bg-sky-950 text-white px-6 py-2 rounded hover:bg-sky-700 transition-all"
              >
                Member
              </Link>
            </div>

            {/* Toggle Mobile */}
            <div className="md:hidden">
              {toggle ? (
                <TfiClose
                  onClick={() => setToggle(false)}
                  className="w-6 h-6 cursor-pointer text-gray-700"
                />
              ) : (
                <TfiAlignJustify
                  onClick={() => setToggle(true)}
                  className="w-6 h-6 cursor-pointer text-gray-700"
                />
              )}
            </div>
          </div>
        </div>

        {/* Menu Mobile */}
        {toggle && (
          <div className="flex flex-col bg-gray-300 p-4 mt-3 rounded shadow-md md:hidden space-y-2">
            <Link
              to="/product"
              className="bg-sky-950 text-white px-4 py-2 rounded hover:bg-sky-700 transition"
            >
              Product
            </Link>
            <Link
              to="/about"
              className="bg-sky-950 text-white px-4 py-2 rounded hover:bg-sky-700 transition"
            >
              About
            </Link>
            <Link
              to="/login"
              className="bg-sky-950 text-white px-4 py-2 rounded hover:bg-sky-700 transition"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition"
            >
              Register
            </Link>
          </div>
        )}
      </div>

      {/* Konten */}
      <div className="flex flex-col lg:flex-row gap-6  md:px-8 lg:px-16 py-8 text-gray-700">
        {/* Kiri - Materi */}
        <div className="w-full lg:w-2/3  md:px-8 lg:px-12 mt-5 shadow-2xl  border-white border-4 rounded-xl bg-white">
          {/* Header Author */}
          <div className="flex items-center gap-2 pt-10">
            <img src="/hil.jpg" className="w-6 h-6 rounded-full" alt="Author" />
            <p className="text-xs text-gray-500 font-bold">Hilal Hamdi</p>
            <span className="text-gray-400 text-sm">•</span>
            <p className="text-xs text-gray-500 font-bold">10 Mei 2025</p>
          </div>

          <h1 className="text-2xl md:text-3xl font-bold mt-4">
            🧩 Membuat Website Sederhana Dengan HTML & CSS
          </h1>
          <div className="border-b-2 border-gray-400 mt-2 mb-4"></div>

          <img
            src="/html.jpg"
            className="w-full max-w-[700px] h-auto mt-5 mx-auto rounded-xl"
            alt="HTML CSS"
          />

          {/* Materi */}
          <div className="mt-10 leading-relaxed text-justify space-y-6">
            <section>
              <h2 className="text-xl font-semibold">
                🧠 1. Konsep Dasar: HTML + CSS
              </h2>
              <p>
                <b>HTML</b> (HyperText Markup Language) → membuat struktur
                halaman seperti header, paragraf, gambar, dan link.
              </p>
              <p>
                <b>CSS</b> (Cascading Style Sheets) → mempercantik tampilan:
                warna, font, tata letak, ukuran, dan lainnya.
              </p>
            </section>

            <section>
              <h2 className="text-md font-bold">🧩 2. Struktur Folder Blog</h2>
              <p>
                Buat folder <b>blog-sederhana</b> di drive D. Susunannya seperti
                ini:
              </p>
              <pre className="bg-gray-900 text-green-200 p-4 rounded-md overflow-x-auto text-sm">
                {`blog-sederhana/
│
├── index.html       ← halaman utama
├── style.css        ← file tampilan
└── gambar.jpg       ← (opsional, untuk ilustrasi)`}
              </pre>
            </section>

            <section>
              <h2 className="text-md font-bold mt-6">
                💡 3. Cara Menjalankan Proyek
              </h2>
              <ol className="list-decimal pl-6 space-y-2 text-md">
                <li>
                  Pastikan semua file tersimpan di <b>D:\blog-sederhana\</b>.
                </li>
                <li>
                  Buka <b>index.html</b> di browser (Chrome, Edge, Firefox,
                  dll).
                </li>
                <li>
                  Blog tampil rapi dengan struktur dan gaya CSS yang sudah
                  dibuat.
                </li>
              </ol>
            </section>

            <section>
              <h2 className="text-md font-bold">🎨 4. File CSS (style.css)</h2>
              <p>
                File ini mempercantik tampilan. Hubungkan dengan tag{" "}
                <code>&lt;link rel="stylesheet" href="style.css" /&gt;</code>.
              </p>
              <pre className="bg-gray-900 text-green-200 p-4 rounded-md overflow-x-auto text-sm">
                {`body {
  font-family: "Poppins", sans-serif;
  background-color: #f8f9fa;
  color: #333;
  max-width: 1000px;
  margin: auto;
  padding: 20px;
}

header {
  background: #0077b6;
  color: white;
  text-align: center;
  padding: 30px;
  border-radius: 10px;
}`}
              </pre>
            </section>

            <section>
              <h2 className="text-md font-bold">🖼️ 5. Tambah Gambar</h2>
              <p>
                Tambahkan file <b>gambar.jpg</b> ke folder yang sama agar bisa
                muncul di artikel pertama.
              </p>
              <pre className="bg-gray-900 text-green-200 p-4 rounded-md overflow-x-auto text-sm">
                {`<img src="gambar.jpg" alt="Gambar Ilustrasi" />`}
              </pre>
            </section>
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-full lg:w-1/3 mt-5 space-y-8">
          {/* Newsletter */}
          <div className="shadow-2xl rounded-2xl p-6 bg-white">
            <p className="font-bold text-2xl">📫 Newsletter</p>
            <p className="pt-5 text-md text-gray-500">
              Mau dapat tips belajar coding, info teknologi, dan perkembangan
              karir sebagai programmer?
            </p>
            <button className="w-full mt-4 font-bold rounded-md bg-purple-500 text-white h-10 hover:bg-purple-600 transition">
              SUBSCRIBE
            </button>
          </div>

          {/* Artikel Terbaru */}
          <div className="shadow-xl rounded-2xl p-6 bg-white">
            <p className="text-2xl font-bold border-b pb-2 border-gray-300">
              📰 Artikel Terbaru
            </p>
            <div className="grid grid-cols-1 gap-4 mt-4">
              {basic.map((item) => (
                <div
                  key={item.id}
                  onClick={() => handleItemClick(item.slug)}
                  className="bg-gray-50 hover:bg-gray-100 shadow border border-gray-200 rounded-xl cursor-pointer transition"
                >
                  <div className="p-3 flex gap-3 items-center">
                    <img
                      src={item.image}
                      className="w-12 h-12 object-cover rounded"
                      alt={item.title}
                    />
                    <div>
                      <h2 className="text-sm font-semibold text-gray-700">
                        {item.title}
                      </h2>
                      <p className="text-xs text-gray-500">{item.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Dasarcss;
