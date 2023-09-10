import React from "react";
import about from "../../assets/About.jpg";

const About = () => {
  return (
    <div className="section" id="about">
      <div className="grid md:grid-cols-2 gap-8 place-items-center">
        <div className="border-[3px] border-solid border-Teal rounded-lg">
          <img src={about} alt="" className="p-4" />
        </div>
        <div>
          <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-5">
          Working Towards   <br /> Greater{" "}
            <span className="text-Teal">Sustainability</span>
          </div>
          <p className="text-sm text-gray leading-7 mb-4">
          MOCF is currently funded entirely by charitable donations from individuals and various foundations. We also only accept at-risk children (most orphans or with single parents). To become more financially sustainable and increase our impact we are working towards a future where we will begin accepting a certain amount of paying students. Demand for admission to our school from paying students is already high given the incredible quality of education that our teachers provide. To this end, we are running a capital campaign to build out our school’s infrastructure so that we can serve more students.
          </p>
          <button className="py-3 px-6 text-sm border border-solid border-gray rounded-lg font-bold">
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
