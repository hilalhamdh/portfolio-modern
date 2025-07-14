const CardPages = () => {
  const card = [
    {
      id: 1,
      name: "Paket Pemula ",
      laris: "Most Populer",
      desc: [
        "Belajar logika dasar pemrograman",
        "Pengenalan HTML & CSS",
        "Dasar JavaScript untuk pemula",
      ],
      harga: "50.000",
    },
    {
      id: 2,
      name: "Paket Menengah",
      desc: [
        "Belajar logika dasar pemrograman",
        "Pengenalan HTML & CSS",
        "Dasar JavaScript untuk pemula",
        "Cocok untuk pelajar & pemula tanpa pengalaman",
        "Proyek akhir: Website statis sederhana",
      ],
      harga: "100.000",
    },
    {
      id: 3,
      name: "Paket Profesional",
      desc: [
        "Belajar logika dasar pemrograman",
        "Pengenalan HTML & CSS",
        "Dasar JavaScript untuk pemula",
      ],
      harga: "150.000",
    },
  ];
  return (
    <div className="mt-6">
      <div className="flex items-center justify-center">
        <h1 className="text-3xl font-bold text-center ">Paket Belajar</h1>
      </div>
      <div className="grid md:flex grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center  gap-4">
        {card.map((items) => (
          <div key={items.id} className=" card w-96 bg-base-100 shadow-sm">
            <div className="card-body">
              <span className="badge badge-xs badge-warning">
                {items.laris}
              </span>
              <div className="flex justify-between">
                <h2 className="text-2xl font-bold">{items.name}</h2>
                <span className="text-xl">Rp.{items.harga}</span>
              </div>
              <ul className="mt-6 flex flex-col gap-2 text-xs">
                {Array.isArray(items.desc) ? (
                  items.desc.map((point, index) => (
                    <li key={index}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-4 me-2 inline-block text-success"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{point}</span>
                    </li>
                  ))
                ) : items.desc ? (
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-4 me-2 inline-block text-success"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{items.desc}</span>
                  </li>
                ) : (
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-4 me-2 inline-block text-warning"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Deskripsi belum tersedia</span>
                  </li>
                )}
              </ul>

              <div className="mt-6">
                <button className="btn btn-primary btn-block">Subscribe</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardPages;
