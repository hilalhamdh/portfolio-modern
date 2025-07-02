import "./App.css";
import Introduction from "./components/Introduction";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Sidebar from "./components/Sidebar";
import About from "./components/About";
import Service from "./components/Service";

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="ml-[90px] grid grid-cols-1 md:grid-cols-3 ">
        <div className="col-span-2 p-5 ">
          <Introduction />
          <About />
          <Service />
        </div>
        <div className="hidden md:block">
          <Profile />
        </div>
      </div>
    </>
  );
}

export default App;
