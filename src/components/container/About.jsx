import React from "react";
import policies from "../../assets/policies.jpeg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="section" id="about">
      <div className="grid md:grid-cols-2 gap-8 place-items-center">
        <div className="border-[3px] border-solid border-indigo-500rounded-lg">
          <img
          src={policies}
            alt=""
            className="p-4"
          />
        </div>
        <div>
          <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-5">
            A Legacy of Shaping <br />
            Informed <span className="text-indigo-500">Policies</span>
          </div>
          <p className="text-sm text-gray leading-7 mb-4">
            SERF, the Social and Economic Research Foundation, emerged as a
            leading institution driven by the pressing need for a deeper
            understanding of complex policy issues. We have honed our expertise,
            becoming a pioneering think tank delving into intricacies of policy
            options and development management challenges.{" "}
          </p>
          <Link smooth to="/about">
            <button className="py-3 px-6 text-sm border border-solid border-gray rounded-lg font-bold">
              Know More
            </button>
          </Link>
         
        </div>
      </div>
    </div>
  );
};

export default About;
