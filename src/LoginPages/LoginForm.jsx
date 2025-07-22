import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setMessage("Login berhasil!");
      navigate("/home");
    } catch (err) {
      setMessage(err.message);
    }
  };

  return (
    <div
      className="min-h-screen w-full bg-cover fixed  "
      style={{
        backgroundImage: "url('/bg.jpg')",
      }}
    >
      <div className="flex items-center justify-center px-4 mt-30">
        <div className=" max-w-sm mx-auto p-4  bg-white shadow rounded ">
          <h2 className="text-xl font-bold mb-4 text-purple-600">Login</h2>
          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 border mb-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 border mb-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="submit"
              className="bg-purple-600 text-white w-full py-2 rounded"
            >
              Login
            </button>
            {message && <p className="mt-2 text-sm text-center">{message}</p>}
          </form>
          <p className="text-xs text-gray-500 mt-3">
            belum punya akun?{" "}
            <Link to="/register" className="text-blue-600 cursor-pointer">
              Register
            </Link>
          </p>
          <p className="text-xs text-blue-400 pt-3">
            <Link to="/forgotpass">Lupa Password?</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
