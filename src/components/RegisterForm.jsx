import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setMessage("Registrasi berhasil!");
    } catch (err) {
      setMessage(err.message);
    }
  };

  return (
    <div className="max-w-sm mx-auto p-4  bg-white shadow rounded">
      <h2 className="text-xl font-bold mb-4">Register</h2>
      <form onSubmit={handleRegister}>
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
          className="bg-green-500 text-white w-full py-2 rounded"
        >
          Register
        </button>
        {message && <p className="mt-2 text-sm text-center">{message}</p>}
      </form>
      <p className="text-xs text-gray-500 ">
        sudah punya akun?{" "}
        <Link to="/login" className="text-blue-600 cursor-pointer">
          Login
        </Link>
      </p>
    </div>
  );
};

export default RegisterForm;
