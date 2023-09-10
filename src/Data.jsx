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
import courses8 from "./assets/courses8.jpg";

import logo1 from "./assets/vetted21.png";
import logo2 from "./assets/vetted20.png";
import logo3 from "./assets/effectiveOrg19.png";
import logo4 from "./assets/staffFav19.png";
import logo5 from "./assets/ranked19.png";
import logo6 from "./assets/mocf_logo.png";

export const navLinks = [
  {
    id: 1,
    href: "home",
    link: "Home",
  },
  {
    id: 2,
    href: "about",
    link: "About",
  },
  {
    id: 3,
    href: "courses",
    link: "Vision",
  },
  {
    id: 4,
    href: "teacher",
    link: "Our Team",
  },
  {
    id: 5,
    href: "contact",
    link: "Events",
  },
  {
    id: 5,
    href: "contact",
    link: "+254 722 000 000",
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
    image: courses1,
    category: "Donation",
    title: "Art and Creativity Workshop for Kids",
    rating: 4.9,
    participants: 500,
    price: 105,
  },
  {
    id: 2,
    image: courses2,
    category: "School event",
    title: "Outdoor Adventure Camp for Children",
    rating: 4.8,
    participants: 700,
    price: 125,
  },
  {
    id: 3,
    image: courses3,
    category: "Graduation",
    title: "Crafts and DIY Fun for Young Learners",
    rating: 4.9,
    participants: 300,
    price: 99,
  },
  {
    id: 4,
    image: courses4,
    category: "Donation",
    title: "Artistic Expression with Creative Projects",
    rating: 4.7,
    participants: 600,
    price: 85,
  },
  {
    id: 5,
    image: courses5,
    category: "Sports day",
    title: "Healthy and Active Playtime for Kids",
    rating: 4.9,
    participants: 500,
    price: 105,
  },
  
];

export const logos = [logo1, logo2, logo3, logo4, logo5, logo6];

export const accordions = [
  {
    id: 1,
    title: "How does MOCF empower vulnerable children through education?",
    answer: "MOCF empowers vulnerable children through education by running a school for children from Pre-K through year 8. Additionally, MOCF supports qualified students as they pursue their Secondary and University educations, helping them build a better future.",
  },
  {
    id: 2,
    title: "Where is MOCF located, and what services does it provide in Kisii, Kenya?",
    answer: "MOCF is located in Kisii, Kenya. It provides education, food, clothing, shelter, and advocacy services for at-risk children in the region.",
  },
  {
    id: 3,
    title: "How can i donate?",
    answer: "Through mpesa and Paypal.We also accept donations by check made out to “Margaret Okari Children’s Foundation and mailed to:  5150 Fair Oaks Blvd. Suite 101, Box 342, Carmichael, CA 95608",
  },
  {
    id: 4,
    title: "What educational programs does MOCF offer for children?",
    answer: "MOCF offers a range of educational programs, including a school for Pre-K through year 8 students and support for qualified students pursuing Secondary and University education.",
  },
];
