import {
  Navbar,
  Home,
  About,
  Teacher,
  Contact,
  Courses,
  Footer,
} from "../components";
import Testimonial from "../components/container/Testimonial";

function HomePage() {
  return (
    <div className="font-Poppins bg-slate-50">
          <Navbar />

      <Home />
      <About />
      <Courses />
      <Teacher />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default HomePage;
