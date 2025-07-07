import reactIcon from "../assets/react.svg";
import nodeIcon from "../assets/nodedotjs.svg";
import tailwindIcon from "../assets/tailwindcss.svg";
import chakraIcon from "../assets/chakraui.svg";
import expressIcon from "../assets/express.svg";
import mongodbIcon from "../assets/mongodb.svg";
import firebaseIcon from "../assets/firebase.svg";
import darhi2 from "../assets/darhi2.png";
import nike1 from "../assets/nike1.png";
import nike2 from "../assets/nike2.png";
import nike3 from "../assets/nike3.png";
import nike4 from "../assets/nike4.png";
import insta1 from "../assets/insta1.png";
import insta2 from "../assets/insta2.png";
import insta3 from "../assets/insta3.png";
import kobweb1 from "../assets/kobweb1.png";
import kobweb2 from "../assets/kobweb2.png";
import kobweb4 from "../assets/kobweb4.png";
import kobweb5 from "../assets/kobweb5.png";
import graphbook1 from "../assets/graphbook1.png";
import graphbook2 from "../assets/graphbook2.png";
import graphbook3 from "../assets/graphbook3.png";

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
    gradient: "bg-gradient-to-r from-[var(--color-react)] to-cyan-700",
  },
  {
    name: "Node.js",
    icon: nodeIcon,
    gradient: "bg-gradient-to-r from-[var(--color-node)] to-green-400",
  },
  {
    name: "Tailwind CSS",
    icon: tailwindIcon,
    gradient: "bg-gradient-to-r from-[var(--color-tailwind)] to-sky-700",
  },
  {
    name: "Chakra UI",
    icon: chakraIcon,
    gradient: "bg-gradient-to-r from-[var(--color-chakra)] to-teal-300",
  },
  {
    name: "Express.js",
    icon: expressIcon,
    gradient: "bg-gradient-to-r from-[var(--color-express)] to-gray-500",
  },
  {
    name: "MongoDB",
    icon: mongodbIcon,
    gradient: "bg-gradient-to-l from-[var(--color-mongo)] to-green-400",
  },
  {
    name: "Firebase",
    icon: firebaseIcon,
    gradient: "bg-gradient-to-l from-[var(--color-firebase)] to yellow-400",
  },
];
export default techStack;

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
    images: [darhi2],
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
