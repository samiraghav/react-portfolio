import React, { ReactNode } from "react";
import { Container } from "./styles";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import boostrapIcon from "../../assets/bootstrap-icon.svg";
import profileJPG from "../../assets/profile.jpg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: "left" | "up";
}

const FadeIn: React.FC<FadeInProps> = ({ children, delay = 0, direction = "left" }) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  const variants = {
    hidden: {
      opacity: 0,
      x: direction === "left" ? -50 : 0,
      y: direction === "up" ? 50 : 0,
    },
    visible: { opacity: 1, x: 0, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.6, delay: delay / 1000 }}
    >
      {children}
    </motion.div>
  );
};

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <FadeIn>
          <h2>About me</h2>
        </FadeIn>

        <FadeIn delay={100}>
          <p>
            I’m a passionate Full Stack Developer with <strong>2.3 years of experience</strong> building scalable, high-performance web applications. At <strong>Sportskeeda</strong>, I contributed to platforms serving over <strong>100M+ monthly active users</strong>, delivering impactful features across both frontend and backend systems.
          </p>
        </FadeIn>

        <FadeIn delay={200}>
          <p style={{ marginTop: "2rem", marginBottom: "2rem" }}>
            My core stack includes <strong>JavaScript (Vanilla + ReactJS)</strong>, <strong>PHP</strong>, <strong>Golang</strong>, and <strong>Smarty</strong>, with solid experience working on <strong>MySQL</strong>, <strong>MongoDB</strong>, and <strong>Elasticsearch</strong>. I’ve built everything from engagement-driven frontend components to scalable backend modules and admin tooling for content-heavy platforms like <strong>Soapcentral (6–7M MAUs)</strong>.
          </p>
        </FadeIn>

        <FadeIn delay={300}>
          <p>
            I also worked at <strong>Shreeshantha IT Solutions</strong>, where I developed and maintained websites using <strong>Bootstrap</strong> and <strong>WordPress</strong> for client-facing products. The focus was on clean UI, responsive layouts, and seamless content updates.
          </p>
        </FadeIn>

        <FadeIn delay={350}>
          <p>
            Outside of work, I’ve built several personal projects using <strong>ReactJS</strong>, exploring tools like compilers, anime explorers, and content discovery platforms. I enjoy solving real-world problems, working with fast-paced teams, and constantly learning new technologies to stay ahead in the game.
          </p>
        </FadeIn>

        <FadeIn delay={400}>
          <h3>Here are my main skills:</h3>
        </FadeIn>

        <div className="hard-skills">
          {[
            { icon: reactIcon, alt: "React", delay: 130 },
            { icon: typescriptIcon, alt: "Typescript", delay: 140 },
            { icon: nodeIcon, alt: "Node", delay: 160 },
            { icon: htmlIcon, alt: "Html", delay: 170 },
            { icon: cssIcon, alt: "Css", delay: 180 },
            { icon: boostrapIcon, alt: "Bootstrap", delay: 190 },
            { icon: jsIcon, alt: "JavaScript", delay: 200 },
          ].map(({ icon, alt, delay }) => (
            <div className="hability" key={alt}>
              <FadeIn delay={delay} direction="up">
                <img src={icon} alt={alt} />
              </FadeIn>
            </div>
          ))}
        </div>
      </div>
      <div className="profile-photo">
        <img className="profile-img" src={profileJPG} alt="profile" />
      </div>
    </Container>
  );
}
