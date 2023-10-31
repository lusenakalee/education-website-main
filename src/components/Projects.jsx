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
      <div className="grid w-full grid-cols-1 gap-6 mx-auto lg:grid-cols-2 ">
        {projectsData.map((projo) => (
          <div key={projo.id} className="p-6">

<article
  class="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm"
>
  <img
    alt="Office"
    src={projo.eventImg}
    class="h-56 w-full object-cover"
  />

  <div class="p-4 sm:p-6">
    <a href="#">
      <h3 class="text-lg font-medium text-gray-900">
        {projo.title}
      </h3>
    </a>

    <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
     {projo.details}
    </p>

    <Link to={`/project/${projo.id}`}
      class="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
    >
      Find out more

      <span
        aria-hidden="true"
        class="block transition-all group-hover:ms-0.5 rtl:rotate-180"
      >
        &rarr;
      </span>
    </Link>
  </div>
</article>


          </div>
        ))}
      </div>
    </div>
  );
};
