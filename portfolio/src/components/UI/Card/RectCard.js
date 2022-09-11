import classes from './RectCard.module.css';

const RectCard = (props) => {
  return (
    <div className={`${classes.RectCard} ${props.className}`}>
      {props.children}
    </div>
  );
};

export default RectCard;
