import React from "react";
import cpic from "../assets/contactuspicture.png"
import { Link } from "react-router-dom";

function ContactUs() {
  return (
    <div >
      
      <main className="pt-24">
      <section
  className="overflow-hidden bg-[url(https://images.pexels.com/photos/3727464/pexels-photo-3727464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)] bg-cover bg-top bg-no-repeat"
>
  <div className="bg-black/25 p-8 md:p-12 lg:px-16 lg:py-24">
    <div className="text-left ltr:sm:text-left rtl:sm:text-right">
      <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl">
       Contact Us
      </h2>

      <p
        className="hidden max-w-lg text-white/90 md:mt-6 md:block md:text-lg md:leading-relaxed"
      >
       Email: serfoundationafrica@gmail.com<br/>
        Address: Mazingira Close, Karen, Nairobi, Kenya 

      </p>

      <div className="mt-4 sm:mt-8">
        <Link
          to="mailto:serfoundationafrica@gmail.com"
          className="inline-block rounded-full bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
        >
          Get In Touch Today
        </Link>
      </div>
    </div>
  </div>
</section>

      
      </main>
    
      
    </div>
  );
}

export default ContactUs;
