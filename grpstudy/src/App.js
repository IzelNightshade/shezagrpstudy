import Login from "./components/auth/login";
import Register from "./components/auth/register";

import Header from "./components/header";
import Home from "./components/home";

import { AuthProvider } from "./contexts/authContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigate, useNavigate } from "react-router-dom";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <div className="w-full h-screen flex flex-col">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
