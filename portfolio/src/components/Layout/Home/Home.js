import classes from './Home.module.css';
import Button from '../../UI/Button/Button/Button';

const Home = () => {
  return (
    <div className={classes.home}>
      <div className={classes.name}>
        Marian Alexandru <span>BOSCU</span>
      </div>
      <div className={classes.job}>WEB DEVELOPER</div>
      <Button>Get in Touch</Button>
    </div>
  );
};

export default Home;
