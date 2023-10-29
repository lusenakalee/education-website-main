import React, { useEffect, useState } from "react";
import { navLinks } from "../../Data";
import { HiMenuAlt1, HiX } from "react-icons/hi";
import MobileNavLinks from "./MobileNavLinks";
import NavLink from "./NavLink";
import { motion } from "framer-motion";
import mocfLogo from "../../assets/serf-logo.png";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to track the modal

  useEffect(() => {
    const scrollActive = () => {
      setActive(window.scrollY > 20);
    };
    window.addEventListener("scroll", scrollActive);
    return () => window.removeEventListener("scroll", scrollActive);
  }, [active]);

  // Function to open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div
      className={`${
        active ? "shadow-lg bg-cyan-300" : ""
      } fixed w-full top-0 left-0 z-20`}
    >
      <div>
        <div
          className={`${
            active ? "py-2 transition-all duration-300" : "py-4"
          } container  mx-auto flex items-center justify-between px-2`}
        >
          <div className="flex items-center gap-4">
            <HiMenuAlt1
              className="text-3xl sm:hidden cursor-pointer"
              onClick={() => setToggle(true)}
            />
            <div className="flex">
              <div>
                <img src={mocfLogo} className="w-24" alt="MOCF Logo" />
              </div>
              <div className="pt-4 font-bold text-xs text-indigo-500mb-4">
                {" "}
                Social and Economic <br />
                Research Foundation 
              </div>
            </div>
          </div>
          <div className="sm:flex items-center hidden">
            {navLinks.map((navLink) => {
              return <NavLink key={navLink.id} {...navLink} />;
            })}
          </div>
          <div
            className="py-3 px-6 font-bold text-sm border border-solid rounded-lg opacity-0 border-gray"
            onClick={openModal} // Open the modal when clicked
          >
            Donate
          </div>
          {toggle && (
            <motion.div
              initial={{ x: -500, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="fixed h-full w-96 top-0 left-0 z-20 bg-indigo-500 text-white flex flex-col justify-center items-center shadow-lg gap-8 py-8"
            >
              {navLinks.map((navLink) => {
                return (
                  <MobileNavLinks
                    key={navLink.id}
                    {...navLink}
                    setToggle={setToggle}
                  />
                );
              })}
              <HiX
                className="absolute right-12 top-12 text-3xl cursor-pointer"
                onClick={() => setToggle(false)} // Close the mobile menu
              />
            </motion.div>
          )}
        </div>
      </div>

   
     
    </div>
  );
};

export default Navbar;
