import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { product } from "../../data";

import ReactPlayer from "react-player";

const VideoPages = () => {
  const [filterTag, setFilterTag] = useState("All");

  const filteredBlogs = product.filter((blog) => {
    const matchTag =
      filterTag === "All" || blog.tag.toLowerCase() === filterTag.toLowerCase();
    return matchTag;
  });
  return (
    <div>
      <Sidebar />
      <div className="md:ml-[250px] grid grid-cols-1">
        <div className="col-span-2  ">
          <Navbar />
        </div>
      </div>
      <div className=" mt-8">
        <h1 className="text-center text-3xl font-bold ">VIDEOS</h1>
      </div>
      <div className="flex items-center justify-center gap-4  mt-6 mb-10">
        <button
          onClick={() => setFilterTag("All")}
          className={`px-4 py-2 rounded ${
            filterTag === "All" ? "bg-red-500 text-white" : "bg-gray-200"
          } cursor-pointer  hover:scale-110 `}
        >
          All
        </button>
        <button
          onClick={() => setFilterTag("React")}
          className={`px-4 py-2 rounded ${
            filterTag === "React" ? "bg-red-500 text-white" : "bg-gray-200"
          } cursor-pointer  hover:scale-110 `}
        >
          ReactJs
        </button>
        <button
          onClick={() => setFilterTag("Codeigniter")}
          className={`px-4 py-2 rounded ${
            filterTag === "Codeigniter"
              ? "bg-red-500 text-white"
              : "bg-gray-200"
          } cursor-pointer  hover:scale-110 `}
        >
          Codeigniter
        </button>
      </div>

      <div className=" mx-6 md:ml-[300px] md:mx-10 pt-10 grid grid-cols-1  lg:grid-cols-3 gap-3 md:gap-6">
        {filteredBlogs.slice(1, 10).map((pro) => (
          <div key={pro.id} className="cursor-pointer">
            <ReactPlayer
              url={pro.url}
              width="100%"
              height="360px"
              controls={true} // Menampilkan kontrol play, pause, dll
            />

            <p className="mt-3 text-red-400">{pro.tag}</p>
            <h2 className="mt-3 font-bold">{pro.title}</h2>
            <p className="line-clamp-3 text-justify pt-3 text-gray-500">
              {pro.desc}
            </p>
          </div>
        ))}
      </div>
      <div className=" flex box items-center justify-items-center  bg-white h-[355px] w-[375px] md:w-[650px] px-2 pb-4 ">
        <ReactPlayer
          url=" https://youtu.be/OuEwT015NJE?si=a1-8kz9cdRZrKhqO"
          className="w-full h-[300px] max-w-full pt-4"
        />
      </div>
    </div>
  );
};

export default VideoPages;
