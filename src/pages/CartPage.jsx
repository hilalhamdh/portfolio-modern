import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../redux/cartSlice";
import { Link } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import Logo from "/robo.png";
const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const total = cartItems.reduce((sum, item) => sum + parseInt(item.harga), 0);

  const handleCheckout = () => {
    const message = `Halo, saya ingin membeli:\n\n${cartItems
      .map((item) => `- ${item.name} (Rp ${item.harga})`)
      .join("\n")}\n\nTotal: Rp ${total}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/6281234567890?text=${encodedMessage}`, "_blank");
  };

  return (
    <div className="bg-white">
      <div>
        <header className="bg-white shadow-md border-b sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
            {/* Kiri: Logo + Judul */}
            <div className="flex items-center gap-4">
              <Link to="/">
                <HiArrowLeft className="w-6 h-6 text-purple-600 object-contain" />
              </Link>
              <Link to="/">
                <img
                  src={Logo}
                  alt="Logo"
                  className="w-10 h-10 object-contain"
                />
              </Link>
              <h1 className="text-xl md:text-2xl font-semibold text-gray-800">
                Checkout
              </h1>
            </div>

            {/* Kanan: Bantuan */}
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <AiOutlineQuestionCircle size={20} />
              <span>Bantuan</span>
            </div>
          </div>
        </header>
      </div>
      <div className="max-w-4xl mx-auto p-6 mt-10">
        <h1 className="text-3xl font-bold mb-6">🛒 Keranjang Belanja</h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-10 text-gray-500">
            <p>Keranjang masih kosong.</p>
            <Link
              to="/"
              className="text-purple-600 underline mt-4 inline-block"
            >
              Kembali ke Beranda
            </Link>
          </div>
        ) : (
          <>
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <table className="min-w-full">
                <thead className="bg-purple-100">
                  <tr>
                    <th className="py-3 px-4 text-left text-sm font-semibold">
                      Paket
                    </th>
                    <th className="py-3 px-4 text-left text-sm font-semibold">
                      Harga
                    </th>
                    <th className="py-3 px-4 text-left text-sm font-semibold">
                      Aksi
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.id} className="border-b">
                      <td className="py-3 px-4">{item.name}</td>
                      <td className="py-3 px-4">Rp {item.harga}</td>
                      <td className="py-3 px-4">
                        <button
                          onClick={() => dispatch(removeFromCart(item.id))}
                          className="text-red-500 hover:text-red-700"
                        >
                          Hapus
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex justify-between items-center mt-6">
              <p className="text-lg font-semibold">Total: Rp {total}</p>
              <div className="flex gap-4">
                <button
                  onClick={() => dispatch(clearCart())}
                  className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300"
                >
                  Kosongkan
                </button>
                <button
                  onClick={handleCheckout}
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                >
                  Checkout via WhatsApp
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartPage;
