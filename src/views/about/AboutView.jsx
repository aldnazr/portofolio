/* eslint-disable react/no-unescaped-entities */
import "./about.css";
import AboutBox from "./AboutBox";
import { Slide, Fade } from "react-awesome-reveal";
import CV from "../../assets/cv.pdf";
import ButtonOpenLink from "../../components/button/ButtonOpenLink";

const AboutView = () => {
  return (
    <div>
      <section id="about" className="container section">
        <div>
          <h2 className="section_title">About Me</h2>
        </div>

        <div className="about_container">
          <div className="about_data grid">
            <Fade>
              <div className="about_info">
                <p className="about_description">
                  I have experience in mobile and web application development,
                  focusing on building responsive user interfaces and writing
                  clean, maintainable code using modern frameworks such as Next,
                  Flutter, and Laravel.
                </p>
                <ButtonOpenLink
                  className="button"
                  redirect={CV}
                  text="Download CV"
                />
              </div>
            </Fade>

            <div className="about_skills grid">
              <Slide>
                <img
                  src="https://github-readme-stats.vercel.app/api/top-langs/?username=aldnazr&card_width=510&border_radius=18"
                  alt="toplanguange"
                />
              </Slide>
            </div>
          </div>
        </div>
        <AboutBox />
      </section>
    </div>
  );
};

export default AboutView;
