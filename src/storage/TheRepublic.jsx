import React from "react";
import tr1 from "../assets/tr1.png"
import tr2 from "../assets/tr2.png"

import tr3 from "../assets/tr3.png"


import "./FutureHorizons.css";

export default function TheRepublic() {
  return (
    <div>
      <div className="lg:absolute  z-10 flex py-4 px-4">
        
      </div>

      <article className="pb-24">
        <section className="storybook-page ">
          <h2>The Republic Magazine</h2>
          <p>
The Republic Magazine stands as a quintessential regional publication dedicated to East Africa, meticulously delving into three pivotal African issues: politics, climate, and finance. Serving as your gateway to Africa, our magazine excels in contextualizing these subjects, shedding light on pressing matters, and offering impartial coverage on breaking news.         
 </p>
          <p>
            Published on a quarterly basis, The Republic Magazine takes pride in its in-depth analysis, providing readers with insightful perspectives on the political landscape, climate challenges, and financial developments in East Africa. With a commitment to unbiased reporting, our publication serves as a reliable source of information, ensuring readers are well-informed about the critical issues shaping the region. Join us as we navigate the complexities of East African affairs, offering a comprehensive understanding of the political, environmental, and economic dynamics that define our continent.

          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 space-x-2 space-y-4">
            <img src={tr1} alt=""/>
              <img src={tr2} alt=""/>
                <img src={tr3} alt=""/>

            </div>
         
         
          
         
          
        
        </section>
      </article>
    </div>
  );
}
