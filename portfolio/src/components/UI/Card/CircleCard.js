import classes from './CircleCard.module.css';

const CircleCard = (props) => {
  return (
    <div className={`${classes.CircleCard} ${props.className}`}>
      {props.children}
    </div>
  );
};

export default CircleCard;
