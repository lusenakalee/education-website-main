import React, { useContext } from "react";

import { HashLink } from "react-router-hash-link";
import Navbar from "./Navbar/Navbar";
import { Breadcrumbs } from "@material-tailwind/react";
import ProjectsContext from "../context/ProjectsContext";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Footer from "./container/Footer";
import './SingleProject.css'

const SingleProject = () => {
  const { projectsData } = useContext(ProjectsContext);
  const { id } = useParams();
  const project = projectsData.find((project) => project.id === id);

  if (!project) {
    return <div>loading</div>;
  }

  return (
    <div>
      <header className="pb-24">
        <Navbar />
      </header>

      <div className="pl-20 pt-10"


      >
        <Breadcrumbs>
          <Link smooth to="/" className="opacity-60">
            Home Page<span>{" "}</span>
          </Link>
          <Link smooth to="/projects" className="opacity-60">
            projects
          </Link>
          <Link>Article</Link>
        </Breadcrumbs>
      </div>

      <main className="pt-8 pb-16 lg:pt-16 bg-overlay mx-auto px-4 lg:px-8 justify-items-center lg:pb-24 bg-white dark:bg-gray-900">
        <div className="flex justify-between  px-auto mx-auto px-4 lg:px-8 ">
          <article
            key={project.id}
            className=" px-auto prose-lg mx-auto px-4 lg:px-8  format-blue dark:format-invert"
          >
            <img
              alt="Lava"
              src={project.eventImg}
              class="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
            />
            <p className="text-lg  pb-4">{project.storyParagraph1}</p>

            <figure>
              {project.refesences && (
                <figcaption>Refrence-{project.refesences}</figcaption>
              )}
            </figure>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SingleProject;
