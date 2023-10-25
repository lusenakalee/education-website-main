import React from "react";
import hero from "../../assets/hero.png";
import { logos } from "../../Data";
import { motion } from "framer-motion";
import teacher1 from "../../assets/teacher1.png";
const Home = () => {
  const container = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };
  return (
    <div className="section space-y-16 pt-44" id="home">
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-2 items-center justify-center ">
        <div>
          <div className="font-bold text-xs text-indigo-500mb-4">
            {" "}
            Social and Economic Research Foundation (SERF)
          </div>
          <div className="sm:text-[2.5rem] text-[1.825rem] font-bold">
          Shaping Informed <br/>Policies for a<br/>Better Tomorrow
          </div>
          <p className="text-sm leading-7 text-gray max-w-sm">
          At SERF, we're dedicated to advancing knowledge in policy options and development management. 
          For over seventeen years, we've been at the forefront of intensive policy and economic 
          management research, capacity development, and knowledge management. Our commitment to 
          empowering professionals and bridging knowledge gaps sets us apart.
          </p>
          <div className="mt-6">
            <button className="px-6 py-3 font-bold text-white bg-indigo-500 rounded-lg mr-4 text-sm">
              Donate
            </button>
            <button className="px-6 py-3 font-bold border border-solid border-gray rounded-lg text-sm">
              Discover
            </button>
          </div>
        </div>
        <div className="relative lg:mt-0 mt-4 h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
          <img
            className="inset-0 h-full w-full object-cover"
            src={hero}
            alt=""
          />
        </div>
      </div>
      {/* <div>
          <div className="absolute z-10 -mt-56 ">
            <div className="relative mt-2 bg-white rounded-md shadow-sm">
              <div
                type="text"
                className="block w-full rounded-md border-solid  border-gray border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                placeholder="0.00"
              >
                <p>Our happy Students</p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                  Over 1.5K graduated students
                </p>
                <div className="flex -space-x-5">
                  <img
                    className="h-10 w-10 flex-none rounded-full bg-gray-50"
                    src={teacher1}
                    alt=""
                  />
                  <img
                    className="h-10 w-10 flex-none rounded-full bg-gray-50"
                    src={teacher1}
                    alt=""
                  />
                  <img
                    className="h-10 w-10 flex-none rounded-full bg-gray-50"
                    src={teacher1}
                    alt=""
                  />
                  <div className="h-10 w-10 flex-none rounded-full bg-indigo-500  justify-center items-center">
                    {" "}
                    <p className="font-bold pt-2 text-white px-1"> 1.5k+</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      {/* <div>
          <div className="absolute z-10 -mt-24 ml-[38%] ">
            <div className="relative mt-2 bg-white rounded-md shadow-sm">
              <div
                type="text"
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                placeholder="0.00"
              >
                <p className="flex-1">Our Dedicated Team</p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                  Over 20 teachers
                </p>
                <div className="flex -space-x-5">
                  <img
                    className="h-10 w-10 flex-none rounded-full bg-gray-50"
                    src={teacher1}
                    alt=""
                  />
                  <img
                    className="h-10 w-10 flex-none rounded-full bg-gray-50"
                    src={teacher1}
                    alt=""
                  />
                  <img
                    className="h-10 w-10 flex-none rounded-full bg-gray-50"
                    src={teacher1}
                    alt=""
                  />
                  <div className="h-10 w-10 flex-none rounded-full bg-indigo-500 justify-center items-center">
                    {" "}
                    <p className="font-bold pt-2  text-white px-1"> 20+</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

      <div>
        <p className="text-center text-xl">
        Recognizing Excellence: {" "}
          <span className="text-indigo">
          SERF's Accolades
          </span>
        </p>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          className="flex items-center justify-center flex-wrap gap-8 p-2"
        >
          {logos.map((logo, index) => (
            <motion.div variants={item} className="w-28" key={index}>
              <img src={logo} alt="" className=" w-full object-cover" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
