import React from "react";
import { useLocation } from "react-router-dom";
import { ProjectsDataProvider } from "../context/ProjectsContext";
import SingleProject from "../components/SingleProject";
import { Navbar } from "../components";
import './SingleProjectPage.css'

function SingleProjectPage() {
  const location = useLocation();
  const id = location.pathname.split("/").pop();

  return (
    <div>
      <Navbar />
      <div >
        <ProjectsDataProvider>
          <SingleProject className="w-full" id={id} />
        </ProjectsDataProvider>
      </div>
    </div>
  );
}

export default SingleProjectPage;
