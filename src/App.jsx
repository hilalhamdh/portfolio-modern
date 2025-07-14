import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginForm from "./LoginPages/LoginForm";
import RegisterForm from "./LoginPages/RegisterForm";
import HomePage from "./components/HomePage";
import Index from "./components/Index";
import VideoPages from "./pages/VideoPages";

function App() {
  return (
    <>
      {/* <AuthForm /> */}
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/home" element={<Index />} />
          <Route path="/videopage" element={<VideoPages />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
