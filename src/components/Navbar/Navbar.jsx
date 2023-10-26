import React, { useEffect, useState } from "react";
import { navLinks } from "../../Data";
import { HiMenuAlt1, HiX } from "react-icons/hi";
import MobileNavLinks from "./MobileNavLinks";
import NavLink from "./NavLink";
import { motion } from "framer-motion";
import mocfLogo from "../../assets/mocf_logo.png";

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
        active ? "shadow-lg bg-Solitude" : ""
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
            <div>
              <img src={mocfLogo} className="h-24" alt="MOCF Logo" />
            </div>
          </div>
          <div className="sm:flex items-center hidden">
            {navLinks.map((navLink) => {
              return <NavLink key={navLink.id} {...navLink} />;
            })}
          </div>
          <button
            className="py-3 px-6 font-bold text-sm border border-solid rounded-lg border-gray"
            onClick={openModal} // Open the modal when clicked
          >
            Donate
          </button>
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

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="fixed inset-0 bg-black opacity-50"
            onClick={closeModal} // Close the modal when the overlay is clicked
          ></div>
          <div className="fixed inset-x-0 bottom-0 p-4">
            {/* Modal content */}
            <div className="relative max-w-xl rounded-lg bg-slate-200 p-6 shadow-sm">
              <button
                type="button"
                className="absolute -end-1 -top-1 rounded-full border border-gray-200 bg-white p-1 text-gray-400"
                onClick={closeModal} // Close the modal when the "x" button is clicked
              >
                <span className="sr-only">Close</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
             <div className="grid  grid-cols-1 gap-4 sm:grid-cols-2">
             <img
        alt="Laptop"
        src="https://images.unsplash.com/photo-1587614382346-4ec70e388b28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        class="h-full w-full rounded-xl object-cover"
      />
      <div>
      <h2 class="text-lg font-medium">
          Give a little change alot.
        </h2>
        <p class="mt-4 text-sm text-gray-500">
        Your donation will help SERF to continue its important work of conducting research, building capacity, and disseminating knowledge on policy options and development management. By supporting SERF, you are helping to create a more informed and equitable world.        </p>
        <div class="mt-6 sm:text-right">
          <a
            href="#"
            class="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
          >
            Proceed
          </a>
        </div>
      </div>

             </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
