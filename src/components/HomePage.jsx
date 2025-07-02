const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="max-w-2xl bg-white shadow-md rounded-lg p-8 text-center">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">
          Selamat Datang di CourseKu
        </h1>
        <p className="text-gray-600 mb-6">
          Platform pembelajaran online terbaik untuk kamu yang ingin belajar
          teknologi, pemrograman, dan lainnya.
        </p>
        <div className="space-x-4">
          <a
            href="/login"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            Login
          </a>
          <a
            href="/register"
            className="bg-gray-300 text-gray-800 px-6 py-2 rounded hover:bg-gray-400 transition"
          >
            Register
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
