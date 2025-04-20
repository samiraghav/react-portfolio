import { Container } from "./styles";
import FadeIn from "../../FadeIn";

export function Experience() {
  return (
    <Container id="experience">
      <FadeIn direction="left">
        <h2>Experience</h2>
      </FadeIn>

      <div className="experience-list">
        <FadeIn direction="left" delay={50}>
          <div className="experience-item">
            <header>
              <h3>Software Engineer</h3>
              <p>Aug 2023 – Present</p>
            </header>
            <div className="timestamp">
              <p>Sportskeeda</p>
              <div>Remote</div>
            </div>
            <ul>
              <li>
                - Implemented engagement-driven features like win probability metrics, increasing cricket match center pageviews by 20%.
              </li>
              <li>
                - Streamlined newsletter popup across 8 categories via a unified setup, resulting in a 50% increase in clicks and a 25% boost in conversions.
              </li>
              <li>
                - Developed scalable backend and frontend modules for{" "}
                <a href="https://www.soapcentral.com/" target="_blank" rel="noreferrer">
                  Soapcentral
                </a>{" "}
                (6–7M MAUs), including Recaps, Spoilers, tag-driven content panels, and a revamped comments and notification system.
              </li>
              <li>
                - Introduced features like likes, threaded replies, real-time notifications (on comment likes and replies), and deep-linking reply buttons—driving a 40% increase in user engagement and page traffic.
              </li>
              <li>
                - Created the Style Central panel with affiliate integrations, generating ~$200/day in additional revenue.
              </li>
              <li>
                - Redesigned access control by replacing legacy permissions with a scalable, role-based system. Improved user-specific access, streamlined off-boarding, and added detailed logging for tracking and auditability.
              </li>
              <li>
                - Enhanced management control, reduced confusion, and minimized misuse—greatly easing administrative overhead.
              </li>
              <li>
                - Created a backend algorithm to store highly visited articles in Redis and display them in the trending section on article pages, driving a 60% increase in page views and higher CTR from trending sections.
              </li>
            </ul>
          </div>
        </FadeIn>

        <FadeIn direction="left" delay={100}>
          <div className="experience-item">
            <header>
              <h3>Software Engineer Intern</h3>
              <p>May 2023 – Aug 2023</p>
            </header>
            <div className="timestamp">
              <p>Sportskeeda</p>
              <div>Remote</div>
            </div>
            <ul>
              <li>
                - Developed and enhanced internal tools using PHP, JavaScript, and Smarty templates.
              </li>
              <li>
                - Contributed to modular content systems and editorial workflow improvements.
              </li>
            </ul>
          </div>
        </FadeIn>

        <FadeIn direction="left" delay={150}>
          <div className="experience-item">
            <header>
              <h3>Software Developer Intern</h3>
              <p>Jan 2023 – Apr 2023</p>
            </header>
            <div className="timestamp">
              <p>Shreeshantha IT Solutions Pvt Ltd</p>
              <div>Remote</div>
            </div>
            <ul>
              <li>
                - Built responsive web apps for clients using Bootstrap and Angular.
              </li>
              <li>
                - Developed{" "}
                <a href="https://raaksapphire.com/" target="_blank" rel="noreferrer">
                  Raak Sapphire
                </a>
                , Techer Solutions, and delivered updates for{" "}
                <a href="https://makermasti.com/" target="_blank" rel="noreferrer">
                  Makermasti
                </a>{" "}
                and{" "}
                <a href="https://onlinemenu.co.in/" target="_blank" rel="noreferrer">
                  Onlinemenuco
                </a>
                .
              </li>
            </ul>
          </div>
        </FadeIn>
      </div>
    </Container>
  );
}
