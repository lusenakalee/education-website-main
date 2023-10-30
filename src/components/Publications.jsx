import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";

import { publicationsData } from "../PublicationsData";
import Navbar from "./Navbar/Navbar";
import Footer from "./container/Footer";
import PublicationsContext from "../context/PublicationsContext";

const Publications = () => {
  const { publicationsData } = useContext(PublicationsContext);

  return (
    <>
      <main>
        <Articles publicationsData={publicationsData} />
      </main>

      <Footer />
    </>
  );
};

export default Publications;

export const Articles = ({ publicationsData }) => {
  return (
    <div
      id="articles"
      className="relative items-center  px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl"
    >
      <div className="grid w-full grid-cols-1 gap-6 mx-auto lg:grid-cols-3">
        {publicationsData.map((projo) => (
          <div key={projo.id} className="p-6">
            <article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
              <img
                alt="Office"
                src="https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
                <div className="p-4 sm:p-6">
                  <time
                    datetime="2022-10-10"
                    className="block text-xs text-white/90"
                  >
                    {projo.date}
                  </time>

                  <Link to={`/publication/${projo.id}`}>
                    <h3 className="mt-0.5 text-lg text-white">{projo.title}</h3>
                  </Link>

                  <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                    {projo.details}
                  </p>
                </div>
              </div>
            </article>
          </div>
        ))}
      </div>
    </div>
  );
};
