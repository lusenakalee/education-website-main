

import React,{  createContext } from 'react';
import { projectsData } from '../ProjectsData';

const ProjectsContext = createContext(projectsData);

export  function ProjectsDataProvider  ({children})  {

    return(
        <ProjectsContext.Provider
            value={{projectsData }}>
            {children}
        </ProjectsContext.Provider>
        
    );
};

export default ProjectsContext;

