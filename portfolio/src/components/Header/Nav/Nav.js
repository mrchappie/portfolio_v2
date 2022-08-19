import classes from './Nav.module.css';
import logo from '../../../assets/robot.png';
import ButtonAsLink from '../../UI/Button/ButtonAsLink/ButtonAsLink';
import { useDispatch } from 'react-redux';
import { pageActions } from '../../../store/active-page';
import { useSelector } from 'react-redux';

const Nav = (props) => {
  const dispatch = useDispatch();
  const activePage = useSelector((state) => state.activePage.active);
  const activeColor = useSelector((state) => state.activeColor.color);

  const setHomeActive = () => {
    dispatch(pageActions.home());
  };

  const setAboutActive = () => {
    dispatch(pageActions.about());
  };

  const setProjectsActive = () => {
    dispatch(pageActions.projects());
  };

  const setContactActive = () => {
    dispatch(pageActions.contact());
  };

  const color5 = '#f0f';

  let activeClass0;
  let activeClass1;
  let activeClass2;
  let activeClass3;

  if (activePage === 0) activeClass0 = `active color${activeColor}`;
  if (activePage === 1) activeClass1 = `active color${activeColor}`;
  if (activePage === 2) activeClass2 = `active color${activeColor}`;
  if (activePage === 3) activeClass3 = `active color${activeColor}`;

  return (
    <nav className={classes.nav}>
      <div className={classes.logo}>
        <img src={logo} alt="robot logo" />
      </div>
      <div className={classes.pages}>
        <ButtonAsLink onClick={setHomeActive}>
          <span className={activeClass0}>Home</span>
        </ButtonAsLink>
        <ButtonAsLink onClick={setAboutActive}>
          <span className={activeClass1}>About</span>
        </ButtonAsLink>
        <ButtonAsLink onClick={setProjectsActive}>
          <span className={activeClass2}>Projects</span>
        </ButtonAsLink>
        <ButtonAsLink onClick={setContactActive}>
          <span className={activeClass3}>Contact</span>
        </ButtonAsLink>
      </div>
    </nav>
  );
};

export default Nav;
