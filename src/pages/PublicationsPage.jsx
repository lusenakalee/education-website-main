import React from "react";
import { Navbar } from "../components";
import { PublicationsDataProvider } from "../context/PublicationsContext";
import Publications from "../components/Publications";

function PublicationsPage() {
  return (
    <div >
       <header>
        <Navbar />
      </header>
      <main className="pt-24">

    
      <PublicationsDataProvider>
        <Publications />
      </PublicationsDataProvider>
      </main>
    </div>
  );
}

export default PublicationsPage;
