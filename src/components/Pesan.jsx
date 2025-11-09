import { useEffect, useState, useRef } from "react";
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
  const [scrollProgress, setScrollProgress] = useState(0);
  const pageSize = 5;

  const carouselRef = useRef(null);

  useEffect(() => {
    const q = query(
      collection(db, "pesan"),
      orderBy("createdAt", "desc"),
      limit(pageSize)
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      if (!snapshot.empty) {
        const newData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        // Gabungkan data lama dengan data baru dari Firebase tanpa duplikat
        setPesanList((prevList) => {
          const merged = [...prevList];
          newData.forEach((item) => {
            if (!merged.some((p) => p.id === item.id)) {
              merged.push(item);
            }
          });

          // urutkan lagi berdasarkan createdAt desc
          merged.sort((a, b) => b.createdAt?.seconds - a.createdAt?.seconds);

          localStorage.setItem("pesanList", JSON.stringify(merged));
          return merged;
        });

        setLastDoc(snapshot.docs[snapshot.docs.length - 1]);
      } else {
        setIsEnd(true);
      }
    });

    return () => unsubscribe();
  }, []);

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

      setPesanList((prevList) => {
        const updatedList = [...prevList, ...moreData].filter(
          (v, i, a) => a.findIndex((t) => t.id === v.id) === i // hilangkan duplikat
        );
        localStorage.setItem("pesanList", JSON.stringify(updatedList));
        return updatedList;
      });

      setLastDoc(snapshot.docs[snapshot.docs.length - 1]);
    } else {
      setIsEnd(true);
    }

    setIsLoading(false);
  };

  const handleScroll = () => {
    const container = carouselRef.current;
    if (!container) return;

    const totalScrollWidth = container.scrollWidth - container.clientWidth;
    const scrollLeft = container.scrollLeft;

    setScrollProgress(
      totalScrollWidth ? (scrollLeft / totalScrollWidth) * 100 : 0
    );
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-purple-600 text-center">
        Pesan Pengunjung
      </h1>

      {pesanList.length === 0 ? (
        <p className="text-gray-500 text-center text-lg">Belum ada pesan.</p>
      ) : (
        <div className="relative">
          <div
            ref={carouselRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory space-x-6 scrollbar-none pb-2"
          >
            {pesanList.map((item) => (
              <div
                key={item.id}
                className="
                  flex-shrink-0 w-full sm:w-80 md:w-96
                  bg-white rounded-2xl shadow-lg p-6
                  snap-center
                  border border-gray-200
                  hover:scale-105 transition-transform
                "
              >
                <p className="text-gray-700 text-base leading-relaxed mb-6">
                  “{item.pesan}”
                </p>
                <p className="text-purple-700 font-semibold text-left">
                  -- {item.nama}
                </p>
              </div>
            ))}
          </div>

          <div className="h-1 bg-gray-300 rounded-full mt-2 w-full">
            <div
              className="h-1 bg-purple-500 rounded-full transition-all duration-300"
              style={{ width: `${scrollProgress}%` }}
            ></div>
          </div>
        </div>
      )}

      <div className="flex justify-center mt-6">
        {!isEnd && (
          <button
            onClick={loadMore}
            disabled={isLoading}
            className="bg-purple-500 text-white px-5 py-2 rounded-lg hover:bg-purple-600 disabled:bg-gray-400 transition-colors"
          >
            {isLoading ? "Memuat..." : "Next"}
          </button>
        )}
      </div>
    </div>
  );
};

export default Pesan;
