import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginForm from "./LoginPages/LoginForm";
import RegisterForm from "./LoginPages/RegisterForm";
import HomePage from "./components/HomePage";
import Index from "./components/Index";
import VideoPages from "./pages/VideoPages";
import ForgotPassword from "./LoginPages/ForgotPassword";
import MateriPages from "./pages/MateriPages";
import CartPage from "./pages/CartPage";
import BasicProgramming from "./part/BasicProgramming";
import WebProgramming from "./part/WebProgramming";
import TutorialLain from "./part/TutorialLain";
import DasarHtml from "./materi/DasarHtml";
import Dasarcss from "./materi/Dasarcss";
import Persiapan from "./materi/Persiapan";

function App() {
  return (
    <div className="bg-white">
      {/* <AuthForm /> */}
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/materipage" element={<MateriPages />} />
          <Route path="/home" element={<Index />} />
          <Route path="/videopage" element={<VideoPages />} />
          <Route path="/forgotpass" element={<ForgotPassword />} />
          <Route path="/cartpages" element={<CartPage />} />
          <Route path="/cartpages" element={<CartPage />} />
          <Route
            path="/basic-programming"
            element={<BasicProgramming />}
          />{" "}
          <Route path="/web-programming" element={<WebProgramming />} />{" "}
          <Route path="/tutorial-lainnya" element={<TutorialLain />} />{" "}
          <Route path="/materi/dasarhtml" element={<DasarHtml />} />
          <Route path="/materi/persiapan" element={<Persiapan />} />
          <Route path="/materi/dasarcss" element={<Dasarcss />} />
          <Route path="/materi/dasarjs" element={<Dasarcss />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
