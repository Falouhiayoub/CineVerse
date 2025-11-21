import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Contact from "./pages/Contact";
import NavBar from "./components/NavBar";
import "./index.css";
function App() {
  return (
    <BrowserRouter >
    <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
