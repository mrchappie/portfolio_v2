import classes from './Slide.module.css';

const Slide = (props) => {
  return (
    <div className={classes.slide} style={props.style}>
      <div className={classes.image}>
        <img src={props.url} alt={props.description} />
        <p>{props.name}</p>
      </div>
    </div>
  );
};

export default Slide;
