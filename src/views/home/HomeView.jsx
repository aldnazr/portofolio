import './home.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Profil from '../../assets/hero.jpg';
import SocialView from './SocialView';
import ScrollDown from './ScrollDown';
import ShapesComponent from '../../components/shapes/ShapesComponent';
import AboutView from '../about/AboutView';
import AbilityView from '../ability/AbilityView';
import ResumeView from '../resume/ResumeView';
import PortofolioView from '../portofolio/PortofolioView';
import { Fade, Slide } from 'react-awesome-reveal';

const HomeView = () => {
  return (
    <>
      <section id="home" className="home container">
        <div className="intro">
          <Fade>
            <div className="profil-lingkaran">
              <img src={Profil} alt="" className="home_img" />
            </div>
            <h1 className="home_name">Muhammad Alauddin Azhary</h1>
            <span className="home_education">Software Engineer</span>
            <SocialView />
          </Fade>
          <Slide>
            <AnchorLink href="#" className="button">
              Hire Me
            </AnchorLink>
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
