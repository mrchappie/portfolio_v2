import Button from '../../UI/Button/Button/Button';
import Card from '../../UI/Card/Card';
import classes from './WhyChappie.module.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logoActions } from '../../../store/logo-history';
import CloseButton from '../../UI/Button/Button/CloseButton';

import { ALEX_INFO } from '../../website-info/alex-info';

const WhyChappie = (props) => {
  const dispatch = useDispatch();

  const activeColor = useSelector((state) => state.activeColor.color);

  const hideLogoHistory = () => {
    dispatch(logoActions.toggleLogoHistory());
  };

  return (
    <div className={classes['why-container']}>
      <div className={classes.overlay} onClick={hideLogoHistory}></div>
      <Card className={classes.whychappie}>
        <CloseButton onClick={hideLogoHistory} className={classes.button}>
          X
        </CloseButton>
        <div className={classes.headertext}>
          <h1>{ALEX_INFO.name.nickName.heading}</h1>
        </div>
        <div className={classes.content}>
          <p>{ALEX_INFO.name.nickName.description}</p>
        </div>
        <a href="https://www.imdb.com/title/tt1823672/" target="blanck">
          <Button style={{ backgroundColor: activeColor }}>More on IMDB</Button>
        </a>
      </Card>
    </div>
  );
};
export default WhyChappie;
