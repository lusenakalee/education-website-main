import FutureHorizons from "./storage/FutureHorizons";
import Jpar from "./storage/Jpar";
import Apgc from "./storage/Apgc";
import TheRepublic from "./storage/TheRepublic";
import republicPic from "./assets/vetted20.png"
import jparPic from "./assets/staffFav19.png"
import futurePic from "./assets/ranked19.png"
import logo3 from "./assets/effectiveOrg19.png";


export const projectsData = [
  {  
    id: '1',
    eventImg: futurePic,
    authorImg: "https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    authorName: "Dillon Chemhere",
    authorTitle: "Associate",
   
    title: "Future Horizons: Shaping Tomorrow through Inclusive Research",
    details: `"Future Horizons" is a pioneering research initiative set to commence in January 2024, dedicated to exploring emerging challenges and opportunities that will define our collective future...`,
    storyParagraph1: <FutureHorizons/>,
   
  },
  {  
    id: '2',
    eventImg: logo3,
    authorImg: "https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    authorName: "Dillon Chemhere",
    authorTitle: "Associate",
   
    title: "Africa Peace and Governance Consortium",
    details:   `Within the framework of the Social and Economic Research Foundation (SERF), the Africa Peace and Governance Consortium (APGC) emerges as a transformative initiative...`,
    storyParagraph1: <Apgc/>,
   
  },
  {  
    id: '3',
    eventImg: jparPic,
    authorImg: "https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    authorName: "Dillon Chemhere",
    authorTitle: "Associate",
   
    title: "The Journal of Professional and Academic Research",
    details:  `The Journal of Professional and Academic Research (JPAR) stands as a prestigious peer-reviewed academic journal, established under the aegis of the Social and Economic Research Foundation (SERF)...`,
    storyParagraph1: <Jpar/>,
   
  },
   {  
    id: '4',
    eventImg: republicPic,
    authorImg: "https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    authorName: "Dillon Chemhere",
    authorTitle: "Associate",
   
    title: "The Republic Magazine",
    details:  `The Republic Magazine stands as a quintessential regional publication dedicated to East Africa, meticulously delving into three pivotal African issues: politics, climate, and finance...`,
    storyParagraph1: <TheRepublic/>,
   
  },
  
  

];
