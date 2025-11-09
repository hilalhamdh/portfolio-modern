import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import { SlBasketLoaded } from "react-icons/sl";
import { useState } from "react";
import { TfiAlignJustify, TfiClose } from "react-icons/tfi";
import { useSelector } from "react-redux";
import { basic } from "../../data";

function Persiapan() {
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
      <div className="p-4 bg-gray-200 shadow-sm fixed top-0 left-0 w-full z-50">
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
      <div className="flex flex-col lg:flex-row gap-6  md:px-8 lg:px-16 py-8">
        {/* Kiri - Materi */}
        <div className="w-full lg:w-2/3 px-4 md:px-8 lg:px-12 mt-5 shadow-2xl border-white border-4 rounded-xl bg-white">
          {/* Header Author */}
          <div className="flex items-center gap-2 pt-10">
            <img src="/hil.jpg" className="w-6 h-6 rounded-full" alt="Author" />
            <p className="text-xs text-gray-500 font-bold">Hilal Hamdi</p>
            <span className="text-gray-400 text-sm">•</span>
            <p className="text-xs text-gray-500 font-bold">10 Mei 2025</p>
          </div>

          <h1 className="text-xl md:text-3xl font-bold mt-4 text-gray-700">
            🧰 Perangkat dan Perangkat Lunak yang Diperlukan
          </h1>
          <div className="border-b-2 border-gray-400 mt-2 mb-4"></div>

          <img
            src="/b.jpg"
            className="w-full max-w-[700px] h-auto mt-5 mx-auto rounded-xl"
            alt="HTML CSS"
          />

          {/* Materi */}
          <div className="mt-10 leading-relaxed text-justify space-y-6 text-gray-700">
            <section>
              <h2 className="text-md font-bold mt-6">
                💻 1. Komputer / Laptop
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-md mt-5">
                <li>Sistem operasi apa saja bisa (Windows, macOS, Linux).</li>
                <li>
                  Spesifikasi ringan pun cukup — HTML & CSS tidak membutuhkan
                  perangkat berat.
                </li>
                <li>
                  Pastikan ada koneksi internet (untuk referensi & dokumentasi).
                </li>
              </ul>
            </section>

            <section className="text-gray-700">
              <h2 className="text-md font-bold mt-16">
                🧑‍💻 2. Teks Editor (Code Editor)
              </h2>
              <p className="text-sm mt-3">
                Kamu butuh aplikasi untuk menulis kode HTML & CSS
              </p>
              <div className="w-full overflow-x-auto ">
                <table className="min-w-full border border-gray-300 divide-y divide-gray-300 text-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-2 text-left font-semibold text-gray-700">
                        Editor
                      </th>
                      <th className="px-4 py-2 text-left font-semibold text-gray-700">
                        Keterangan
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-2 bg-gray-50">
                        &lt;Editor Keterangan Visual Studio Code (VS Code)&gt;
                      </td>
                      <td className="px-4 py-2">
                        Gratis, ringan, dan populer. Banyak ekstensi web
                        developer.
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 bg-gray-50">Sublime Text</td>
                      <td className="px-4 py-2">
                        Cepat dan ringan, cocok untuk pemula.
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 bg-gray-50">Atom</td>
                      <td className="px-4 py-2">
                        (sudah deprecated, tapi masih bisa digunakan)
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 bg-gray-50">
                        Notepad++ (Windows)
                      </td>
                      <td className="px-4 py-2">
                        Alternatif ringan untuk latihan dasar
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p className="mt-2 ">
                  <b>💡 Disarankan: </b>Gunakan <b>VS Code,</b> karena paling
                  lengkap dan banyak tutorialnya.
                </p>
              </div>
            </section>

            <section className="text-gray-700">
              <h2 className="text-md font-bold mt-16">
                ⚙️ 3. Instalasi VS Code
              </h2>
              <p className="mt-3 text-sm ">🔧 Langkah-langkah:</p>
              <ol className="list-decimal  pl-6 space-y-2 text-md ">
                <li>
                  Kunjungi situs resmi: <br></br>
                  <a href="" className="text-blue-400">
                    👉 https://code.visualstudio.com
                  </a>
                </li>
                <li>
                  Pilih versi sesuai sistem operasi kamu (Windows / macOS /
                  Linux).
                </li>
                <li>
                  Install seperti biasa (klik “Next” → “Next” → “Finish”).
                </li>
                <li>
                  Setelah terinstal, buka aplikasi <b>Visual Studio Code.</b>
                </li>
              </ol>
            </section>
            <section className="text-gray-700">
              <h2 className="text-md font-bold mt-16 ">
                🧩 4. Pasang Ekstensi Penting di VS Code
              </h2>
              <p className="mt-3 text-sm  ">
                Buka Extensions Panel di VS Code (ikon kotak di kiri bawah atau
                tekan Ctrl + Shift + X), lalu cari dan install ini:
              </p>
              <div className="w-full overflow-x-auto ">
                <table className="min-w-full border border-gray-300 divide-y divide-gray-300 text-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-2 text-left font-semibold text-gray-700">
                        Ekstensi
                      </th>
                      <th className="px-4 py-2 text-left font-semibold text-gray-700">
                        Fungsi
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-2 bg-gray-50">
                        Ekstensi Fungsi Live Server (by Ritwick Dey)
                      </td>
                      <td className="px-4 py-2">
                        Menjalankan file HTML langsung di browser dan
                        auto-refresh saat disimpan.
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 bg-gray-50">
                        Prettier - Code Formatter
                      </td>
                      <td className="px-4 py-2">
                        Merapikan format kode otomatis
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 bg-gray-50">HTML CSS Support</td>
                      <td className="px-4 py-2">
                        Membantu autocomplete HTML dan CSS.
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 bg-gray-50">Auto Rename Tag</td>
                      <td className="px-4 py-2">
                        Otomatis mengganti tag pembuka/penutup bersamaan.
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 bg-gray-50">
                        IntelliSense for CSS class names
                      </td>
                      <td className="px-4 py-2">
                        Menampilkan saran nama class CSS.
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p className="mt-2 text-sm">
                  <b>💡 Disarankan: </b>Gunakan <b>VS Code,</b> karena paling
                  lengkap dan banyak tutorialnya.
                </p>
              </div>
            </section>

            <section className="text-gray-700">
              <h2 className="text-md font-bold mt-16">
                🌐 5. Browser Web (untuk Preview)
              </h2>
              <p className="mt-3 text-sm  ">
                Kamu perlu browser modern agar hasil HTML & CSS bisa ditampilkan
                dengan benar.
              </p>
              <div className="w-full overflow-x-auto ">
                <table className="min-w-full border border-gray-300 divide-y divide-gray-300 text-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-2 text-left font-semibold text-gray-700">
                        Browser Disarankan
                      </th>
                      <th className="px-4 py-2 text-left font-semibold text-gray-700">
                        Alasan
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-2 bg-gray-50">Google Chrome</td>
                      <td className="px-4 py-2">
                        Paling banyak digunakan, developer tools lengkap.
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 bg-gray-50">Mozilla Firefox</td>
                      <td className="px-4 py-2">Developer tools kuat juga.</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 bg-gray-50">Microsoft Edge</td>
                      <td className="px-4 py-2">
                        Alternatif ringan dan modern.
                      </td>
                    </tr>
                  </tbody>
                </table>
                <p className="mt-2 text-xs">
                  💡 Buka Developer Tools dengan Ctrl + Shift + I (Windows) atau
                  Cmd + Option + I (Mac) untuk melihat kode & styling.
                </p>
              </div>
            </section>

            <section className="text-gray-700">
              <h2 className="text-md font-bold mt-16">
                📁 6. Struktur Folder Awal Proyek
              </h2>
              <p className="text-sm mt-3">
                Buat folder untuk menyimpan proyek HTML kamu.
              </p>
              <p className="text-sm">Contoh struktur:</p>
              <pre className="bg-gray-900 text-green-200 p-4 rounded-md overflow-x-auto text-sm">
                {`my-website/
│
├── index.html
├── about.html
│
└── assets/
    ├── css/
    │   └── style.css
    ├── img/
    │   └── logo.png
    └── js/
        └── script.js`}
              </pre>
            </section>

            <section className="text-gray-700">
              <h2 className="text-md font-bold mt-16">
                🧠 7. Dasar-Dasar yang Perlu Diketahui Sebelum Koding
              </h2>
              <p className="mt-3 text-sm  ">
                Sebelum mulai, pahami dulu konsep dasar ini:
              </p>
              <div className="w-full overflow-x-auto ">
                <table className="min-w-full border border-gray-300 divide-y divide-gray-300 text-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-2 text-left font-semibold text-gray-700">
                        Konsep
                      </th>
                      <th className="px-4 py-2 text-left font-semibold text-gray-700">
                        Penjelasan
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-2 bg-gray-50">HTML (struktur)</td>
                      <td className="px-4 py-2">
                        Menentukan isi & urutan elemen halaman (judul, paragraf,
                        gambar, dll).
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 bg-gray-50">CSS (gaya)</td>
                      <td className="px-4 py-2">
                        Mengatur tampilan visual (warna, font, ukuran, layout).
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 bg-gray-50">Tag HTML</td>
                      <td className="px-4 py-2 text-gray-700">
                        Misalnya: <code>&lt;h1&gt;</code>,{" "}
                        <code>&lt;p&gt;</code>, <code>&lt;img&gt;</code>,{" "}
                        <code>&lt;a&gt;</code>, <code>&lt;div&gt;</code>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 bg-gray-50">CSS Selector</td>
                      <td className="px-4 py-2 text-gray-700">
                        Menargetkan elemen HTML, contoh:{" "}
                        <code className="bg-gray-100 px-1 py-0.5 rounded text-sm text-purple-700">
                          p &#123; color: red; &#125;
                        </code>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 bg-gray-50">File eksternal</td>
                      <td className="px-4 py-2 text-gray-700">
                        Menghubungkan file CSS ke HTML dengan{" "}
                        <code className="bg-gray-100 px-1 py-0.5 rounded text-sm text-purple-700">
                          &lt;link&gt;
                        </code>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="text-gray-700">
              <h2 className="text-md font-bold mt-16">
                🚀 8. Langkah Praktik Pertama
              </h2>
              <p className="mt-3 text-sm ">🔧 Langkah-langkah:</p>
              <ol className="list-decimal  pl-6 space-y-2 text-md ">
                <li>Buka VS Code.</li>
                <li>Buat folder baru: belajar-html-css</li>
                <li>Buat file index.html</li>
                <li>Tulis kode sederhana:</li>

                <pre className="bg-gray-900 text-green-200 p-4 rounded-md overflow-x-auto text-sm">
                  {`<!DOCTYPE html>
<html>
  <head>
    <title>Belajar HTML & CSS</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <h1>Halo Dunia!</h1>
    <p>Ini halaman web pertamaku.</p>
  </body>
</html>
`}
                </pre>
                <li>Klik kanan → Open with Live Server</li>
                <li>Browser akan terbuka otomatis, menampilkan hasilnya.</li>
              </ol>
            </section>

            <section className="text-gray-700">
              <h2 className="text-md font-bold mt-16">
                🧩 9. (Opsional) - Instalasi Pendukung Jika Kamu Lanjut ke Level
                Lanjutan
              </h2>
              <p className="mt-3 text-sm ">
                Jika nanti kamu lanjut ke front-end development:
              </p>
              <ol className="list-disc  pl-6 space-y-2 text-sm mt-3 ">
                <li>Node.js → untuk package manager (npm)</li>
                <li>Git → untuk kontrol versi proyek</li>
                <li>
                  Preprocessor CSS (SASS/SCSS) → untuk menulis CSS lebih efisien
                </li>
                <li>Tulis kode sederhana:</li>
              </ol>
              <p className="text-sm mt-3 ">
                Tapi untuk pemula HTML & CSS murni, ini belum wajib ya.
              </p>
            </section>

            <section className="text-gray-700">
              <h2 className="text-md font-bold mt-16">🎯 Kesimpulan</h2>

              <div className="w-full overflow-x-auto mb-4 mt-3 ">
                <table className="min-w-full border border-gray-300 divide-y divide-gray-300 text-xs md:text-sm">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-2 text-left font-semibold text-gray-700">
                        Persiapan
                      </th>
                      <th className="px-4 py-2 text-left font-semibold text-gray-700">
                        Keterangan
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-2 bg-gray-50">✅ Laptop/PC</td>
                      <td className="px-4 py-2">Wajib</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 bg-gray-50">✅ VS Code</td>
                      <td className="px-4 py-2">Disarankan.</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 bg-gray-50">
                        ✅ Ekstensi (Live Server, Prettier, dll)
                      </td>
                      <td className="px-4 py-2">Membantu coding cepat</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 bg-gray-50">
                        ✅ Browser (Chrome/Firefox)
                      </td>
                      <td className="px-4 py-2">Untuk uji hasil</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 bg-gray-50">
                        ✅ Folder proyek rapi
                      </td>
                      <td className="px-4 py-2">
                        Agar tidak bingung struktur file
                      </td>
                    </tr>

                    <tr>
                      <td className="px-4 py-2 bg-gray-50">
                        💡 Pengetahuan dasar HTML & CSS
                      </td>
                      <td className="px-4 py-2">Supaya lebih cepat paham</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-full lg:w-1/3 mt-5 space-y-8">
          {/* Newsletter */}
          <div className="shadow-2xl rounded-2xl p-6 bg-white">
            <p className="font-bold text-2xl text-gray-700">📫 Newsletter</p>
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
            <p className="text-2xl font-bold border-b pb-2 text-gray-500 border-gray-300">
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

export default Persiapan;
