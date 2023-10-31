import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "./WhatWeDoTabs.css";
// Import Swiper styles
import "swiper/css";
import { sliderSettings } from "../../utils/common";
import { PuffLoader } from 'react-spinners'
import governancePic from "../../assets/governancePic.png"
import knowledgePic from "../../assets/knowledgePic.png"



const WhatWeDoTabs = () => {


  return (
    <div id="residencies" className="mx-12 ">
      <div className="paddings innerWidth r-container">
        <div className="flexColStart r-head">
          <span className="text-2xl font-bold">What We Do</span>
          
        </div>
        <Swiper {...sliderSettings}>
          <SlideNextButton />
          {/* slider */}
          <SwiperSlide>
            <div>
              <a href="#" className="block">
                <img
                  alt="Signage"
                  src="https://images.unsplash.com/photo-1588515724527-074a7a56616c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
                  className="h-56 w-full rounded-bl-3xl rounded-tr-3xl object-cover sm:h-64 lg:h-72"
                />

                <div className="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">

                  <span className="hidden sm:block sm:h-px sm:w-8 sm:bg-yellow-500"></span>

                  <p className="mt-0.5 opacity-50 sm:mt-0">Strategic Research</p>
                </div>
              </a>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div>
              <a href="#" className="block">
                <img
                  alt="Signage"
                  src="https://images.unsplash.com/photo-1588515724527-074a7a56616c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
                  className="h-56 w-full rounded-bl-3xl rounded-tr-3xl object-cover sm:h-64 lg:h-72"
                />

                <div className="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
                 

                  <span className="hidden sm:block sm:h-px sm:w-8 sm:bg-yellow-500"></span>

                  <p className="mt-0.5 opacity-50 sm:mt-0">Custom-made Research</p>
                </div>
              </a>
            </div>
          </SwiperSlide>



          <SwiperSlide>
            <div>
              <a href="#" className="block">
                <img
                  alt="knowledgePic"
                  src={knowledgePic}
                  className="h-56 w-full rounded-bl-3xl rounded-tr-3xl object-cover sm:h-64 lg:h-72"
                />

                <div className="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
                 

                  <span className="hidden sm:block sm:h-px sm:w-8 sm:bg-yellow-500"></span>

                  <p className="mt-0.5 opacity-50 sm:mt-0">Knowledge and Innovation</p>
                </div>
              </a>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div>
              <a href="#" className="block">
                <img
                  alt="Governance"
                  src={governancePic}
                  className="h-56 w-full rounded-bl-3xl rounded-tr-3xl object-cover sm:h-64 lg:h-72"
                />

                <div className="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
                 

                  <span className="hidden sm:block sm:h-px sm:w-8 sm:bg-yellow-500"></span>

                  <p className="mt-0.5 opacity-50 sm:mt-0">Governance and Capacity Development</p>
                </div>
              </a>
            </div>
          </SwiperSlide>


        </Swiper>
      </div>
    </div>
  );
};

export default WhatWeDoTabs;

const SlideNextButton = () => {
  const swiper = useSwiper();
  return (
    <div className="flexCenter r-buttons">
      <button onClick={() => swiper.slidePrev()} className="r-prevButton">
        &lt;
      </button>
      <button onClick={() => swiper.slideNext()} className="r-nextButton">
        &gt;
      </button>
    </div>
  );
};