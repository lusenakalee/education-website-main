import Testimonial from "./components/container/Testimonial";
import {
  Navbar,
  Home,
  About,
  Teacher,
  Contact,
  Courses,
  Footer,
} from "./components/index";

function App() {
  return (
    <div className="font-Poppins bg-slate-50">
      <Navbar />
      <Home />
      <About />
      <Courses />
      <Teacher />
      <Testimonial/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
