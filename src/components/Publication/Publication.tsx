import { Container } from "./styles";
import FadeIn from "../../FadeIn";

export function Publication() {
  return (
    <Container id="publication">
      <FadeIn direction="left">
        <h2>Leadership/Publications/Certificates</h2>
      </FadeIn>

      <div className="publication-list">
        <FadeIn direction="left" delay={50}>
          <div className="publication-item">
            <header>
              <h3>Intern Mentor</h3>
              <p>Sep 2024 – Feb 2025</p>
            </header>
            <div className="timestamp">
            </div>
            <ul>
              <li>
                - Mentored an intern, assisting her with the setup of the staging environment and providing guidance on technical
                challenges.
              </li>
              <li>
                - Conducted regular 1:1 sessions to offer feedback, answer questions, and help her grow in her role, fostering a
                collaborative learning environment
              </li>
            </ul>
          </div>
        </FadeIn>

        <FadeIn direction="left" delay={50}>
          <div className="publication-item">
            <header>
              <h3>An Enhanced English to Marathi Translator using Sequence-to-Sequence Transformer</h3>
              <a className="live-link" href="https://ieeexplore.ieee.org/document/10353330" target="_blank" rel="noopener noreferrer">Live</a>
            </header>
            <div className="timestamp">
              <p>2023 4th IEEE Global Conference for Advancement in Technology (GCAT)</p>
            </div>
            <ul>
              <li>
                - Proposed a novel sequence-to-sequence transformer architecture for English to Marathi machine translation.
              </li>
              <li>
                - Trained on a large parallel corpus and achieved a BLEU score of 41.99, demonstrating high accuracy and fluency.
              </li>
              <li>
                - Addresses challenges of low-resource language translation using attention mechanisms and deep learning techniques.
              </li>
            </ul>
          </div>
        </FadeIn>

        <FadeIn direction="left" delay={50}>
          <div className="publication-item">
            <header>
              <h3>Meta Front-End Developer Professional Certificate</h3>
              <a className="live-link" href="https://www.coursera.org/account/accomplishments/specialization/certificate/85EQKFRC86ZG" target="_blank" rel="noopener noreferrer">Live</a>
            </header>
            <div className="timestamp">
              <p>Coursera</p>
            </div>
          </div>
        </FadeIn>

        <FadeIn direction="left" delay={50}>
          <div className="publication-item">
            <header>
              <h3>Web Development Masterclass YouAccel</h3>
              <a className="live-link" href="https://drive.google.com/file/d/1EQfUmVmmmRHx4u-nZl8dHcvK3lHvzGpS/view" target="_blank" rel="noopener noreferrer">Live</a>
            </header>
            <div className="timestamp">
              <p>Udemy</p>
            </div>
          </div>
        </FadeIn>

        <FadeIn direction="left" delay={50}>
          <div className="publication-item">
            <header>
              <h3>Zensar ESD training provided by Zensar Technology</h3>
            </header>
            <div className="timestamp">
              <p>Zensar Company</p>
            </div>
          </div>
        </FadeIn>
      </div>
    </Container>
  );
}
