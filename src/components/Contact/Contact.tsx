import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg";
import { Form } from "../Form/Form";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const contactVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3,
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export function Contact() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Container id="contact">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={contactVariants}
      >
        <header>
          <h2>Contact</h2>
          <p>Ready to get started on your project?</p>
          <p>Contact me now for a Free consultation</p>
        </header>
        <div className="contacts">
          <div>
            <a href="mailto:samiraghav24@gmail.com">
              <img src={emailIcon} alt="Email" />
            </a>
            <a href="mailto:samiraghav24@gmail.com">samiraghav24@gmail.com</a>
          </div>
          <div>
            <a href="tel:+919130410876">
              <img src={phoneIcon} alt="Phone No" />
            </a>
            <a href="tel:+919130410876">(+91) 9130410876</a>
          </div>
        </div>
        <Form />
      </motion.div>
    </Container>
  );
}
