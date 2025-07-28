import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginForm from "./LoginPages/LoginForm";
import RegisterForm from "./LoginPages/RegisterForm";
import HomePage from "./components/HomePage";
import Index from "./components/Index";
import VideoPages from "./pages/VideoPages";
import ForgotPassword from "./LoginPages/ForgotPassword";
import MateriPages from "./pages/MateriPages";

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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
