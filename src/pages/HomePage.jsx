import {
  Navbar,
  Home,
  About,
  Teacher,
  Contact,
  Courses,
  Footer,
} from "../components";
import ContactUs from "../components/ContactUs";
import HomeProjects from "../components/HomeProjects";
import Testimonial from "../components/container/Testimonial";

function HomePage() {
  return (
    <div className="font-Poppins bg-slate-50">
      <Navbar />  
      <Home />
      <About />
      <Courses />
      <HomeProjects />
      <Teacher />
      <Testimonial />
     
      <ContactUs/>
      <Footer />
    </div>
  );
}

export default HomePage;
