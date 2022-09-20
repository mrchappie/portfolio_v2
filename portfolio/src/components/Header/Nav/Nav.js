import classes from './Nav.module.css';
// import logo from '../../../assets/robot.png';
import logo from '../../../assets/logo.svg';
import ButtonAsLink from '../../UI/Button/ButtonAsLink/ButtonAsLink';
import { useDispatch } from 'react-redux';
// import { pageActions } from '../../../store/active-page';
import { logoActions } from '../../../store/logo-history';
// import { useSelector } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAddressBook,
  faHouse,
  faRectangleList,
  faAddressCard,
} from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router-dom';

const Nav = (props) => {
  const dispatch = useDispatch();
  // const activePage = useSelector((state) => state.activePage.active);
  // const activeColor = useSelector((state) => state.activeColor.color);

  // const setHomeActive = () => {
  //   dispatch(pageActions.home());
  // };

  // const setAboutActive = () => {
  //   dispatch(pageActions.about());
  // };

  // const setProjectsActive = () => {
  //   dispatch(pageActions.projects());
  // };

  // const setContactActive = () => {
  //   dispatch(pageActions.contact());
  // };

  const showLogoHistory = () => {
    dispatch(logoActions.toggleLogoHistory());
  };

  return (
    <nav className={classes.nav}>
      <Link to="/welcome/why-chappie">
        <div className={classes.logo} onClick={showLogoHistory}>
          <img src={logo} alt="robot logo" />
        </div>
      </Link>
      <div className={classes.pages}>
        <ButtonAsLink>
          <NavLink
            to="/welcome"
            className={(navData) => (navData.isActive ? classes.active : '')}
          >
            <FontAwesomeIcon icon={faHouse} />
          </NavLink>
        </ButtonAsLink>

        <ButtonAsLink>
          <NavLink
            to="/about"
            className={(navData) => (navData.isActive ? classes.active : '')}
          >
            <FontAwesomeIcon icon={faAddressCard} />
          </NavLink>
        </ButtonAsLink>
        <ButtonAsLink>
          <NavLink
            to="/projects"
            className={(navData) => (navData.isActive ? classes.active : '')}
          >
            <FontAwesomeIcon icon={faRectangleList} />
          </NavLink>
        </ButtonAsLink>
        <ButtonAsLink>
          <NavLink
            to="/contact"
            className={(navData) => (navData.isActive ? classes.active : '')}
          >
            <FontAwesomeIcon icon={faAddressBook} />
          </NavLink>
        </ButtonAsLink>
      </div>
    </nav>
  );
};

export default Nav;
