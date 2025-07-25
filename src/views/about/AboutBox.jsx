/* eslint-disable react/no-unescaped-entities */
import { Zoom } from "react-awesome-reveal";
import Project from "../portofolio/Menu";

const AboutBox = () => {
  return (
    <div className="about_boxes grid">
      <Zoom>
        <div className="about_box">
          <i className="about_icon icon-fire"></i>
          <div>
            <h3 className="about_title">{Project.length}</h3>
            <span className="about_subtitle">Project completed</span>
          </div>
        </div>

        <div className="about_box">
          <i className="about_icon icon-clock"></i>
          <div>
            <h3 className="about_title">1+</h3>
            <span className="about_subtitle">Years of Experience</span>
          </div>
        </div>

        <div className="about_box">
          <i className="about_icon icon-cup"></i>
          <div>
            <h3 className="about_title">16</h3>
            <span className="about_subtitle">Technologies Used</span>
          </div>
        </div>

        <div className="about_box">
          <i className="about_icon icon-people"></i>
          <div>
            <h3 className="about_title">456+</h3>
            <span className="about_subtitle">Commits</span>
          </div>
        </div>
      </Zoom>
    </div>
  );
};

export default AboutBox;
