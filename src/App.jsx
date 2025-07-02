import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import HomePage from "./components/HomePage";
import Index from "./components/Index";
function App() {
  return (
    <>
      {/* <AuthForm /> */}
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/home" element={<RegisterForm />} />
          <Route path="/index" element={<Index />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
