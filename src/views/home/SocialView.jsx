import { Link } from 'react-router-dom';

const SocialView = () => {
  return (
    <div className="home_socials">
      <Link to="https://www.instagram.com/iqbaal_ftn?igsh=MXFrb3oyYzllZnN0OQ==" className="home_social-link">
        <i className="fa-brands fa-instagram"></i>
      </Link>

      <Link to="https://x.com/Iqbal_fatoni10?t=t9fVYyzZS7tDzM4KH3lswg&s=09" className="home_social-link">
        <i className="fa-brands fa-twitter"></i>
      </Link>

      <Link to="https://www.facebook.com/share/cwWKNT5JyXAZGk1B/?mibextid=qi2Omg" className="home_social-link">
        <i className="fa-brands fa-facebook"></i>
      </Link>

      <Link to="https://www.linkedin.com/in/moh-iqbal-fatoni-038a01292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="home_social-link">
        <i className="fa-brands fa-linkedin"></i>
      </Link>

      <Link to="https://github.com/iqbalfatoni10" className="home_social-link">
        <i className="fa-brands fa-github"></i>
      </Link>
    </div>
  );
};

export default SocialView;
