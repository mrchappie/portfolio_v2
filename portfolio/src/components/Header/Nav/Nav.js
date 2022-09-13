import classes from './Nav.module.css';
// import logo from '../../../assets/robot.png';
import logo from '../../../assets/logo.svg';
import ButtonAsLink from '../../UI/Button/ButtonAsLink/ButtonAsLink';
import { useDispatch } from 'react-redux';
import { pageActions } from '../../../store/active-page';
import { logoActions } from '../../../store/logo-history';
import { useSelector } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAddressBook,
  faHouse,
  faRectangleList,
  faAddressCard,
} from '@fortawesome/free-solid-svg-icons';

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

  const showLogoHistory = () => {
    dispatch(logoActions.toggleLogoHistory());
  };

  return (
    <nav className={classes.nav}>
      <div className={classes.logo} onClick={showLogoHistory}>
        <img src={logo} alt="robot logo" />
        {/* <h1 onClick={showLogoHistory}>chappie</h1> */}
      </div>
      <div className={classes.pages}>
        <ButtonAsLink onClick={setHomeActive}>
          <span
            className={activePage === 0 ? 'active' : ''}
            style={
              activePage === 0 ? { color: activeColor } : { color: '#000' }
            }
          >
            <FontAwesomeIcon icon={faHouse} />
          </span>
        </ButtonAsLink>
        <ButtonAsLink onClick={setAboutActive}>
          <span
            className={activePage === 1 ? 'active' : ''}
            style={
              activePage === 1 ? { color: activeColor } : { color: '#000' }
            }
          >
            <FontAwesomeIcon icon={faAddressCard} />
          </span>
        </ButtonAsLink>
        <ButtonAsLink onClick={setProjectsActive}>
          <span
            className={activePage === 2 ? 'active' : ''}
            style={
              activePage === 2 ? { color: activeColor } : { color: '#000' }
            }
          >
            <FontAwesomeIcon icon={faRectangleList} />
          </span>
        </ButtonAsLink>
        <ButtonAsLink onClick={setContactActive}>
          <span
            className={activePage === 3 ? 'active' : ''}
            style={
              activePage === 3 ? { color: activeColor } : { color: '#000' }
            }
          >
            <FontAwesomeIcon icon={faAddressBook} />
          </span>
        </ButtonAsLink>
      </div>
    </nav>
  );
};

export default Nav;
