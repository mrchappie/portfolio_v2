import classes from './SmallScreen.module.css';

const SmallScreen = () => {
  return (
    <div className={classes.fullscreen}>
      <div className={classes.content}>
        <p>
          Sorry, right now the website is not available on smaller screens but I
          am working on it!
        </p>
      </div>
    </div>
  );
};
export default SmallScreen;
