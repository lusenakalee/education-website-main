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
import WhatWeDoTabs from "../components/container/WhatWeDoTabs";

function HomePage() {
  return (
    <div className="font-Poppins bg-slate-50">
      <Navbar />  
      <Home />
      <About />
      <Courses />
      <Teacher />
      <WhatWeDoTabs/>
      <Testimonial />
     
      <ContactUs/>
      <Footer />
    </div>
  );
}

export default HomePage;
