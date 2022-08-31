import classes from './Slide.module.css';

const Slide = (props) => {
  const { width, height } = props.slideSize;

  return (
    <div
      className={classes.slide}
      // style={props.style}
      style={{ transform: props.style, width: width, height: height }}
    >
      <div className={classes.image}>
        <img src={props.url} alt={props.description} />
        <p>{props.name}</p>
      </div>
    </div>
  );
};

export default Slide;
