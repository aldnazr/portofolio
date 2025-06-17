/* eslint-disable react/no-unescaped-entities */
import { Zoom } from 'react-awesome-reveal';
const AboutBox = () => {
  return (
    <div className="about_boxes grid">
      <Zoom>
        <div className="about_box">
          <i className="about_icon icon-fire"></i>
          <div>
            <h3 className="about_title">20</h3>
            <span className="about_subtitle">Project completed</span>
          </div>
        </div>

        <div className="about_box">
          <i className="about_icon  icon-clock"></i>
          <div>
            <h3 className="about_title">26.280</h3>
            <span className="about_subtitle">O'clock</span>
          </div>
        </div>

        <div className="about_box">
          <i className="about_icon icon-cup"></i>
          <div>
            <h3 className="about_title">2.345</h3>
            <span className="about_subtitle">Cup of coffe</span>
          </div>
        </div>

        <div className="about_box">
          <i className="about_icon icon-people"></i>
          <div>
            <h3 className="about_title">3</h3>
            <span className="about_subtitle">Friends on the project</span>
          </div>
        </div>
      </Zoom>
    </div>
  );
};

export default AboutBox;
