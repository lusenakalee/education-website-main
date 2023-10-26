import React,{  createContext } from 'react';
import { publicationsData } from '../PublicationsData';

const PublicationsContext = createContext(publicationsData);

export  function PublicationsDataProvider  ({children})  {

    return(
        <PublicationsContext.Provider
            value={{publicationsData }}>
            {children}
        </PublicationsContext.Provider>
        
    );
};

export default PublicationsContext;