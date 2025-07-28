import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../redux/cartSlice";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  // Hitung total harga
  const totalHarga = cartItems.reduce((total, item) => {
    return total + Number(item.harga.replace(".", ""));
  }, 0);

  // Format ke format Rupiah
  const formatRupiah = (angka) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(angka);
  };

  // Fungsi untuk handle WhatsApp
  const handleBayarWA = () => {
    const nomorWA = "6282326065654"; // Ganti dengan nomor admin kamu

    const pesan = encodeURIComponent(
      `Halo Admin! Saya ingin membeli:\n\n` +
        cartItems
          .map((item) => `- ${item.name} (Rp ${item.harga})`)
          .join("\n") +
        `\n\nTotal: ${formatRupiah(totalHarga)}`
    );

    const waUrl = `https://wa.me/${nomorWA}?text=${pesan}`;
    window.open(waUrl, "_blank");
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">🛒 Keranjang Belanja</h2>

      {cartItems.length === 0 ? (
        <p>Keranjang kosong.</p>
      ) : (
        <>
          <ul className="space-y-2 mb-4">
            {cartItems.map((item) => (
              <li key={item.id} className="flex justify-between border-b pb-2">
                <span>{item.name}</span>
                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="text-red-600"
                >
                  Hapus
                </button>
              </li>
            ))}
          </ul>

          <div className="mb-4">
            <h4 className="text-lg font-semibold">
              Total: {formatRupiah(totalHarga)}
            </h4>
          </div>

          <div className="flex flex-col gap-2">
            <button
              onClick={handleBayarWA}
              className="btn bg-green-500 text-white w-full"
            >
              Bayar via WhatsApp
            </button>

            <button
              onClick={() => dispatch(clearCart())}
              className="btn bg-red-600 text-white w-full"
            >
              Kosongkan Keranjang
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
