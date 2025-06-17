import { Link } from 'react-router-dom';

/* eslint-disable react/prop-types */
const ButtonComponent = (props) => {
  return (
    <div>
      <button type={props.type} className={props.className}>
        <Link to={props.redirect} style={{ textDecoration: 'none', color: '#fff' }}>
          {props.text}
        </Link>
      </button>
    </div>
  );
};

export default ButtonComponent;
