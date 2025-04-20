import React from "react";
import { Container } from "./styles";
import { motion } from "framer-motion";
import externalLink from "../../assets/external-link.svg";

const projectVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export function Project() {
  const projects = [
    {
      title: "Code Ding",
      description:
        "Developed a browser-based code playground using ReactJS and CodeMirror where users can write, run, and manage multiple code snippets with Judge0 API integration.",
      tech: ["ReactJS", "Judge0", "JS", "CodeMirror"],
      link: "https://code-ding.vercel.app",
    },
    {
      title: "Color Palette Application",
      description:
        "Built a color palette generator that lets users create and save color schemes for design inspiration. Focused on simplicity and UX.",
      tech: ["ReactJS", "JS", "HTML", "CSS"],
      link: "https://color-paletteapplication.netlify.app",
    },
    {
      title: "Anime Website",
      description:
        "Created a modern anime listing platform using ReactJS with real-time data fetched from the Jikan API, showcasing anime details and ratings.",
      tech: ["ReactJS", "Jikan API", "JS"],
      link: "https://anime-website-samiraghav.vercel.app",
    },
    {
      title: "Giphy Application",
      description:
        "Implemented a GIF search app using Giphy API and ReactJS. Users can search trending GIFs, load more results, and interact with an intuitive interface.",
      tech: ["ReactJS", "Giphy API", "JS"],
      link: "https://giphyapplication.netlify.app",
    },
    {
      title: "Todo Application",
      description:
        "Built a fully functional CRUD todo app using React, Redux for state management, Framer Motion for animations, and React Icons for UI polish.",
      tech: ["ReactJS", "Redux", "Framer Motion", "JS"],
      link: "https://samiraghav.github.io/todo-crud-app",
    },
    {
      title: "Portolio in React + Framer ",
      description:
        "Designed and developed a personal portfolio using React and Framer Motion to showcase projects, skills, and experience with smooth animations and a responsive UI.",
      tech: ["ReactJS", "Framer", "HTML", "CSS"],
      link: "https://samir-aghav-react-portfolio.vercel.app",
    },
    // {
    //   title: "Family Guy Soundboard",
    //   description:
    //     "Created an interactive soundboard for Family Guy fans using ReactJS that plays iconic quotes and effects with custom audio integration.",
    //   tech: ["ReactJS", "JS", "HTML", "CSS"],
    //   link: "https://familiy-guy-scoreboard.netlify.app/",
    // },
  ];

  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">
        {projects.map((project, i) => (
          <motion.div
            className="project"
            key={project.title}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={projectVariants}
          >
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
              </svg>
              <div className="project-links">
                <a href={project.link} target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
            <footer>
              <ul className="tech-list">
                {project.tech.map((tech, idx) => (
                  <li key={idx}>{tech}</li>
                ))}
              </ul>
            </footer>
          </motion.div>
        ))}
      </div>
    </Container>
  );
}
