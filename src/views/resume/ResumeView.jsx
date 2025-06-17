import './resume.css';
import Data from './Data';
import Card from './Card';
import { Fade } from 'react-awesome-reveal';

const ResumeView = () => {
  return (
    <section id="resume" className="resume container section">
      <Fade>
        <h2 className="section_title">Experience</h2>
      </Fade>

      <div className="resume_container grid">
        <div className="timeline grid">
          {Data.map((val, id) => {
            return <Card key={id} icon={val.icon} title={val.title} year={val.year} desc={val.desc} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default ResumeView;
