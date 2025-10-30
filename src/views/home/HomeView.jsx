import { useEffect, useState } from "react";
import { Fade, Slide } from "react-awesome-reveal";
import Profil from "../../assets/hero.jpg";
import ShapesComponent from "../../components/shapes/ShapesComponent";
import AboutView from "../about/AboutView";
import ResumeView from "../experience/ResumeView";
import PortofolioView from "../project/portofolio-view";
import SkillView from "../skill/SkillView";
import "./home.css";
import { ScrollAnimation } from "./scroll-anim";
import { SocialList } from "./social-list";

export default function HomeView() {
  const jobs = ["Mobile Developer", "Web Developer"];
  const [jobIndex, setJobIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentJob = jobs[jobIndex];
    if (charIndex < currentJob.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText((prev) => prev + currentJob[charIndex]);
        setCharIndex(charIndex + 1);
      }, 100);

      return () => clearTimeout(timeoutId);
    } else {
      const holdTime = setTimeout(() => {
        setDisplayedText("");
        setCharIndex(0);
        setJobIndex((prev) => (prev + 1) % jobs.length);
      }, 2000);

      return () => clearTimeout(holdTime);
    }
  }, [charIndex, jobIndex, jobs]);

  return (
    <>
      <section id="home" className="home container">
        <div className="intro">
          <Fade>
            <div className="profil-lingkaran">
              <img src={Profil} alt="" className="home_img" />
            </div>
            <h1 className="home_name">Muhammad Alauddin Azhary</h1>
            <span className={`home_education typing-cursor`}>
              {displayedText}
            </span>
            <SocialList />
          </Fade>
          <Slide>
            <a
              href="mailto:alauddinazhary05@gmail.com?subject=Hiring%20Opportunity&body=Hello%2C%20I%27d%20like%20to%20discuss%20a%20project%20with%20you."
              className="button"
            >
              Hire Me
            </a>
          </Slide>
          <ScrollAnimation />
        </div>
        <ShapesComponent />
      </section>
      <AboutView />
      <SkillView />
      <ResumeView />
      <PortofolioView />
    </>
  );
}
