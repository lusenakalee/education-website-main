import React from "react";
import about from "../../assets/About.jpg";

const About = () => {
  return (
    <div className="section" id="about">
      <div className="grid md:grid-cols-2 gap-8 place-items-center">
        <div className="border-[3px] border-solid border-indigo-500rounded-lg">
          <img src="https://images.pexels.com/photos/3100960/pexels-photo-3100960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="" className="p-4" />
        </div>
        <div>
          <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-5">
          A Legacy of Shaping <br/>Informed {" "}
            <span className="text-indigo-500">Policies</span>
          </div>
          <p className="text-sm text-gray leading-7 mb-4">
          SERF, the Social and Economic Research Foundation, emerged as a leading institution driven by the pressing need for a deeper understanding of complex policy issues. We have honed our expertise, becoming a pioneering think tank delving into intricacies of policy options and development management challenges.          </p>
          <button className="py-3 px-6 text-sm border border-solid border-gray rounded-lg font-bold">
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
