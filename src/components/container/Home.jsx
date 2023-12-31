import React from "react";
import { logos } from "../../Data";
import { motion } from "framer-motion";
import groupOfChildren from "../../assets/group-children.jpg"


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
          
          <div className="sm:text-[2.5rem] text-[1.825rem] font-bold">
          Shaping Informed <br/>Policies for a<br/>Better Tomorrow
          </div>
          <p className="text-sm leading-7 text-gray max-w-sm">
          At SERF, we're dedicated to advancing knowledge in policy options and development management. 
          For over seventeen years, we've been at the forefront of intensive policy and economic 
          management research, capacity development, and knowledge management. Our commitment to 
          empowering professionals and bridging knowledge gaps sets us apart.
          </p>
         
        </div>
        <div className="relative lg:mt-0 mt-4 h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
          <img
            className="inset-0 h-full w-full object-cover"
            src={groupOfChildren}
            alt=""
          />
        </div>
      </div>
    

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
