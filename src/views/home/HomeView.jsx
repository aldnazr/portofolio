import "./home.css";
import Profil from "../../assets/hero.png";
import SocialView from "./SocialView";
import ScrollDown from "./ScrollDown";
import ShapesComponent from "../../components/shapes/ShapesComponent";
import AboutView from "../about/AboutView";
import AbilityView from "../ability/AbilityView";
import ResumeView from "../resume/ResumeView";
import PortofolioView from "../portofolio/PortofolioView";
import { Fade, Slide } from "react-awesome-reveal";
import React, { useState, useEffect } from "react";

const HomeView = () => {
  const jobs = ["Mobile App Developer", "Web Developer"];

  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setVisible(false); // Mulai fade out
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % jobs.length);
        setVisible(true); // Fade in teks baru
      }, 500); // Sesuaikan dengan durasi fade out
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <section id="home" className="home container">
        <div className="intro">
          <Fade>
            <div className="profil-lingkaran">
              <img src={Profil} alt="" className="home_img" />
            </div>
            <h1 className="home_name">Muhammad Alauddin Azhary</h1>
            <span
              className={`home_education transition-opacity duration-500 ${
                visible ? "opacity-100" : "opacity-0"
              }`}
            >
              {jobs[index]}
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
