import { Link } from 'react-router-dom';

const SocialView = () => {
  return (
    <div className="home_socials">
      <Link to="https://www.instagram.com/aldnazr/" className="home_social-link">
        <i className="fa-brands fa-instagram"></i>
      </Link>

      <Link to="https://www.linkedin.com/in/aldnazr/" className="home_social-link">
        <i className="fa-brands fa-linkedin"></i>
      </Link>

      <Link to="https://github.com/aldnazr/" className="home_social-link">
        <i className="fa-brands fa-github"></i>
      </Link>
    </div>
  );
};

export default SocialView;
