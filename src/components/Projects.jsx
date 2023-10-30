import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";

import { projectsData } from "../ProjectsData";
import Navbar from "./Navbar/Navbar";
import Footer from "./container/Footer";
import ProjectsContext from "../context/ProjectsContext";

const Projects = () => {
  const { projectsData } = useContext(ProjectsContext);

  return (
    <>
     

      <main>
        <Articles projectsData={projectsData} />
      </main>

      <Footer />
    </>
  );
};

export default Projects;

export const Articles = ({ projectsData }) => {
  return (
    <div id="articles" className="relative items-center  px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
      <div className="grid w-full grid-cols-1 gap-6 mx-auto lg:grid-cols-3 ">
        {projectsData.map((projo) => (
          <div key={projo.id} className="p-6">

            <img
              className="object-cover object-center w-full mb-8  md:h-36 rounded-xl"
              src={projo.eventImg}
              alt="blog"
            />
            <h2 className="mb-8 text-xs font-semibold tracking-widest text-blue-600 uppercase">
              {projo.date}
            </h2>
            <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">
              {projo.title}
            </h1>
            <p className="mx-auto line-clamp-3  text-base font-medium leading-relaxed text-gray-500">
              {projo.details}
            </p>
            <div className="mt-4">
              <Link
                to={`/project/${projo.id}`}
                className="inline-flex items-center mt-4 font-semibold text-blue-600 lg:mb-0 hover:text-neutral-600"
                title="read more"
              >
                Read More »
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
