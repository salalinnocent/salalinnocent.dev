import reactIcon from "../assets/react.svg";
import nodeIcon from "../assets/nodedotjs.svg";
import tailwindIcon from "../assets/tailwindcss.svg";
import chakraIcon from "../assets/chakraui.svg";
import expressIcon from "../assets/express.svg";
import mongodbIcon from "../assets/mongodb.svg";
import firebaseIcon from "../assets/firebase.svg";

import darhi from "../assets-webp/darhi.webp";
import nike1 from "../assets-webp/nike1.webp";
import nike2 from "../assets-webp/nike2.webp";
import nike3 from "../assets-webp/nike3.webp";
import nike4 from "../assets-webp/nike4.webp";
import insta1 from "../assets-webp/insta1.webp";
import insta2 from "../assets-webp/insta2.webp";
import insta3 from "../assets-webp/insta3.webp";
import kobweb1 from "../assets-webp/kobweb1.webp";
import kobweb2 from "../assets-webp/kobweb2.webp";
import kobweb4 from "../assets-webp/kobweb4.webp";
import kobweb5 from "../assets-webp/kobweb5.webp";
import graphbook1 from "../assets-webp/graphbook1.webp";
import graphbook2 from "../assets-webp/graphbook2.webp";
import graphbook3 from "../assets-webp/graphbook3.webp";

export const navLinks = [
  {
    href: "#hero",
    label: "hero",
  },
  {
    href: "#projects",
    label: "projects",
  },
  {
    href: "#about-me",
    label: "about-me",
  },
  {
    href: "#contact-me",
    label: "contact-me",
  },
  {
    href: "#blogs",
    label: "blogs",
  },
];

//exporting the techStack
export const techStack = [
  {
    name: "React.js",
    icon: reactIcon,
    gradient: "blue",
  },
  {
    name: "Node.js",
    icon: nodeIcon,
    gradient: "green",
  },
  {
    name: "Tailwind CSS",
    icon: tailwindIcon,
    gradient: "blue",
  },
  {
    name: "Chakra UI",
    icon: chakraIcon,
    gradient: "blue",
  },
  {
    name: "Express.js",
    icon: expressIcon,
    gradient: "gray",
  },
  {
    name: "MongoDB",
    icon: mongodbIcon,
    gradient: "green",
  },
  {
    name: "Firebase",
    icon: firebaseIcon,
    gradient:"red",
  },
];
export default techStack;

//projects
export const projects = [
  {
    name: "Graphbook",
    techStack: [
      "React.js",
      "GraphQL",
      "Apollo Client",
      "MySQL",
      "Tailwind CSS",
    ],
    images: [graphbook1, graphbook2, graphbook3],
  },
  {
    name: "Darhi Moonch",
    techStack: ["React.js", "Tailwind CSS"],
    images: [darhi],
  },
  {
    name: "Nike Landing Page",
    techStack: ["React.js", "Tailwind CSS"],
    images: [nike1, nike2, nike3, nike4],
  },
  {
    name: "Instagram Clone",
    techStack: ["React.js", "Chakra UI", "Firebase", "Zustand"],
    images: [insta1, insta2, insta3],
  },
  {
    name: "Portfolio Website",
    techStack: ["Kotlin", "JetPack Compose", "Kobweb"],
    images: [kobweb1, kobweb2, kobweb4, kobweb5],
  },
];

export const education = [
  {
    title: "Bachelor's",
    university: "Forman Christian College, Lahore",
    degree: "Mass Communication",
  },
  {
    title: "Master's",
    university: "Uppsala University, Sweden",
    degree: "Digital Media & Society",
  },
];
