import React from "react";
import { useLocation } from "react-router-dom";
import SingleProject from "../components/SingleProject";
import { Navbar } from "../components";
import { PublicationsDataProvider } from "../context/PublicationsContext";
import SinglePublication from "../components/SinglePublication";

function SinglePublicationPage() {

  const location = useLocation();
  const id = location.pathname.split('/').pop();



  return (
    <div>
        <Navbar/>
        <div>
      <PublicationsDataProvider>
        <SinglePublication className='w-full' id={id} />
      </PublicationsDataProvider>
      </div>
    </div>
  );
}

export default SinglePublicationPage;
