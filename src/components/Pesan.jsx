import { useEffect, useState } from "react";
import {
  db,
  collection,
  query,
  orderBy,
  limit,
  startAfter,
  onSnapshot,
  getDocs,
} from "../firebase-config";

const Pesan = () => {
  const [pesanList, setPesanList] = useState(() => {
    const savedData = localStorage.getItem("pesanList");
    return savedData ? JSON.parse(savedData) : [];
  });
  const [lastDoc, setLastDoc] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isEnd, setIsEnd] = useState(false);
  const pageSize = 5;

  // Load halaman pertama realtime
  useEffect(() => {
    const q = query(
      collection(db, "pesan"),
      orderBy("createdAt", "desc"),
      limit(pageSize)
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      if (!snapshot.empty) {
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPesanList(data);
        localStorage.setItem("pesanList", JSON.stringify(data));
        setLastDoc(snapshot.docs[snapshot.docs.length - 1]);
      } else {
        setIsEnd(true);
      }
    });

    return () => unsubscribe();
  }, []);

  // Load halaman berikutnya
  const loadMore = async () => {
    if (!lastDoc || isEnd) return;

    setIsLoading(true);

    const nextQuery = query(
      collection(db, "pesan"),
      orderBy("createdAt", "desc"),
      startAfter(lastDoc),
      limit(pageSize)
    );

    const snapshot = await getDocs(nextQuery);
    if (!snapshot.empty) {
      const moreData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      const updatedList = [...pesanList, ...moreData];
      setPesanList(updatedList);
      localStorage.setItem("pesanList", JSON.stringify(updatedList));
      setLastDoc(snapshot.docs[snapshot.docs.length - 1]);
    } else {
      setIsEnd(true);
    }

    setIsLoading(false);
  };

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-purple-600">
        Pesan Pengunjung
      </h1>

      {pesanList.length === 0 ? (
        <p className="text-gray-600">Belum ada pesan.</p>
      ) : (
        <div
          className="
            grid grid-cols-1 gap-4 
            md:grid-cols-1 
            lg:grid-cols-1 
            sm:flex sm:flex-row sm:overflow-x-auto
          "
        >
          {pesanList.map((item) => (
            <div
              key={item.id}
              className="
                min-w-[250px] flex-shrink-0 
                p-3 bg-white rounded shadow border-gray-600 
                sm:mr-4
              "
            >
              <p className="font-semibold text-gray-700">{item.nama}</p>
              <p className="text-gray-700">{item.pesan}</p>
            </div>
          ))}
        </div>
      )}

      <div className="flex justify-center mt-4">
        {!isEnd && (
          <button
            onClick={loadMore}
            disabled={isLoading}
            className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 disabled:bg-gray-400"
          >
            {isLoading ? "Memuat..." : "Next"}
          </button>
        )}
      </div>
    </div>
  );
};

export default Pesan;
