import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';
import Header from './pages/Header';
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import UserProfile from "./pages/UserProfile";

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/userProfile" element={<UserProfile/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
