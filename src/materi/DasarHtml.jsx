import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import { SlBasketLoaded } from "react-icons/sl";
import { useState } from "react";
import { TfiAlignJustify, TfiClose } from "react-icons/tfi";
import { useSelector } from "react-redux";
import { basic } from "../../data";

function DasarHtml() {
  const [toggle, setToggle] = useState(false);
  const cartItems = useSelector((state) => state.cart.items);
  const navigate = useNavigate();

  const handleItemClik = () => navigate("/");
  const handleItemClick = (slug) => navigate(`/materi/${slug}`);

  return (
    <>
      {/* Navbar */}
      <div className="md:px-25 p-4 bg-purple-50 fixed top-0 w-full z-50 shadow-md">
        {" "}
        {/* <--- Perubahan Kunci: fixed top-0 w-full z-50 */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              onClick={handleItemClik}
              src="/logo.png"
              alt="Logo"
              className="w-10 h-10 rounded-full cursor-pointer "
            />
            <h2 className="text-xl font-bold pl-3 text-purple-800">
              Creative Course
            </h2>
          </div>
          <div>
            <ul className="hidden md:flex items-center gap-6 cursor-pointer">
              <li className="text-purple-800 text-md font-semibold hover:text-purple-600">
                Product
              </li>
              <li className="text-purple-800 text-md font-semibold hover:text-purple-600">
                About
              </li>
            </ul>
          </div>

          <div className="flex items-center space-x-4">
            {/* Desktop Login Button */}
            <div className="relative text-purple-800">
              <Link to="cartpages">
                <SlBasketLoaded size={30} />
                {cartItems.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                    {cartItems.length}
                  </span>
                )}
              </Link>
            </div>

            <div className="hidden md:block">
              <Link
                to="/login"
                className="bg-purple-700 text-white px-6 py-2 rounded hover:bg-purple-500 transition-all"
              >
                Member
              </Link>
            </div>

            {/* Toggle Button */}
            <div className="md:hidden">
              {toggle ? (
                <TfiClose
                  onClick={() => setToggle(false)}
                  className="w-6 h-6 cursor-pointer text-purple-800"
                />
              ) : (
                <TfiAlignJustify
                  onClick={() => setToggle(true)}
                  className="w-6 h-6 cursor-pointer text-purple-800"
                />
              )}
            </div>
          </div>
        </div>
        {/* Toggle Menu Mobile */}
        {toggle && (
          <div className="flex flex-col bg-purple-100 p-4 mt-3 rounded shadow-md md:hidden">
            <Link
              to="/product"
              className="bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-500 transition mb-2"
            >
              Product
            </Link>
            <Link
              to="/about"
              className="bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-500 transition mb-2"
            >
              About
            </Link>
            <Link
              to="/login"
              className="bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-500 transition mb-2"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-500 transition mb-2"
            >
              Register
            </Link>
          </div>
        )}
      </div>

      {/* MAIN CONTENT */}
      <div className="flex flex-col md:flex-row gap-6  sm:px-8 md:px-12 mt-10">
        {/* Artikel Utama */}
        <div className="w-full md:w-[70%] bg-white border border-gray-100 shadow-2xl rounded-xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <img src="/hil.jpg" className="w-6 h-6 rounded-full" alt="author" />
            <p className="text-xs text-gray-500 font-bold">Hilal Hamdi</p>
            <span className="text-gray-400 text-sm">•</span>
            <p className="text-xs text-gray-500 font-bold">10 Mei 2025</p>
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold text-gray-700">
            🌐 Apa Itu HTML (HyperText Markup Language)?
          </h1>
          <div className="border-b-2 border-gray-400 my-3"></div>

          <img
            src="/html.jpg"
            className="w-full max-h-[350px] object-cover rounded-xl"
            alt="HTML"
          />

          <div className="mt-8 leading-relaxed text-gray-700 text-justify text-sm sm:text-base">
            {/* Section 1 */}
            <p className="text-lg font-semibold">🧩 1. Pengertian HTML</p>
            <p className="mt-3">
              HTML (HyperText Markup Language) adalah bahasa dasar untuk membuat
              halaman web. HTML digunakan untuk menentukan struktur dan isi dari
              sebuah halaman seperti judul, paragraf, gambar, tautan, form, dan
              lainnya.
            </p>
            <p>
              Browser seperti Google Chrome, Firefox, atau Edge akan membaca
              kode HTML dan menampilkannya sebagai halaman web.
            </p>

            {/* Section 2 */}
            <h2 className="mt-6 text-lg font-semibold">
              🏗️ 2. Struktur Dasar HTML
            </h2>
            <p>Contoh struktur umum HTML:</p>
            <pre className="bg-gray-900 text-green-200 p-4 rounded-md mt-3 overflow-x-auto text-sm">
              {`<!DOCTYPE html>
<html>
<head>
  <title>Judul Halaman</title>
</head>
<body>
  <h1>Halo Dunia!</h1>
  <p>Ini adalah paragraf pertama saya.</p>
</body>
</html>`}
            </pre>

            <h3 className="mt-4 font-bold">🧠 Penjelasan:</h3>
            <ul className="list-disc pl-6">
              <li>&lt;!DOCTYPE html&gt; → Menandakan dokumen HTML5.</li>
              <li>&lt;html&gt; → Elemen utama halaman web.</li>
              <li>&lt;head&gt; → Menyimpan informasi meta dan judul.</li>
              <li>&lt;body&gt; → Isi utama halaman web.</li>
            </ul>

            {/* Section 3 */}
            <h2 className="text-lg font-semibold mt-6">
              🧱 3. Elemen Dasar Teks
            </h2>
            <pre className="bg-gray-900 text-green-200 p-4 rounded-md mt-3 overflow-x-auto text-sm">
              {`<h1>Judul Utama</h1>
<h2>Sub Judul</h2>
<p>Ini paragraf biasa.</p>
<b>Teks tebal</b> <i>teks miring</i> <u>teks bergaris bawah</u>`}
            </pre>

            <ul className="list-disc pl-6 mt-2">
              <li>&lt;h1&gt; - &lt;h6&gt; → Heading</li>
              <li>&lt;p&gt; → Paragraf</li>
              <li>&lt;b&gt;, &lt;strong&gt; → Teks tebal</li>
              <li>&lt;i&gt;, &lt;em&gt; → Teks miring</li>
            </ul>

            {/* Section 4 */}
            <h2 className="text-lg font-semibold mt-6">
              🔗 4. Link dan Gambar
            </h2>
            <pre className="bg-gray-900 text-green-200 p-4 rounded-md mt-3 overflow-x-auto text-sm">
              {`<a href="https://www.google.com" target="_blank">Kunjungi Google</a>
<img src="gambar.jpg" alt="Deskripsi Gambar" width="300">`}
            </pre>

            <div className="w-full overflow-x-auto mt-6">
              <table className="min-w-full border border-gray-300 divide-y divide-gray-300 text-sm">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-2 text-left font-semibold text-gray-700">
                      Atribut
                    </th>
                    <th className="px-4 py-2 text-left font-semibold text-gray-700">
                      Fungsi
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-2 bg-gray-50">&lt;href&gt;</td>
                    <td className="px-4 py-2">Alamat tujuan link</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 bg-gray-50">target="_blank"</td>
                    <td className="px-4 py-2">Buka di tab baru</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 bg-gray-50">src</td>
                    <td className="px-4 py-2">Lokasi file gambar</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 bg-gray-50">alt</td>
                    <td className="px-4 py-2">
                      Teks alternatif jika gambar tidak tampil
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Section 5 */}
            <h2 className="text-lg font-semibold mt-6">📋 5. List (Daftar)</h2>
            <pre className="bg-gray-900 text-green-200 p-4 rounded-md mt-3 overflow-x-auto text-sm">
              {`<ul>
  <li>Kopi</li>
  <li>Teh</li>
  <li>Susu</li>
</ul>`}
            </pre>

            {/* Section 6 */}
            <h2 className="text-lg font-semibold mt-6">
              🧍 6. Formulir (Form)
            </h2>
            <pre className="bg-gray-900 text-green-200 p-4 rounded-md mt-3 overflow-x-auto text-sm">
              {`<form action="proses.php" method="post">
  <label>Nama:</label>
  <input type="text" name="nama"><br>
  
  <label>Email:</label>
  <input type="email" name="email"><br>
  
  <input type="submit" value="Kirim">
</form>`}
            </pre>

            {/* Section 7 */}
            <h2 className="text-lg font-semibold mt-6">
              🎨 7. Integrasi dengan CSS dan JavaScript
            </h2>
            <p className="mt-2">Untuk menambahkan CSS dan JavaScript:</p>
            <pre className="bg-gray-900 text-green-200 p-4 rounded-md mt-3 overflow-x-auto text-sm">
              {`<link rel="stylesheet" href="style.css">
<script src="script.js"></script>`}
            </pre>
          </div>
        </div>

        {/* SIDEBAR */}
        <div className="w-full md:w-[30%] flex flex-col gap-8">
          {/* Newsletter */}
          <div className="shadow-2xl rounded-2xl p-6 bg-white">
            <p className="font-bold text-2xl text-gray-700">📫 Newsletter</p>
            <p className="pt-4 text-gray-500 text-sm sm:text-base">
              Mau dapat tips belajar coding, info teknologi, dan perkembangan
              karir sebagai programmer?
            </p>
            <button className="w-full mt-5 font-bold rounded-md bg-purple-500 text-white py-2 hover:bg-purple-600 transition">
              SUBSCRIBE
            </button>
          </div>

          {/* Artikel Terbaru */}
          <div>
            <p className="text-xl font-bold border-b-2 border-gray-400 pb-2 text-gray-700">
              📰 Artikel Terbaru
            </p>
            <div className="mt-4 flex flex-col gap-3">
              {basic.map((item) => (
                <div
                  key={item.id}
                  onClick={() => handleItemClick(item.slug)}
                  className="bg-white border border-gray-200 rounded-lg cursor-pointer hover:shadow-lg transition"
                >
                  <div className="p-3 flex items-center gap-3">
                    <img
                      src={item.image}
                      className="w-12 h-12 object-cover rounded"
                      alt={item.title}
                    />
                    <div>
                      <h3 className="text-sm font-semibold text-gray-700">
                        {item.title}
                      </h3>
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

export default DasarHtml;
