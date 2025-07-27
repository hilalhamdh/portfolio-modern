import axios from "axios";
import { useState, useEffect } from "react";

function Api() {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://apidataproduct-default-rtdb.firebaseio.com/products.json")
      .then((response) => {
        setProduct(response.data || {});
      })
      .catch((error) => {
        console.error("gagal fetching data:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Daftar Produk</h1>

        {loading ? (
          <p className="text-gray-500">Loading data produk...</p>
        ) : Object.keys(product).length === 0 ? (
          <p className="text-red-500">Tidak ada produk ditemukan.</p>
        ) : (
          Object.entries(product).map(([key, item]) => (
            <div key={key} className="bg-white p-4 mb-3 rounded shadow">
              <p>
                <strong>Nama:</strong> {item.name}
              </p>
              <p>
                <strong>Harga:</strong> Rp{item.price}
              </p>
              <p>
                <strong>Stok:</strong> {item.stock}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Api;
