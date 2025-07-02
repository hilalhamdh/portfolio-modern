import Introduction from "./Introduction";
import Navbar from "./Navbar";
import Profile from "./Profile";
import Sidebar from "./Sidebar";
import About from "./About";
import Service from "./Service";
import Footer from "./Footer";

const Index = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className="ml-[90px] grid grid-cols-1 md:grid-cols-3 ">
        <div className="col-span-2 p-5 ">
          <Introduction />
          <About />
          <Service />
          <Footer />
        </div>
        <div className="hidden md:block">
          <Profile />
        </div>
      </div>
    </div>
  );
};
export default Index;
