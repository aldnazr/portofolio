
const OpenLinkButtonComponent = (props) => (
    <a href={props.redirect} className={props.className} style={{ textDecoration: 'none', color: '#fff' }}>
        {props.text}
    </a>
);

export default OpenLinkButtonComponent;