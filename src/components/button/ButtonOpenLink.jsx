export default function ButtonOpenLink(props) {
  return (
    <a href={props.redirect} className={props.className}>
      {props.text}
    </a>
  );
}
