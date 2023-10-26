import React from "react";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsPinterest,
} from "react-icons/bs";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.div
      initial={{ height: 0 }}
      whileInView={{ height: "auto" }}
      transition={{ duration: 1 }}
      className="bg-indigo-500 p-10"
    >
      <div className="grid md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 place-items-start gap-8 text-white">
        <div>
          <div className="font-bold mb-6">SERF</div>
          <p className="text-sm leading-7">
          We believe that educating our children has the power to shape their destinies
          </p>
        </div>
        <div>
          <div className="font-bold mb-6">Shortcuts</div>
          <div className="flex flex-col gap-4">
            <a href="/about" className="text-sm hover:underline">
             About
            </a>
          
            
          </div>
        </div>
        <div>
          <div className="font-bold mb-6">Company</div>
          <div className="flex flex-col gap-4">
            <a href="mailto:serfoundationafrica@gmail.com" className="text-sm hover:underline">
             Join Us
            </a>
            <a href="mailto:serfoundationafrica@gmail.com" className="text-sm hover:underline">
              Contact Us
            </a>
           
            <a href="" className="text-sm hover:underline">
              Terms & Conditions
            </a>
          </div>
        </div>
        <div>
          <div className="font-bold mb-6">Contact us</div>
          <div className="text-sm mb-4">serfoundationafrica@gmail.com</div>
         
          <div className="flex gap-4 mt-4">
          
            <a href="" className="hover:scale-110 text-xl">
              <BsInstagram />
            </a>
            <a href="https://twitter.com/Serf_Foundation" className="hover:scale-110 text-xl">
              <BsTwitter />
            </a>
            
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
