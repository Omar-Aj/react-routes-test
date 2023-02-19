import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
// pages
import About from "./pages/About";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home/:pageNum" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Navigate to="/home/1" />} />
      </Routes>
    </div>
  );
}

export default App;
