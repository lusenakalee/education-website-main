import { BrowserRouter, Route, Routes } from "react-router-dom";
import Testimonial from "./components/container/Testimonial";
import HomePage from "./pages/HomePage";
import { Navbar } from "./components";
import Projects from "./pages/Projects";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
