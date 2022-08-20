import classes from './Home.module.css';
import Button from '../../UI/Button/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { pageActions } from '../../../store/active-page';

const Home = () => {
  const activeColor = useSelector((state) => state.activeColor.color);
  const dispatch = useDispatch();

  const setActivePage = () => {
    dispatch(pageActions.contact());
  };

  return (
    <div className={classes.home}>
      <div className={classes.name}>
        Marian Alexandru <span style={{ color: activeColor }}>BOSCU</span>
      </div>
      <div className={classes.job}>WEB DEVELOPER</div>
      <Button onClick={setActivePage} style={{ backgroundColor: activeColor }}>
        Get in Touch
      </Button>
    </div>
  );
};

export default Home;
