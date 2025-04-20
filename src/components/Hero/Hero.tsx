import { Container } from "./styles";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Illustration from "../../assets/illustration.svg";
import { NavHashLink } from "react-router-hash-link";
import linkedin from "../../assets/linkedin.svg";
import githubIcon from "../../assets/github.svg";
import Hello from "../../assets/Hello.gif";
import telegram from "../../assets/telegram.svg";

const heroTextVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.2, duration: 0.6, ease: "easeOut" },
  },
};

const heroImageVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { delay: 0.8, duration: 0.6, ease: "easeOut" },
  },
};

export function Hero() {
  const { ref: heroTextRef, inView: heroTextInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const { ref: heroImageRef, inView: heroImageInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <Container id="home">
      <motion.div
        ref={heroTextRef}
        initial="hidden"
        animate={heroTextInView ? "visible" : "hidden"}
        variants={heroTextVariants}
      >
        <div className="hero-text">
          <motion.p animate={{ opacity: heroTextInView ? 1 : 0 }} transition={{ duration: 0.6 }}>
            Hello <img src={Hello} alt="Hello" width="20px" />, I'm
          </motion.p>
          <motion.h1 animate={{ opacity: heroTextInView ? 1 : 0 }} transition={{ duration: 0.6 }}>
            Samir Aghav
          </motion.h1>
          <motion.h3 animate={{ opacity: heroTextInView ? 1 : 0 }} transition={{ duration: 0.6 }}>
            Full Stack Developer
          </motion.h3>
          <motion.p className="small-resume">2.3 Years of Cumulative Experience</motion.p>

          <motion.div
            animate={{ opacity: heroTextInView ? 1 : 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <NavHashLink smooth to="#contact" className="button">
              Contact
            </NavHashLink>
          </motion.div>

          <motion.div
            className="social-media"
            animate={{ opacity: heroTextInView ? 1 : 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <a
              href="https://www.linkedin.com/in/samir-aghav-1bab44237/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedin} alt="Linkedin" />
            </a>
            <a href="https://github.com/samiraghav" target="_blank" rel="noreferrer">
              <img src={githubIcon} alt="GitHub" />
            </a>
            {/* <a href="https://api.whatsapp.com/send/?phone=%2B919630576848&text=Hello+Vinayak" target="_blank" rel="noreferrer">
              <img src={whatsapp} alt="Whatsapp" />
            </a> */}
            <a href="https://t.me/samiraghav" target="_blank" rel="noreferrer">
              <img src={telegram} alt="telegram" />
            </a>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        ref={heroImageRef}
        initial="hidden"
        animate={heroImageInView ? "visible" : "hidden"}
        variants={heroImageVariants}
      >
        <div className="hero-image">
          <motion.img src={Illustration} alt="Illustration" />
        </div>
      </motion.div>
    </Container>
  );
}
