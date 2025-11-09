import { useState } from "react";
import { db, collection, addDoc, serverTimestamp } from "../firebase-config";

const FormPesan = () => {
  const [nama, setNama] = useState("");
  const [pesan, setPesan] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!nama.trim() || !pesan.trim()) {
      alert("Nama dan pesan harus diisi");
      return;
    }

    try {
      await addDoc(collection(db, "pesan"), {
        nama,
        pesan,
        createdAt: serverTimestamp(),
      });
      setNama("");
      setPesan("");
      alert("Pesan berhasil dikirim");
    } catch (error) {
      console.error("Error kirim pesan: ", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-4 bg-gray-100 rounded-lg shadow"
    >
      <h2 className="text-xl font-bold mb-4 text-purple-600">Kirim Pesan</h2>

      <input
        type="text"
        placeholder="Nama"
        value={nama}
        onChange={(e) => setNama(e.target.value)}
        className="w-full p-2 border border-gray-600 rounded mb-2"
      />

      <textarea
        placeholder="Pesan..."
        value={pesan}
        onChange={(e) => setPesan(e.target.value)}
        className="w-full p-2 border border-gray-600 rounded mb-2"
      ></textarea>

      <button
        type="submit"
        className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
      >
        Kirim
      </button>
    </form>
  );
};

export default FormPesan;
