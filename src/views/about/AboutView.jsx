/* eslint-disable react/no-unescaped-entities */
import './about.css';
import Image from '../../assets/hero-2.jpg';
import AboutBox from './AboutBox';
import ButtonComponent from '../../components/button/ButtonComponent';
import { Bounce, JackInTheBox, Slide, Fade } from 'react-awesome-reveal';

const AboutView = () => {
  return (
    <div>
      <section id="about" className="about container section">
        <Fade>
          <h2 className="section_title">About Me</h2>
        </Fade>

        <div className="about_container grid">
          <Bounce>
            <div className="profil-lingkaran">
              <img src={Image} alt="" className="about_img" />
            </div>
          </Bounce>
          <div className="about_data grid">
            <JackInTheBox>
              <div className="about_info">
                <p className="about_description">I'm Moh. Iqbal Fatoni, Malang State Polytechnic student. I have expertise in the field of web development, especially Frontend Web Developer.</p>
                <ButtonComponent className="button" redirect="https://drive.google.com/drive/folders/1SA9bzYPKCG4-Y6AEkNwkXLdVPMgzor2z?usp=sharing" text="Download CV" />
              </div>
            </JackInTheBox>

            <div className="about_skills grid">
              <Slide>
                <div className="skills_data">
                  <div className="skills_titles">
                    <h3 className="skills_name">JAVASCRIPT</h3>
                  </div>
                  <div className="skills_bar">
                    <span className="skills_percentage javascript"></span>
                  </div>
                </div>
              </Slide>

              <Slide>
                <div className="skills_data">
                  <div className="skills_titles">
                    <h3 className="skills_name">PHP</h3>
                  </div>
                  <div className="skills_bar">
                    <span className="skills_percentage php"></span>
                  </div>
                </div>
              </Slide>

              <Slide>
                <div className="skills_data">
                  <div className="skills_titles">
                    <h3 className="skills_name">VUE JS</h3>
                  </div>
                  <div className="skills_bar">
                    <span className="skills_percentage vue"></span>
                  </div>
                </div>
              </Slide>

              <Slide>
                <div className="skills_data">
                  <div className="skills_titles">
                    <h3 className="skills_name">REACT JS</h3>
                  </div>
                  <div className="skills_bar">
                    <span className="skills_percentage react"></span>
                  </div>
                </div>
              </Slide>

              <Slide>
                <div className="skills_data">
                  <div className="skills_titles">
                    <h3 className="skills_name">EXPRESS JS</h3>
                  </div>
                  <div className="skills_bar">
                    <span className="skills_percentage express"></span>
                  </div>
                </div>
              </Slide>

              <Slide>
                <div className="skills_data">
                  <div className="skills_titles">
                    <h3 className="skills_name">LARAVEL</h3>
                  </div>
                  <div className="skills_bar">
                    <span className="skills_percentage laravel"></span>
                  </div>
                </div>
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
