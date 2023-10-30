import React from "react";
import { useLocation } from "react-router-dom";
import { BlogDataProvider } from "../context/PostsContext";
import { Navbar } from "../components";
import SinglePost from "../components/SinglePost";

function SinglePostPage() {

  const location = useLocation();
  const id = location.pathname.split('/').pop();



  return (
    <div>
        <Navbar/>
        <div>
      <BlogDataProvider>
        <SinglePost className='w-full' id={id} />
      </BlogDataProvider>
      </div>
    </div>
  );
}

export default SinglePostPage;
