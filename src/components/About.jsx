import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";
import String from "../shared/String";

const About = () => {
  return (
    <div className="mt-12 px-5  md:px-44 text-center flex flex-col items-center text-black bg-white">
      <h2 className="font-bold text-[20px] md:text-[40px] pb-10">
        {String.ABOUT_HEADING}
      </h2>
      <FaQuoteLeft className="bg-green-600 rounded-full text-[44px] text-white p-3" />
      <p className="my-5 text-gray-500 text-[14px] text-justify">
        {String.ABOUT_DESC}
      </p>
      <FaQuoteRight className="bg-green-600 rounded-full text-[44px] text-white p-3" />
    </div>
  );
};

export default About;
