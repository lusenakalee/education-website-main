import React from "react";
import { motion } from "framer-motion";

const Courses = () => {
  const container = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 3,
        staggerChildren: 2,
      },
    },
  };
  return (
    <div className="section" id="courses">
      <div className="text-center">
        <div className="sm:text-3xl text-2xl font-bold mb-5">
          Our <span className="text-Teal">Vision</span>
        </div>
        <p className="text-sm text-gray leading-7 max-w-[700px] mx-auto">
          Our vision is to create a future where well-informed, effective
          policies drive positive change. We believe that by bridging knowledge
          gaps, we can empower societies and decision-makers to make the world a
          better place. Our mission is to empower professionals, communities,
          and leaders with the insights and skills needed to make informed
          decisions through comprehensive training programs and knowledge
          dissemination initiatives.
        </p>
      </div>
    </div>
  );
};

export default Courses;
