import "./skill.css";
import data from "./SkillModel";
import { Bounce } from "react-awesome-reveal";

const SkillView = () => {
  return (
    <section id="ability" className="ability container section">
      <div>
        <h2 className="section_title">Skills</h2>
      </div>

      <div className="ability_container">
        {data.map(({ id, image, title, description }) => {
          return (
            <div className="ability_card" key={id}>
              <Bounce>
                <img src={image} alt="" className="ability_img" />
                <h3 className="ability_title">{title}</h3>
                <p className="ability_description">{description}</p>
              </Bounce>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SkillView;
