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
    <div className="text-black bg-white">
      <Sidebar />
      <div className="md:ml-[250px] grid grid-cols-1">
        <div className="col-span-2  ">
          <Navbar />
        </div>
      </div>
      <div className=" mt-10">
        <h1 className="text-center text-3xl font-bold ">VIDEOS</h1>
      </div>
      <div className="px-2 grid grid-cols-3 md:flex text-sm items-center justify-center gap-4  mt-6 mb-10">
        <button
          onClick={() => setFilterTag("All")}
          className={`px-2 md:px-4 py-2 rounded ${
            filterTag === "All" ? "bg-red-500 text-white" : "bg-gray-200"
          } cursor-pointer  hover:scale-110 `}
        >
          All
        </button>
        <button
          onClick={() => setFilterTag("ReactJs")}
          className={`px-2 md:px-4 py-2 rounded ${
            filterTag === "ReactJs" ? "bg-red-500 text-white" : "bg-gray-200"
          } cursor-pointer  hover:scale-110 `}
        >
          ReactJs
        </button>
        <button
          onClick={() => setFilterTag("Codeigniter")}
          className={`px-2 md:px-4 py-2 rounded ${
            filterTag === "Codeigniter"
              ? "bg-red-500 text-white"
              : "bg-gray-200"
          } cursor-pointer  hover:scale-110 `}
        >
          Codeigniter
        </button>
        <button
          onClick={() => setFilterTag("Github")}
          className={`px-2 md:px-4 py-2 rounded ${
            filterTag === "Github" ? "bg-red-500 text-white" : "bg-gray-200"
          } cursor-pointer  hover:scale-110 `}
        >
          Github
        </button>
        <button
          onClick={() => setFilterTag("Tailwindcss")}
          className={`px-2 md:px-4 py-2 rounded ${
            filterTag === "Tailwindcss"
              ? "bg-red-500 text-white"
              : "bg-gray-200"
          } cursor-pointer  hover:scale-110 `}
        >
          Tailwindcss
        </button>
      </div>

      <div className=" mx-6 md:ml-[300px] md:mx-10 pt-3 grid grid-cols-1  lg:grid-cols-3 gap-3 md:gap-6">
        {filteredBlogs.map((pro) => (
          <div
            key={pro.id}
            className="cursor-pointer bg-gray-200 p-2 rounded-sm"
          >
            <p className="text-md px-1">{pro.title}</p>
            <ReactPlayer
              src={pro.url}
              width="100%"
              height="300px"
              controls={true} // Menampilkan kontrol play, pause, dll
            />

            <p className="mt-3 text-red-400">{pro.tag}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoPages;
