import { Container } from "./styles";
import FadeIn from "../../FadeIn";

export function Education() {
  return (
    <Container id="education">
      <FadeIn direction="left">
        <h2>Education</h2>
      </FadeIn>

      <div className="education-list">
        <FadeIn direction="left" delay={50}>
          <div className="education-item">
            <header>
              <h3>JSPM's Rajarshi Shahu College Of Engineering Pune</h3>
              <p>Aug 2019 – May 2023</p>
            </header>
            <div className="timestamp">
              <p>Bachelors of Technology in Computer Science</p>
              <div>Pune, Maharashtra</div>
            </div>
          </div>
        </FadeIn>

        <FadeIn direction="left" delay={150}>
          <div className="education-item">
            <header>
              <h3>Arts Science and Commerce College</h3>
              <p>June 2018 – Apr 2019</p>
            </header>
            <div className="timestamp">
              <p>HSC</p>
              <div>Rahuri, Maharashtra</div>
            </div>
          </div>
        </FadeIn>

        <FadeIn direction="left" delay={100}>
          <div className="education-item">
            <header>
              <h3>Sant Tukaram Vidyalaya</h3>
              <p>June 2016 – Apr 2017</p>
            </header>
            <div className="timestamp">
              <p>SSC</p>
              <div>Rahuri, Maharashtra</div>
            </div>
          </div>
        </FadeIn>
      </div>
    </Container>
  );
}
