import PropTypes from 'prop-types';
import { JackInTheBox } from 'react-awesome-reveal';

const Card = ({ icon, year, title, desc }) => {
  return (
    <div className="timeline_item">
      <i className={icon}></i>
      <JackInTheBox>
        <span className="timeline_date">{year}</span>
        <h3 className="timeline_title">{title}</h3>
        <p className="timeline_text">{desc}</p>
      </JackInTheBox>
    </div>
  );
};

Card.propTypes = {
  icon: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default Card;
