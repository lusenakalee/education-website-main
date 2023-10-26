import React from "react";
import { Navbar } from "../components";
import { ProjectsDataProvider } from "../context/ProjectsContext";
import Projects from "../components/Projects";

function ProjectsPage() {
  return (
    <div >
       <header>
        <Navbar />
      </header>
      <main className="pt-24">

        <ProjectsDataProvider>
        <Projects />
      </ProjectsDataProvider>
      </main>
    
      
    </div>
  );
}

export default ProjectsPage;
