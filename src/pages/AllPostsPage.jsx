import React from "react";
import { Navbar } from "../components";
import { BlogDataProvider } from "../context/PostsContext";
import AllPosts from "../components/AllPosts";

function AllPostsPage() {
  return (
    <div >
       <header>
        <Navbar />
      </header>
      <main className="pt-24">

        <BlogDataProvider>
        <AllPosts />
      </BlogDataProvider>
      </main>
    
      
    </div>
  );
}

export default AllPostsPage;
