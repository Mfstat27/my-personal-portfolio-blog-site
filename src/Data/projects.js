import { v4 as uuidv4 } from "uuid"
import moana from "../assets/Moana.png"

export const projects = [
  {
    id: uuidv4(),
    title: "Toy Store",
    desc: "An e-commerce store created using: React functional Components, React hooks, PayPal api, Styled-components, Typechecking with PropTypes, and React context api",
    github: "https://github.com/Mfstat27/ToyStore",
    image: `${moana}`,
    weblink: "https://traceys-toys.netlify.app/"
  },
  {
    id: uuidv4(),
    title: "Project Two",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
    github: "https://github.com/SankThomas",
    image: `${moana}`,
    weblink: "https://traceys-toys.netlify.app/"
  },
  {
    id: uuidv4(),
    title: "Project Three",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
    github: "https://github.com/SankThomas",
    image: "./images/project-3.jpeg",
    weblink: "https://traceys-toys.netlify.app/"
  },
  {
    id: uuidv4(),
    title: "Project Four",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
    github: "https://github.com/SankThomas",
    image: "./images/project-4.jpeg",
    weblink: "https://traceys-toys.netlify.app/"
  },
  {
    id: uuidv4(),
    title: "Project Five",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
    github: "https://github.com/SankThomas",
    image: "./images/project-5.jpeg",
    weblink: "https://traceys-toys.netlify.app/"
  },
  {
    id: uuidv4(),
    title: "Project Six",
    desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit",
    github: "https://github.com/SankThomas",
    image: "./images/project-6.jpeg",
    weblink: "https://traceys-toys.netlify.app/"
  },
]