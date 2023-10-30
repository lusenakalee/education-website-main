import React from "react";

import { accordions } from "../../Data";
import Accordion from "./Accordion";
import { Link } from "react-router-dom";
const Teacher = () => {
  return (
    <div className="section" id="teacher">
      <div className="grid sm:grid-cols-2 place-items-center gap-8">
        <div className="pl-5">
          <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-5">
          Shaping a Better <span className="text-indigo-500">Future</span>
          </div>
          <p className="text-sm leading-7 text-gray mb-5">
          SERF's projects are designed to address some of the most pressing social and economic challenges facing our world. We work with governments, businesses, and civil society organizations to develop and implement innovative solutions that promote inclusive growth and sustainable development. Our projects have a real impact on the lives of people around the world, and we are committed to working together to build a better future for all.
          </p>
          <Link to="/projects">
            <button className="py-3 px-4 bg-indigo-500 text-white rounded-lg text-sm font-bold ">
              View Projects
            </button>
          </Link>
        </div>
        <div className="p-4 rounded-lg md:w-3/4 sm:row-start-1">
          <img src="https://images.pexels.com/photos/3825569/pexels-photo-3825569.jpeg?auto=compress&cs=tinysrgb&w=800"
          className=" rounded-lg" alt="" />
        </div>
        <div className="pl-5">
          <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-5">
            <span className="text-indigo-500"> Knowledge</span> <br /> at Your
            Fingertips
          </div>
          <p className="text-sm leading-7 text-gray mb-5">
          Explore our extensive collection of articles and
            publications to gain insights into the latest social and economic
            research. SERF's team of experts covers a wide range of topics, from
            poverty and inequality to education and healthcare. Our research is
            rigorous, impartial, and accessible, providing you with the
            information you need to make informed decisions.{" "}
          </p>
          <Link to="/publications">
            <button className="py-3 px-4 bg-indigo-500 text-white rounded-lg text-sm font-bold ">
              Articles & Publications
            </button>
          </Link>
        </div>
        <div className="p-4 md:w-3/4">
          <img src="https://images.pexels.com/photos/3059654/pexels-photo-3059654.jpeg?auto=compress&cs=tinysrgb&w=800"
          className=" rounded-lg" alt="" />
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
