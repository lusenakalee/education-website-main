import React from "react";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsPinterest,
} from "react-icons/bs";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <motion.div
      initial={{ height: 0 }}
      whileInView={{ height: "auto" }}
      transition={{ duration: 1 }}
      className="bg-blue-800 p-10"
    >
      <div className="grid md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 place-items-start gap-8 text-white">
        <div>
          <div className="font-bold mb-6">SERF</div>
          <p className="text-sm leading-7">
            A leading think tank dedicated to advancing knowledge in policy
            options and development management. 
          </p>
        </div>
        <div >
          <div className="font-bold mb-6">Quick Links</div>
          <div className="flex flex-col gap-4">
            <Link to="/about" className="text-sm hover:underline">
              About
            </Link>
            <Link to="/blog" className="text-sm hover:underline">
              Blog
            </Link>
          </div>
        </div>
        <div className="opacity-0">
          <div className="font-bold mb-6">Company</div>
          <div className="flex flex-col gap-4">
            <Link
              to="mailto:serfoundationafrica@gmail.com"
              className="text-sm hover:underline"
            >
              Join Us
            </Link>
            <Link
              to="mailto:serfoundationafrica@gmail.com"
              className="text-sm hover:underline"
            >
              Contact Us
            </Link>

            <Link to="" className="text-sm hover:underline">
              Terms & Conditions
            </Link>
          </div>
        </div>
        <div>
          <div className="font-bold mb-6">Contact us</div>
          <div className="text-sm mb-4">serfoundationafrica@gmail.com</div>

          <div className="flex gap-4 mt-4">
            <Link to="" className="hover:scale-110 text-xl">
              <BsInstagram />
            </Link>
            <Link
              to="https://twitter.com/Serf_Foundation"
              className="hover:scale-110 text-xl"
            >
              <BsTwitter />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
