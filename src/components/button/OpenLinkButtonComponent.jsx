const OpenLinkButtonComponent = (props) => (
  <a
    href={props.redirect}
    className={props.className}
    style={{ textDecoration: "none" }}
  >
    {props.text}
  </a>
);

export default OpenLinkButtonComponent;
