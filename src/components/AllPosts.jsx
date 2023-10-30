import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";

import { blogData } from "../BlogData";
import Navbar from "./Navbar/Navbar";
import Footer from "./container/Footer";
import PostsContext from "../context/PostsContext";

const AllPosts = () => {
  const { blogData } = useContext(PostsContext);

  return (
    <>
     

      <main>
        <Articles blogData={blogData} />
      </main>

      <Footer />
    </>
  );
};

export default AllPosts;

export const Articles = ({ blogData }) => {
  return (
    <div id="articles" className="relative items-center  px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
      <div className="grid w-full grid-cols-1 gap-6 mx-auto lg:grid-cols-1 ">
        {blogData.map((projo) => (
          <div key={projo.id} className="p-6">

<article className="flex bg-white transition hover:shadow-xl">
  <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
    <time
      datetime="2022-10-10"
      className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
    >
      <span>{projo.year}</span>
      <span className="w-px flex-1 bg-gray-900/10"></span>
      <span>{projo.month}</span>
    </time>
  </div>

  <div className="hidden sm:block sm:basis-56">
    <img
      alt="Guitar"
      src={projo.eventImg}      
      className="aspect-square h-full w-full object-cover"
    />
  </div>

  <div className="flex flex-1 flex-col justify-between">
    <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
      <a href="#">
        <h3 className="font-bold uppercase text-gray-900">
        {projo.title}
        </h3>
      </a>

      <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
      {projo.details}
      </p>
    </div>

    <div className="sm:flex sm:items-end sm:justify-end">
    <Link
       to={`/blog/${projo.id}`}
        className="block bg-blue-800 px-5 py-3 text-center text-xs font-bold uppercase text-white transition hover:bg-yellow-400"
      >
        Read Blog
      </Link>
    </div>
  </div>
</article>



          
          </div>
        ))}
      </div>
    </div>
  );
};
