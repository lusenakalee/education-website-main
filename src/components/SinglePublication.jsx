import React, { useContext } from "react";
import "./SinglePublication.css";

import { HashLink } from "react-router-hash-link";
import Navbar from "./Navbar/Navbar";
import { Breadcrumbs } from "@material-tailwind/react";
import PublicationsContext from "../context/PublicationsContext";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Footer from "./container/Footer";

const SinglePublication = () => {
  const { publicationsData } = useContext(PublicationsContext);
  const { id } = useParams();
  const publication = publicationsData.find(
    (publication) => publication.id === id
  );

  if (!publication) {
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
            Home Page
          </Link>
          <Link smooth to="/publications" className="opacity-60">
            Publications
          </Link>
          <Link>Article</Link>
        </Breadcrumbs>
      </div>

      <main className="pt-8 pb-16 lg:pt-16  mx-auto px-4 lg:px-8 justify-items-center lg:pb-24 bg-white dark:bg-gray-900">
        <div className="flex justify-between  px-auto mx-auto px-4 lg:px-8 ">
          <article
            key={publication.id}
            className=" px-auto prose-lg mx-auto px-4 lg:px-8  format-blue dark:format-invert"
          >
            {/* <h1 className="mb-4 text-3xl  font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
              {publication.title}
            </h1> */}
            {/* <header className="mb-4 lg:mb-6 not-format">
              <address className="flex  justify-between   mb-6 not-italic">
                <div>
                  <div className="   text-sm text-gray-900 dark:text-white">
                    <div className=" max-w-prose pr-10  leading-none  ">
                      <p className="text-base leading-none text-left font-light text-gray-500 dark:text-gray-400">
                        <time pubdate>{publication.date}</time>
                      </p>
                    </div>
                    <div>
                      <img
                        className="rounded-lg"
                        alt="publication"
                        src={publication.publicationImg}
                      />
                    </div>
                    <div>
                      <p className="text-base leading-none font-light text-gray-500 dark:text-gray-400">
                        Authors:
                      </p>

                      <div className="flex">
                        {publication.authorImg && (
                          <div className="overflow-hidden">
                            <img
                              className="rounded-full w-16 h-16"
                              alt="publication"
                              src={publication.authorImg}
                            />
                          </div>
                        )}
                        <div>
                          <p className="text-xl translate-y-5 mt-2 font-bold pl-5 text-gray-900 dark:text-white">
                            {publication.authorName}
                          </p>
                          <p className="text-base  font-light pl-5 text-gray-500 dark:text-gray-400">
                            {publication.authorTitle}
                          </p>
                        </div>
                      </div>

                      <div className="flex">
                        {publication.coAuthorImg && (
                          <HashLink
                            to="/#AttorneysSect"
                            className="overflow-hidden"
                          >
                            <img
                              className="rounded-full w-16 h-16"
                              alt="publication"
                              src={publication.coAuthorImg}
                            />
                          </HashLink>
                        )}
                        <div className="leading-none">
                          <p className="text-xl mt-2 leading-none translate-y-5 pl-5 font-bold text-gray-900 dark:text-white">
                            {publication.coAuthorName}
                          </p>

                          <p className="text-base leading-none  pl-5 font-light text-gray-500 dark:text-gray-400">
                            {publication.coAuthorTitle}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="inline-flex items-center  text-sm text-gray-900 dark:text-white">
                    <div className=" max-w-prose  mx-auto">
                      <p className="text-base leading-none  font-light text-gray-500 dark:text-gray-400">
                        <br />
                      </p>
                      <br></br>

                      <p className="text-base font-light text-gray-500 dark:text-gray-400"></p>
                    </div>
                  </div>
                </div>
              </address>
            </header> */}
            <p className="text-lg  pb-4">{publication.storyParagraph1}</p>

            <figure>
              {publication.refesences && (
                <figcaption>Refrence-{publication.refesences}</figcaption>
              )}
            </figure>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SinglePublication;
