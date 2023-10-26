import { FiPenTool } from "react-icons/fi";
import { FaLaptopCode } from "react-icons/fa";
import { BsBarChartLine } from "react-icons/bs";
import { MdOutlineScience } from "react-icons/md";

import courses1 from "./assets/courses1.jpg";
import courses2 from "./assets/courses2.jpg";
import courses3 from "./assets/courses3.jpg";
import courses4 from "./assets/courses4.jpg";
import courses5 from "./assets/courses5.jpg";
import courses6 from "./assets/courses6.jpg";
import courses7 from "./assets/courses7.jpg";
import tr from "./assets/tr.png";

import logo2 from "./assets/vetted20.png";
import logo3 from "./assets/effectiveOrg19.png";
import logo4 from "./assets/staffFav19.png";
import logo5 from "./assets/ranked19.png";
import logo6 from "./assets/mocf_logo.png";

export const navLinks = [
  {
    id: 1,
    href: "/",
    link: "Home",
  },
  {
    id: 2,
    href: "/about",
    link: "About",
  },
  {
    id: 5,
    href: "/projects",
    link: "Projects",
  },
  {
    id: 5,
    href: "/publications",
    link: "Articles",
  },
];

export const categories = [
  {
    id: 1,
    icon: <FiPenTool />,
    category: "Vision",
  },
  {
    id: 2,
    icon: <FaLaptopCode />,
    category: "Challenge",
  },
  {
    id: 3,
    icon: <BsBarChartLine />,
    category: "Solution",
  },
  {
    id: 4,
    icon: <BsBarChartLine />,
    category: "Impact",
  },
];

export const courses = [
  {
    id: 1,
    image: "https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Future Horizons",
    title: "Art and Creativity Workshop for Kids",
    rating: 4.9,
    participants: 500,
    price: 105,
  },
  {
    id: 2,
    image: "https://images.pexels.com/photos/4646833/pexels-photo-4646833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Africa Peace and Governance Consortium",
    title: "Outdoor Adventure Camp for Children",
    rating: 4.8,
    participants: 700,
    price: 125,
  },
  {
    id: 3,
    image: "https://images.pexels.com/photos/5940708/pexels-photo-5940708.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "The Journal of Professional and Academic Research (JPAR)",
    title: "Crafts and DIY Fun for Young Learners",
    rating: 4.9,
    participants: 300,
    price: 99,
  },
  {
    id: 4,
    image: tr,
    category: "The Republic Magazine",
    title: "Artistic Expression with Creative Projects",
    rating: 4.7,
    participants: 600,
    price: 85,
  },
];

export const logos = [ logo2, logo3, logo4, logo5, logo6];

export const accordions = [
  {
    id: 1,
    title: "What are the key areas of SERF's research?",
    answer: "SERF's research program focuses on a wide range of policy and development issues, including economic growth, poverty reduction, education, health, and social protection. We also conduct research on emerging issues such as climate change, urbanization, and technological change.    ",
  },
  {
    id: 2,
    title: "How can I access SERF's research findings?",
    answer: "SERF's research findings are available free of charge on our website. We also publish research reports, journals, and other publications on a regular basis. You can also subscribe to our newsletter to receive updates on our latest research and activities.    ",
  },
  {
    id: 3,
    title: "How can I get involved in SERF's work?",
    answer: "There are a number of ways to get involved in SERF's work. You can support our research by making a donation, attending our workshops and conferences, or sharing our research findings with your networks. You can also volunteer your time to help us with our research and outreach activities.",
  },
  
];
