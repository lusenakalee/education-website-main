import React from "react";
import { Navbar } from "../components";
import { BlogDataProvider } from "../context/PostsContext";
import AllPosts from "../components/AllPosts";
import BlogHeader from "../components/BlogHeader";

function AllPostsPage() {
  return (
    <div >
       <header>
        <Navbar />
      </header>
      <main className="pt-24">
        <div>
      <BlogHeader/>
      </div>

        <BlogDataProvider>
        <AllPosts />
      </BlogDataProvider>
      </main>
    
      
    </div>
  );
}

export default AllPostsPage;
