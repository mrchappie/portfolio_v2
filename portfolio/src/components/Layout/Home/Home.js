import classes from './Home.module.css';
import Button from '../../UI/Button/Button/Button';
import { useSelector } from 'react-redux';

const Home = () => {
  const activeColor = useSelector((state) => state.activeColor.color);

  return (
    <div className={classes.home}>
      <div className={classes.name}>
        Marian Alexandru <span style={{ color: activeColor }}>BOSCU</span>
      </div>
      <div className={classes.job}>WEB DEVELOPER</div>
      <Button style={{ backgroundColor: activeColor }}>Get in Touch</Button>
    </div>
  );
};

export default Home;
