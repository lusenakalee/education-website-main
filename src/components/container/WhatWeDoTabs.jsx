import React, { useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import { sliderSettings } from "../../utils/common";
import "./WhatWeDoTabs.css";

import governancePic from "../../assets/governancePic.png";
import knowledgePic from "../../assets/knowledgePic.png";
import strategicPic from "../../assets/strategicPic.png";
import custompic from "../../assets/custompic.png";
import StrategicResearch from "../../storage/StrategicResearch";
import CustomResearch from "../../storage/CustomResearch";
import Knowledge from "../../storage/Knowledge";
import Governance from "../../storage/Governance";
import { Link } from "react-router-dom";

const WhatWeDoTabs = () => {
  const [selectedSlide, setSelectedSlide] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (slide) => {
    setSelectedSlide(slide);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedSlide(null);
    setIsModalOpen(false);
  };

  const renderModalContent = () => {
    switch (selectedSlide) {
      case "strategic":
        return <StrategicResearch />;
      case "custom":
        return <CustomResearch />;
      case "knowledge":
        return <Knowledge />;
      case "governance":
        return <Governance />;
      default:
        return null;
    }
  };

  return (
    <div id="residencies" className="mx-12">
      <div className="paddings innerWidth r-container">
        <div className="flexColStart r-head">
          <span className="text-2xl font-bold">What We Do</span>
        </div>

        <Swiper {...sliderSettings}>
        <SlideNextButton />
          <SwiperSlide>
            <div>
              <Link className="block" onClick={() => openModal("strategic")}>
                <img
                  alt="Strategic Research Pic"
                  src={strategicPic}
                  className="h-56 w-full rounded-bl-3xl rounded-tr-3xl object-cover sm:h-64 lg:h-72"
                />
                <div className="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
                  <span className="hidden sm:block sm:h-px sm:w-8 sm:bg-yellow-500"></span>
                  <p className="mt-0.5 opacity-50 sm:mt-0">Strategic Research</p>
                </div>
              </Link>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div>
            <Link className="block" onClick={() => openModal("custom")}>
                <img
                  alt="Signage"
                  src={custompic}
                  className="h-56 w-full rounded-bl-3xl rounded-tr-3xl object-cover sm:h-64 lg:h-72"
                />

                <div className="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
                 

                  <span className="hidden sm:block sm:h-px sm:w-8 sm:bg-yellow-500"></span>

                  <p className="mt-0.5 opacity-50 sm:mt-0">Custom-made Research</p>
                </div>
              </Link>
            </div>
          </SwiperSlide>



          <SwiperSlide>
            <div>
            <Link className="block" onClick={() => openModal("knowledge")}>
                <img
                  alt="knowledgePic"
                  src={knowledgePic}
                  className="h-56 w-full rounded-bl-3xl rounded-tr-3xl object-cover sm:h-64 lg:h-72"
                />

                <div className="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
                 

                  <span className="hidden sm:block sm:h-px sm:w-8 sm:bg-yellow-500"></span>

                  <p className="mt-0.5 opacity-50 sm:mt-0">Knowledge and Innovation</p>
                </div>
              </Link>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div>
            <Link className="block" onClick={() => openModal("governance")}>
                <img
                  alt="Governance"
                  src={governancePic}
                  className="h-56 w-full rounded-bl-3xl rounded-tr-3xl object-cover sm:h-64 lg:h-72"
                />

                <div className="mt-4 sm:flex sm:items-center sm:justify-center sm:gap-4">
                 

                  <span className="hidden sm:block sm:h-px sm:w-8 sm:bg-yellow-500"></span>

                  <p className="mt-0.5 opacity-50 sm:mt-0">Governance and Capacity Development</p>
                </div>
              </Link>
            </div>
          </SwiperSlide>

          {/* Repeat the above SwiperSlide structure for other slides with onClick events */}

        </Swiper>

        {isModalOpen && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={closeModal}>&times;</span>
              {renderModalContent()}
            </div>
          </div>
        )}
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
