import React from "react";
import "./HomeProjects.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y , Autoplay } from 'swiper/modules';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import { projectsData } from "../ProjectsData";

function HomeProjects() {
  const breakpoints = {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
  };

  return (
    <div>
            <div className="text-xl   mx-12 font-bold mt-32">Most Recent Projects</div>

      <Swiper
        className=" mt-4 grid mx-12 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 "
        breakpoints={breakpoints}
        slidesPerGroup={breakpoints.slidesPerGroup}
        slidesPerView={breakpoints.slidesPerView}
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        navigation
        autoplay={{ delay: 10000 }}
      >
        {projectsData.map((project) => (
          <SwiperSlide
            key={project.id}
            className="flex  space-x-4 flex-col items-start justify-between"
          >
            <div className="flex items-center gap-x-4 text-xs">
              <time dateTime={project.date} className="text-gray-500 mx-8 mb-8 mt-8">
                {project.date}
              </time>
            </div>
            <div className="group relative">
              <img
                className="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl"
                src={project.eventImg}
                alt="blog"
              />
              <h3 className="mt-3 text-lg font-semibold hover:underline leading-6 text-gray-900 group-hover:text-gray-600">
                <Link to={`/project/${project.id}`}>
                  <span className="absolute inset-0 " />
                  {project.title}
                </Link>
              </h3>
              <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                {project.details}
              </p>
            </div>
            {/* <div className="relative mt-8 flex items-center gap-x-4">
              {project.authorImg && (
                <img
                  src={project.authorImg}
                  alt=""
                  className="h-10 w-10 rounded-full bg-gray-50"
                />
              )}
              <div className="text-sm leading-6">
                <p className="font-semibold text-gray-900">
                  <a href={project.id}>
                    <span className="absolute inset-0" />
                    {project.authorName}
                  </a>
                </p>
                <p className="text-gray-600">{project.authorTitle}</p>
              </div>
            </div> */}

            <br></br>
            <br></br>
            <br></br>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default HomeProjects;
