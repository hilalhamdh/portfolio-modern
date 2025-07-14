import { useEffect, useState } from "react";
import { TfiAlignJustify, TfiClose } from "react-icons/tfi";
import { Link } from "react-router-dom";
// import Hilal from "../path/to/hilal.jpg"; // Pastikan kamu sudah import ini
import CountUp from "react-countup";
import CardPages from "../pages/CardPages";

const HomePage = () => {
  const [toggle, setToggle] = useState(false); // default false agar menu tertutup
  const [show, setShow] = useState(true);

  return (
    <>
      <div
        className="min-h-screen flex flex-col transition-all ease-in-out"
        style={{
          backgroundImage: "url('/bg.jpg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        {/* Navbar */}
        <div className="md:px-25 p-4 bg-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                src="/logo.png"
                alt="Logo"
                className="w-10 h-10 rounded-full"
              />
              <h2 className="text-xl font-bold pl-3 text-sky-950">MyCoding</h2>
            </div>
            <div>
              <ul className="hidden md:flex items-center gap-6 cursor-pointer">
                <li className="text-sky-950 text-md font-semibold">Product</li>
                <li className="text-sky-950 text-md font-semibold">About</li>
              </ul>
            </div>

            <div className="flex items-center space-x-4">
              {/* Desktop Login Button */}
              <div className="hidden md:block">
                <Link
                  to="/login"
                  className="bg-sky-950 text-white px-6 py-2 rounded hover:bg-sky-700 transition-all"
                >
                  Login
                </Link>
              </div>

              {/* Toggle Button */}
              <div className="md:hidden">
                {toggle ? (
                  <TfiClose
                    onClick={() => setToggle(false)}
                    className="w-6 h-6 cursor-pointer"
                  />
                ) : (
                  <TfiAlignJustify
                    onClick={() => setToggle(true)}
                    className="w-6 h-6 cursor-pointer"
                  />
                )}
              </div>
            </div>
          </div>

          {/* Toggle Menu Mobile */}

          {toggle && (
            <div className="flex flex-col bg-gray-300 p-4 mt-3 rounded shadow-md md:hidden">
              <Link
                to="/product"
                className="bg-sky-950 text-white px-4 py-2 rounded hover:bg-sky-700 transition mb-2"
              >
                Product
              </Link>
              <Link
                to="/about"
                className="bg-sky-950 text-white px-4 py-2 rounded hover:bg-sky-700 transition mb-2"
              >
                About
              </Link>
              <Link
                to="/login"
                className="bg-sky-950 text-white px-4 py-2 rounded hover:bg-sky-700 transition mb-2"
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

        {/* Hero Content */}
        <div className="flex flex-col mx-5  md:mx-50 ">
          <h1 className="text-4xl font-bold mb-2 pt-25 text-white">
            Belajar Online
          </h1>

          <p className="text-white">
            Kapan saja, di mana saja dengan materi terbaik.
          </p>
          <h1 className="text-4xl font-bold mb-2 pt-25  text-yellow-600">
            #Semua Bisa <br />
            <span className="text-white">Mahir Teknologi</span>
          </h1>
          <p className="text-white">
            Persiapkan dirimu dari sekarang. Dimulai dari belajar skill yang
            dibutuhkan oleh startup dan industri saat ini. Yuk, tingkatkan
            skillmu sekarang juga.
          </p>
        </div>
        <div>
          {show && (
            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center px-4 z-50">
              <div className="max-w-3xl bg-white shadow-md rounded-lg p-10 text-center relative">
                <TfiClose
                  onClick={() => setShow(false)}
                  className="absolute top-3 right-3 w-4 h-4 cursor-pointer text-gray-500 hover:text-red-500"
                />
                <h1 className="text-3xl font-bold mb- 4 text-gray-800">
                  Selamat Datang di MyCoding
                </h1>
                <p className="text-gray-600 mb-6">
                  Platform pembelajaran online terbaik untuk kamu yang ingin
                  belajar teknologi, pemrograman, dan lainnya.
                </p>
                <div className="space-x-4">
                  <Link
                    to="/login"
                    className="bg-sky-950 text-white px-6 py-2 rounded hover:bg-sky-700 transition"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="bg-gray-300 text-gray-800 px-6 py-2 rounded hover:bg-gray-400 transition"
                  >
                    Register
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-xl font-bold mb-2">Belajar Online</h3>
            <p>Kapan saja, di mana saja dengan materi terbaik.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Materi Lengkap</h3>
            <p>Dari dasar hingga lanjutan dalam berbagai bahasa pemrograman.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Sertifikat</h3>
            <p>Dapatkan sertifikat setelah menyelesaikan kursus.</p>
          </div>
        </div>
      </section>

      {/* Section tambahan */}
      <div className="text-center text-white font-semibold text-lg ">
        <div className="bg-sky-950 text-white py-8">
          <h1 className="pb-6 text-2xl">Member yang sudah bergabung </h1>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <h2 className="text-4xl font-bold text-yellow-400">
                <CountUp end={270} duration={2} />+
              </h2>
              <p className="mt-2 text-sm">Kota di Indonesia</p>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-yellow-400">
                <CountUp end={150000} duration={3} separator="." />+
              </h2>
              <p className="mt-2 text-sm">Member yang sudah bergabung</p>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-yellow-400">
                <CountUp end={100} duration={2} />+
              </h2>
              <p className="mt-2 text-sm">Client yang bekerja sama</p>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-yellow-400">
                <CountUp end={5} duration={2} />
              </h2>
              <p className="mt-2 text-sm">Tahun Mengedukasi Indonesia</p>
            </div>
          </div>
        </div>
      </div>
      <CardPages />
      <div className="collapse collapse-plus bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-3" defaultChecked />
        <div className="collapse-title font-semibold">
          How do I create an account?
        </div>
        <div className="collapse-content text-sm">
          Click the "Sign Up" button in the top right corner and follow the
          registration process.
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title font-semibold">
          I forgot my password. What should I do?
        </div>
        <div className="collapse-content text-sm">
          Click on "Forgot Password" on the login page and follow the
          instructions sent to your email.
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title font-semibold">
          How do I update my profile information?
        </div>
        <div className="collapse-content text-sm">
          Go to "My Account" settings and select "Edit Profile" to make changes.
        </div>
      </div>
    </>
  );
};

export default HomePage;
