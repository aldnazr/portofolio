/* eslint-disable react/no-unescaped-entities */
import "./about.css";
import AboutBox from "./AboutBox";
import OpenLinkButtonComponent from "../../components/button/OpenLinkButtonComponent";
import { Slide, Fade } from "react-awesome-reveal";
import CV from "../../assets/cv.pdf";

const AboutView = () => {
  return (
    <div>
      <section id="about" className="about container section">
        <div>
          <h2 className="section_title">About Me</h2>
        </div>

        <div className="about_container ">
          <div className="about_data grid">
            <Fade>
              <div className="about_info">
                <p className="about_description">
                  I have expertise in software development, focusing on mobile
                  and web applications. I'm experienced in building responsive
                  user interfaces and writing clean, maintainable code using
                  modern frameworks like React and Flutter.
                </p>
                <OpenLinkButtonComponent
                  className="button"
                  redirect={CV}
                  text="Download CV"
                />
              </div>
            </Fade>

            <div className="about_skills grid">
              <Slide>
                <img
                  src="https://github-readme-stats.vercel.app/api/top-langs/?username=aldnazr&card_width=450"
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
