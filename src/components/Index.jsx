import Introduction from "./Introduction";
import Navbar from "./Navbar";

import Sidebar from "./Sidebar";
import About from "./About";
import Service from "./Service";
import Footer from "./Footer";

const Index = () => {
  return (
    <div>
      <Sidebar />
      <div className="md:ml-[250px] grid grid-cols-1 bg-white ">
        <div className="col-span-2  ">
          <Navbar />
          <Introduction />
          <About />
          <Service />
          <Footer />
        </div>
      </div>
    </div>
  );
};
export default Index;
