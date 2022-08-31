import classes from './Home.module.css';
import Button from '../../UI/Button/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { pageActions } from '../../../store/active-page';

import { ALEX_INFO } from '../../website-info/alex-info';

const Home = () => {
  const activeColor = useSelector((state) => state.activeColor.color);
  const dispatch = useDispatch();

  const setActivePage = () => {
    dispatch(pageActions.contact());
  };

  return (
    <div className={classes.home}>
      <div className={classes.name}>
        {ALEX_INFO.name.firstName1} {ALEX_INFO.name.firstName2}
        <span style={{ color: activeColor }}> {ALEX_INFO.name.lastName}</span>
      </div>
      <div className={classes.job}>{ALEX_INFO.about.job}</div>
      <cite>
        "{ALEX_INFO.about.quote.text}"
        <span style={{ color: activeColor }}>
          -{ALEX_INFO.about.quote.author}
        </span>
      </cite>
      <Button onClick={setActivePage} style={{ backgroundColor: activeColor }}>
        Get in Touch
      </Button>
    </div>
  );
};

export default Home;
