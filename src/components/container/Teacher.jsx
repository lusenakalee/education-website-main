import React from "react";
import teacher1 from "../../assets/teacher1.png";
import teacher2 from "../../assets/teacher2.png";
import { accordions } from "../../Data";
import Accordion from "./Accordion";
const Teacher = () => {
  return (
    <div className="section" id="teacher">
      <div className="grid sm:grid-cols-2 place-items-center gap-8">
        <div className="pl-5">
          <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-5">
          Board of  <span className="text-indigo-500">Directors</span> 
          </div>
          <p className="text-sm leading-7 text-gray mb-5">
          The incredible impact of MOCF would not be possible without our wonderful board . These folks are part of a much wider team working to raise the 220 children at our school, strengthen our programs, and position us for greater long-term impact.
          </p>
          <button className="py-3 px-4 bg-indigo-500 text-white rounded-lg text-sm font-bold ">
           View Projects
          </button>
        </div>
        <div className="p-4 rounded-lg md:w-3/4 sm:row-start-1">
          <img src={teacher1} className=" rounded-lg" alt="" />
        </div>
        <div className="pl-5">
          <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-5">
            Become <span className="text-indigo-500">A Teacher</span> <br /> at MOCF
          </div>
          <p className="text-sm leading-7 text-gray mb-5">
          The Margaret Okari Children’s Foundation (MOCF) educates, feeds, clothes, shelters, and advocates for at-risk children in Kisii, Kenya. The Foundation runs a school for children in Pre-K through year 8 and supports qualified students as they pursue their Secondary and University educations.
          </p>
          <button className="py-3 px-4 bg-indigo-500 text-white rounded-lg text-sm font-bold ">
            Articles & Publications
          </button>
        </div>
        <div className="p-4 md:w-3/4">
          <img src={teacher2}  className=" rounded-lg" alt="" />
        </div>
      </div>
      <div className="text-center my-8 font-bold sm:text-[1.875rem] text-[1.5rem]">
        Frequently <span className="text-indigo-500">Asked Questions</span>
      </div>
      <div className="mt-12 max-w-[700px] mx-auto">
        {accordions.map((accordion) => {
          return <Accordion key={accordion.id} {...accordion} />;
        })}
      </div>
    </div>
  );
};

export default Teacher;
