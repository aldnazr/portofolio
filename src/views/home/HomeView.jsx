import "./home.css";
import Profil from "../../assets/hero.jpg";
import SocialView from "./SocialView";
import ScrollDown from "./ScrollDown";
import ShapesComponent from "../../components/shapes/ShapesComponent";
import AboutView from "../about/AboutView";
import AbilityView from "../skill/AbilityView";
import ResumeView from "../experience/ResumeView";
import PortofolioView from "../project/PortofolioView";
import { Fade, Slide } from "react-awesome-reveal";
import { useState, useEffect } from "react";

const HomeView = () => {
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
      }, 100); // kecepatan mengetik per karakter

      return () => clearTimeout(timeoutId);
    } else {
      // Setelah selesai mengetik, tunggu 2 detik lalu ganti ke job berikutnya
      const holdTime = setTimeout(() => {
        setDisplayedText("");
        setCharIndex(0);
        setJobIndex((prev) => (prev + 1) % jobs.length);
      }, 2000); // waktu tunggu sebelum mengganti kata

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
            <SocialView />
          </Fade>
          <Slide>
            <a
              href="mailto:alauddinazhary05@gmail.com?subject=Hiring%20Opportunity&body=Hello%2C%20I%27d%20like%20to%20discuss%20a%20project%20with%20you."
              className="button"
            >
              Hire Me
            </a>
          </Slide>
          <ScrollDown />
        </div>
        <ShapesComponent />
      </section>
      <AboutView />
      <AbilityView />
      <ResumeView />
      <PortofolioView />
    </>
  );
};

export default HomeView;
