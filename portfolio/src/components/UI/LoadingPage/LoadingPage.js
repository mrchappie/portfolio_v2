import classes from './LoadingPage.module.css';

const LoadingPage = () => {
  return (
    <div className={classes.loading}>
      <div className={classes['large-circle']}>
        <div className={classes['inside-large']}></div>
      </div>
    </div>
  );
};

export default LoadingPage;
