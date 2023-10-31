import React, { useContext } from "react";

import { HashLink } from "react-router-hash-link";
import Navbar from "./Navbar/Navbar";
import { Breadcrumbs } from "@material-tailwind/react";
import PostsContext from "../context/PostsContext";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Footer from "./container/Footer";

const SinglePost = () => {
  const { blogData } = useContext(PostsContext);
  const { id } = useParams();
  const post = blogData.find((post) => post.id === id);

  if (!post) {
    return <div>loading</div>;
  }

  return (
    <div>
     <header className="pb-24">
        <Navbar />
      </header>

      <div className="pl-20 pt-10">
        <Breadcrumbs>
          <Link smooth to="/" className="opacity-60">
            Home Page<span>{" "}</span>
          </Link>
          <Link smooth to="/projects" className="opacity-60">
            projects
          </Link>
          <Link>Article</Link>
        </Breadcrumbs>
      </div>

      <main className="pt-8 pb-16 lg:pt-16  mx-auto px-4 lg:px-8 justify-items-center lg:pb-24 bg-white dark:bg-gray-900">
        <div className="flex justify-between  px-auto mx-auto px-4 lg:px-8 ">
          <article
            key={post.id}
            className=" px-auto prose-lg mx-auto px-4 lg:px-8  format-blue dark:format-invert"
          >
              <img
              alt="Lava"
              src={post.eventImg}
              class="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
            />
           
            <p className="text-lg  pb-4">{post.storyParagraph1}</p>

            <figure>
              {post.refesences && (
                <figcaption>Refrence-{post.refesences}</figcaption>
              )}
            </figure>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SinglePost;
