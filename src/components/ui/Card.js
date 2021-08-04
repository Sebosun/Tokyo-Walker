import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <div
      onClick={props.onClick}
      role={props.role}
      className={`${classes.Card} ${props.className && props.className}`}
    >
      {props.children}
    </div>
  );
};
export default Card;
