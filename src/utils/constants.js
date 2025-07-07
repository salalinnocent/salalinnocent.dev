import reactIcon from "../assets/react.svg";
import nodeIcon from "../assets/nodedotjs.svg";
import tailwindIcon from "../assets/tailwindcss.svg";
import chakraIcon from "../assets/chakraui.svg";
import expressIcon from "../assets/express.svg";
import mongodbIcon from "../assets/mongodb.svg";
import firebaseIcon from "../assets/firebase.svg";
import darhi1 from "../assets/darhi1.PNG";
import nike1 from "../assets/Nike1.PNG";
import nike2 from "../assets/Nike2.PNG";
import nike3 from "../assets/Nike3.PNG";
import nike4 from "../assets/Nike4.PNG";
import insta1 from "../assets/insta1.PNG";
import insta2 from "../assets/insta2.PNG";
import insta3 from "../assets/insta3.PNG";
import kobweb1 from "../assets/kobweb1.PNG";
import kobweb2 from "../assets/kobweb2.PNG";
import kobweb4 from "../assets/kobweb4.PNG";
import kobweb5 from "../assets/kobweb5.PNG";
import Graphbook1 from "../assets/Graphbook1.PNG";
import Graphbook2 from "../assets/Graphbook2.PNG";
import Graphbook3 from "../assets/Graphbook3.PNG";

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
    images: [Graphbook1, Graphbook2, Graphbook3],
  },
  {
    name: "Darhi Moonch",
    techStack: ["React.js", "Tailwind CSS"],
    images: [darhi1],
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
