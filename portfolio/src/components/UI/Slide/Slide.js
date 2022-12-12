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
        {/* <img src={props.url} alt={props.description} /> */}
        <iframe
          src={props.url}
          title={props.name}
          width={'100%'}
          height={'100%'}
          frameborder="0"
        ></iframe>

        <p>
          <a href={props.url} target={'_blank'} rel="noopener noreferrer">
            {props.name}
          </a>
        </p>
      </div>
    </div>
  );
};

export default Slide;
