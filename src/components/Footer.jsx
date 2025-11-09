const Footer = () => {
  const image = [
    {
      id: 1,
      gambar: "/youtube.png",
    },
    {
      id: 2,
      gambar: "/Facebook.png",
    },
    {
      id: 3,
      gambar: "Instagram.png",
    },
    {
      id: 4,
      gambar: "/LinkedIn.png",
    },
  ];
  return (
    <div className="bg-gray-200 mt-10 p-6 items-center flex flex-col px-10">
      <div className="flex gap-4">
        {image.map((item) => (
          <div key={item.id}>
            <img src={item.gambar} alt="gambar" className="w-[40px]" />
          </div>
        ))}
      </div>

      <p className="text-gray-500 text-[15px] mt-4">
        &copy; {new Date().getFullYear()} Hilal Hamdi. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
